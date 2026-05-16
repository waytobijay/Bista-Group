/* ════════════════════════════════════════
   js/data-service.js — Bista Group Data Service
   Backends: localStorage (default) | Firebase | Supabase
   ════════════════════════════════════════ */

const DS = (() => {

  /* ── localStorage helpers ── */
  const ls = {
    get: (k, def = null) => {
      try { const v = localStorage.getItem('bg_' + k); return v !== null ? JSON.parse(v) : def; }
      catch { return def; }
    },
    set: (k, v) => { try { localStorage.setItem('bg_' + k, JSON.stringify(v)); } catch {} },
    del: (k)    => { try { localStorage.removeItem('bg_' + k); } catch {} }
  };

  /* ── Config ── */
  function getConfig() {
    return ls.get('ds_config', { backend:'local', media:'cloudinary', firebase:{}, supabase:{}, awsS3:{} });
  }
  function setConfig(c) {
    ls.set('ds_config', c);
    _initPromise = _init();   // restart init and track the promise
    return _initPromise;
  }

  /* ── Firebase bridge ── */
  let _fb = null, _db = null;
  async function _initFirebase(cfg) {
    if (!cfg || !cfg.apiKey || !cfg.projectId) return false;
    try {
      if (typeof firebase === 'undefined') {
        // Load Firebase from jsDelivr (npm mirror) — not blocked by Firefox Focus/Safari content blockers.
        // gstatic.com (Google's CDN) is blocked by Firefox Focus & some privacy browsers.
        // jsDelivr already serves EmailJS on this site and is confirmed unblocked.
        const JSDLVR = 'https://cdn.jsdelivr.net/npm/firebase@9.23.0';
        await _loadScript(`${JSDLVR}/firebase-app-compat.js`);
        await _loadScript(`${JSDLVR}/firebase-firestore-compat.js`);
        await _loadScript(`${JSDLVR}/firebase-auth-compat.js`);
      }
      // Delete existing app if projectId OR apiKey changed
      if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length) {
        const existing = firebase.apps[0];
        const existingOpts = existing.options || {};
        if (existingOpts.projectId !== cfg.projectId || existingOpts.apiKey !== cfg.apiKey) {
          await existing.delete();
        }
      }
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(cfg);
      }
      _fb = firebase;
      _db = firebase.firestore();
      return true;
    } catch(e) {
      console.warn('[DS] Firebase init error:', e.message || e);
      _db = null; _fb = null;
      return false;
    }
  }

  /* ── Supabase bridge ── */
  let _sb = null;
  async function _initSupabase(cfg) {
    if (!cfg || !cfg.url || !cfg.anonKey) return false;
    try {
      if (typeof supabase === 'undefined') {
        await _loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js');
      }
      _sb = supabase.createClient(cfg.url, cfg.anonKey);
      return true;
    } catch(e) {
      console.warn('[DS] Supabase init error:', e.message || e);
      _sb = null;
      return false;
    }
  }

  function _loadScript(src) {
    return new Promise((res, rej) => {
      if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
      const s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = () => {
        console.error(`[DS] Script blocked or failed to load: ${src}\n` +
          `If you see this in Firefox Focus / Brave / Safari with content blocking ON, ` +
          `the CDN domain may be on a block list. Check browser content blocking settings.`);
        rej(new Error('Script blocked/failed: ' + src));
      };
      document.head.appendChild(s);
    });
  }

  /* ── Backend init (always returns a Promise) ── */
  let _backend = 'local';
  let _initPromise = Promise.resolve();

  async function _init() {
    const cfg = getConfig();
    _backend = cfg.backend || 'local';
    _db = null; _sb = null; // reset so stale connections don't linger

    if (_backend === 'firebase') {
      const ok = await _initFirebase(cfg.firebase || {});
      if (!ok) {
        console.warn('[DS] Firebase init failed — falling back to localStorage.');
        _backend = 'firebase'; // keep label so UI knows, but _db = null means fallback
      }
    }
    if (_backend === 'supabase') {
      const ok = await _initSupabase(cfg.supabase || {});
      if (!ok) {
        console.warn('[DS] Supabase init failed — falling back to localStorage.');
        _backend = 'supabase';
      }
    }
  }

  // Kick off initial init
  _initPromise = _init();

  /* ── Helper: wait for init (with 6-second timeout so it never hangs forever) ── */
  async function _ready() {
    await Promise.race([
      _initPromise,
      new Promise(resolve => setTimeout(resolve, 6000))
    ]);
  }

  /* ── Test Connection ── */
  async function testConnection(backend) {
    const cfg = getConfig();

    if (backend === 'firebase') {
      const testCfg = cfg.firebase || {};
      if (!testCfg.apiKey || !testCfg.projectId) {
        return { ok:false, message:'Missing Firebase credentials (API Key and Project ID are required).' };
      }

      // Step 1: Try REST API first — properly rejects fake/invalid API keys regardless of SDK cache.
      // This can fail with a CORS/fetch error if the browser or API key restrictions block it.
      let restResult = null;
      try {
        const url = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(testCfg.projectId)}/databases/(default)/documents?key=${encodeURIComponent(testCfg.apiKey)}&pageSize=1`;
        const res = await Promise.race([
          fetch(url),
          new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 8000))
        ]);
        if (res.ok) {
          restResult = { ok:true, message:`✅ Connected to Firebase project "${testCfg.projectId}" successfully. Orders will sync across all devices.` };
        } else if (res.status === 403) {
          // Valid key but Firestore Rules block public reads — credentials ARE valid
          restResult = { ok:true, message:`✅ Connected to Firebase project "${testCfg.projectId}". Security rules are active (normal). Ensure your Firestore rules allow your app to read/write.` };
        } else if (res.status === 400) {
          const body = await res.json().catch(() => ({}));
          restResult = { ok:false, message:`❌ Invalid Firebase configuration: ${body?.error?.message || 'Bad request'}. Check your API Key and Project ID.` };
        } else if (res.status === 401) {
          restResult = { ok:false, message:'❌ Invalid Firebase API Key. Check your credentials in Firebase Console → Project Settings.' };
        } else if (res.status === 404) {
          restResult = { ok:false, message:`❌ Firebase project "${testCfg.projectId}" not found. Check your Project ID — it is case-sensitive.` };
        } else {
          const body = await res.json().catch(() => ({}));
          restResult = { ok:false, message:`❌ Firebase error (HTTP ${res.status}): ${body?.error?.message || res.statusText}` };
        }
      } catch(fetchErr) {
        // REST call blocked (CORS, API key HTTP-referrer restrictions, or local file:// origin).
        // Fall through to SDK-based test below.
        console.warn('[DS] REST API test blocked, falling back to SDK test:', fetchErr.message);
      }

      // If REST gave a clear answer, return it
      if (restResult !== null) return restResult;

      // Step 2: REST was blocked — fall back to SDK-based test.
      // _initFirebase now checks BOTH projectId AND apiKey, so it will reinitialise
      // with the new (possibly fake) key and the ping will genuinely fail for bad keys.
      try {
        const ok = await _initFirebase(testCfg);
        if (!ok || !_db) {
          return { ok:false, message:'❌ Firebase SDK failed to initialise. Check your API Key and Project ID.' };
        }
        await _db.collection('_ping').limit(1).get();
        return { ok:true, message:`✅ Connected to Firebase project "${testCfg.projectId}" successfully. Orders will sync across all devices.` };
      } catch(sdkErr) {
        const msg = sdkErr.message || String(sdkErr);
        if (sdkErr.code === 'permission-denied' || msg.includes('Missing or insufficient permissions')) {
          // Valid credentials — rules block the test read, but that's expected
          return { ok:true, message:`✅ Connected to Firebase project "${testCfg.projectId}". Security rules are active (normal). Ensure your Firestore rules allow your app to read/write.` };
        }
        if (msg.includes('invalid api key') || msg.includes('API_KEY_INVALID') || msg.includes('bad-api-key')) {
          return { ok:false, message:'❌ Invalid Firebase API Key. Check your credentials in Firebase Console → Project Settings.' };
        }
        if (msg.includes('not found') || msg.includes('PROJECT_NOT_FOUND')) {
          return { ok:false, message:`❌ Firebase project "${testCfg.projectId}" not found. Check your Project ID.` };
        }
        return { ok:false, message:`❌ Firebase error: ${msg}` };
      }
    }

    if (backend === 'supabase') {
      const testCfg = cfg.supabase || {};
      if (!testCfg.url || !testCfg.anonKey) {
        return { ok:false, message:'Missing Supabase credentials (Project URL and Anon Key are required).' };
      }
      try {
        const ok = await _initSupabase(testCfg);
        if (!ok || !_sb) return { ok:false, message:'Supabase client failed to create. Check your Project URL.' };
        const { error } = await _sb.from('orders').select('id').limit(1);
        if (error && error.code !== 'PGRST116') {
          return { ok:false, message:`Supabase error: ${error.message}. Make sure the "orders" table exists and RLS policies allow access.` };
        }
        return { ok:true, message:`✅ Connected to Supabase successfully. Orders will sync across all devices.` };
      } catch(e) {
        return { ok:false, message:`❌ Supabase connection error: ${e.message}` };
      }
    }

    if (backend === 'local') {
      return { ok:true, message:'✅ Local Storage is always available. Note: data only exists on this browser/device.' };
    }

    return { ok:false, message:'Unknown backend: ' + backend };
  }

  /* ─────────────────────────────────────────
     ORDERS
  ───────────────────────────────────────── */
  async function getOrders(filter) {
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        let q = _db.collection('orders').orderBy('createdAt', 'desc');
        if (filter?.status) q = q.where('status', '==', filter.status);
        const snap = await q.get();
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      } catch(e) {
        console.warn('[DS] Firebase getOrders error:', e.message);
        // If permission error, surface it
        if (e.code === 'permission-denied') throw new Error('Firebase permission denied. Check Firestore security rules.');
        throw e;
      }
    }
    if (_backend === 'supabase' && _sb) {
      let q = _sb.from('orders').select('*').order('created_at', { ascending: false });
      if (filter?.status) q = q.eq('status', filter.status);
      const { data, error } = await q;
      if (error) throw new Error(error.message);
      return data || [];
    }
    // localStorage fallback
    const orders = ls.get('orders', []);
    return filter?.status ? orders.filter(o => o.status === filter.status) : orders;
  }

  async function saveOrder(order) {
    // ALWAYS save to localStorage FIRST — instant, guaranteed, no network dependency
    const orders = ls.get('orders', []);
    if (!orders.find(o => o.id === order.id)) {
      orders.unshift(order);
      ls.set('orders', orders);
    }
    _notify('new_order', { orderId: order.id, customer: order.customer?.name, total: order.total });

    // Then try cloud backend (non-blocking from the caller's perspective — localStorage is already saved)
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        await _db.collection('orders').doc(order.id).set(order);
      } catch(e) {
        console.warn('[DS] Firebase saveOrder error:', e.message);
      }
    }
    if (_backend === 'supabase' && _sb) {
      try {
        await _sb.from('orders').insert(order);
      } catch(e) {
        console.warn('[DS] Supabase saveOrder error:', e.message);
      }
    }
    return order;
  }

  async function updateOrderStatus(orderId, status, comment, adminName) {
    await _ready();
    const histEntry = {
      status, comment: comment || '', adminName: adminName || 'Admin',
      timestamp: new Date().toISOString()
    };
    if (_backend === 'firebase' && _db) {
      try {
        await _db.collection('orders').doc(orderId).update({
          status, updatedAt: new Date().toISOString(),
          statusHistory: firebase.firestore.FieldValue.arrayUnion(histEntry)
        });
        return;
      } catch(e) { console.warn('[DS] Firebase updateOrderStatus error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      try {
        await _sb.from('orders').update({ status, updated_at: new Date().toISOString() }).eq('id', orderId);
        return;
      } catch(e) { console.warn('[DS] Supabase updateOrderStatus error:', e.message); }
    }
    const orders = ls.get('orders', []);
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx >= 0) {
      orders[idx].status = status;
      orders[idx].updatedAt = new Date().toISOString();
      if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
      orders[idx].statusHistory.push(histEntry);
      ls.set('orders', orders);
      _notify('status_change', { orderId, status, adminName });
    }
  }

  async function updateOrderField(orderId, field, value) {
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        await _db.collection('orders').doc(orderId).update({ [field]: value, updatedAt: new Date().toISOString() });
        return;
      } catch(e) { console.warn('[DS] Firebase updateOrderField error:', e.message); }
    }
    const orders = ls.get('orders', []);
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx >= 0) {
      orders[idx][field] = value;
      orders[idx].updatedAt = new Date().toISOString();
      ls.set('orders', orders);
    }
  }

  /* ─────────────────────────────────────────
     ENQUIRIES
  ───────────────────────────────────────── */
  async function getEnquiries() {
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        const s = await _db.collection('enquiries').orderBy('createdAt', 'desc').get();
        return s.docs.map(d => ({ id: d.id, ...d.data() }));
      } catch(e) { console.warn('[DS] Firebase getEnquiries error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      const { data } = await _sb.from('enquiries').select('*').order('created_at', { ascending: false });
      return data || [];
    }
    return ls.get('enquiries', []);
  }

  async function saveEnquiry(enq) {
    // ALWAYS save to localStorage FIRST — instant, guaranteed, no network dependency
    const localEnqs = ls.get('enquiries', []);
    if (!localEnqs.find(e => e.id === enq.id)) {
      localEnqs.unshift(enq);
      ls.set('enquiries', localEnqs);
    }

    // Then try cloud backend (non-blocking from caller — localStorage is already saved)
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        await _db.collection('enquiries').doc(enq.id).set(enq);
      } catch(e) { console.warn('[DS] Firebase saveEnquiry error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      try {
        await _sb.from('enquiries').insert(enq);
      } catch(e) { console.warn('[DS] Supabase saveEnquiry error:', e.message); }
    }
    return enq;
  }

  /* ─────────────────────────────────────────
     ADMIN USERS
  ───────────────────────────────────────── */
  const DEFAULT_ADMINS = [{
    id:'master', name:'Master Admin', username:'admin', password:'bista2025',
    role:'master', enabled:true, permissions:{}, createdAt: new Date().toISOString()
  }];

  async function getAdmins() {
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        const s = await _db.collection('admins').get();
        return s.docs.map(d => ({ id: d.id, ...d.data() }));
      } catch(e) { console.warn('[DS] Firebase getAdmins error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      const { data } = await _sb.from('admins').select('*');
      return data || [];
    }
    const stored = ls.get('admins', null);
    if (!stored) { ls.set('admins', DEFAULT_ADMINS); return DEFAULT_ADMINS; }
    return stored;
  }

  async function saveAdmin(admin) {
    await _ready();
    if (_backend === 'firebase' && _db) {
      try { await _db.collection('admins').doc(admin.id).set(admin); return; }
      catch(e) { console.warn('[DS] Firebase saveAdmin error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      try { await _sb.from('admins').upsert(admin); return; }
      catch(e) { console.warn('[DS] Supabase saveAdmin error:', e.message); }
    }
    const admins = ls.get('admins', DEFAULT_ADMINS);
    const idx = admins.findIndex(a => a.id === admin.id);
    if (idx >= 0) admins[idx] = { ...admins[idx], ...admin }; else admins.push(admin);
    ls.set('admins', admins);
  }

  async function deleteAdmin(id) {
    if (id === 'master') return;
    await _ready();
    if (_backend === 'firebase' && _db) {
      try { await _db.collection('admins').doc(id).delete(); return; }
      catch(e) { console.warn('[DS] Firebase deleteAdmin error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      try { await _sb.from('admins').delete().eq('id', id); return; }
      catch(e) { console.warn('[DS] Supabase deleteAdmin error:', e.message); }
    }
    const admins = ls.get('admins', []).filter(a => a.id !== id);
    ls.set('admins', admins);
  }

  async function getAdminByCredentials(username, password) {
    const admins = await getAdmins();
    return admins.find(a => a.username === username && a.password === password && a.enabled !== false) || null;
  }

  /* ─────────────────────────────────────────
     CUSTOMER USERS (public-facing accounts)
  ───────────────────────────────────────── */
  async function getCustomerUsers() {
    await _ready();
    if (_backend === 'firebase' && _db) {
      try {
        const s = await _db.collection('users').orderBy('createdAt', 'desc').get();
        return s.docs.map(d => ({ uid: d.id, ...d.data() }));
      } catch(e) { console.warn('[DS] Firebase getCustomerUsers error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      const { data } = await _sb.from('users').select('*').order('created_at', { ascending: false });
      return data || [];
    }
    return ls.get('customers', []);
  }

  async function saveCustomerUser(user) {
    // Always save to localStorage first
    const users = ls.get('customers', []);
    const idx = users.findIndex(u => u.uid === user.uid);
    if (idx >= 0) users[idx] = { ...users[idx], ...user }; else users.unshift(user);
    ls.set('customers', users);

    await _ready();
    if (_backend === 'firebase' && _db) {
      try { await _db.collection('users').doc(user.uid).set(user, { merge: true }); }
      catch(e) { console.warn('[DS] Firebase saveCustomerUser error:', e.message); }
    }
    if (_backend === 'supabase' && _sb) {
      try { await _sb.from('users').upsert(user); }
      catch(e) { console.warn('[DS] Supabase saveCustomerUser error:', e.message); }
    }
    return user;
  }

  async function deleteCustomerUser(uid) {
    const users = ls.get('customers', []).filter(u => u.uid !== uid);
    ls.set('customers', users);
    await _ready();
    if (_backend === 'firebase' && _db) {
      try { await _db.collection('users').doc(uid).delete(); }
      catch(e) { console.warn('[DS] Firebase deleteCustomerUser error:', e.message); }
    }
  }

  async function getUserFavourites(uid) {
    const users = ls.get('customers', []);
    const u = users.find(x => x.uid === uid);
    if (u) return u.favourites || [];
    if (_backend === 'firebase' && _db) {
      await _ready();
      try {
        const doc = await _db.collection('users').doc(uid).get();
        return doc.exists ? (doc.data().favourites || []) : [];
      } catch(e) {}
    }
    return [];
  }

  async function setUserFavourites(uid, favs) {
    const users = ls.get('customers', []);
    const idx = users.findIndex(u => u.uid === uid);
    if (idx >= 0) { users[idx].favourites = favs; ls.set('customers', users); }
    await _ready();
    if (_backend === 'firebase' && _db) {
      try { await _db.collection('users').doc(uid).set({ favourites: favs }, { merge: true }); }
      catch(e) {}
    }
  }

  /* ── Active backend label (for UI) ── */
  function getBackendLabel() {
    if (_backend === 'firebase' && _db)  return 'Firebase';
    if (_backend === 'supabase' && _sb)  return 'Supabase';
    if (_backend === 'firebase' && !_db) return 'Firebase (not connected)';
    if (_backend === 'supabase' && !_sb) return 'Supabase (not connected)';
    return 'Local Storage';
  }

  /* ─────────────────────────────────────────
     SESSION
  ───────────────────────────────────────── */
  function getSession()   { return ls.get('session', null); }
  function setSession(s)  { ls.set('session', s); }
  function clearSession() { ls.del('session'); }
  function requireAuth(allowed, loginPage = 'admin-login.html') {
    const s = getSession();
    if (!s || !s.role) { window.location.href = loginPage; return null; }
    if (allowed && !allowed.includes(s.role)) { window.location.href = loginPage; return null; }
    return s;
  }

  /* ─────────────────────────────────────────
     NOTIFICATIONS (localStorage polling)
  ───────────────────────────────────────── */
  function _notify(type, data) {
    const n = ls.get('notifications', []);
    n.unshift({ id: Date.now(), type, data, read: false, timestamp: new Date().toISOString() });
    if (n.length > 200) n.splice(100);
    ls.set('notifications', n);
  }
  function getNotifications(since) {
    const all = ls.get('notifications', []);
    return since ? all.filter(n => n.timestamp > since) : all;
  }
  function markNotifRead(id) {
    const n = ls.get('notifications', []);
    const x = n.find(i => i.id === id);
    if (x) { x.read = true; ls.set('notifications', n); }
  }
  function getUnreadCount() { return ls.get('notifications', []).filter(n => !n.read).length; }

  /* ─────────────────────────────────────────
     STATUS LABELS
  ───────────────────────────────────────── */
  const STATUS = {
    pending:              { label: 'Order Placed',       color: '#f59e0b', icon: '🟡' },
    warehouse_processing: { label: 'At Warehouse',       color: '#f97316', icon: '🟠' },
    warehouse_ready:      { label: 'Ready for Delivery', color: '#3b82f6', icon: '🔵' },
    not_ready:            { label: 'Not Ready',          color: '#ef4444', icon: '🔴' },
    in_delivery:          { label: 'Out for Delivery',   color: '#8b5cf6', icon: '🟣' },
    delivered:            { label: 'Delivered',          color: '#22c55e', icon: '🟢' },
    not_delivered:        { label: 'Not Delivered',      color: '#ef4444', icon: '🔴' },
    cancelled:            { label: 'Cancelled',          color: '#6b7280', icon: '⚫' }
  };
  function statusInfo(s) { return STATUS[s] || { label: s, color: '#8899bb', icon: '⚪' }; }

  return {
    getConfig, setConfig,
    testConnection,
    getBackendLabel,
    getOrders, saveOrder, updateOrderStatus, updateOrderField,
    getEnquiries, saveEnquiry,
    getAdmins, saveAdmin, deleteAdmin, getAdminByCredentials,
    getCustomerUsers, saveCustomerUser, deleteCustomerUser,
    getUserFavourites, setUserFavourites,
    getSession, setSession, clearSession, requireAuth,
    getNotifications, markNotifRead, getUnreadCount,
    statusInfo, STATUS, _notify
  };
})();
