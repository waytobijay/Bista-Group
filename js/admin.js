/* ════════════════════════════════════════
   js/admin.js — Bista Group Admin Panel
   ════════════════════════════════════════ */

// ══════════ DEFAULT DATA (must match script.js) ══════════
const DEFAULTS = {
  hero: {
    tag:   'Premium Quality Products',
    title: 'Bista Group',
    sub:   'A diversified conglomerate delivering excellence across industries — from premium products to innovative solutions that empower communities and drive growth.'
  },
  logo: { url:'assets/images/logo-placeholder.png', brand:'Bista Group' },
  about: {
    img:'https://placehold.co/600x420/1a3a8f/ffffff?text=About+Us',
    badgeNum:'25+', badgeTxt:'Years of Excellence',
    p1:'Bista Group is a leading diversified conglomerate with a strong presence across multiple industries. Founded on principles of integrity, innovation, and excellence, we have grown to become a trusted name in the region.',
    p2:'Our commitment to quality and customer satisfaction has earned us a reputation for delivering world-class products and services that make a meaningful difference in people\'s lives.',
    s1v:'500+', s1l:'Products', s2v:'50+', s2l:'Countries', s3v:'10K+', s3l:'Customers'
  },
  products: [
    { id:1, name:'Alpine Watch',        desc:'Precision Swiss-inspired timepiece',      fullDesc:'Handcrafted with premium materials, the Alpine Watch features sapphire crystal glass, 100m water resistance, and automatic movement.',   price:45000, img:'https://placehold.co/600x400/1a3a8f/ffffff?text=Alpine+Watch' },
    { id:2, name:'Executive Pen Set',   desc:'Premium writing instrument collection',   fullDesc:'Crafted from aircraft-grade aluminium with gold plating, this executive pen set is the ultimate professional accessory.',                 price:8500,  img:'https://placehold.co/600x400/c0152a/ffffff?text=Pen+Set' },
    { id:3, name:'Leather Portfolio',   desc:'Hand-stitched genuine leather portfolio', fullDesc:'Full-grain leather with hand-stitched edges, internal organiser, and magnetic closure. Fits A4 documents.',                                price:12000, img:'https://placehold.co/600x400/1a3a8f/ffffff?text=Portfolio' },
    { id:4, name:'Premium Tea Collection', desc:'Himalayan high-altitude teas',         fullDesc:'Sourced from the finest tea gardens in the Himalayan highlands. Includes 6 premium varieties hand-picked at altitude.',                    price:3500,  img:'https://placehold.co/600x400/c0152a/ffffff?text=Tea+Collection' }
  ],
  leadership: [
    { id:1, name:'Bijay Bista',  role:'Founder & CEO',           desc:'Visionary leader with 25+ years of experience driving growth and innovation across diverse industries.',       img:'https://placehold.co/400x400/1a3a8f/ffffff?text=BB' },
    { id:2, name:'Priya Sharma', role:'Managing Director',        desc:'Strategic operations expert who has overseen expansion into 50+ global markets.',                            img:'https://placehold.co/400x400/c0152a/ffffff?text=PS' },
    { id:3, name:'Rajan Thapa',  role:'Chief Financial Officer',  desc:'CPA with expertise in international finance, risk management, and sustainable investment.',                  img:'https://placehold.co/400x400/1a3a8f/ffffff?text=RT' }
  ],
  gallery: [
    { id:1, url:'https://placehold.co/600x450/1a3a8f/ffffff?text=Gallery+1', cap:'Our Headquarters' },
    { id:2, url:'https://placehold.co/600x450/c0152a/ffffff?text=Gallery+2', cap:'Annual Summit 2024' },
    { id:3, url:'https://placehold.co/600x450/1a3a8f/ffffff?text=Gallery+3', cap:'Product Launch' },
    { id:4, url:'https://placehold.co/600x450/c0152a/ffffff?text=Gallery+4', cap:'Team Building' },
    { id:5, url:'https://placehold.co/600x450/1a3a8f/ffffff?text=Gallery+5', cap:'Export Ceremony' },
    { id:6, url:'https://placehold.co/600x450/c0152a/ffffff?text=Gallery+6', cap:'CSR Initiative' }
  ],
  testimonials: [
    { id:1, name:'Aarav Mehta',       title:'CEO, TechVentures',  text:'Bista Group has been an outstanding business partner. Their attention to detail and commitment to quality is unmatched.', stars:5 },
    { id:2, name:'Sarah Johnson',     title:'Import Manager, AU', text:'We\'ve sourced premium products from Bista Group for years. Consistent quality and exceptional service every time.',          stars:5 },
    { id:3, name:'Dr. Ramesh Koirala',title:'Director, FinCorp',  text:'A trustworthy conglomerate with genuine values. Their leadership team is professional, responsive, and results-driven.',     stars:5 }
  ],
  contact: {
    email:'bijaybista006@gmail.com', phone:'+977-XXXXXXXX', addr:'Kathmandu, Nepal',
    footerDesc:'A diversified conglomerate committed to excellence, innovation, and sustainable growth across industries worldwide.',
    footerCopy:'© 2025 Bista Group. All Rights Reserved.'
  },
  emailjs: { pk:'', sid:'', tid:'' },
  rates:   { aud:0.0120, usd:0.0075 },
  theme:   { primary:'#1a3a8f', secondary:'#c0152a', bg:'#080c18', accent:'#2563eb' }
};

