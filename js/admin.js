/* ════════════════════════════════════════
   js/admin.js — Bista Group Admin Panel
   ════════════════════════════════════════ */

const DEFAULTS = {
  hero: { tag:'Premium Quality Products', title:'Bista Group', sub:'A diversified conglomerate delivering excellence across industries — from premium products to innovative solutions that empower communities and drive growth.' },
  logo: { url:'assets/images/logo-placeholder.png', brand:'Bista Group' },
  about: {
    img:'https://placehold.co/600x420/1a3a8f/ffffff?text=About+Us',
    badgeNum:'25+', badgeTxt:'Years of Excellence',
    p1:'Bista Group is a leading diversified conglomerate with a strong presence across multiple industries. Founded on principles of integrity, innovation, and excellence, we have grown to become a trusted name in the region.',
    p2:'Our commitment to quality and customer satisfaction has earned us a reputation for delivering world-class products and services that make a meaningful difference in people\'s lives.',
    s1v:'500+', s1l:'Products', s2v:'50+', s2l:'Countries', s3v:'10K+', s3l:'Customers'
  },
  products: [
    { id:1, name:'Alpine Watch',           desc:'Precision Swiss-inspired timepiece',        fullDesc:'Handcrafted with premium materials, the Alpine Watch features sapphire crystal glass, 100m water resistance, and automatic movement.',    price:45000, images:['https://placehold.co/600x400/1a3a8f/ffffff?text=Alpine+Watch'] },
    { id:2, name:'Executive Pen Set',      desc:'Premium writing instrument collection',     fullDesc:'Crafted from aircraft-grade aluminium with gold plating, this executive pen set is the ultimate professional accessory.',                  price:8500,  images:['https://placehold.co/600x400/c0152a/ffffff?text=Pen+Set'] },
    { id:3, name:'Leather Portfolio',      desc:'Hand-stitched genuine leather portfolio',   fullDesc:'Full-grain leather with hand-stitched edges, internal organiser, and magnetic closure. Fits A4 documents.',                                 price:12000, images:['https://placehold.co/600x400/1a3a8f/ffffff?text=Portfolio'] },
    { id:4, name:'Premium Tea Collection', desc:'Himalayan high-altitude teas',              fullDesc:'Sourced from the finest tea gardens in the Himalayan highlands. Includes 6 premium varieties hand-picked at altitude.',                     price:3500,  images:['https://placehold.co/600x400/c0152a/ffffff?text=Tea+Collection'] }
  ],
  services: [
    { id:1, icon:'🌍', title:'Global Trading',  desc:'Premium sourcing and export expertise connecting businesses across 50+ countries worldwide.' },
    { id:2, icon:'🏭', title:'Manufacturing',   desc:'Precision-engineered products at scale with strict quality assurance and modern facilities.' },
    { id:3, icon:'💼', title:'Consulting',      desc:'Strategic business advisory helping enterprises navigate complex international markets.' },
    { id:4, icon:'🚚', title:'Logistics',       desc:'End-to-end supply chain management ensuring timely and secure delivery globally.' }
  ],
  leadership: [
    { id:1, name:'Bijay Bista',   role:'Founder & CEO',           desc:'Visionary leader with 25+ years of experience driving growth and innovation.',    fullDesc:'Bijay Bista founded the Bista Group with a vision to create a world-class diversified conglomerate. With over 25 years of leadership experience across manufacturing, trading, and consulting sectors, he has steered the group to become a trusted name in the region and beyond.', img:'https://placehold.co/400x400/1a3a8f/ffffff?text=BB' },
    { id:2, name:'Priya Sharma',  role:'Managing Director',        desc:'Strategic operations expert who has overseen expansion into 50+ global markets.', fullDesc:'Priya Sharma brings over 18 years of operational expertise to the Bista Group. Her strategic vision has been instrumental in driving the group\'s expansion into more than 50 global markets.', img:'https://placehold.co/400x400/c0152a/ffffff?text=PS' },
    { id:3, name:'Rajan Thapa',   role:'Chief Financial Officer',  desc:'CPA with expertise in international finance, risk management, and sustainable investment.', fullDesc:'Rajan Thapa is a Certified Public Accountant with over 15 years of expertise in international finance and risk management. He oversees the group\'s financial operations and investment portfolio.', img:'https://placehold.co/400x400/1a3a8f/ffffff?text=RT' }
  ],
  gallery: {
    interval: 4,
    items: [
      { id:1, url:'https://placehold.co/1200x600/1a3a8f/ffffff?text=Gallery+1', cap:'Our Headquarters' },
      { id:2, url:'https://placehold.co/1200x600/c0152a/ffffff?text=Gallery+2', cap:'Annual Summit 2024' },
      { id:3, url:'https://placehold.co/1200x600/1a3a8f/ffffff?text=Gallery+3', cap:'Product Launch' },
      { id:4, url:'https://placehold.co/1200x600/c0152a/ffffff?text=Gallery+4', cap:'Team Building' },
      { id:5, url:'https://placehold.co/1200x600/1a3a8f/ffffff?text=Gallery+5', cap:'Export Ceremony' },
      { id:6, url:'https://placehold.co/1200x600/c0152a/ffffff?text=Gallery+6', cap:'CSR Initiative' }
    ]
  },
  testimonials: [
    { id:1, name:'Aarav Mehta',       title:'CEO, TechVentures',  text:'Bista Group has been an outstanding business partner. Their attention to detail and commitment to quality is unmatched.', stars:5 },
    { id:2, name:'Sarah Johnson',     title:'Import Manager, AU', text:'We\'ve sourced premium products from Bista Group for years. Consistent quality and exceptional service every time.',        stars:5 },
    { id:3, name:'Dr. Ramesh Koirala',title:'Director, FinCorp',  text:'A trustworthy conglomerate with genuine values. Their leadership team is professional, responsive, and results-driven.',   stars:5 }
  ],
  contact: { email:'bijaybista006@gmail.com', phone:'+977-XXXXXXXX', addr:'Kathmandu, Nepal', footerDesc:'A diversified conglomerate committed to excellence, innovation, and sustainable growth across industries worldwide.', footerCopy:'© 2025 Bista Group. All Rights Reserved.' },
  payment: {
    cart: { enabled:true, maxQty:10 },
    checkout: {
      enabled:true,
      customerForm: { enabled:true, fields:[
        { id:1, label:'Full Name',     type:'text',     required:true, enabled:true },
        { id:2, label:'Phone Number',  type:'tel',      required:true, enabled:true },
        { id:3, label:'Email Address', type:'email',    required:true, enabled:true },
        { id:4, label:'Address',       type:'textarea', required:true, enabled:true }
      ]},
      pickup:   { enabled:true,  stores:[{ id:1, name:'Main Store', address:'Kathmandu, Nepal', hours:'9am–6pm Mon–Sat' }] },
      delivery: { enabled:true,  providers:{
        manual:  { enabled:true,  label:'Standard Delivery', charge:200, info:'3–5 business days' },
        dhl:     { enabled:false, label:'DHL Express',       charge:0,   info:'Contact for international rates' },
        auspost: { enabled:false, label:'Australia Post',    charge:0,   info:'Contact for rates' },
        tnt:     { enabled:false, label:'TNT',               charge:0,   info:'Contact for rates' }
      }}
    },
    currency: { default:'NPR', enabled:['NPR','USD','AUD'] },
    charge:   { pct:2, label:'Processing fee' },
    gateways: {
      contact: { enabled:true },
      stripe:  { enabled:false, pk:'', payLink:'' },
      eway:    { enabled:false, apiKey:'', payUrl:'' },
      fonepay: { enabled:false, merchantCode:'', qrImg:'' },
      esewa:   { enabled:false, merchantId:'', successUrl:'', failureUrl:'' },
      khalti:  { enabled:false, pk:'' }
    },
    email: { enabled:false, subject:'Payment Confirmation — {product}', body:'Dear {customer},\n\nThank you for your payment!\n\nProduct: {product}\nAmount: {amount}\nGateway: {gateway}\n\nBista Group' }
  },
  emailjs:    { pk:'', sid:'', tid:'', tidContact:'', tidPayment:'', contactSubject:'New Enquiry from {name}', contactEnabled:false },
  cloudinary: { cloud:'dyjzhbvkf', preset:'bista-group-unassigned' },
  rates:      { aud:0.0120, usd:0.0075 },
  theme:      { primary:'#1a3a8f', secondary:'#c0152a', bg:'#080c18', accent:'#2563eb' },
  visibility: { about:true, products:true, services:true, leadership:true, gallery:true, testimonials:true, contact:true },
  sectionTitles: { about:'About Us', products:'Our Products', services:'Our Services', leadership:'Leadership', gallery:'Gallery', testimonials:'Testimonials', contact:'Contact Us' },
  design:     { layout:'default', heroAlign:'center', navStyle:'top', cardStyle:'shadow', navHide:'always', navHover:'simple' },
  customSections: [],
  dsConfig:   { backend:'local', media:'cloudinary', firebase:{}, supabase:{}, awsS3:{} },
  contactForm: {
    fields: [
      { id:1, key:'name',    label:'Full Name',     type:'text',     required:true,  enabled:true,  placeholder:'Your name' },
      { id:2, key:'email',   label:'Email Address', type:'email',    required:true,  enabled:true,  placeholder:'your@email.com' },
      { id:3, key:'phone',   label:'Phone Number',  type:'tel',      required:false, enabled:false, placeholder:'+1 234 567 8900' },
      { id:4, key:'subject', label:'Subject',       type:'text',     required:false, enabled:true,  placeholder:'How can we help?' },
      { id:5, key:'message', label:'Message',       type:'textarea', required:true,  enabled:true,  placeholder:'Tell us more...' }
    ]
  },
  auth: { enabled:true, googleEnabled:true, emailVerification:false, allowGuest:true,
    signupFields:[ { id:1, key:'name', label:'Full Name', type:'text', required:true, enabled:true, placeholder:'Your full name' } ]
  },
  typography: { headingFont:'Segoe UI', bodyFont:'Segoe UI', baseFontSize:16, headingScale:2.5, lineHeight:1.7, letterSpacing:0 }
};

// ══════════ STORAGE ══════════
function persist(k, v) { state[k] = v; }

// ── LocalStorage override bridge ──
// Writes key settings to localStorage so the main site picks them up immediately
// without needing to download & replace data.json.
const LS_OVERRIDE_KEY = 'bista_config_override';

function _saveLocalOverride() {
  try {
    const override = {
      auth:       state.auth       || {},
      design:     state.design     || {},
      theme:      state.theme      || {},
      typography: state.typography || {}
    };
    localStorage.setItem(LS_OVERRIDE_KEY, JSON.stringify(override));
  } catch(e) {
    console.warn('[Admin] Could not save local override:', e.message);
  }
}

