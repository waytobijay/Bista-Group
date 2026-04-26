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
  emailjs:    { pk:'', sid:'', tid:'' },
  cloudinary: { cloud:'dyjzhbvkf', preset:'bista-group-unassigned' },
  rates:      { aud:0.0120, usd:0.0075 },
  theme:      { primary:'#1a3a8f', secondary:'#c0152a', bg:'#080c18', accent:'#2563eb' },
  visibility: { about:true, products:true, services:true, leadership:true, gallery:true, testimonials:true, contact:true },
  sectionTitles: { about:'About Us', products:'Our Products', services:'Our Services', leadership:'Leadership', gallery:'Gallery', testimonials:'Testimonials', contact:'Contact Us' },
  design:     { layout:'default', heroAlign:'center', navStyle:'top', cardStyle:'shadow' },
  customSections: []
};

// ══════════ STORAGE ══════════
function persist(k, v) { state[k] = v; }

// ══════════ STATE ══════════
const state = {};
Object.keys(DEFAULTS).forEach(k => { state[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });

// ══════════ AUTH ══════════
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'bista2025';

function doLogin() {
  const u = val('admin-user'), p = val('admin-pass');
  const msgEl = document.getElementById('admin-login-msg');
  if (u === ADMIN_USER && p === ADMIN_PASS) {
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
  // Section titles
  const st = state.sectionTitles || {};
  Object.keys(st).forEach(k => setVal('st-' + k, st[k]));
  // Visibility toggles
  const v = state.visibility || {};
  Object.keys(v).forEach(k => {
    const el = document.getElementById('vis-' + k);
    if (el) el.checked = v[k] !== false;
  });
  renderAdminProducts();
  renderAdminServices();
  renderAdminLeaders();
  renderAdminGallery();
  renderAdminTestis();
  renderAdminCustomSections();
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
  toast('Theme saved!');
}

// ══════════ SAVE: DESIGN ══════════
function saveDesign() {
  const layout    = document.querySelector('input[name="a-layout"]:checked')?.value    || 'default';
  const heroAlign = document.querySelector('input[name="a-hero-align"]:checked')?.value || 'center';
  const navStyle  = document.querySelector('input[name="a-nav-style"]:checked')?.value  || 'top';
  const cardStyle = document.querySelector('input[name="a-card-style"]:checked')?.value || 'shadow';
  state.design = { layout, heroAlign, navStyle, cardStyle };
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
        <p>रू ${p.price.toLocaleString()} &nbsp;·&nbsp; ${imgs.length} image${imgs.length!==1?'s':''}</p>
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

// ══════════ EXPORT data.json ══════════
function exportDataJson() {
  const json = JSON.stringify(state, null, 2);
  const blob = new Blob([json], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('✅ data.json downloaded — commit to GitHub to publish.');
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

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('admin-user').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });
  document.getElementById('admin-pass').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });
  fetch('./data.json')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => { Object.keys(DEFAULTS).forEach(k => { if (data[k]!=null) state[k]=data[k]; }); })
    .catch(() => {});
});