// ══════════ FIREBASE INIT ══════════
let db = null;
try {
  firebase.initializeApp({
    apiKey:            'AIzaSyCRWlp2Q3zugwg8pTFYdjIGsA_KBL_DdQI',
    authDomain:        'bista-group.firebaseapp.com',
    databaseURL:       'https://bista-group-default-rtdb.firebaseio.com',
    projectId:         'bista-group',
    storageBucket:     'bista-group.firebasestorage.app',
    messagingSenderId: '675226391196',
    appId:             '1:675226391196:web:ae962f7f1c22e8e5541359'
  });
  db = firebase.database();
} catch (e) {
  console.warn('Firebase init failed:', e.message);
}

// ══════════ STORAGE ══════════
function persist(k, v) {
  if (db) {
    db.ref('siteData/' + k).set(v)
      .catch(e => toast('⚠ Firebase save failed: ' + e.message, true));
  } else {
    try { localStorage.setItem('bg_' + k, JSON.stringify(v)); } catch {}
  }
}

// ══════════ STATE ══════════
const state = {};
Object.keys(DEFAULTS).forEach(k => {
  state[k] = JSON.parse(JSON.stringify(DEFAULTS[k]));
});

// ══════════ AUTH ══════════
// Change these credentials before deploying!
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'bista2025';

function doLogin() {
  const u = val('admin-user');
  const p = val('admin-pass');
  const msgEl = document.getElementById('admin-login-msg');
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-dash').style.display  = 'block';
    populateForms();
  } else {
    msgEl.textContent = 'Invalid username or password. Default: admin / bista2025';
    msgEl.style.display = 'block';
  }
}

function signOut() {
  if (!confirm('Sign out of admin panel?')) return;
  document.getElementById('admin-dash').style.display  = 'none';
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-pass').value = '';
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-login-msg').style.display = 'none';
}

// ══════════ TABS ══════════
function showTab(id, btn) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ══════════ POPULATE ALL FORMS ══════════
function populateForms() {
  // Hero
  setVal('a-hero-tag',   state.hero.tag);
  setVal('a-hero-title', state.hero.title);
  setVal('a-hero-sub',   state.hero.sub);
  // Logo
  setVal('a-logo-url',   state.logo.url);
  setVal('a-brand-name', state.logo.brand);
  const lp = document.getElementById('a-logo-preview');
  if (lp) { lp.src = state.logo.url; lp.style.display = 'block'; }
  // About
  setVal('a-about-img', state.about.img);
  setVal('a-badge-num', state.about.badgeNum);
  setVal('a-badge-txt', state.about.badgeTxt);
  setVal('a-about-p1',  state.about.p1);
  setVal('a-about-p2',  state.about.p2);
  setVal('a-s1v', state.about.s1v); setVal('a-s1l', state.about.s1l);
  setVal('a-s2v', state.about.s2v); setVal('a-s2l', state.about.s2l);
  setVal('a-s3v', state.about.s3v); setVal('a-s3l', state.about.s3l);
  // Contact
  setVal('a-con-email',   state.contact.email);
  setVal('a-con-phone',   state.contact.phone);
  setVal('a-con-addr',    state.contact.addr);
  setVal('a-footer-desc', state.contact.footerDesc);
  setVal('a-footer-copy', state.contact.footerCopy);
  // EmailJS
  setVal('a-ejs-pk',  state.emailjs.pk);
  setVal('a-ejs-sid', state.emailjs.sid);
  setVal('a-ejs-tid', state.emailjs.tid);
  // Rates
  setVal('a-aud-rate', state.rates.aud);
  setVal('a-usd-rate', state.rates.usd);
  // Theme
  setVal('a-col-primary',   state.theme.primary);
  setVal('a-col-secondary', state.theme.secondary);
  setVal('a-col-bg',        state.theme.bg);
  setVal('a-col-accent',    state.theme.accent);
  syncColorLabels();
  // Lists
  renderAdminProducts();
  renderAdminLeaders();
  renderAdminGallery();
  renderAdminTestis();
}