// ══════════ STATE ══════════
const state = {};
Object.keys(DEFAULTS).forEach(k => { state[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });

// ══════════ AUTH ══════════
const ADMIN_PASS = 'bista2025';
let _adminSession = null;

async function doLogin() {
  const u = val('admin-user'), p = val('admin-pass');
  const msgEl = document.getElementById('admin-login-msg');
  // Check DS admin users first, fall back to hardcoded master
  try {
    const admin = await DS.getAdminByCredentials(u, p);
    if (admin) {
      _adminSession = admin;
      DS.setSession({ id:admin.id, name:admin.name, role:admin.role, username:admin.username });
      document.getElementById('admin-login').style.display = 'none';
      document.getElementById('admin-dash').style.display  = 'block';
      populateForms();
      return;
    }
  } catch(e) {}
  // Hardcoded fallback
  if ((u === 'admin') && p === ADMIN_PASS) {
    _adminSession = { id:'master', name:'Master Admin', role:'master', username:'admin' };
    DS.setSession(_adminSession);
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-dash').style.display  = 'block';
    populateForms();
  } else {
    msgEl.textContent = 'Invalid username or password.';
    msgEl.style.display = 'block';
  }
}

function signOut() {
  if (!confirm('Sign out?')) return;
  DS.clearSession(); _adminSession = null;
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
  // Auto-load tab-specific content
  if (id === 'tab-users') { switchUsersSubtab('customers'); }
  if (id === 'tab-orders') { renderAdminOrders(); }
  if (id === 'tab-enquiries') { renderAdminEnquiries(); }
}

// ══════════ POPULATE ALL FORMS ══════════
function populateForms() {
  setVal('a-hero-tag',   state.hero.tag);
  setVal('a-hero-title', state.hero.title);
  setVal('a-hero-sub',   state.hero.sub);
  setVal('a-logo-url',   state.logo.url);
  setVal('a-brand-name', state.logo.brand);
  const lp = document.getElementById('a-logo-preview');
  if (lp) { lp.src = state.logo.url; lp.style.display = 'block'; }
  setVal('a-about-img', state.about.img);
  setVal('a-badge-num', state.about.badgeNum);
  setVal('a-badge-txt', state.about.badgeTxt);
  setVal('a-about-p1',  state.about.p1);
  setVal('a-about-p2',  state.about.p2);
  setVal('a-s1v', state.about.s1v); setVal('a-s1l', state.about.s1l);
  setVal('a-s2v', state.about.s2v); setVal('a-s2l', state.about.s2l);
  setVal('a-s3v', state.about.s3v); setVal('a-s3l', state.about.s3l);
  setVal('a-con-email',   state.contact.email);
  setVal('a-con-phone',   state.contact.phone);
  setVal('a-con-addr',    state.contact.addr);
  setVal('a-footer-desc', state.contact.footerDesc);
  setVal('a-footer-copy', state.contact.footerCopy);
  setVal('a-ejs-pk',  state.emailjs.pk);
  setVal('a-ejs-sid', state.emailjs.sid);
  setVal('a-ejs-tid', state.emailjs.tid);
  setVal('a-cloud-name',   (state.cloudinary||{}).cloud  || '');
  setVal('a-cloud-preset', (state.cloudinary||{}).preset || '');
  setVal('a-aud-rate', state.rates.aud);
  setVal('a-usd-rate', state.rates.usd);
  setVal('a-gal-interval', Array.isArray(state.gallery) ? 4 : (state.gallery.interval || 4));
  setVal('a-col-primary',   state.theme.primary);
  setVal('a-col-secondary', state.theme.secondary);
  setVal('a-col-bg',        state.theme.bg);
  setVal('a-col-accent',    state.theme.accent);
  syncColorLabels();
  // Design
  const d = state.design || {};
  document.querySelectorAll('input[name="a-layout"]').forEach(r => { r.checked = (r.value === (d.layout||'default')); });
  document.querySelectorAll('input[name="a-hero-align"]').forEach(r => { r.checked = (r.value === (d.heroAlign||'center')); });
  document.querySelectorAll('input[name="a-nav-style"]').forEach(r => { r.checked = (r.value === (d.navStyle||'top')); });
  document.querySelectorAll('input[name="a-card-style"]').forEach(r => { r.checked = (r.value === (d.cardStyle||'shadow')); });
  document.querySelectorAll('input[name="a-nav-hide"]').forEach(r =>  { r.checked = (r.value === (d.navHide||'always')); });
  document.querySelectorAll('input[name="a-nav-hover"]').forEach(r => { r.checked = (r.value === (d.navHover||'simple')); });
  // Section titles
  const st = state.sectionTitles || {};
  Object.keys(st).forEach(k => setVal('st-' + k, st[k]));
  // Visibility toggles
  const v = state.visibility || {};
  Object.keys(v).forEach(k => {
    const el = document.getElementById('vis-' + k);
    if (el) el.checked = v[k] !== false;
  });
  applyAdminTheme();
  populateOwnership();
  populatePayment();
  populateConfiguration();
  renderAdminOrders();
  renderAdminEnquiries();
  renderAdminUsers();
  renderAdminProducts();
  renderAdminServices();
  renderAdminLeaders();
  renderAdminGallery();
  renderAdminTestis();
  renderAdminCustomSections();
  renderContactFormFieldsAdmin();
  renderAuthConfigAdmin();
  populateTypography();
  renderCustomerUsers();
}

// ══════════ OWNERSHIP ══════════
function populateOwnership() {
  setVal('own-company',     state.logo.brand || 'Bista Group');
  setVal('own-tag',         state.hero.tag   || '');
  setVal('own-desc',        state.hero.sub   || '');
  // Extract year and suffix from footerCopy e.g. "© 2025 Bista Group. All Rights Reserved."
  const copy   = state.contact.footerCopy || '';
  const mYear  = copy.match(/©\s*(\d{4})/);
  const mSuffix= copy.replace(/©\s*\d{4}\s*[^.]*\.?\s*/, '');
  setVal('own-year',        mYear ? mYear[1] : new Date().getFullYear());
  setVal('own-copy-suffix', mSuffix || 'All Rights Reserved.');
}

function saveOwnership() {
  const name   = val('own-company').trim();
  if (!name) { toast('Please enter a company name.', true); return; }
  const tag    = val('own-tag').trim();
  const desc   = val('own-desc').trim();
  const year   = val('own-year').trim() || new Date().getFullYear();
  const suffix = val('own-copy-suffix').trim() || 'All Rights Reserved.';
  const oldName = state.logo.brand || 'Bista Group';

  // Sync to all fields
  state.logo.brand          = name;
  state.hero.title          = name;
  if (tag)  state.hero.tag  = tag;
  if (desc) {
    state.hero.sub            = desc;
    state.contact.footerDesc  = desc;
  }
  state.contact.footerCopy  = `© ${year} ${name}. ${suffix}`;

  // Optionally replace old name in about text
  if (document.getElementById('own-update-about')?.checked && oldName !== name) {
    const replace = (str) => str ? str.split(oldName).join(name) : str;
    state.about.p1 = replace(state.about.p1);
    state.about.p2 = replace(state.about.p2);
    setVal('a-about-p1', state.about.p1);
    setVal('a-about-p2', state.about.p2);
  }

  // ── Live-update admin panel header & page title ──
  const adminNameEl = document.getElementById('admin-company-name');
  if (adminNameEl) adminNameEl.textContent = name;
  const titleEl = document.getElementById('admin-page-title');
  if (titleEl) titleEl.textContent = `Admin Panel — ${name}`;
  document.title = `Admin — ${name}`;

  // ── Sync all form fields that mirror these values ──
  setVal('a-brand-name',   name);
  setVal('a-hero-title',   name);
  setVal('a-hero-tag',     tag  || state.hero.tag);
  setVal('a-hero-sub',     desc || state.hero.sub);
  setVal('a-footer-desc',  desc || state.contact.footerDesc);
  setVal('a-footer-copy',  state.contact.footerCopy);

  // ── Apply theme colours live in admin panel ──
  applyAdminTheme();

  // ── Show preview of what was updated ──
  const previewEl = document.getElementById('own-preview');
  const listEl    = document.getElementById('own-preview-list');
  if (previewEl && listEl) {
    listEl.innerHTML = [
      `Nav / Page title → <strong style="color:#fff;">${esc(name)}</strong>`,
      `Hero company name → <strong style="color:#fff;">${esc(name)}</strong>`,
      tag  ? `Hero tag → <strong style="color:#fff;">${esc(tag)}</strong>` : null,
      desc ? `Hero subtitle → <strong style="color:#fff;">${esc(desc.slice(0,60))}…</strong>` : null,
      desc ? `Footer description → updated` : null,
      `Copyright → <strong style="color:#fff;">© ${year} ${esc(name)}. ${esc(suffix)}</strong>`,
      document.getElementById('own-update-about')?.checked ? `About text → replaced "${esc(oldName)}" with "${esc(name)}"` : null,
    ].filter(Boolean).map(s => `<div style="padding:.2rem 0;border-bottom:1px solid rgba(255,255,255,.06);">✓ ${s}</div>`).join('');
    previewEl.style.display = 'block';
  }

  toast(`✅ "${name}" applied everywhere! Download data.json to publish.`);
}

// ══════════ PAYMENT ══════════
function populatePayment() {
  const pmt = state.payment || {};
  const cur = pmt.currency || {};
  const gws = pmt.gateways || {};
  const em  = pmt.email    || {};
  // Cart
  const cartCfg = pmt.cart || {};
  const cartOn = document.getElementById('cart-enabled');
  const cartMaxEl = document.getElementById('cart-max-qty');
  if (cartOn) cartOn.checked = cartCfg.enabled !== false;
  if (cartMaxEl) cartMaxEl.value = cartCfg.maxQty || 10;
  // Checkout
  const co = pmt.checkout || {};
  const coOn = document.getElementById('checkout-enabled');
  const pickupOn = document.getElementById('checkout-pickup-enabled');
  const deliveryOn = document.getElementById('checkout-delivery-enabled');
  if (coOn) coOn.checked = co.enabled !== false;
  if (pickupOn) pickupOn.checked = co.pickup?.enabled !== false;
  if (deliveryOn) deliveryOn.checked = co.delivery?.enabled !== false;
  renderAdminStores();
  renderAdminProviders();
  renderAdminCFFields();
  // Currency
  const defSel = document.getElementById('pay-cur-default');
  if (defSel) defSel.value = cur.default || 'NPR';
  ['NPR','USD','AUD'].forEach(c => {
    const el = document.getElementById('pay-cur-' + c.toLowerCase());
    if (el) el.checked = (cur.enabled || ['NPR']).includes(c);
  });
  // Charge
  setVal('pay-charge-pct',   (pmt.charge || {}).pct   ?? 2);
  setVal('pay-charge-label', (pmt.charge || {}).label || 'Processing fee');
  // Gateways
  const gwDefs = [
    { key:'stripe',  fields:['paylink:payLink','pk:pk'] },
    { key:'eway',    fields:['apikey:apiKey','payurl:payUrl'] },
    { key:'fonepay', fields:['code:merchantCode','qr:qrImg'] },
    { key:'esewa',   fields:['mid:merchantId','su:successUrl','fu:failureUrl'] },
    { key:'khalti',  fields:['pk:pk'] },
  ];
  gwDefs.forEach(({ key, fields }) => {
    const onEl = document.getElementById('gw-' + key + '-on');
    const credsEl = document.getElementById('gw-' + key + '-creds');
    const gw = gws[key] || {};
    if (onEl) onEl.checked = !!gw.enabled;
    if (credsEl) credsEl.style.display = gw.enabled ? 'block' : 'none';
    fields.forEach(f => {
      const [elKey, stKey] = f.split(':');
      setVal('gw-' + key + '-' + elKey, gw[stKey] || '');
    });
  });
  // Email
  const emailOnEl = document.getElementById('pay-email-on');
  if (emailOnEl) emailOnEl.checked = !!em.enabled;
  setVal('pay-email-subject', em.subject || '');
  setVal('pay-email-body',    em.body    || '');
  // Payment email template ID (from emailjs)
  setVal('a-ejs-tid-payment', (state.emailjs||{}).tidPayment || (state.emailjs||{}).tid || '');
}

function toggleGateway(key) {
  const onEl    = document.getElementById('gw-' + key + '-on');
  const credsEl = document.getElementById('gw-' + key + '-creds');
  if (credsEl) credsEl.style.display = onEl?.checked ? 'block' : 'none';
}

function savePaymentCurrency() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  const defSel = document.getElementById('pay-cur-default');
  const enabled = ['NPR','USD','AUD'].filter(c => {
    const el = document.getElementById('pay-cur-' + c.toLowerCase());
    return el?.checked;
  });
  if (!enabled.length) { toast('Select at least one currency.', true); return; }
  const defCur = defSel?.value || 'NPR';
  const finalDef = enabled.includes(defCur) ? defCur : enabled[0];
  state.payment.currency = { default: finalDef, enabled };
  // Re-render any sections that display the default currency symbol
  renderAdminProviders();
  renderAdminProducts();
  renderAdminOrders();
  toast(`Currency settings saved! Default: ${finalDef}`);
}

function savePaymentCharge() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  state.payment.charge = {
    pct:   parseFloat(val('pay-charge-pct'))   || 0,
    label: val('pay-charge-label').trim()      || 'Processing fee'
  };
  toast('Processing fee saved!');
}

function savePaymentGateways() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  state.payment.gateways = {
    contact: { enabled: true },
    stripe: {
      enabled: !!document.getElementById('gw-stripe-on')?.checked,
      payLink: val('gw-stripe-paylink').trim(),
      pk:      val('gw-stripe-pk').trim()
    },
    eway: {
      enabled: !!document.getElementById('gw-eway-on')?.checked,
      apiKey:  val('gw-eway-apikey').trim(),
      payUrl:  val('gw-eway-payurl').trim()
    },
    fonepay: {
      enabled:      !!document.getElementById('gw-fonepay-on')?.checked,
      merchantCode: val('gw-fonepay-code').trim(),
      qrImg:        val('gw-fonepay-qr').trim()
    },
    esewa: {
      enabled:    !!document.getElementById('gw-esewa-on')?.checked,
      merchantId: val('gw-esewa-mid').trim(),
      successUrl: val('gw-esewa-su').trim(),
      failureUrl: val('gw-esewa-fu').trim()
    },
    khalti: {
      enabled: !!document.getElementById('gw-khalti-on')?.checked,
      pk:      val('gw-khalti-pk').trim()
    }
  };
  toast('Gateway settings saved!');
}

function savePaymentEmail() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  state.payment.email = {
    enabled: !!document.getElementById('pay-email-on')?.checked,
    subject: val('pay-email-subject').trim() || DEFAULTS.payment.email.subject,
    body:    val('pay-email-body').trim()    || DEFAULTS.payment.email.body
  };
  toast('Email confirmation settings saved!');
}

// ══════════ SAVE: HERO ══════════
function saveHero() {
  state.hero = { tag:val('a-hero-tag'), title:val('a-hero-title'), sub:val('a-hero-sub') };
  toast('Hero saved!');
}

// ══════════ SAVE: LOGO ══════════
function saveLogo() {
  state.logo = { url:val('a-logo-url') || state.logo.url, brand:val('a-brand-name') };
  toast('Logo saved!');
}

// ══════════ SAVE: ABOUT ══════════
function saveAbout() {
  state.about = {
    img:val('a-about-img') || state.about.img,
    badgeNum:val('a-badge-num'), badgeTxt:val('a-badge-txt'),
    p1:val('a-about-p1'), p2:val('a-about-p2'),
    s1v:val('a-s1v'), s1l:val('a-s1l'),
    s2v:val('a-s2v'), s2l:val('a-s2l'),
    s3v:val('a-s3v'), s3l:val('a-s3l')
  };
  toast('About saved!');
}

// ══════════ SAVE: CONTACT ══════════
function saveContact() {
  state.contact = { email:val('a-con-email'), phone:val('a-con-phone'), addr:val('a-con-addr'), footerDesc:val('a-footer-desc'), footerCopy:val('a-footer-copy') };
  toast('Contact saved!');
}

// ══════════ SAVE: EMAILJS ══════════
function saveEmailJS() {
  state.emailjs = { pk:val('a-ejs-pk'), sid:val('a-ejs-sid'), tid:val('a-ejs-tid') };
  toast('EmailJS config saved!');
}

// ══════════ SAVE: CLOUDINARY ══════════
function saveCloudinary() {
  state.cloudinary = { cloud:val('a-cloud-name'), preset:val('a-cloud-preset') };
  toast('Cloudinary config saved!');
}

// ══════════ SAVE: RATES ══════════
function saveRates() {
  state.rates = { aud:parseFloat(val('a-aud-rate'))||0.012, usd:parseFloat(val('a-usd-rate'))||0.0075 };
  toast('Exchange rates saved!');
}

// ══════════ SAVE: THEME ══════════
function saveTheme() {
  state.theme = { primary:val('a-col-primary'), secondary:val('a-col-secondary'), bg:val('a-col-bg'), accent:val('a-col-accent') };
  applyAdminTheme();
  _saveLocalOverride();
  toast('Theme saved! Download data.json to publish.');
}

// ── Live-apply theme CSS variables to the admin panel itself ──
function applyAdminTheme() {
  const t = state.theme || {};
  const root = document.documentElement;
  if (t.primary)   root.style.setProperty('--primary',   t.primary);
  if (t.secondary) root.style.setProperty('--secondary', t.secondary);
  if (t.bg)        root.style.setProperty('--bg',        t.bg);
  if (t.accent)    root.style.setProperty('--accent',    t.accent);
  // Also update the company name in the admin header immediately
  const nameEl = document.getElementById('admin-company-name');
  if (nameEl) nameEl.textContent = state.logo?.brand || 'Bista Group';
}

// ══════════ SAVE: DESIGN ══════════
function saveDesign() {
  const layout    = document.querySelector('input[name="a-layout"]:checked')?.value    || 'default';
  const heroAlign = document.querySelector('input[name="a-hero-align"]:checked')?.value || 'center';
  const navStyle  = document.querySelector('input[name="a-nav-style"]:checked')?.value  || 'top';
  const cardStyle = document.querySelector('input[name="a-card-style"]:checked')?.value || 'shadow';
  const navHide   = document.querySelector('input[name="a-nav-hide"]:checked')?.value   || 'always';
  const navHover  = document.querySelector('input[name="a-nav-hover"]:checked')?.value  || 'simple';
  state.design = { layout, heroAlign, navStyle, cardStyle, navHide, navHover };
  _saveLocalOverride();
  toast('Design layout saved!');
}

// ══════════ SAVE: SECTION TITLES ══════════
function saveSectionTitles() {
  const keys = ['about','products','services','leadership','gallery','testimonials','contact'];
  const titles = {};
  keys.forEach(k => { titles[k] = val('st-' + k) || DEFAULTS.sectionTitles[k]; });
  state.sectionTitles = titles;
  toast('Section titles saved!');
}

// ══════════ SAVE: VISIBILITY ══════════
function saveVisibility() {
  const keys = ['about','products','services','leadership','gallery','testimonials','contact'];
  const vis = {};
  keys.forEach(k => {
    const el = document.getElementById('vis-' + k);
    vis[k] = el ? el.checked : true;
  });
  state.visibility = vis;
  toast('Visibility saved!');
}

// ══════════ SAVE: GALLERY SETTINGS ══════════
function saveGallerySettings() {
  const interval = parseInt(val('a-gal-interval')) || 4;
  if (Array.isArray(state.gallery)) state.gallery = { interval, items: state.gallery };
  else state.gallery.interval = interval;
  toast('Gallery settings saved!');
}

// ══════════ COLOR SYNC ══════════
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
let prodImages = [];

function saveProduct() {
  const eid = val('editing-product-id');
  if (!prodImages.length) { toast('Add at least one image.', true); return; }
  const prod = {
    id:       eid ? parseInt(eid) : Date.now(),
    name:     val('a-prod-name'),
    desc:     val('a-prod-desc'),
    fullDesc: val('a-prod-fulldesc'),
    price:    parseFloat(val('a-prod-price')) || 0,
    images:   [...prodImages]
  };
  if (!prod.name) { toast('Please enter a product name.', true); return; }
  if (eid) {
    const i = state.products.findIndex(p => p.id === parseInt(eid));
    if (i > -1) state.products[i] = prod; else state.products.push(prod);
  } else {
    state.products.push(prod);
  }
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
  prodImages = p.images ? [...p.images] : (p.img ? [p.img] : []);
  renderProdImages();
  document.getElementById('product-form-title').textContent = 'Edit Product';
  document.getElementById('tab-products').scrollIntoView({ behavior:'smooth' });
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  state.products = state.products.filter(p => p.id !== id);
  renderAdminProducts();
  toast('Product deleted.');
}

function clearProductForm() {
  setVal('editing-product-id', '');
  ['a-prod-name','a-prod-desc','a-prod-fulldesc','a-prod-price'].forEach(id => setVal(id, ''));
  const f = document.getElementById('a-prod-file'); if (f) f.value = '';
  prodImages = [];
  renderProdImages();
  document.getElementById('product-form-title').textContent = 'Add New Product';
}