// ══════════ SAVE: HERO ══════════
function saveHero() {
  state.hero = { tag:val('a-hero-tag'), title:val('a-hero-title'), sub:val('a-hero-sub') };
  persist('hero', state.hero);
  toast('Hero section saved!');
}

// ══════════ SAVE: LOGO ══════════
function saveLogo() {
  const url = val('a-logo-url') || state.logo.url;
  state.logo = { url, brand:val('a-brand-name') };
  persist('logo', state.logo);
  toast('Logo saved!');
}

// ══════════ SAVE: ABOUT ══════════
function saveAbout() {
  state.about = {
    img:      val('a-about-img') || state.about.img,
    badgeNum: val('a-badge-num'),
    badgeTxt: val('a-badge-txt'),
    p1:       val('a-about-p1'),
    p2:       val('a-about-p2'),
    s1v: val('a-s1v'), s1l: val('a-s1l'),
    s2v: val('a-s2v'), s2l: val('a-s2l'),
    s3v: val('a-s3v'), s3l: val('a-s3l')
  };
  persist('about', state.about);
  toast('About section saved!');
}

// ══════════ SAVE: CONTACT / FOOTER ══════════
function saveContact() {
  state.contact = {
    email:      val('a-con-email'),
    phone:      val('a-con-phone'),
    addr:       val('a-con-addr'),
    footerDesc: val('a-footer-desc'),
    footerCopy: val('a-footer-copy')
  };
  persist('contact', state.contact);
  toast('Contact & footer saved!');
}

// ══════════ SAVE: EMAILJS ══════════
function saveEmailJS() {
  state.emailjs = { pk:val('a-ejs-pk'), sid:val('a-ejs-sid'), tid:val('a-ejs-tid') };
  persist('emailjs', state.emailjs);
  toast('EmailJS config saved!');
}

// ══════════ SAVE: RATES ══════════
function saveRates() {
  state.rates = {
    aud: parseFloat(val('a-aud-rate')) || 0.012,
    usd: parseFloat(val('a-usd-rate')) || 0.0075
  };
  persist('rates', state.rates);
  toast('Exchange rates saved!');
}

// ══════════ SAVE: THEME ══════════
function saveTheme() {
  state.theme = {
    primary:   val('a-col-primary'),
    secondary: val('a-col-secondary'),
    bg:        val('a-col-bg'),
    accent:    val('a-col-accent')
  };
  persist('theme', state.theme);
  toast('Theme saved! Reload index.html to see changes.');
}

function syncColorLabels() {
  ['primary','secondary','bg','accent'].forEach(k => {
    const input = document.getElementById('a-col-' + k);
    const label = document.getElementById('a-col-' + k + '-val');
    if (input && label) {
      label.textContent = input.value;
      input.addEventListener('input', () => { label.textContent = input.value; });
    }
  });
}

// ══════════ PRODUCTS CRUD ══════════
function saveProduct() {
  const eid  = val('editing-product-id');
  const prod = {
    id:       eid ? parseInt(eid) : Date.now(),
    name:     val('a-prod-name'),
    desc:     val('a-prod-desc'),
    fullDesc: val('a-prod-fulldesc'),
    price:    parseFloat(val('a-prod-price')) || 0,
    img:      val('a-prod-img') || 'https://placehold.co/600x400/1a3a8f/ffffff?text=Product'
  };
  if (!prod.name) { toast('Please enter a product name.', true); return; }
  if (eid) {
    const i = state.products.findIndex(p => p.id === parseInt(eid));
    if (i > -1) state.products[i] = prod;
  } else {
    state.products.push(prod);
  }
  persist('products', state.products);
  renderAdminProducts();
  clearProductForm();
  toast('Product saved!');
}

function editProduct(id) {
  const p = state.products.find(x => x.id === id); if (!p) return;
  setVal('editing-product-id', id);
  setVal('a-prod-name',     p.name);
  setVal('a-prod-desc',     p.desc);
  setVal('a-prod-fulldesc', p.fullDesc || '');
  setVal('a-prod-price',    p.price);
  setVal('a-prod-img',      p.img);
  document.getElementById('product-form-title').textContent = 'Edit Product';
  document.getElementById('tab-products').scrollIntoView({ behavior:'smooth' });
}

function deleteProduct(id) {
  if (!confirm('Delete this product permanently?')) return;
  state.products = state.products.filter(p => p.id !== id);
  persist('products', state.products);
  renderAdminProducts();
  toast('Product deleted.');
}

function clearProductForm() {
  setVal('editing-product-id', '');
  ['a-prod-name','a-prod-desc','a-prod-fulldesc','a-prod-price','a-prod-img'].forEach(id => setVal(id, ''));
  const f = document.getElementById('a-prod-file'); if (f) f.value = '';
  document.getElementById('product-form-title').textContent = 'Add New Product';
}

function renderAdminProducts() {
  const el = document.getElementById('admin-product-list');
  if (!el) return;
  el.innerHTML = state.products.length ? state.products.map(p => `
    <div class="product-list-item">
      <img src="${p.img}" class="img-preview" onerror="this.src='https://placehold.co/80x60/1a3a8f/fff?text=IMG'">
      <div style="flex:1;min-width:0;">
        <h4>${esc(p.name)}</h4>
        <p>रू ${p.price.toLocaleString()}</p>
      </div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editProduct(${p.id})">Edit</button>
        <button class="del-btn"  onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    </div>`).join('')
  : '<p style="color:var(--text-muted);font-size:.85rem;">No products added yet.</p>';
}

// ══════════ LEADERSHIP CRUD ══════════
function saveLeader() {
  const eid = val('editing-leader-id');
  const lead = {
    id:   eid ? parseInt(eid) : Date.now(),
    name: val('a-lead-name'),
    role: val('a-lead-role'),
    desc: val('a-lead-desc'),
    img:  val('a-lead-img') || 'https://placehold.co/400x400/1a3a8f/ffffff?text=Leader'
  };
  if (!lead.name) { toast('Please enter a name.', true); return; }
  if (eid) {
    const i = state.leadership.findIndex(l => l.id === parseInt(eid));
    if (i > -1) state.leadership[i] = lead;
  } else {
    state.leadership.push(lead);
  }
  persist('leadership', state.leadership);
  renderAdminLeaders();
  clearLeaderForm();
  toast('Leader saved!');
}

function editLeader(id) {
  const l = state.leadership.find(x => x.id === id); if (!l) return;
  setVal('editing-leader-id', id);
  setVal('a-lead-name', l.name);
  setVal('a-lead-role', l.role);
  setVal('a-lead-desc', l.desc);
  setVal('a-lead-img',  l.img);
  document.getElementById('leader-form-title').textContent = 'Edit Leader';
}

function deleteLeader(id) {
  if (!confirm('Delete this leader?')) return;
  state.leadership = state.leadership.filter(l => l.id !== id);
  persist('leadership', state.leadership);
  renderAdminLeaders();
  toast('Leader deleted.');
}

function clearLeaderForm() {
  setVal('editing-leader-id', '');
  ['a-lead-name','a-lead-role','a-lead-desc','a-lead-img'].forEach(id => setVal(id, ''));
  const f = document.getElementById('a-lead-file'); if (f) f.value = '';
  document.getElementById('leader-form-title').textContent = 'Add Leader';
}

function renderAdminLeaders() {
  const el = document.getElementById('admin-leader-list');
  if (!el) return;
  el.innerHTML = state.leadership.length ? state.leadership.map(l => `
    <div class="product-list-item">
      <img src="${l.img}" class="img-preview" onerror="this.src='https://placehold.co/80x60/1a3a8f/fff?text=IMG'">
      <div style="flex:1;">
        <h4>${esc(l.name)}</h4>
        <p>${esc(l.role)}</p>
      </div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editLeader(${l.id})">Edit</button>
        <button class="del-btn"  onclick="deleteLeader(${l.id})">Delete</button>
      </div>
    </div>`).join('')
  : '<p style="color:var(--text-muted);font-size:.85rem;">No leaders added yet.</p>';
}