async function addProdImage() {
  const urlInput = document.getElementById('a-prod-img-url');
  const fileInput = document.getElementById('a-prod-file');
  if (fileInput && fileInput.files[0]) {
    try {
      const url = await uploadToServer(fileInput.files[0], 'product');
      prodImages.push(url);
      fileInput.value = '';
    } catch { toast('Upload failed', true); return; }
  } else if (urlInput && urlInput.value.trim()) {
    prodImages.push(urlInput.value.trim());
    urlInput.value = '';
  } else { toast('Enter a URL or choose a file.', true); return; }
  renderProdImages();
  toast('Image added!');
}

function removeProdImage(idx) {
  prodImages.splice(idx, 1);
  renderProdImages();
}

function renderProdImages() {
  const el = document.getElementById('prod-images-list');
  if (!el) return;
  el.innerHTML = prodImages.length
    ? prodImages.map((url, i) => `
        <div class="prod-img-item">
          <img src="${url}" onerror="this.src='https://placehold.co/80x60/1a3a8f/fff?text=IMG'">
          <span class="prod-img-url">${url.length > 50 ? url.slice(0,50)+'…' : url}</span>
          <button class="del-btn" onclick="removeProdImage(${i})">✕</button>
        </div>`).join('')
    : '<p style="color:var(--text-muted);font-size:.82rem;">No images yet — add one below.</p>';
}

function renderAdminProducts() {
  const el = document.getElementById('admin-product-list');
  if (!el) return;
  el.innerHTML = state.products.length ? state.products.map(p => {
    const imgs = (p.images && p.images.length) ? p.images : (p.img ? [p.img] : []);
    return `<div class="product-list-item">
      <img src="${imgs[0]||''}" class="img-preview" onerror="this.src='https://placehold.co/80x60/1a3a8f/fff?text=IMG'">
      <div style="flex:1;min-width:0;">
        <h4>${esc(p.name)}</h4>
        <p>${getDefaultCurrSym()} ${p.price.toLocaleString()} &nbsp;·&nbsp; ${imgs.length} image${imgs.length!==1?'s':''}</p>
      </div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editProduct(${p.id})">Edit</button>
        <button class="del-btn"  onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    </div>`;
  }).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">No products yet.</p>';
}

// ══════════ SERVICES CRUD ══════════
function saveService() {
  const eid = val('editing-service-id');
  const svc = {
    id:   eid ? parseInt(eid) : Date.now(),
    icon: val('a-svc-icon') || '⭐',
    title:val('a-svc-title'),
    desc: val('a-svc-desc'),
    img:  val('a-svc-img') || ''
  };
  if (!svc.title) { toast('Enter a service title.', true); return; }
  if (eid) {
    const i = state.services.findIndex(s => s.id === parseInt(eid));
    if (i > -1) state.services[i] = svc; else state.services.push(svc);
  } else {
    state.services.push(svc);
  }
  renderAdminServices();
  clearServiceForm();
  toast('Service saved!');
}

function editService(id) {
  const s = state.services.find(x => x.id === id); if (!s) return;
  setVal('editing-service-id', id);
  setVal('a-svc-icon',  s.icon);
  setVal('a-svc-title', s.title);
  setVal('a-svc-desc',  s.desc);
  setVal('a-svc-img',   s.img || '');
  document.getElementById('service-form-title').textContent = 'Edit Service';
}

function deleteService(id) {
  if (!confirm('Delete this service?')) return;
  state.services = state.services.filter(s => s.id !== id);
  renderAdminServices();
  toast('Service deleted.');
}

function clearServiceForm() {
  setVal('editing-service-id', '');
  ['a-svc-icon','a-svc-title','a-svc-desc','a-svc-img'].forEach(id => setVal(id, ''));
  const f = document.getElementById('a-svc-file'); if (f) f.value = '';
  document.getElementById('service-form-title').textContent = 'Add Service';
}