// ══════════ GALLERY CRUD ══════════
function addGallery() {
  const url = val('a-gal-url');
  if (!url) { toast('Please enter an image URL or upload a file.', true); return; }
  state.gallery.push({ id:Date.now(), url, cap:val('a-gal-cap') });
  persist('gallery', state.gallery);
  renderAdminGallery();
  setVal('a-gal-url', '');
  setVal('a-gal-cap', '');
  const f = document.getElementById('a-gal-file'); if (f) f.value = '';
  toast('Image added to gallery!');
}

function deleteGallery(id) {
  state.gallery = state.gallery.filter(g => g.id !== id);
  persist('gallery', state.gallery);
  renderAdminGallery();
  toast('Image removed.');
}

function renderAdminGallery() {
  const el = document.getElementById('admin-gallery-list');
  if (!el) return;
  el.innerHTML = state.gallery.length ? state.gallery.map(g => `
    <div class="gallery-admin-item">
      <img src="${g.url}" alt="${esc(g.cap||'')}" onerror="this.src='https://placehold.co/200x150/1a3a8f/fff?text=IMG'">
      <button class="del-overlay" onclick="deleteGallery(${g.id})" title="Remove">✕</button>
    </div>`).join('')
  : '<p style="color:var(--text-muted);font-size:.85rem;">No images yet.</p>';
}

// ══════════ TESTIMONIALS CRUD ══════════
function saveTesti() {
  const eid = val('editing-testi-id');
  const t = {
    id:    eid ? parseInt(eid) : Date.now(),
    name:  val('a-testi-name'),
    title: val('a-testi-title'),
    text:  val('a-testi-text'),
    stars: Math.min(5, Math.max(1, parseInt(val('a-testi-stars')) || 5))
  };
  if (!t.name || !t.text) { toast('Please enter client name and review.', true); return; }
  if (eid) {
    const i = state.testimonials.findIndex(x => x.id === parseInt(eid));
    if (i > -1) state.testimonials[i] = t;
  } else {
    state.testimonials.push(t);
  }
  persist('testimonials', state.testimonials);
  renderAdminTestis();
  clearTestiForm();
  toast('Testimonial saved!');
}

function editTesti(id) {
  const t = state.testimonials.find(x => x.id === id); if (!t) return;
  setVal('editing-testi-id', id);
  setVal('a-testi-name',  t.name);
  setVal('a-testi-title', t.title);
  setVal('a-testi-text',  t.text);
  setVal('a-testi-stars', t.stars);
  document.getElementById('testi-form-title').textContent = 'Edit Testimonial';
}

function deleteTesti(id) {
  if (!confirm('Delete this testimonial?')) return;
  state.testimonials = state.testimonials.filter(t => t.id !== id);
  persist('testimonials', state.testimonials);
  renderAdminTestis();
  toast('Testimonial deleted.');
}

function clearTestiForm() {
  setVal('editing-testi-id', '');
  ['a-testi-name','a-testi-title','a-testi-text'].forEach(id => setVal(id, ''));
  setVal('a-testi-stars', 5);
  document.getElementById('testi-form-title').textContent = 'Add Testimonial';
}

function renderAdminTestis() {
  const el = document.getElementById('admin-testi-list');
  if (!el) return;
  el.innerHTML = state.testimonials.length ? state.testimonials.map(t => `
    <div class="product-list-item">
      <div style="flex:1;">
        <h4>${esc(t.name)}</h4>
        <p>${esc(t.title)} — ${'★'.repeat(t.stars)}</p>
      </div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editTesti(${t.id})">Edit</button>
        <button class="del-btn"  onclick="deleteTesti(${t.id})">Delete</button>
      </div>
    </div>`).join('')
  : '<p style="color:var(--text-muted);font-size:.85rem;">No testimonials yet.</p>';
}

// ══════════ IMAGE UPLOAD ══════════
// Primary: Cloudinary unsigned upload (works on GitHub Pages — no server needed).
// Fallback: compressed base64 in localStorage (same browser only, small images).
//
// ▶ Fill in your Cloudinary details below after Step 7 in the setup guide:
const CLOUDINARY_CLOUD = 'dyjzhbvkf';
const CLOUDINARY_PRESET = 'bista-group-unassigned';

async function uploadToServer(file, section) {
  if (!CLOUDINARY_CLOUD || !CLOUDINARY_PRESET) {
    throw new Error('Cloudinary not configured');
  }
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_PRESET);
  fd.append('folder', 'bista-group');
  const res  = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, { method: 'POST', body: fd });
  if (!res.ok) throw new Error('Cloudinary responded ' + res.status);
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.secure_url; // permanent https:// URL
}

function compressAndEncode(file, cb) {
  // Resize large images to max 1200px wide before base64 to stay under localStorage limits
  const img = new Image();
  const objectUrl = URL.createObjectURL(file);
  img.onload = () => {
    URL.revokeObjectURL(objectUrl);
    const maxW = 1200;
    const scale = img.width > maxW ? maxW / img.width : 1;
    const canvas = document.createElement('canvas');
    canvas.width  = Math.round(img.width  * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    cb(canvas.toDataURL('image/jpeg', 0.82));
  };
  img.onerror = () => { URL.revokeObjectURL(objectUrl); cb(null); };
  img.src = objectUrl;
}

async function handleImgUpload(input, targetId, section) {
  const f = input.files[0]; if (!f) return;
  try {
    const url = await uploadToServer(f, section || targetId);
    setVal(targetId, url);
    toast('Image saved to server: ' + url);
  } catch (serverErr) {
    // Server not available — fall back to compressed base64 + localStorage
    compressAndEncode(f, b64 => {
      if (!b64) { toast('Could not read image file.', true); return; }
      setVal(targetId, b64);
      toast('No server found — image stored locally (this browser only). Deploy with PHP for permanent saves.', true);
    });
  }
}

async function handleLogoUpload(input) {
  const f = input.files[0]; if (!f) return;
  try {
    const url = await uploadToServer(f, 'logo');
    setVal('a-logo-url', url);
    const lp = document.getElementById('a-logo-preview');
    if (lp) { lp.src = url; lp.style.display = 'block'; }
    toast('Logo saved to server: ' + url);
  } catch {
    compressAndEncode(f, b64 => {
      if (!b64) { toast('Could not read image file.', true); return; }
      setVal('a-logo-url', b64);
      const lp = document.getElementById('a-logo-preview');
      if (lp) { lp.src = b64; lp.style.display = 'block'; }
      toast('No server found — logo stored locally (this browser only).', true);
    });
  }
}

// ══════════ EXPORT data.json ══════════
function exportDataJson() {
  const json = JSON.stringify(state, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('✅ data.json downloaded — commit it to your GitHub repo to update all browsers.');
}

// ══════════ RESET ALL ══════════
function resetAll() {
  if (!confirm('⚠ Reset ALL website content to defaults?\n\nThis will erase all products, leadership, gallery, testimonials, theme, and text changes.\n\nThis cannot be undone.')) return;
  Object.keys(DEFAULTS).forEach(k => {
    state[k] = JSON.parse(JSON.stringify(DEFAULTS[k]));
    persist(k, state[k]);
  });
  populateForms();
  toast('✅ Everything reset to defaults. Reload index.html to see the site restored.');
}

// ══════════ TOAST NOTIFICATION ══════════
function toast(msg, isError = false) {
  let t = document.getElementById('admin-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'admin-toast';
    t.style.cssText = `
      position:fixed; bottom:2rem; right:2rem; z-index:9999;
      padding:12px 20px; border-radius:12px; font-size:.875rem;
      font-weight:600; max-width:340px; transition:opacity .3s;
      pointer-events:none; font-family:'Segoe UI',system-ui,sans-serif;
    `;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = isError ? 'rgba(239,68,68,.9)' : 'rgba(16,185,129,.9)';
  t.style.color = '#fff';
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

// ══════════ HELPERS ══════════
function val(id)    { return document.getElementById(id)?.value || ''; }
function setVal(id, v) { const el = document.getElementById(id); if (el) el.value = v ?? ''; }
function esc(str)   { return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('admin-user').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
  document.getElementById('admin-pass').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  // Load all site data from Firebase into state on startup
  if (db) {
    db.ref('siteData').once('value', snapshot => {
      const data = snapshot.val() || {};
      Object.keys(DEFAULTS).forEach(k => {
        if (data[k] !== undefined && data[k] !== null) state[k] = data[k];
      });
    }).catch(e => console.warn('Firebase read failed:', e.message));
  }
});