function renderAdminServices() {
  const el = document.getElementById('admin-service-list');
  if (!el) return;
  el.innerHTML = (state.services||[]).length ? state.services.map(s => `
    <div class="product-list-item">
      ${s.img ? `<img src="${s.img}" class="img-preview" onerror="this.style.display='none'">` : `<div style="font-size:1.8rem;width:44px;text-align:center;">${s.icon||'⭐'}</div>`}
      <div style="flex:1;"><h4>${esc(s.title)}</h4><p>${esc(s.desc)}</p></div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editService(${s.id})">Edit</button>
        <button class="del-btn"  onclick="deleteService(${s.id})">Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">No services yet.</p>';
}

// ══════════ LEADERSHIP CRUD ══════════
function saveLeader() {
  const eid = val('editing-leader-id');
  const lead = {
    id:       eid ? parseInt(eid) : Date.now(),
    name:     val('a-lead-name'),
    role:     val('a-lead-role'),
    desc:     val('a-lead-desc'),
    fullDesc: val('a-lead-fulldesc'),
    img:      val('a-lead-img') || 'https://placehold.co/400x400/1a3a8f/ffffff?text=Leader'
  };
  if (!lead.name) { toast('Enter a name.', true); return; }
  if (eid) {
    const i = state.leadership.findIndex(l => l.id === parseInt(eid));
    if (i > -1) state.leadership[i] = lead; else state.leadership.push(lead);
  } else {
    state.leadership.push(lead);
  }
  renderAdminLeaders();
  clearLeaderForm();
  toast('Leader saved!');
}

function editLeader(id) {
  const l = state.leadership.find(x => x.id === id); if (!l) return;
  setVal('editing-leader-id', id);
  setVal('a-lead-name',     l.name);
  setVal('a-lead-role',     l.role);
  setVal('a-lead-desc',     l.desc);
  setVal('a-lead-fulldesc', l.fullDesc || '');
  setVal('a-lead-img',      l.img);
  document.getElementById('leader-form-title').textContent = 'Edit Leader';
}

function deleteLeader(id) {
  if (!confirm('Delete this leader?')) return;
  state.leadership = state.leadership.filter(l => l.id !== id);
  renderAdminLeaders();
  toast('Leader deleted.');
}

function clearLeaderForm() {
  setVal('editing-leader-id', '');
  ['a-lead-name','a-lead-role','a-lead-desc','a-lead-fulldesc','a-lead-img'].forEach(id => setVal(id,''));
  const f = document.getElementById('a-lead-file'); if (f) f.value = '';
  document.getElementById('leader-form-title').textContent = 'Add Leader';
}

function renderAdminLeaders() {
  const el = document.getElementById('admin-leader-list');
  if (!el) return;
  el.innerHTML = state.leadership.length ? state.leadership.map(l => `
    <div class="product-list-item">
      <img src="${l.img}" class="img-preview" onerror="this.src='https://placehold.co/80x60/1a3a8f/fff?text=IMG'">
      <div style="flex:1;"><h4>${esc(l.name)}</h4><p>${esc(l.role)}</p></div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editLeader(${l.id})">Edit</button>
        <button class="del-btn"  onclick="deleteLeader(${l.id})">Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">No leaders yet.</p>';
}

// ══════════ GALLERY CRUD ══════════
async function addGallery() {
  const fileInput = document.getElementById('a-gal-file');
  const urlInput  = document.getElementById('a-gal-url');
  let url = '';
  if (fileInput && fileInput.files[0]) {
    try { url = await uploadToServer(fileInput.files[0], 'gallery'); fileInput.value = ''; }
    catch { toast('Upload failed', true); return; }
  } else {
    url = urlInput ? urlInput.value.trim() : '';
  }
  if (!url) { toast('Enter URL or upload a file.', true); return; }
  const items = getGalleryItems();
  items.push({ id:Date.now(), url, cap:val('a-gal-cap') });
  if (Array.isArray(state.gallery)) state.gallery = { interval:4, items };
  else state.gallery.items = items;
  renderAdminGallery();
  if (urlInput) urlInput.value = '';
  setVal('a-gal-cap', '');
  toast('Image added!');
}

function deleteGallery(id) {
  const items = getGalleryItems().filter(g => g.id !== id);
  if (Array.isArray(state.gallery)) state.gallery = { interval:4, items };
  else state.gallery.items = items;
  renderAdminGallery();
  toast('Image removed.');
}

function getGalleryItems() {
  return Array.isArray(state.gallery) ? state.gallery : (state.gallery.items || []);
}

function renderAdminGallery() {
  const el = document.getElementById('admin-gallery-list');
  if (!el) return;
  const items = getGalleryItems();
  el.innerHTML = items.length ? items.map(g => `
    <div class="gallery-admin-item">
      <img src="${g.url}" alt="${esc(g.cap||'')}" onerror="this.src='https://placehold.co/200x150/1a3a8f/fff?text=IMG'">
      <div class="gal-caption">${esc(g.cap||'')}</div>
      <button class="del-overlay" onclick="deleteGallery(${g.id})" title="Remove">✕</button>
    </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">No images yet.</p>';
}

// ══════════ TESTIMONIALS CRUD ══════════
function saveTesti() {
  const eid = val('editing-testi-id');
  const t = {
    id:    eid ? parseInt(eid) : Date.now(),
    name:  val('a-testi-name'),
    title: val('a-testi-title'),
    text:  val('a-testi-text'),
    stars: Math.min(5, Math.max(1, parseInt(val('a-testi-stars'))||5))
  };
  if (!t.name || !t.text) { toast('Enter name and review.', true); return; }
  if (eid) {
    const i = state.testimonials.findIndex(x => x.id === parseInt(eid));
    if (i > -1) state.testimonials[i] = t; else state.testimonials.push(t);
  } else {
    state.testimonials.push(t);
  }
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
  if (!confirm('Delete?')) return;
  state.testimonials = state.testimonials.filter(t => t.id !== id);
  renderAdminTestis();
  toast('Deleted.');
}

function clearTestiForm() {
  setVal('editing-testi-id','');
  ['a-testi-name','a-testi-title','a-testi-text'].forEach(id => setVal(id,''));
  setVal('a-testi-stars',5);
  document.getElementById('testi-form-title').textContent = 'Add Testimonial';
}

function renderAdminTestis() {
  const el = document.getElementById('admin-testi-list');
  if (!el) return;
  el.innerHTML = state.testimonials.length ? state.testimonials.map(t => `
    <div class="product-list-item">
      <div style="flex:1;"><h4>${esc(t.name)}</h4><p>${esc(t.title)} — ${'★'.repeat(t.stars)}</p></div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editTesti(${t.id})">Edit</button>
        <button class="del-btn"  onclick="deleteTesti(${t.id})">Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">No testimonials yet.</p>';
}

// ══════════ CUSTOM SECTIONS CRUD ══════════
let csEditingId = null, csItems = [];

function updateCsForm() {
  const layout = val('cs-layout');
  const isGrid = layout === 'card-grid' || layout === 'icon-grid';
  const ids = ['cs-content-block-fields','cs-centered-text-fields','cs-items-section'];
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
  if (layout === 'content-block') { const el = document.getElementById('cs-content-block-fields'); if (el) el.style.display = 'block'; }
  if (layout === 'centered-text') { const el = document.getElementById('cs-centered-text-fields'); if (el) el.style.display = 'block'; }
  if (isGrid) {
    const sec = document.getElementById('cs-items-section'); if (sec) sec.style.display = 'block';
    const cardForm = document.getElementById('cs-card-add-form'); if (cardForm) cardForm.style.display = layout === 'card-grid' ? 'block' : 'none';
    const iconForm = document.getElementById('cs-icon-add-form'); if (iconForm) iconForm.style.display = layout === 'icon-grid' ? 'block' : 'none';
  }
}

function saveCustomSection() {
  const title = val('cs-title'); if (!title) { toast('Enter a section title.', true); return; }
  const layout = val('cs-layout');
  let data = {};
  if (layout === 'content-block') {
    data = { img: val('cs-img'), p1: val('cs-p1'), p2: val('cs-p2') };
  } else if (layout === 'card-grid' || layout === 'icon-grid') {
    data = { items: JSON.parse(JSON.stringify(csItems)) };
  } else if (layout === 'centered-text') {
    data = { body: val('cs-body') };
  }
  const cs = { id: csEditingId || Date.now(), title, tag: val('cs-tag'), layout, visible: true, data };
  if (csEditingId) {
    const i = (state.customSections||[]).findIndex(x => x.id === csEditingId);
    if (i > -1) state.customSections[i] = cs; else state.customSections.push(cs);
  } else {
    if (!state.customSections) state.customSections = [];
    state.customSections.push(cs);
  }
  renderAdminCustomSections();
  clearCsForm();
  toast('Custom section saved!');
}

function editCustomSection(id) {
  const cs = (state.customSections||[]).find(x => x.id === id); if (!cs) return;
  csEditingId = id;
  setVal('cs-title', cs.title); setVal('cs-tag', cs.tag || '');
  setVal('cs-layout', cs.layout);
  updateCsForm();
  const d = cs.data || {};
  if (cs.layout === 'content-block') {
    setVal('cs-img', d.img || ''); setVal('cs-p1', d.p1 || ''); setVal('cs-p2', d.p2 || '');
  } else if (cs.layout === 'card-grid' || cs.layout === 'icon-grid') {
    csItems = JSON.parse(JSON.stringify(d.items || []));
    renderCsItems();
  } else if (cs.layout === 'centered-text') {
    setVal('cs-body', d.body || '');
  }
  document.getElementById('cs-form-title').textContent = 'Edit Section';
  document.getElementById('tab-custom-sections').scrollIntoView({ behavior:'smooth' });
}

function deleteCustomSection(id) {
  if (!confirm('Delete this section?')) return;
  state.customSections = (state.customSections||[]).filter(x => x.id !== id);
  renderAdminCustomSections();
  toast('Section deleted.');
}

function clearCsForm() {
  csEditingId = null; csItems = [];
  ['cs-title','cs-tag','cs-img','cs-p1','cs-p2','cs-body'].forEach(id => setVal(id, ''));
  ['cs-item-name','cs-item-desc','cs-item-img','cs-item-icon','cs-item-title','cs-item-icon-desc'].forEach(id => setVal(id, ''));
  setVal('cs-layout', 'card-grid');
  updateCsForm();
  renderCsItems();
  document.getElementById('cs-form-title').textContent = 'New Custom Section';
}

function addCsItem() {
  const layout = val('cs-layout');
  if (layout === 'card-grid') {
    const name = val('cs-item-name'); if (!name) { toast('Enter item name.', true); return; }
    csItems.push({ id: Date.now(), name, desc: val('cs-item-desc'), img: val('cs-item-img') });
    ['cs-item-name','cs-item-desc','cs-item-img'].forEach(id => setVal(id, ''));
  } else if (layout === 'icon-grid') {
    const title = val('cs-item-title'); if (!title) { toast('Enter item title.', true); return; }
    csItems.push({ id: Date.now(), icon: val('cs-item-icon') || '⭐', title, desc: val('cs-item-icon-desc') });
    ['cs-item-icon','cs-item-title','cs-item-icon-desc'].forEach(id => setVal(id, ''));
  }
  renderCsItems();
}

function removeCsItem(idx) { csItems.splice(idx, 1); renderCsItems(); }

function renderCsItems() {
  const el = document.getElementById('cs-items-list');
  if (!el) return;
  el.innerHTML = csItems.length ? csItems.map((item, i) => `
    <div class="prod-img-item">
      ${item.img ? `<img src="${item.img}" style="width:48px;height:36px;object-fit:cover;border-radius:4px;">` : `<div style="font-size:1.4rem;width:48px;text-align:center;">${item.icon||'⭐'}</div>`}
      <span class="prod-img-url">${esc(item.name || item.title)}</span>
      <button class="del-btn" onclick="removeCsItem(${i})">✕</button>
    </div>`).join('') : '<p style="color:var(--text-muted);font-size:.82rem;">No items yet.</p>';
}

function renderAdminCustomSections() {
  const el = document.getElementById('admin-cs-list');
  if (!el) return;
  const sections = state.customSections || [];
  el.innerHTML = sections.length ? sections.map(cs => `
    <div class="product-list-item">
      <div style="flex:1;">
        <h4>${esc(cs.title)}</h4>
        <p>${cs.layout} &nbsp;·&nbsp; ${cs.visible !== false ? 'Visible' : 'Hidden'}</p>
      </div>
      <div class="pli-actions">
        <button class="edit-btn" onclick="editCustomSection(${cs.id})">Edit</button>
        <button class="del-btn"  onclick="deleteCustomSection(${cs.id})">Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem;">No custom sections yet.</p>';
}

// ══════════ IMAGE UPLOAD (Cloudinary) ══════════
async function uploadToServer(file) {
  const cloud  = (state.cloudinary||{}).cloud  || 'dyjzhbvkf';
  const preset = (state.cloudinary||{}).preset || 'bista-group-unassigned';
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', preset);
  fd.append('folder', 'bista-group');
  const res  = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, { method:'POST', body:fd });
  if (!res.ok) throw new Error('Cloudinary error ' + res.status);
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.secure_url;
}

async function handleImgUpload(input, targetId) {
  const f = input.files[0]; if (!f) return;
  try {
    const url = await uploadToServer(f);
    setVal(targetId, url);
    toast('Image uploaded!');
  } catch(e) { toast('Upload failed: ' + e.message, true); }
}

async function handleLogoUpload(input) {
  const f = input.files[0]; if (!f) return;
  try {
    const url = await uploadToServer(f);
    setVal('a-logo-url', url);
    const lp = document.getElementById('a-logo-preview');
    if (lp) { lp.src = url; lp.style.display = 'block'; }
    toast('Logo uploaded!');
  } catch(e) { toast('Upload failed: ' + e.message, true); }
}

// ══════════ PAYMENT: CART ══════════
function savePaymentCart() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  if (!state.payment.cart) state.payment.cart = {};
  state.payment.cart.enabled = !!document.getElementById('cart-enabled')?.checked;
  state.payment.cart.maxQty  = parseInt(val('cart-max-qty')) || 10;
  toast('Cart settings saved!');
}

// ══════════ PAYMENT: CHECKOUT ══════════
function savePaymentCheckout() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  if (!state.payment.checkout) state.payment.checkout = {};
  const co = state.payment.checkout;
  co.enabled = !!document.getElementById('checkout-enabled')?.checked;
  if (!co.pickup)   co.pickup   = {};
  if (!co.delivery) co.delivery = {};
  co.pickup.enabled   = !!document.getElementById('checkout-pickup-enabled')?.checked;
  co.delivery.enabled = !!document.getElementById('checkout-delivery-enabled')?.checked;
  toast('Checkout settings saved!');
}

// ─── Stores ───
function renderAdminStores() {
  const el = document.getElementById('admin-stores-list'); if (!el) return;
  const stores = state.payment?.checkout?.pickup?.stores || [];
  if (!stores.length) { el.innerHTML = '<p style="color:var(--text-muted);font-size:.82rem;">No stores added yet.</p>'; return; }
  el.innerHTML = stores.map(s => `
    <div class="product-list-item" style="align-items:flex-start;">
      <div style="flex:1;">
        <strong>${esc(s.name)}</strong><br>
        <span style="font-size:.82rem;color:var(--text-muted);">${esc(s.address)} ${s.hours?'· '+s.hours:''}</span>
      </div>
      <button class="del-btn" onclick="deleteStore(${s.id})">Delete</button>
    </div>`).join('');
}

function addStore() {
  const name = val('new-store-name').trim(), addr = val('new-store-addr').trim(), hours = val('new-store-hours').trim();
  if (!name || !addr) { toast('Store name and address required.', true); return; }
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  if (!state.payment.checkout?.pickup) state.payment.checkout = state.payment.checkout || {};
  if (!state.payment.checkout.pickup) state.payment.checkout.pickup = { enabled:true, stores:[] };
  const stores = state.payment.checkout.pickup.stores;
  stores.push({ id: Date.now(), name, address: addr, hours });
  ['new-store-name','new-store-addr','new-store-hours'].forEach(id => setVal(id,''));
  renderAdminStores();
  toast('Store added!');
}

function deleteStore(id) {
  if (!confirm('Delete this store?')) return;
  const stores = state.payment?.checkout?.pickup?.stores;
  if (stores) { const idx = stores.findIndex(s => s.id === id); if (idx > -1) stores.splice(idx, 1); }
  renderAdminStores();
  toast('Store deleted.');
}

// ─── Currency helper (admin display) ───
function getDefaultCurrSym() {
  const code = state.payment?.currency?.default || 'NPR';
  return { NPR:'रू', AUD:'A$', USD:'$' }[code] || code;
}
function getDefaultCurrCode() {
  return state.payment?.currency?.default || 'NPR';
}

// ─── Delivery Providers ───
const _PROV_META = {
  manual:  { icon:'🚚', badge:'Standard',       hasApi:false },
  dhl:     { icon:'📦', badge:'International',   hasApi:true,  apiLabel:'DHL Express API' },
  auspost: { icon:'🦘', badge:'AUS / NZ',        hasApi:true,  apiLabel:'Australia Post API' },
  tnt:     { icon:'🏎', badge:'Europe / Int\'l', hasApi:true,  apiLabel:'TNT / FedEx API' }
};

function renderAdminProviders() {
  const el = document.getElementById('admin-providers-list'); if (!el) return;
  const providers = state.payment?.checkout?.delivery?.providers || {};
  const sym  = getDefaultCurrSym();
  const code = getDefaultCurrCode();

  if (!Object.keys(providers).length) {
    el.innerHTML = '<p style="color:var(--text-muted);font-size:.84rem;margin-bottom:1rem;">No delivery providers yet — add one below.</p>';
    return;
  }

  el.innerHTML = Object.entries(providers).map(([key, prov]) => {
    const meta    = _PROV_META[key] || { icon:'🚛', badge:'Custom', hasApi:false };
    const isBase  = key === 'manual';

    // DHL-specific extra fields
    const dhlExtra = key === 'dhl' ? `
      <div class="field-row">
        <div class="field-group">
          <label>Service Type</label>
          <select id="prov-dhl-service">
            <option value=""   ${!prov.serviceType?'selected':''}>— Select —</option>
            <option value="P"  ${prov.serviceType==='P' ?'selected':''}>Express Worldwide</option>
            <option value="D"  ${prov.serviceType==='D' ?'selected':''}>Express Envelope</option>
            <option value="U"  ${prov.serviceType==='U' ?'selected':''}>Worldwide Dutiable</option>
            <option value="K"  ${prov.serviceType==='K' ?'selected':''}>Express 9:00</option>
          </select>
        </div>
        <div class="field-group">
          <label>Shipper Country Code</label>
          <input type="text" id="prov-dhl-country" value="${esc(prov.shipperCountry||'NP')}" placeholder="NP" maxlength="2">
        </div>
      </div>` : '';

    // AusPost-specific extra fields
    const auspostExtra = key === 'auspost' ? `
      <div class="field-row">
        <div class="field-group">
          <label>Service Code</label>
          <select id="prov-auspost-service">
            <option value=""                             ${!prov.serviceCode?'selected':''}>— Select —</option>
            <option value="AUS_PARCEL_EXPRESS"          ${prov.serviceCode==='AUS_PARCEL_EXPRESS'?'selected':''}>Parcel Express</option>
            <option value="AUS_PARCEL_REGULAR"          ${prov.serviceCode==='AUS_PARCEL_REGULAR'?'selected':''}>Parcel Regular</option>
            <option value="INT_PARCEL_EXP_OWN_PACKAGING"  ${prov.serviceCode==='INT_PARCEL_EXP_OWN_PACKAGING'?'selected':''}>Int'l Express</option>
            <option value="INT_PARCEL_STD_OWN_PACKAGING"  ${prov.serviceCode==='INT_PARCEL_STD_OWN_PACKAGING'?'selected':''}>Int'l Standard</option>
          </select>
        </div>
      </div>` : '';

    const apiSection = meta.hasApi ? `
      <div class="provider-api-section">
        <div class="provider-api-title">${meta.apiLabel} <span class="hint-inline">optional — leave blank to use flat charge only</span></div>
        <div class="field-row">
          <div class="field-group"><label>API Key</label>
            <input type="text" id="prov-${key}-apikey" value="${esc(prov.apiKey||'')}" placeholder="Your API key">
          </div>
          <div class="field-group"><label>Account Number</label>
            <input type="text" id="prov-${key}-account" value="${esc(prov.accountNumber||'')}" placeholder="Account / merchant ID">
          </div>
        </div>
        ${dhlExtra}${auspostExtra}
        <div class="btn-row" style="margin-top:.6rem;gap:.6rem;">
          <button class="save-btn" style="background:#374151;padding:7px 14px;font-size:.8rem;" onclick="testDeliveryProvider('${key}')">⚡ Test API Credentials</button>
        </div>
        <div class="connection-result" id="prov-${key}-test" style="display:none;margin-top:.5rem;"></div>
      </div>` : '';

    return `
    <div class="provider-edit-card${prov.enabled?' prov-enabled':''}" id="prov-card-${key}">
      <div class="provider-card-header">
        <span class="provider-icon">${meta.icon}</span>
        <div style="flex:1;">
          <strong>${esc(prov.label)}</strong>
          <span class="gw-badge" style="margin-left:.4rem;font-size:.68rem;">${meta.badge}</span>
          <span style="font-size:.78rem;color:var(--text-muted);margin-left:.6rem;">${esc(prov.info||'')}</span>
        </div>
        <div class="provider-header-right">
          <span class="prov-charge-display">${sym} ${(prov.charge||0).toLocaleString()}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="prov-${key}-on" ${prov.enabled?'checked':''} onchange="toggleProvider('${key}')">
            <span class="toggle-slider"></span>
          </label>
          ${!isBase?`<button class="del-btn" onclick="deleteProvider('${key}')">Delete</button>`:''}
        </div>
      </div>
      <div class="provider-card-body">
        <div class="field-row">
          <div class="field-group">
            <label>Provider Label</label>
            <input type="text" id="prov-${key}-label" value="${esc(prov.label)}" placeholder="e.g. Standard Delivery">
          </div>
          <div class="field-group">
            <label>Delivery Charge <span class="hint-inline">${sym} (${code})</span></label>
            <input type="number" id="prov-${key}-charge" value="${prov.charge||0}" min="0" step="1" placeholder="0">
          </div>
          <div class="field-group">
            <label>Info / Delivery Time</label>
            <input type="text" id="prov-${key}-info" value="${esc(prov.info||'')}" placeholder="e.g. 3–5 business days">
          </div>
        </div>
        ${apiSection}
        <div class="btn-row">
          <button class="save-btn" style="background:var(--accent);padding:8px 18px;" onclick="saveProvider('${key}')">💾 Save</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function saveProvider(key) {
  const providers = state.payment?.checkout?.delivery?.providers;
  if (!providers || !providers[key]) return;
  const prov = providers[key];
  const newLabel = val('prov-'+key+'-label').trim();
  prov.label  = newLabel  || prov.label;
  prov.charge = parseFloat(val('prov-'+key+'-charge')) || 0;
  prov.info   = val('prov-'+key+'-info').trim();
  // Integration fields (only if element exists)
  const apiKey = document.getElementById('prov-'+key+'-apikey');
  const acct   = document.getElementById('prov-'+key+'-account');
  if (apiKey) prov.apiKey        = apiKey.value.trim();
  if (acct)   prov.accountNumber = acct.value.trim();
  // Provider-specific
  if (key === 'dhl') {
    prov.serviceType    = val('prov-dhl-service');
    prov.shipperCountry = val('prov-dhl-country').trim() || 'NP';
  }
  if (key === 'auspost') {
    prov.serviceCode = val('prov-auspost-service');
  }
  renderAdminProviders();
  toast(`✅ "${prov.label}" saved!`);
}

function addCustomProvider() {
  const label = val('new-prov-label').trim();
  if (!label) { toast('Provider name is required.', true); return; }
  const charge = parseFloat(val('new-prov-charge')) || 0;
  const info   = val('new-prov-info').trim();
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  if (!state.payment.checkout)          state.payment.checkout          = {};
  if (!state.payment.checkout.delivery) state.payment.checkout.delivery = {};
  if (!state.payment.checkout.delivery.providers) state.payment.checkout.delivery.providers = {};
  const key = 'custom_' + Date.now();
  state.payment.checkout.delivery.providers[key] = { enabled:true, label, charge, info };
  setVal('new-prov-label',''); setVal('new-prov-charge',''); setVal('new-prov-info','');
  renderAdminProviders();
  toast(`✅ "${label}" added!`);
}

function toggleProvider(key) {
  const on = document.getElementById('prov-'+key+'-on')?.checked;
  if (state.payment?.checkout?.delivery?.providers?.[key]) {
    state.payment.checkout.delivery.providers[key].enabled = !!on;
    // Update visual enabled state on the card without full re-render
    const card = document.getElementById('prov-card-'+key);
    if (card) card.classList.toggle('prov-enabled', !!on);
  }
}

function deleteProvider(key) {
  if (!confirm('Delete this provider?')) return;
  if (state.payment?.checkout?.delivery?.providers) delete state.payment.checkout.delivery.providers[key];
  renderAdminProviders();
}

// ─── Customer Form Fields ───
function renderAdminCFFields() {
  const el = document.getElementById('admin-cf-fields-list'); if (!el) return;
  const fields = state.payment?.checkout?.customerForm?.fields || [];
  el.innerHTML = fields.map((f, idx) => `
    <div class="product-list-item">
      <div style="flex:1;"><strong>${esc(f.label)}</strong> <span style="font-size:.78rem;color:var(--text-muted);">(${f.type}${f.required?' · required':''})</span></div>
      <div style="display:flex;align-items:center;gap:.8rem;">
        <label class="toggle-switch"><input type="checkbox" ${f.enabled!==false?'checked':''} onchange="toggleCFField(${idx},this.checked)"><span class="toggle-slider"></span></label>
        ${idx>3?`<button class="del-btn" onclick="deleteCFField(${idx})">Delete</button>`:''}
      </div>
    </div>`).join('');
}

function toggleCFField(idx, on) {
  const fields = state.payment?.checkout?.customerForm?.fields;
  if (fields?.[idx]) fields[idx].enabled = on;
}

function deleteCFField(idx) {
  const fields = state.payment?.checkout?.customerForm?.fields;
  if (fields) { fields.splice(idx, 1); renderAdminCFFields(); }
}

function addCustomerFormField() {
  const label    = val('new-cf-label').trim();
  const type     = val('new-cf-type')  || 'text';
  const required = !!document.getElementById('new-cf-required')?.checked;
  if (!label) { toast('Field label is required.', true); return; }
  if (!state.payment?.checkout?.customerForm?.fields) return;
  const fields = state.payment.checkout.customerForm.fields;
  fields.push({ id: Date.now(), label, type, required, enabled: true });
  setVal('new-cf-label', '');
  setVal('new-cf-type', 'text');
  const reqEl = document.getElementById('new-cf-required');
  if (reqEl) reqEl.checked = false;
  renderAdminCFFields();
  toast(`✅ Field "${label}" added!`);
}

// ══════════ ORDERS ══════════
async function renderAdminOrders() {
  const el = document.getElementById('admin-orders-table'); if (!el) return;
  el.innerHTML = '<p style="color:var(--text-muted);font-size:.84rem;">Loading…</p>';
  try {
    const filterStatus = document.getElementById('order-filter-status')?.value || '';
    const orders = await DS.getOrders(filterStatus ? { status: filterStatus } : null);
    if (!orders.length) { el.innerHTML = '<p style="color:var(--text-muted);font-size:.84rem;">No orders found.</p>'; return; }
    el.innerHTML = `<div class="orders-table-wrap"><table class="orders-table">
      <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Gateway</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
      <tbody>${orders.map(o => {
        const si = DS.statusInfo(o.status);
        const custName = Object.values(o.customer||{})[0] || '—';
        const items = (o.items||[]).map(i=>`${i.name}×${i.qty}`).join(', ') || '—';
        const date = o.createdAt ? new Date(o.createdAt).toLocaleDateString() : '—';
        return `<tr>
          <td><code style="font-size:.75rem;">${esc(o.id)}</code></td>
          <td>${esc(custName)}</td>
          <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${esc(items)}">${esc(items)}</td>
          <td>${getDefaultCurrSym()} ${(o.total||0).toLocaleString()}</td>
          <td>${esc(o.gateway||'—')}</td>
          <td><span class="status-badge" style="background:${si.color}22;color:${si.color};border:1px solid ${si.color}44;">${si.icon} ${esc(si.label)}</span></td>
          <td>${date}</td>
          <td><button class="edit-btn" onclick="viewOrderDetail('${esc(o.id)}')">View</button></td>
        </tr>`;
      }).join('')}</tbody></table></div>`;
  } catch(e) { el.innerHTML = '<p style="color:#ef4444;">Error loading orders.</p>'; }
}

async function viewOrderDetail(orderId) {
  const panel = document.getElementById('order-detail-panel');
  const content = document.getElementById('order-detail-content');
  if (!panel || !content) return;
  const orders = await DS.getOrders();
  const o = orders.find(x => x.id === orderId);
  if (!o) return;
  const si = DS.statusInfo(o.status);
  const customer = Object.entries(o.customer||{}).map(([k,v])=>`<div class="co-sum-row"><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join('');
  const _sym = getDefaultCurrSym();
  const items = (o.items||[]).map(i=>`<div class="co-sum-row"><span>${esc(i.name)} × ${i.qty}</span><span>${_sym} ${(i.price*i.qty).toLocaleString()}</span></div>`).join('');
  const history = (o.statusHistory||[]).map(h=>`<div style="font-size:.8rem;padding:.4rem 0;border-bottom:1px solid var(--border);"><strong style="color:${DS.statusInfo(h.status).color};">${DS.statusInfo(h.status).label}</strong> — ${h.adminName||'Admin'}<br><span style="color:var(--text-muted);">${h.comment||''}</span><br><small style="color:var(--text-muted);">${new Date(h.timestamp).toLocaleString()}</small></div>`).join('');

  content.innerHTML = `
    <div class="field-row">
      <div style="flex:1;">
        <p><strong>Order ID:</strong> <code>${esc(o.id)}</code></p>
        <p><strong>Status:</strong> <span class="status-badge" style="background:${si.color}22;color:${si.color};border:1px solid ${si.color}44;">${si.icon} ${si.label}</span></p>
        <p><strong>Placed:</strong> ${o.createdAt?new Date(o.createdAt).toLocaleString():'—'}</p>
        <p><strong>Fulfillment:</strong> ${esc(o.fulfillment||'—')} ${o.provider?'· '+o.provider:''}</p>
        <p><strong>Payment:</strong> ${esc(o.gateway||'—')}</p>
      </div>
      <div style="flex:1;">
        <h4 style="margin-bottom:.4rem;">Customer</h4>
        ${customer}
      </div>
    </div>
    <h4 style="margin:.8rem 0 .4rem;">Items</h4>${items}
    <div class="co-sum-row co-sum-total" style="margin-top:.5rem;"><span>Total</span><span>${_sym} ${(o.total||0).toLocaleString()}</span></div>
    <h4 style="margin:1rem 0 .4rem;">Update Status</h4>
    <div class="field-row">
      <div class="field-group">
        <select id="od-new-status">
          ${Object.entries(DS.STATUS).map(([k,v])=>`<option value="${k}"${o.status===k?' selected':''}>${v.icon} ${v.label}</option>`).join('')}
        </select>
      </div>
      <div class="field-group"><input type="text" id="od-comment" placeholder="Comment (optional)"></div>
    </div>
    <button class="save-btn" onclick="updateAdminOrderStatus('${esc(o.id)}')">Update Status</button>
    ${history?`<h4 style="margin:1rem 0 .4rem;">Status History</h4>${history}`:''}`;
  panel.style.display = 'block';
  panel.scrollIntoView({ behavior:'smooth' });
}

async function updateAdminOrderStatus(orderId) {
  const status  = document.getElementById('od-new-status')?.value;
  const comment = document.getElementById('od-comment')?.value.trim() || '';
  const adminName = _adminSession?.name || 'Admin';
  if (!status) return;
  try {
    await DS.updateOrderStatus(orderId, status, comment, adminName);
    toast('Status updated!');
    renderAdminOrders();
    viewOrderDetail(orderId);
  } catch(e) { toast('Error updating status.', true); }
}

function exportOrdersExcel() {
  DS.getOrders().then(orders => {
    if (!orders.length) { toast('No orders to export.', true); return; }
    const rows = orders.map(o => ({
      'Order ID': o.id,
      'Date':     o.createdAt ? new Date(o.createdAt).toLocaleString() : '',
      'Customer': Object.values(o.customer||{})[0] || '',
      'Phone':    o.customer?.['Phone Number'] || '',
      'Email':    o.customer?.['Email Address'] || '',
      'Address':  o.customer?.['Address'] || '',
      'Items':    (o.items||[]).map(i=>`${i.name}×${i.qty}`).join(', '),
      'Total (NPR)': o.total || 0,
      'Gateway':  o.gateway || '',
      'Fulfillment': o.fulfillment || '',
      'Status':   DS.statusInfo(o.status).label
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Orders');
    XLSX.writeFile(wb, 'bista-orders.xlsx');
    toast('Orders exported!');
  });
}

// ══════════ ENQUIRIES ══════════
async function renderAdminEnquiries() {
  const el = document.getElementById('admin-enquiries-table'); if (!el) return;
  el.innerHTML = '<p style="color:var(--text-muted);font-size:.84rem;">Loading…</p>';
  try {
    const enqs = await DS.getEnquiries();
    if (!enqs.length) { el.innerHTML = '<p style="color:var(--text-muted);font-size:.84rem;">No enquiries yet.</p>'; return; }
    el.innerHTML = `<div class="orders-table-wrap"><table class="orders-table">
      <thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Subject</th><th>Message</th></tr></thead>
      <tbody>${enqs.map(e=>`<tr>
        <td style="white-space:nowrap;">${e.createdAt?new Date(e.createdAt).toLocaleDateString():'—'}</td>
        <td>${esc(e.name||'—')}</td>
        <td>${esc(e.email||'—')}</td>
        <td>${esc(e.subject||'—')}</td>
        <td style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${esc(e.message||'')}">${esc(e.message||'—')}</td>
      </tr>`).join('')}</tbody></table></div>`;
  } catch(e) { el.innerHTML = '<p style="color:#ef4444;">Error loading enquiries.</p>'; }
}

function exportEnquiriesExcel() {
  DS.getEnquiries().then(enqs => {
    if (!enqs.length) { toast('No enquiries to export.', true); return; }
    const rows = enqs.map(e => ({ 'Date':new Date(e.createdAt||Date.now()).toLocaleString(), 'Name':e.name||'', 'Email':e.email||'', 'Subject':e.subject||'', 'Message':e.message||'' }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
    XLSX.writeFile(wb, 'bista-enquiries.xlsx');
    toast('Enquiries exported!');
  });
}

// Save enquiry from contact form (called from script.js)
function saveContactEnquiry(name, email, subject, message) {
  const enq = { id:'ENQ-'+Date.now(), name, email, subject, message, createdAt:new Date().toISOString() };
  DS.saveEnquiry(enq).catch(()=>{});
}

// ══════════ ADMIN USERS ══════════
async function renderAdminUsers() {
  const el = document.getElementById('admin-users-list'); if (!el) return;
  try {
    const admins = await DS.getAdmins();
    const roleLabels = { master:'👑 Master', config:'⚙ Config', warehouse:'🏭 Warehouse', delivery:'🚚 Delivery', quality:'✅ Quality' };
    el.innerHTML = admins.map(a => `
      <div class="product-list-item">
        <div style="flex:1;">
          <strong>${esc(a.name)}</strong>
          <span style="font-size:.78rem;color:var(--text-muted);margin-left:.6rem;">${roleLabels[a.role]||a.role} · @${esc(a.username)}</span>
          ${a.enabled===false?'<span style="font-size:.75rem;color:#ef4444;margin-left:.5rem;">Disabled</span>':''}
        </div>
        <div class="pli-actions">
          ${a.id!=='master'?`<button class="edit-btn" onclick="editAdminUser('${esc(a.id)}')">Edit</button>
          <button class="del-btn" onclick="deleteAdminUser('${esc(a.id)}')">Delete</button>`:'<span style="font-size:.78rem;color:var(--text-muted);">Protected</span>'}
        </div>
      </div>`).join('') || '<p style="color:var(--text-muted);">No admins found.</p>';
  } catch(e) { }
}

async function saveAdminUser() {
  const id   = val('editing-admin-id') || null;
  const name = val('admin-name').trim();
  const user = val('admin-username').trim();
  const pass = val('admin-password').trim();
  const role = val('admin-role') || 'warehouse';
  const enabled = !!document.getElementById('admin-enabled')?.checked;
  if (!name || !user) { toast('Name and username required.', true); return; }
  const existing = id ? (await DS.getAdmins()).find(a=>a.id===id) : null;
  const admin = {
    id:       id || ('adm-'+Date.now()),
    name, username:user,
    password: pass || existing?.password || '',
    role, enabled,
    createdAt: existing?.createdAt || new Date().toISOString()
  };
  if (!admin.password) { toast('Password required for new admin.', true); return; }
  await DS.saveAdmin(admin);
  toast('Admin user saved!');
  clearAdminUserForm();
  renderAdminUsers();
}

async function editAdminUser(id) {
  const admins = await DS.getAdmins();
  const a = admins.find(x=>x.id===id); if(!a) return;
  setVal('editing-admin-id', a.id);
  setVal('admin-name',       a.name);
  setVal('admin-username',   a.username);
  setVal('admin-password',   '');
  setVal('admin-role',       a.role);
  const en = document.getElementById('admin-enabled');
  if (en) en.checked = a.enabled !== false;
  const ft = document.getElementById('admin-user-form-title');
  if (ft) ft.textContent = 'Edit Admin User';
  document.getElementById('tab-admins')?.scrollIntoView({ behavior:'smooth' });
}

async function deleteAdminUser(id) {
  if (!confirm('Delete this admin user?')) return;
  await DS.deleteAdmin(id);
  toast('Admin deleted.');
  renderAdminUsers();
}

function clearAdminUserForm() {
  ['editing-admin-id','admin-name','admin-username','admin-password'].forEach(id=>setVal(id,''));
  setVal('admin-role','warehouse');
  const en = document.getElementById('admin-enabled'); if(en) en.checked=true;
  const ft = document.getElementById('admin-user-form-title'); if(ft) ft.textContent='Add New Admin User';
}

// ══════════ CONFIGURATION ══════════
function populateConfiguration() {
  // Merge: state.dsConfig (from data.json) wins over localStorage so credentials persist
  const lsCfg    = DS.getConfig();
  const stateCfg = state.dsConfig || {};
  const cfg = { ...lsCfg, ...stateCfg,
    firebase: { ...(lsCfg.firebase || {}), ...(stateCfg.firebase || {}) },
    supabase: { ...(lsCfg.supabase || {}), ...(stateCfg.supabase || {}) },
    awsS3:    { ...(lsCfg.awsS3    || {}), ...(stateCfg.awsS3    || {}) }
  };
  const be = cfg.backend || 'local';

  // Toggle UI: show which backend is currently active
  const fbOn  = document.getElementById('be-firebase-on');
  const sbOn  = document.getElementById('be-supabase-on');
  if (fbOn)  fbOn.checked  = (be === 'firebase');
  if (sbOn)  sbOn.checked  = (be === 'supabase');
  _applyBackendToggleUI('firebase', be === 'firebase');
  _applyBackendToggleUI('supabase', be === 'supabase');

  // Firebase fields
  const fb = cfg.firebase || {};
  setVal('fb-apikey',       fb.apiKey        || '');
  setVal('fb-projectid',    fb.projectId     || '');
  setVal('fb-authdomain',   fb.authDomain    || '');
  setVal('fb-storagebucket',fb.storageBucket || '');
  setVal('fb-appid',        fb.appId         || '');

  // Supabase fields
  const sb = cfg.supabase || {};
  setVal('sb-url',     sb.url     || '');
  setVal('sb-anonkey', sb.anonKey || '');

  // Media
  const mediaBE = cfg.media || 'cloudinary';
  document.querySelectorAll('input[name="media-backend"]').forEach(r => { r.checked = r.value === mediaBE; });
  toggleMediaFields();

  // Exchange rates
  setVal('a-aud-rate', state.rates.aud);
  setVal('a-usd-rate', state.rates.usd);

  // EmailJS — shared account
  const ejs = state.emailjs || {};
  setVal('a-ejs-pk',  ejs.pk  || '');
  setVal('a-ejs-sid', ejs.sid || '');
  // Contact email template
  const contactTid  = ejs.tidContact || ejs.tid || '';
  const contactSubj = ejs.contactSubject || 'New Enquiry from {name}';
  setVal('a-ejs-tid-contact',   contactTid);
  setVal('a-ejs-tid-contact-2', contactTid);
  setVal('contact-email-subject',   contactSubj);
  setVal('contact-email-subject-2', contactSubj);
  ['contact-email-on', 'contact-email-on-2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = !!ejs.contactEnabled;
  });
  // Payment email template
  setVal('a-ejs-tid-payment', ejs.tidPayment || ejs.tid || '');

  // Media storage
  populateMediaConfig();

  // Show current backend status in banner
  refreshBackendStatus();
}

function _applyBackendToggleUI(backend, isOn) {
  const credsEl = document.getElementById(backend === 'firebase' ? 'firebase-fields' : 'supabase-fields');
  const badgeEl = document.getElementById('be-' + backend + '-badge');
  const cardEl  = document.getElementById('be-card-' + backend);
  if (credsEl) credsEl.style.display = isOn ? 'block' : 'none';
  if (badgeEl) {
    badgeEl.textContent = isOn ? 'Active' : 'Off';
    badgeEl.style.background = isOn ? 'rgba(34,197,94,.18)' : '';
    badgeEl.style.color       = isOn ? '#22c55e' : '';
    badgeEl.style.border      = isOn ? '1px solid rgba(34,197,94,.3)' : '';
  }
  if (cardEl) cardEl.style.border = isOn ? '1px solid rgba(34,197,94,.35)' : '';
}

function toggleDataBackend(backend) {
  const isOn = document.getElementById('be-' + backend + '-on')?.checked;
  // Uncheck the other backend toggle
  if (backend === 'firebase' && isOn) {
    const sbEl = document.getElementById('be-supabase-on');
    if (sbEl) { sbEl.checked = false; _applyBackendToggleUI('supabase', false); }
  }
  if (backend === 'supabase' && isOn) {
    const fbEl = document.getElementById('be-firebase-on');
    if (fbEl) { fbEl.checked = false; _applyBackendToggleUI('firebase', false); }
  }
  _applyBackendToggleUI(backend, isOn);
  // If turning off, revert to local
  if (!isOn) {
    const cfg = DS.getConfig();
    cfg.backend = 'local';
    state.dsConfig = { ...state.dsConfig, backend:'local' };
    DS.setConfig(cfg);
    refreshBackendStatus();
    toast('Reverted to Local Storage.');
  }
}

function toggleBackendFields() { /* legacy — no-op now */ }

function toggleMediaFields() {
  const me  = document.querySelector('input[name="media-backend"]:checked')?.value || 'cloudinary';
  const cfEl = document.getElementById('cloudinary-fields');
  const s3El = document.getElementById('s3-fields');
  if (cfEl) cfEl.style.display = me === 'cloudinary' ? 'block' : 'none';
  if (s3El) s3El.style.display = me === 's3'         ? 'block' : 'none';
}

async function testDataConnection(backend) {
  const resultEl = document.getElementById(backend + '-test-result');
  if (!resultEl) return;
  resultEl.style.display = 'block';
  resultEl.className = 'connection-result testing';
  resultEl.textContent = '⏳ Testing connection…';

  // Pull credentials from form fields first
  if (backend === 'firebase') {
    const cfg = DS.getConfig();
    cfg.firebase = {
      apiKey:        val('fb-apikey').trim(),
      projectId:     val('fb-projectid').trim(),
      authDomain:    val('fb-authdomain').trim(),
      storageBucket: val('fb-storagebucket').trim(),
      appId:         val('fb-appid').trim()
    };
    DS.setConfig(cfg);
  }
  if (backend === 'supabase') {
    const cfg = DS.getConfig();
    cfg.supabase = { url: val('sb-url').trim(), anonKey: val('sb-anonkey').trim() };
    DS.setConfig(cfg);
  }

  // Small delay to allow async init to settle
  await new Promise(r => setTimeout(r, 800));

  try {
    const result = await DS.testConnection(backend);
    if (result.ok) {
      resultEl.className = 'connection-result success';
      resultEl.innerHTML = `✅ <strong>Connected!</strong> ${result.message}`;
      toast('Connection successful!');
    } else {
      resultEl.className = 'connection-result error';
      resultEl.innerHTML = `❌ <strong>Failed:</strong> ${result.message}`;
      toast('Connection failed — see details below.', true);
    }
  } catch(e) {
    resultEl.className = 'connection-result error';
    resultEl.textContent = '❌ ' + (e.message || String(e));
    toast('Test error: ' + (e.message || e), true);
  }
}

function saveBackendConfig(backend) {
  backend = backend || document.querySelector('input[name="ds-backend"]:checked')?.value || 'local';
  const cfg = DS.getConfig();
  cfg.backend = backend;

  if (backend === 'firebase') {
    cfg.firebase = {
      apiKey:        val('fb-apikey').trim(),
      projectId:     val('fb-projectid').trim(),
      authDomain:    val('fb-authdomain').trim(),
      storageBucket: val('fb-storagebucket').trim(),
      appId:         val('fb-appid').trim()
    };
    if (!cfg.firebase.apiKey || !cfg.firebase.projectId) {
      toast('API Key and Project ID are required.', true); return;
    }
  }
  if (backend === 'supabase') {
    cfg.supabase = { url: val('sb-url').trim(), anonKey: val('sb-anonkey').trim() };
    if (!cfg.supabase.url || !cfg.supabase.anonKey) {
      toast('Project URL and Anon Key are required.', true); return;
    }
  }

  // Persist into state so it exports in data.json — credentials persist across devices
  state.dsConfig = JSON.parse(JSON.stringify(cfg));
  DS.setConfig(cfg);
  _applyBackendToggleUI(backend, true);
  refreshBackendStatus();
  toast(`✅ ${backend === 'firebase' ? 'Firebase' : backend === 'supabase' ? 'Supabase' : 'Local Storage'} saved! Download data.json so all devices use these settings.`);
}

function refreshBackendStatus() {
  const label   = DS.getBackendLabel();
  const iconEl  = document.getElementById('be-status-icon');
  const textEl  = document.getElementById('be-status-text');
  const bannerEl= document.getElementById('be-status-banner');
  if (!textEl) return;

  const icons = { Firebase:'🔥', Supabase:'⚡', 'Local Storage':'💾' };
  const isCloud = label.startsWith('Firebase') || label.startsWith('Supabase');
  const isError = label.includes('not connected');

  if (iconEl) iconEl.textContent = Object.entries(icons).find(([k]) => label.startsWith(k))?.[1] || '💾';
  if (isError) {
    textEl.innerHTML = `<strong style="color:#ef4444;">${label}</strong> — check credentials and click ⚡ Test Connection.`;
    if (bannerEl) bannerEl.className = 'be-status-banner be-error';
  } else if (isCloud) {
    textEl.innerHTML = `Connected to <strong style="color:#22c55e;">${label}</strong> — orders sync across all devices. ✅`;
    if (bannerEl) bannerEl.className = 'be-status-banner be-connected';
  } else {
    textEl.innerHTML = `Using <strong>Local Storage</strong> — data is stored in this browser only. Enable Firebase or Supabase above to sync across devices.`;
    if (bannerEl) bannerEl.className = 'be-status-banner';
  }
}

function saveS3Config() { saveMediaConfig('s3'); } // legacy alias

// ══════════ MEDIA STORAGE ══════════
function _applyMediaToggleUI(backend, isOn) {
  const credsId  = backend === 'cloudinary' ? 'cloudinary-fields' : 's3-fields';
  const credsEl  = document.getElementById(credsId);
  const badgeEl  = document.getElementById('media-' + backend + '-badge');
  const cardEl   = document.getElementById('media-card-' + backend);
  if (credsEl) credsEl.style.display = isOn ? 'block' : 'none';
  if (badgeEl) {
    badgeEl.textContent = isOn ? 'Active' : 'Off';
    badgeEl.style.cssText = isOn ? 'background:rgba(34,197,94,.18);color:#22c55e;border:1px solid rgba(34,197,94,.3);' : '';
  }
  if (cardEl) cardEl.style.border = isOn ? '1px solid rgba(34,197,94,.35)' : '';
}

function toggleMediaBackend(backend) {
  const isOn = document.getElementById('media-' + backend + '-on')?.checked;
  const other = backend === 'cloudinary' ? 's3' : 'cloudinary';
  if (isOn) { // turn the other off
    const otherEl = document.getElementById('media-' + other + '-on');
    if (otherEl) { otherEl.checked = false; _applyMediaToggleUI(other, false); }
  }
  _applyMediaToggleUI(backend, isOn);
  if (!isOn) {
    const cfg = DS.getConfig(); cfg.media = 'cloudinary'; DS.setConfig(cfg);
    toast('Reverted media storage to Cloudinary (default).');
  }
}

async function testMediaConnection(backend) {
  const resultEl = document.getElementById(backend + '-test-result');
  if (!resultEl) return;
  resultEl.style.display = 'block';
  resultEl.className = 'connection-result testing';
  resultEl.textContent = '⏳ Testing…';

  if (backend === 'cloudinary') {
    const cloud  = val('a-cloud-name').trim();
    const preset = val('a-cloud-preset').trim();
    if (!cloud)  { resultEl.className='connection-result error'; resultEl.textContent='❌ Cloud Name is required.'; return; }
    if (!preset) { resultEl.className='connection-result error'; resultEl.textContent='❌ Upload Preset is required.'; return; }
    // Ping Cloudinary's API to check if the cloud name is valid
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/list`, { method:'GET' });
      // A 401 (auth required) still confirms the cloud name exists; 404 means invalid
      if (res.status === 404) {
        resultEl.className='connection-result error';
        resultEl.textContent='❌ Cloud name "'+cloud+'" not found. Check your Cloudinary dashboard.';
      } else {
        resultEl.className='connection-result success';
        resultEl.innerHTML='✅ <strong>Cloudinary cloud "'+cloud+'" found!</strong> Make sure upload preset "'+preset+'" is set to <strong>Unsigned</strong> in Cloudinary → Settings → Upload.';
      }
    } catch(e) {
      resultEl.className='connection-result success';
      resultEl.innerHTML='✅ <strong>Credentials look valid.</strong> Could not reach Cloudinary API directly (CORS), but your cloud name and preset will work for uploads.';
    }
    return;
  }

  if (backend === 's3') {
    const bucket = val('s3-bucket').trim();
    const region = val('s3-region').trim();
    const key    = val('s3-key').trim();
    if (!bucket || !region || !key) {
      resultEl.className='connection-result error';
      resultEl.textContent='❌ Bucket Name, Region and Access Key ID are all required.';
      return;
    }
    // S3 cannot be tested directly from browser without pre-signed URLs — validate format
    const regionOk = /^[a-z]{2}-[a-z]+-\d$/.test(region);
    const keyOk    = key.startsWith('AKIA') || key.startsWith('ASIA');
    if (!regionOk) { resultEl.className='connection-result error'; resultEl.textContent='❌ Region format invalid — expected e.g. ap-southeast-2'; return; }
    if (!keyOk)    { resultEl.className='connection-result error'; resultEl.textContent='❌ Access Key ID should start with AKIA… or ASIA…'; return; }
    resultEl.className='connection-result success';
    resultEl.innerHTML='✅ <strong>Credentials format looks valid.</strong> S3 cannot be fully verified from the browser — make sure your bucket CORS policy allows PUT from your domain, and the IAM user has S3 write permissions.';
  }
}

function saveMediaConfig(backend) {
  const cfg = DS.getConfig();
  if (backend === 'cloudinary') {
    const cloud  = val('a-cloud-name').trim();
    const preset = val('a-cloud-preset').trim();
    if (!cloud || !preset) { toast('Cloud Name and Upload Preset are required.', true); return; }
    state.cloudinary = { cloud, preset };
    cfg.media = 'cloudinary';
  }
  if (backend === 's3') {
    const bucket = val('s3-bucket').trim();
    const region = val('s3-region').trim();
    if (!bucket || !region) { toast('Bucket Name and Region are required.', true); return; }
    cfg.awsS3 = { bucket, region, accessKey: val('s3-key').trim(), secretKey: val('s3-secret').trim() };
    cfg.media = 's3';
  }
  state.dsConfig = { ...(state.dsConfig || {}), media: cfg.media };
  DS.setConfig(cfg);
  _applyMediaToggleUI(backend, true);
  toast(`✅ ${backend === 'cloudinary' ? 'Cloudinary' : 'AWS S3'} saved! Download data.json to publish.`);
}

function populateMediaConfig() {
  const cfg  = DS.getConfig();
  const be   = cfg.media || 'cloudinary';
  const fbOn = document.getElementById('media-cloudinary-on');
  const sbOn = document.getElementById('media-s3-on');
  if (fbOn) fbOn.checked = (be === 'cloudinary');
  if (sbOn) sbOn.checked = (be === 's3');
  _applyMediaToggleUI('cloudinary', be === 'cloudinary');
  _applyMediaToggleUI('s3', be === 's3');
  setVal('a-cloud-name',   (state.cloudinary||{}).cloud  || '');
  setVal('a-cloud-preset', (state.cloudinary||{}).preset || '');
  setVal('s3-bucket', (cfg.awsS3||{}).bucket    || '');
  setVal('s3-region', (cfg.awsS3||{}).region    || '');
  setVal('s3-key',    (cfg.awsS3||{}).accessKey || '');
}

// ══════════ PAYMENT GATEWAY SAVE / TEST ══════════
function savePaymentGateway(key) {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  const gws = state.payment.gateways || {};
  const map = {
    stripe:  () => ({ enabled:!!document.getElementById('gw-stripe-on')?.checked,  payLink:val('gw-stripe-paylink').trim(), pk:val('gw-stripe-pk').trim() }),
    eway:    () => ({ enabled:!!document.getElementById('gw-eway-on')?.checked,     apiKey:val('gw-eway-apikey').trim(),    payUrl:val('gw-eway-payurl').trim() }),
    fonepay: () => ({ enabled:!!document.getElementById('gw-fonepay-on')?.checked,  merchantCode:val('gw-fonepay-code').trim(), qrImg:val('gw-fonepay-qr').trim() }),
    esewa:   () => ({ enabled:!!document.getElementById('gw-esewa-on')?.checked,    merchantId:val('gw-esewa-mid').trim(), successUrl:val('gw-esewa-su').trim(), failureUrl:val('gw-esewa-fu').trim() }),
    khalti:  () => ({ enabled:!!document.getElementById('gw-khalti-on')?.checked,   pk:val('gw-khalti-pk').trim() }),
  };
  if (map[key]) { gws[key] = map[key](); state.payment.gateways = gws; toast(`✅ ${key} saved!`); }
}

function testPaymentGateway(key) {
  const resultEl = document.getElementById('gw-' + key + '-test');
  if (!resultEl) return;
  resultEl.style.display = 'block';
  resultEl.className = 'connection-result testing';
  resultEl.textContent = '⏳ Validating…';

  const _ok  = (msg) => { resultEl.className='connection-result success'; resultEl.innerHTML='✅ '+msg; };
  const _err = (msg) => { resultEl.className='connection-result error';   resultEl.innerHTML='❌ '+msg; };

  if (key === 'stripe') {
    const link = val('gw-stripe-paylink').trim();
    const pk   = val('gw-stripe-pk').trim();
    if (!link) { _err('Payment Link URL is required.'); return; }
    if (!link.startsWith('https://buy.stripe.com/') && !link.startsWith('https://checkout.stripe.com/'))
      { _err('URL should start with <code>https://buy.stripe.com/</code>'); return; }
    if (pk && !pk.startsWith('pk_')) { _err('Publishable Key should start with <code>pk_live_</code> or <code>pk_test_</code>'); return; }
    _ok('<strong>Stripe config looks valid.</strong> Payment Link URL and key format are correct.');
  }
  else if (key === 'eway') {
    const apiKey = val('gw-eway-apikey').trim();
    const url    = val('gw-eway-payurl').trim();
    if (!apiKey) { _err('API Key is required.'); return; }
    if (!url || !url.startsWith('https://')) { _err('Hosted Payment URL must be a valid HTTPS URL.'); return; }
    _ok('<strong>eWAY config looks valid.</strong> Credentials saved — test a live payment in sandbox mode to confirm.');
  }
  else if (key === 'fonepay') {
    const code = val('gw-fonepay-code').trim();
    const qr   = val('gw-fonepay-qr').trim();
    if (!code) { _err('Merchant Code is required.'); return; }
    if (!qr || !qr.startsWith('http')) { _err('QR Image URL must be a valid URL (upload to Cloudinary first).'); return; }
    _ok('<strong>Fonepay config looks valid.</strong> Merchant Code and QR URL are set.');
  }
  else if (key === 'esewa') {
    const mid = val('gw-esewa-mid').trim();
    const su  = val('gw-esewa-su').trim();
    const fu  = val('gw-esewa-fu').trim();
    if (!mid) { _err('Merchant Code (scd) is required. Use <code>EPAYTEST</code> for sandbox.'); return; }
    if (!su || !fu) { _err('Both Success and Failure redirect URLs are required.'); return; }
    _ok(`<strong>eSewa config valid.</strong> Using merchant code "<code>${mid}</code>" — ${mid==='EPAYTEST'?'sandbox mode':'live mode'}.`);
  }
  else if (key === 'khalti') {
    const pk = val('gw-khalti-pk').trim();
    if (!pk) { _err('Public Key is required.'); return; }
    if (!pk.startsWith('live_public_key_') && !pk.startsWith('test_public_key_'))
      { _err('Key should start with <code>live_public_key_</code> or <code>test_public_key_</code>'); return; }
    _ok(`<strong>Khalti config valid.</strong> Using ${pk.startsWith('live_') ? '🟢 live' : '🧪 test'} key.`);
  }
}

// ══════════ DELIVERY PROVIDER TEST ══════════
function testDeliveryProvider(key) {
  const resultEl = document.getElementById('prov-' + key + '-test');
  if (!resultEl) return;
  resultEl.style.display = 'block';
  resultEl.className = 'connection-result testing';
  resultEl.textContent = '⏳ Validating…';
  const apiKey = document.getElementById('prov-' + key + '-apikey')?.value.trim();
  const acct   = document.getElementById('prov-' + key + '-account')?.value.trim();
  const _ok  = (msg) => { resultEl.className='connection-result success'; resultEl.innerHTML='✅ '+msg; };
  const _err = (msg) => { resultEl.className='connection-result error';   resultEl.innerHTML='❌ '+msg; };

  if (!apiKey && !acct) {
    _err('Enter an API Key and/or Account Number to test. Leave blank to use flat charge only.');
    return;
  }
  const labels = { dhl:'DHL Express API', auspost:'Australia Post API', tnt:'TNT / FedEx API' };
  const label  = labels[key] || key;
  // Real API calls require server-side proxy (CORS) — we validate format and confirm fields are set
  if (key === 'dhl') {
    if (!apiKey) { _err('DHL API Key is required for API integration.'); return; }
    _ok(`<strong>${label} credentials saved.</strong> DHL's API requires server-side requests (CORS restricted). Your credentials will be used for live rate calculation once a backend proxy is configured. Flat charge will be used in the meantime.`);
  } else if (key === 'auspost') {
    if (!apiKey) { _err('Australia Post API Key is required.'); return; }
    if (apiKey.length < 8) { _err('API Key appears too short — check your AusPost developer portal.'); return; }
    _ok(`<strong>${label} credentials saved.</strong> AusPost Shipping API requires a server-side call. Flat charge applies until a proxy endpoint is set up.`);
  } else if (key === 'tnt') {
    if (!acct) { _err('TNT Account Number is required.'); return; }
    _ok(`<strong>${label} credentials saved.</strong> TNT/FedEx APIs are server-side only. Flat charge applies until a backend integration is configured.`);
  } else {
    if (!apiKey) { _err('API Key is required.'); return; }
    _ok(`<strong>Credentials saved.</strong> Enter API Key and Account Number — flat charge will be used until a server-side integration is set up.`);
  }
}

// ══════════ EMAILJS SPLIT ══════════
function saveEmailJS() {
  if (!state.emailjs) state.emailjs = JSON.parse(JSON.stringify(DEFAULTS.emailjs));
  state.emailjs.pk  = val('a-ejs-pk').trim();
  state.emailjs.sid = val('a-ejs-sid').trim();
  if (!state.emailjs.pk || !state.emailjs.sid) { toast('Public Key and Service ID are required.', true); return; }
  toast('✅ EmailJS account credentials saved!');
}

function saveContactEmailConfig() {
  if (!state.emailjs) state.emailjs = JSON.parse(JSON.stringify(DEFAULTS.emailjs));
  // Support both config tab (#contact-email-on) and contact tab (#contact-email-on-2) — use whichever is present
  const onEl1 = document.getElementById('contact-email-on');
  const onEl2 = document.getElementById('contact-email-on-2');
  const tid1  = val('a-ejs-tid-contact').trim()   || val('a-ejs-tid-contact-2').trim();
  const subj1 = val('contact-email-subject').trim() || val('contact-email-subject-2').trim();
  const enabled = onEl1?.checked || onEl2?.checked || false;
  state.emailjs.tidContact      = tid1;
  state.emailjs.contactSubject  = subj1 || 'New Enquiry from {name}';
  state.emailjs.contactEnabled  = enabled;
  // Sync both UI copies
  if (onEl1) onEl1.checked = enabled;
  if (onEl2) onEl2.checked = enabled;
  setVal('a-ejs-tid-contact',   tid1);
  setVal('a-ejs-tid-contact-2', tid1);
  setVal('contact-email-subject',   subj1);
  setVal('contact-email-subject-2', subj1);
  toast('✅ Contact email config saved!');
}

function savePaymentEmail() {
  if (!state.payment) state.payment = JSON.parse(JSON.stringify(DEFAULTS.payment));
  if (!state.emailjs) state.emailjs = JSON.parse(JSON.stringify(DEFAULTS.emailjs));
  state.emailjs.tidPayment = val('a-ejs-tid-payment').trim() || state.emailjs.tid || '';
  state.emailjs.tid        = state.emailjs.tidPayment; // keep legacy alias in sync
  state.payment.email = {
    enabled: !!document.getElementById('pay-email-on')?.checked,
    subject: val('pay-email-subject').trim() || DEFAULTS.payment.email.subject,
    body:    val('pay-email-body').trim()    || DEFAULTS.payment.email.body
  };
  toast('✅ Payment email config saved!');
}

async function testEmailConfig(type) {
  const resultId = type === 'contact' ? 'contact-email-test-result' : 'payment-email-test-result';
  const resultEl = document.getElementById(resultId) || document.getElementById(resultId + '-2');
  if (!resultEl) return;
  resultEl.style.display = 'block';
  resultEl.className = 'connection-result testing';
  resultEl.textContent = '⏳ Testing EmailJS…';

  const pk  = val('a-ejs-pk').trim()  || state.emailjs?.pk  || '';
  const sid = val('a-ejs-sid').trim() || state.emailjs?.sid || '';
  const tid = type === 'contact'
    ? (val('a-ejs-tid-contact').trim() || val('a-ejs-tid-contact-2').trim() || state.emailjs?.tidContact || '')
    : (val('a-ejs-tid-payment').trim() || state.emailjs?.tidPayment || state.emailjs?.tid || '');

  const _ok  = (msg) => { resultEl.className='connection-result success'; resultEl.innerHTML='✅ '+msg; };
  const _err = (msg) => { resultEl.className='connection-result error';   resultEl.innerHTML='❌ '+msg; };

  if (!pk)  { _err('Public Key is missing — save it in EmailJS Account Credentials above.'); return; }
  if (!sid) { _err('Service ID is missing — save it in EmailJS Account Credentials above.'); return; }
  if (!tid) { _err(`Template ID for ${type === 'contact' ? 'Contact' : 'Payment'} is missing.`); return; }

  try {
    if (typeof emailjs === 'undefined') {
      _err('EmailJS library not loaded. Check your internet connection.');
      return;
    }
    emailjs.init(pk);
    await emailjs.send(sid, tid, {
      from_name: 'Bista Group Admin Test',
      reply_to:  state.contact?.email || 'test@bistagroup.com',
      subject:   `[${type === 'contact' ? 'Contact' : 'Payment'}] Test email from admin panel`,
      message:   `This is a test email sent from the Bista Group admin panel at ${new Date().toLocaleString()}. If you received this, EmailJS is configured correctly.`,
      to_email:  state.contact?.email || '',
      product:   'Test Product', customer: 'Test Customer', amount: '0', gateway: 'Test'
    });
    _ok(`<strong>Test email sent!</strong> Check your inbox at <strong>${state.contact?.email||'(no email set)'}</strong>. If not received, check your EmailJS template uses variables: <code>from_name, reply_to, subject, message, to_email</code>.`);
  } catch(e) {
    const msg = e?.text || e?.message || String(e);
    if (msg.includes('Public Key')) _err('Invalid Public Key — copy it from EmailJS Dashboard → Account.');
    else if (msg.includes('service')) _err('Service ID not found — check EmailJS → Email Services.');
    else if (msg.includes('template')) _err('Template ID not found — check EmailJS → Email Templates.');
    else _err(msg);
  }
}

// ══════════ EXPORT data.json ══════════
async function exportDataJson() {
  let exportData = { ...state };
  try {
    // Include live orders + enquiries (from Firebase or local) as a full backup
    const [orders, enquiries] = await Promise.all([DS.getOrders(), DS.getEnquiries()]);
    if (orders    && orders.length)    exportData._orders    = orders;
    if (enquiries && enquiries.length) exportData._enquiries = enquiries;
  } catch(e) { /* non-critical — export continues without them */ }
  exportData._exportedAt = new Date().toISOString();

  const json = JSON.stringify(exportData, null, 2);
  const blob = new Blob([json], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(a.href);

  const recCount = (exportData._orders?.length || 0) + (exportData._enquiries?.length || 0);
  toast(`✅ data.json downloaded${recCount ? ` — includes ${recCount} order/enquiry record(s) as backup` : ''} — upload to publish.`);
}

// ══════════ RESET ALL ══════════
function resetAll() {
  if (!confirm('⚠ Reset ALL content to defaults? This cannot be undone.')) return;
  const entered = prompt('Enter admin password to confirm:');
  if (entered === null) return;
  if (entered !== ADMIN_PASS) { toast('❌ Wrong password. Reset cancelled.', true); return; }
  Object.keys(DEFAULTS).forEach(k => { state[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });
  populateForms();
  toast('✅ Reset to defaults. Download data.json to publish.');
}

// ══════════ TOAST ══════════
function toast(msg, isError = false) {
  let t = document.getElementById('admin-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'admin-toast';
    t.style.cssText = 'position:fixed;bottom:2rem;right:2rem;z-index:9999;padding:12px 20px;border-radius:12px;font-size:.875rem;font-weight:600;max-width:340px;transition:opacity .3s;pointer-events:none;font-family:\'Segoe UI\',system-ui,sans-serif;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = isError ? 'rgba(239,68,68,.9)' : 'rgba(16,185,129,.9)';
  t.style.color = '#fff';
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 3500);
}

// ══════════ HELPERS ══════════
function val(id)       { return document.getElementById(id)?.value || ''; }
function setVal(id, v) { const el = document.getElementById(id); if (el) el.value = v ?? ''; }
function esc(str)      { return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// ══════════ USERS TAB ══════════
function switchUsersSubtab(tab) {
  document.querySelectorAll('.users-subtab').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ustab-' + tab);
  if (btn) btn.classList.add('active');
  document.getElementById('users-panel-customers').style.display = tab === 'customers' ? '' : 'none';
  document.getElementById('users-panel-admins').style.display    = tab === 'admins'    ? '' : 'none';
  if (tab === 'admins') renderAdminUsers();
  if (tab === 'customers') renderCustomerUsers();
}

let _allCustomers = [];

async function renderCustomerUsers() {
  const el = document.getElementById('customer-users-list');
  if (!el) return;
  el.innerHTML = '<p style="color:var(--text-muted);">Loading…</p>';
  try {
    _allCustomers = await DS.getCustomerUsers();
    _displayCustomers(_allCustomers);
  } catch(e) {
    el.innerHTML = `<p style="color:#f87171;">Failed to load: ${esc(e.message)}</p>`;
  }
}

function _displayCustomers(list) {
  const el = document.getElementById('customer-users-list');
  if (!el) return;
  if (!list.length) {
    el.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
      <div style="font-size:2.5rem;margin-bottom:.5rem;">👥</div>
      <p>No customer accounts yet.</p>
      <p style="font-size:.82rem;margin-top:.4rem;">Enable User Accounts in <strong>⚙ Configuration → User Authentication</strong> so customers can register.</p>
    </div>`;
    return;
  }
  el.innerHTML = `
    <div style="color:var(--text-muted);font-size:.78rem;margin-bottom:.8rem;">${list.length} account${list.length!==1?'s':''}</div>
    <div class="customer-users-grid">
      ${list.map(u => {
        const name    = u.name || u.displayName || 'Unknown';
        const initials= name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
        const prov    = u.authProvider === 'google.com' ? '🟢 Google' : '📧 Email';
        const joined  = u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'Unknown';
        return `<div class="customer-user-card">
          <div class="cuc-avatar">${u.avatar?`<img src="${esc(u.avatar)}" alt="">`:initials}</div>
          <div class="cuc-info">
            <strong>${esc(name)}</strong>
            <span>${esc(u.email||'')}</span>
            <div class="cuc-meta">${prov} &nbsp;·&nbsp; Joined ${joined} ${u.emailVerified===false?'&nbsp;·&nbsp;<span style="color:#f59e0b;">⚠ Unverified</span>':''}</div>
          </div>
          <div class="cuc-actions">
            <button class="save-btn" style="background:#dc2626;padding:.3rem .7rem;font-size:.75rem;" onclick="deleteCustomerUser('${esc(u.uid)}','${esc(name)}')">Delete</button>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

function filterCustomerUsers() {
  const q = (document.getElementById('customer-search')?.value||'').toLowerCase();
  if (!q) { _displayCustomers(_allCustomers); return; }
  _displayCustomers(_allCustomers.filter(u =>
    (u.name||'').toLowerCase().includes(q) ||
    (u.email||'').toLowerCase().includes(q)
  ));
}

async function deleteCustomerUser(uid, name) {
  if (!confirm(`Delete account for "${name}"? This cannot be undone.`)) return;
  await DS.deleteCustomerUser(uid);
  toast('Customer account deleted.');
  renderCustomerUsers();
}

// ══════════ CONTACT FORM FIELDS ══════════
function renderContactFormFieldsAdmin() {
  const el = document.getElementById('contact-form-fields-admin');
  if (!el) return;
  const fields = (state.contactForm?.fields || []);
  if (!fields.length) { el.innerHTML = '<p style="color:var(--text-muted);">No fields configured.</p>'; return; }
  el.innerHTML = fields.map((f, i) => `
    <div class="provider-edit-card" id="cf-field-${f.id}">
      <div class="provider-card-header">
        <div>
          <strong>${esc(f.label)}</strong>
          <span style="color:var(--text-muted);font-size:.78rem;margin-left:.5rem;">[${esc(f.key)}] · ${esc(f.type)}</span>
        </div>
        <div style="display:flex;align-items:center;gap:.6rem;">
          ${i > 0 ? `<button onclick="moveCfField(${f.id},-1)" title="Move up" style="background:none;border:1px solid var(--border);color:var(--text-muted);border-radius:6px;padding:3px 8px;cursor:pointer;font-size:.8rem;">↑</button>` : ''}
          ${i < fields.length-1 ? `<button onclick="moveCfField(${f.id},1)" title="Move down" style="background:none;border:1px solid var(--border);color:var(--text-muted);border-radius:6px;padding:3px 8px;cursor:pointer;font-size:.8rem;">↓</button>` : ''}
          <label class="toggle-switch" style="flex-shrink:0;">
            <input type="checkbox" id="cf-en-${f.id}" ${f.enabled!==false?'checked':''} onchange="toggleCfField(${f.id})">
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <div class="provider-card-body" style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-top:.6rem;">
        <div class="field-group"><label>Label</label><input type="text" id="cf-lbl-${f.id}" value="${esc(f.label)}"></div>
        <div class="field-group"><label>Placeholder</label><input type="text" id="cf-ph-${f.id}" value="${esc(f.placeholder||'')}"></div>
      </div>
      <div style="display:flex;align-items:center;gap:1.2rem;margin-top:.6rem;flex-wrap:wrap;">
        <label style="display:flex;align-items:center;gap:.5rem;font-size:.82rem;cursor:pointer;">
          <input type="checkbox" id="cf-req-${f.id}" ${f.required?'checked':''}>
          Required / Mandatory
        </label>
        <div style="margin-left:auto;display:flex;gap:.5rem;">
          <button class="save-btn" style="padding:.35rem .9rem;font-size:.78rem;background:var(--accent);" onclick="saveCfField(${f.id})">Save</button>
          ${f.id > 5 ? `<button class="save-btn" style="padding:.35rem .9rem;font-size:.78rem;background:#dc2626;" onclick="deleteCfField(${f.id})">Delete</button>` : ''}
        </div>
      </div>
    </div>`).join('');
}

function saveCfField(id) {
  const fields = state.contactForm?.fields || [];
  const f = fields.find(x=>x.id===id);
  if (!f) return;
  f.label       = val('cf-lbl-'+id) || f.label;
  f.placeholder = val('cf-ph-'+id);
  f.required    = document.getElementById('cf-req-'+id)?.checked ?? f.required;
  f.enabled     = document.getElementById('cf-en-'+id)?.checked ?? f.enabled;
  toast(`Field "${f.label}" saved.`);
}

function toggleCfField(id) {
  const fields = state.contactForm?.fields || [];
  const f = fields.find(x=>x.id===id);
  if (!f) return;
  f.enabled = document.getElementById('cf-en-'+id)?.checked ?? !f.enabled;
}

function moveCfField(id, dir) {
  const fields = state.contactForm?.fields || [];
  const idx = fields.findIndex(x=>x.id===id);
  if (idx < 0) return;
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= fields.length) return;
  [fields[idx], fields[newIdx]] = [fields[newIdx], fields[idx]];
  renderContactFormFieldsAdmin();
}

function deleteCfField(id) {
  if (!confirm('Delete this field?')) return;
  state.contactForm.fields = (state.contactForm?.fields||[]).filter(x=>x.id!==id);
  renderContactFormFieldsAdmin();
}

function addContactFormField() {
  const label = val('new-cf-label').trim();
  const key   = val('new-cf-key').trim().replace(/\s+/g,'').toLowerCase();
  const type  = val('new-cf-type') || 'text';
  if (!label || !key) { toast('Label and key are required.', true); return; }
  const fields = state.contactForm?.fields || [];
  if (fields.find(f=>f.key===key)) { toast('A field with this key already exists.', true); return; }
  const newField = { id: Date.now(), key, label, type, required:false, enabled:true, placeholder:label };
  if (!state.contactForm) state.contactForm = { fields:[] };
  state.contactForm.fields.push(newField);
  setVal('new-cf-label',''); setVal('new-cf-key','');
  renderContactFormFieldsAdmin();
  toast(`Field "${label}" added.`);
}

// ══════════ AUTH CONFIG ══════════
function renderAuthConfigAdmin() {
  const auth = state.auth || {};
  const onEl  = document.getElementById('auth-enabled-on');
  const gogEl = document.getElementById('auth-google-on');
  const verEl = document.getElementById('auth-verify-on');
  const gstEl = document.getElementById('auth-guest-on');
  if (onEl)  onEl.checked  = auth.enabled !== false; // default true
  if (gogEl) gogEl.checked = auth.googleEnabled !== false; // default true
  if (verEl) verEl.checked = !!auth.emailVerification;
  if (gstEl) gstEl.checked = auth.allowGuest !== false;
  _applyAuthToggleUI(auth.enabled !== false);
  _applyGoogleToggleUI(auth.googleEnabled !== false);
}

function toggleAuthFeature() {
  const isOn = !!document.getElementById('auth-enabled-on')?.checked;
  _applyAuthToggleUI(isOn);
}

function toggleGoogleAuth() {
  const isOn = !!document.getElementById('auth-google-on')?.checked;
  _applyGoogleToggleUI(isOn);
  saveAuthConfig();
}

function _applyAuthToggleUI(isOn) {
  const fieldsEl  = document.getElementById('auth-settings-fields');
  const sfEl      = document.getElementById('auth-signup-fields-section');
  const badgeEl   = document.getElementById('auth-enabled-badge');
  const cardEl    = document.getElementById('auth-card-main');
  if (fieldsEl) fieldsEl.style.display = isOn ? 'block' : 'none';
  if (sfEl)     sfEl.style.display     = isOn ? 'block' : 'none';
  if (badgeEl) {
    badgeEl.textContent = isOn ? 'Active' : 'Off';
    badgeEl.style.background = isOn ? 'rgba(34,197,94,.18)' : '';
    badgeEl.style.color      = isOn ? '#22c55e' : '';
    badgeEl.style.border     = isOn ? '1px solid rgba(34,197,94,.3)' : '';
  }
  if (cardEl) cardEl.style.border = isOn ? '1px solid rgba(34,197,94,.35)' : '';
  if (isOn) renderAuthSignupFieldsAdmin();
}

function _applyGoogleToggleUI(isOn) {
  const googleFieldsEl = document.getElementById('auth-google-fields');
  const googleBadgeEl  = document.getElementById('auth-google-badge');
  const googleCardEl   = document.getElementById('auth-card-google');
  if (googleFieldsEl) googleFieldsEl.style.display = isOn ? 'block' : 'none';
  if (googleBadgeEl) {
    googleBadgeEl.textContent = isOn ? 'Active' : 'Off';
    googleBadgeEl.style.background = isOn ? 'rgba(34,197,94,.18)' : '';
    googleBadgeEl.style.color      = isOn ? '#22c55e' : '';
    googleBadgeEl.style.border     = isOn ? '1px solid rgba(34,197,94,.3)' : '';
  }
  if (googleCardEl) googleCardEl.style.border = isOn ? '1px solid rgba(34,197,94,.35)' : '';
}

function saveAuthConfig() {
  if (!state.auth) state.auth = {};
  state.auth.enabled           = !!document.getElementById('auth-enabled-on')?.checked;
  state.auth.googleEnabled     = !!document.getElementById('auth-google-on')?.checked;
  state.auth.emailVerification = !!document.getElementById('auth-verify-on')?.checked;
  state.auth.allowGuest        = !!document.getElementById('auth-guest-on')?.checked;
  _saveLocalOverride();
  toast('✅ Auth settings saved. Reload the main website to see changes.');
}

async function testGoogleAuthConnection() {
  const resEl = document.getElementById('auth-google-test-result');
  if (!resEl) return;
  resEl.style.display = 'block';
  resEl.className = 'connection-result testing';
  resEl.textContent = '⏳ Testing Google Sign-In endpoint…';
  try {
    const cfg = DS.getConfig();
    if (!cfg.firebase?.apiKey || !cfg.firebase?.projectId) {
      resEl.className = 'connection-result error';
      resEl.textContent = '❌ Firebase is not configured. Set up Firebase in Data Storage Backend first, then test.';
      return;
    }
    // Test Google OAuth provider via Identity Toolkit
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=${encodeURIComponent(cfg.firebase.apiKey)}`;
    const res  = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: 'test@gmail.com', continueUri: location.origin || 'https://example.com' })
    });
    const body = await res.json();
    if (res.ok && body.signinMethods !== undefined) {
      resEl.className = 'connection-result success';
      resEl.textContent = '✅ Firebase Authentication is reachable. If Google Sign-In fails at login, make sure the Google provider is enabled in Firebase Console → Authentication → Sign-in method.';
    } else if (body?.error?.message?.includes('API_KEY_INVALID')) {
      resEl.className = 'connection-result error';
      resEl.textContent = '❌ Invalid Firebase API Key. Check your Firebase configuration.';
    } else {
      resEl.className = 'connection-result success';
      resEl.textContent = `✅ Firebase Auth endpoint reachable. Enable Google provider in Firebase Console to activate Google Sign-In.`;
    }
  } catch(e) {
    resEl.className = 'connection-result error';
    resEl.textContent = '❌ Network error — ' + (e.message || String(e));
  }
}

// ══════════ EXPORT CUSTOMERS TO EXCEL ══════════
async function exportCustomersExcel() {
  let customers = [];
  try {
    customers = await DS.getCustomerUsers();
  } catch(e) {
    toast('⚠️ Could not load customer data: ' + e.message);
    return;
  }
  if (!customers || customers.length === 0) {
    toast('ℹ️ No customer accounts to export yet.');
    return;
  }

  const headers = ['Name', 'Email', 'Auth Provider', 'Email Verified', 'Registration Date', 'Last Seen', 'User ID'];
  const rows = customers.map(u => [
    u.name  || '',
    u.email || '',
    (u.authProvider || 'email').replace('google.com', 'Google').replace('password', 'Email/Password'),
    u.emailVerified ? 'Yes' : 'No',
    u.createdAt ? new Date(u.createdAt).toLocaleDateString() : '',
    u.lastSeen  ? new Date(u.lastSeen).toLocaleDateString()  : '',
    u.uid || ''
  ]);

  // Build CSV
  const escape = v => '"' + String(v).replace(/"/g, '""') + '"';
  const csvLines = [
    headers.map(escape).join(','),
    ...rows.map(r => r.map(escape).join(','))
  ];
  const csv  = '﻿' + csvLines.join('\r\n'); // BOM for Excel UTF-8
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `customers_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(`✅ Exported ${customers.length} customer${customers.length!==1?'s':''} to CSV.`);
}

async function testAuthConnection() {
  const resEl = document.getElementById('auth-test-result');
  if (!resEl) return;
  resEl.style.display='block'; resEl.className='connection-result testing';
  resEl.textContent='⏳ Testing Firebase Authentication…';
  try {
    const cfg = DS.getConfig();
    if (!cfg.firebase?.apiKey || !cfg.firebase?.projectId) {
      resEl.className='connection-result error';
      resEl.textContent='❌ Firebase is not configured. Set up Firebase in Data Storage Backend first.';
      return;
    }
    // Test via Identity Toolkit REST API
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(cfg.firebase.apiKey)}`;
    const res = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({idToken:'test'})});
    const body = await res.json();
    // A 400 "INVALID_ID_TOKEN" means the API is reachable and Auth is enabled
    if (res.status===400 && body?.error?.message==='INVALID_ID_TOKEN') {
      resEl.className='connection-result success';
      resEl.textContent='✅ Firebase Authentication is reachable and active.';
    } else if (res.status===400 && body?.error?.message?.includes('API_KEY_INVALID')) {
      resEl.className='connection-result error';
      resEl.textContent='❌ Invalid Firebase API key.';
    } else if (res.status===403) {
      resEl.className='connection-result error';
      resEl.textContent='❌ Firebase Authentication is not enabled. Go to Firebase Console → Authentication → Sign-in method and enable Email/Password.';
    } else {
      resEl.className='connection-result success';
      resEl.textContent=`✅ Firebase Auth endpoint reachable (status ${res.status}).`;
    }
  } catch(e) {
    resEl.className='connection-result error';
    resEl.textContent='❌ ' + (e.message||String(e));
  }
}

function renderAuthSignupFieldsAdmin() {
  const el = document.getElementById('auth-signup-fields-list');
  if (!el) return;
  const fields = state.auth?.signupFields || [];
  el.innerHTML = fields.map(f => `
    <div class="provider-edit-card" style="margin-bottom:.5rem;">
      <div style="display:flex;align-items:center;gap:.8rem;flex-wrap:wrap;">
        <strong style="font-size:.84rem;">${esc(f.label)}</strong>
        <span style="color:var(--text-muted);font-size:.75rem;">[${esc(f.key)}]</span>
        <label style="display:flex;align-items:center;gap:.4rem;font-size:.78rem;margin-left:auto;">
          Mandatory <input type="checkbox" ${f.required?'checked':''} onchange="toggleAuthSfRequired(${f.id})">
        </label>
        <label class="toggle-switch" style="flex-shrink:0;">
          <input type="checkbox" id="asf-en-${f.id}" ${f.enabled!==false?'checked':''} onchange="toggleAuthSfEnabled(${f.id})">
          <span class="toggle-slider"></span>
        </label>
        ${f.id>1?`<button onclick="deleteAuthSf(${f.id})" style="background:none;border:none;color:#f87171;cursor:pointer;font-size:.8rem;">Delete</button>`:''}
      </div>
    </div>`).join('') + `
    <div style="display:flex;gap:.5rem;margin-top:.5rem;flex-wrap:wrap;">
      <input type="text" id="new-asf-label" placeholder="Label (e.g. Company)" style="flex:1;min-width:120px;padding:.4rem .7rem;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text);font-size:.82rem;">
      <input type="text" id="new-asf-key" placeholder="Key (e.g. company)" style="flex:1;min-width:120px;padding:.4rem .7rem;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text);font-size:.82rem;">
      <button class="save-btn" style="padding:.4rem .9rem;font-size:.78rem;" onclick="addAuthSignupField()">+ Add</button>
    </div>`;
}

function toggleAuthSfRequired(id) {
  const f = (state.auth?.signupFields||[]).find(x=>x.id===id);
  if(f) f.required = !f.required;
}
function toggleAuthSfEnabled(id) {
  const f = (state.auth?.signupFields||[]).find(x=>x.id===id);
  if(f) f.enabled = !!document.getElementById('asf-en-'+id)?.checked;
}
function deleteAuthSf(id) {
  if(!state.auth?.signupFields) return;
  state.auth.signupFields = state.auth.signupFields.filter(x=>x.id!==id);
  renderAuthSignupFieldsAdmin();
}
function addAuthSignupField() {
  const label = val('new-asf-label').trim();
  const key   = val('new-asf-key').trim().toLowerCase().replace(/\s+/g,'');
  if (!label||!key) { toast('Label and key required.', true); return; }
  if (!state.auth) state.auth = {};
  if (!state.auth.signupFields) state.auth.signupFields = [];
  state.auth.signupFields.push({ id:Date.now(), key, label, type:'text', required:false, enabled:true, placeholder:label });
  renderAuthSignupFieldsAdmin();
}

// ══════════ TYPOGRAPHY ══════════
function populateTypography() {
  const t = state.typography || {};
  const hf = document.getElementById('typo-heading-font');
  const bf = document.getElementById('typo-body-font');
  const bs = document.getElementById('typo-base-size');
  const hs = document.getElementById('typo-heading-scale');
  const lh = document.getElementById('typo-line-height');
  const ls = document.getElementById('typo-letter-spacing');
  if (hf) hf.value = t.headingFont || 'Segoe UI';
  if (bf) bf.value = t.bodyFont    || 'Segoe UI';
  if (bs) { bs.value = t.baseFontSize || 16; document.getElementById('typo-base-size-val').textContent = (t.baseFontSize||16)+'px'; }
  if (hs) { hs.value = t.headingScale || 2.5; document.getElementById('typo-heading-scale-val').textContent = parseFloat(t.headingScale||2.5).toFixed(1)+'rem'; }
  if (lh) { lh.value = t.lineHeight  || 1.7;  document.getElementById('typo-line-height-val').textContent = parseFloat(t.lineHeight||1.7).toFixed(1); }
  if (ls) { ls.value = t.letterSpacing||0;     document.getElementById('typo-letter-spacing-val').textContent = parseFloat(t.letterSpacing||0).toFixed(1)+'px'; }
}

function saveTypography() {
  if (!state.typography) state.typography = {};
  state.typography.headingFont   = document.getElementById('typo-heading-font')?.value || 'Segoe UI';
  state.typography.bodyFont      = document.getElementById('typo-body-font')?.value    || 'Segoe UI';
  state.typography.baseFontSize  = parseFloat(document.getElementById('typo-base-size')?.value  || 16);
  state.typography.headingScale  = parseFloat(document.getElementById('typo-heading-scale')?.value || 2.5);
  state.typography.lineHeight    = parseFloat(document.getElementById('typo-line-height')?.value || 1.7);
  state.typography.letterSpacing = parseFloat(document.getElementById('typo-letter-spacing')?.value || 0);
  _saveLocalOverride();
  toast('Typography saved. Reload the main website to see changes.');
}

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('admin-user').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });
  document.getElementById('admin-pass').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });
  fetch('./data.json')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      Object.keys(DEFAULTS).forEach(k => { if (data[k] != null) state[k] = data[k]; });
      // Apply Firebase/Supabase config from data.json so credentials persist across devices
      if (data.dsConfig && data.dsConfig.backend && data.dsConfig.backend !== 'local') {
        state.dsConfig = data.dsConfig;
        DS.setConfig(data.dsConfig);
      } else if (data.dsConfig) {
        state.dsConfig = data.dsConfig;
      }
      // Deep-merge payment so missing gateway keys still get defaults
      if (data.payment) {
        const dp = DEFAULTS.payment;
        const dco = dp.checkout, ico = (data.payment.checkout || {});
        state.payment = {
          ...dp, ...data.payment,
          cart:     { ...dp.cart,     ...(data.payment.cart     || {}) },
          currency: { ...dp.currency, ...(data.payment.currency || {}) },
          charge:   { ...dp.charge,   ...(data.payment.charge   || {}) },
          gateways: { ...dp.gateways, ...(data.payment.gateways || {}) },
          email:    { ...dp.email,    ...(data.payment.email    || {}) },
          checkout: { ...dco, ...ico,
            customerForm: { ...dco.customerForm, ...(ico.customerForm||{}), fields:(ico.customerForm?.fields||dco.customerForm.fields) },
            pickup:   { ...dco.pickup,   ...(ico.pickup||{}),   stores:(ico.pickup?.stores||dco.pickup.stores) },
            delivery: { ...dco.delivery, ...(ico.delivery||{}), providers:{ ...dco.delivery.providers, ...(ico.delivery?.providers||{}) } }
          }
        };
      }
    })
    .catch(() => {});
});
