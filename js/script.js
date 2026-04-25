/* ════════════════════════════════════════
   js/script.js — Bista Group Main Website
   ════════════════════════════════════════ */

// ══════════ DEFAULT DATA ══════════
const DEFAULTS = {
  hero: {
    tag:   'Premium Quality Products',
    title: 'Bista Group',
    sub:   'A diversified conglomerate delivering excellence across industries — from premium products to innovative solutions that empower communities and drive growth.'
  },
  logo: {
    url:   'assets/images/logo-placeholder.png',
    brand: 'Bista Group'
  },
  about: {
    img:      'https://placehold.co/600x420/1a3a8f/ffffff?text=About+Us',
    badgeNum: '25+',
    badgeTxt: 'Years of Excellence',
    p1:       'Bista Group is a leading diversified conglomerate with a strong presence across multiple industries. Founded on principles of integrity, innovation, and excellence, we have grown to become a trusted name in the region.',
    p2:       'Our commitment to quality and customer satisfaction has earned us a reputation for delivering world-class products and services that make a meaningful difference in people\'s lives.',
    s1v: '500+', s1l: 'Products',
    s2v: '50+',  s2l: 'Countries',
    s3v: '10K+', s3l: 'Customers'
  },
  products: [
    { id:1, name:'Alpine Watch',        desc:'Precision Swiss-inspired timepiece',        fullDesc:'Handcrafted with premium materials, the Alpine Watch features sapphire crystal glass, 100m water resistance, and automatic movement.',    price:45000, img:'https://placehold.co/600x400/1a3a8f/ffffff?text=Alpine+Watch' },
    { id:2, name:'Executive Pen Set',   desc:'Premium writing instrument collection',     fullDesc:'Crafted from aircraft-grade aluminium with gold plating, this executive pen set is the ultimate professional accessory.',                  price:8500,  img:'https://placehold.co/600x400/c0152a/ffffff?text=Pen+Set' },
    { id:3, name:'Leather Portfolio',   desc:'Hand-stitched genuine leather portfolio',   fullDesc:'Full-grain leather with hand-stitched edges, internal organiser, and magnetic closure. Fits A4 documents.',                                 price:12000, img:'https://placehold.co/600x400/1a3a8f/ffffff?text=Portfolio' },
    { id:4, name:'Premium Tea Collection', desc:'Himalayan high-altitude teas',           fullDesc:'Sourced from the finest tea gardens in the Himalayan highlands. Includes 6 premium varieties hand-picked at altitude.',                     price:3500,  img:'https://placehold.co/600x400/c0152a/ffffff?text=Tea+Collection' }
  ],
  leadership: [
    { id:1, name:'Bijay Bista',   role:'Founder & CEO',        desc:'Visionary leader with 25+ years of experience driving growth and innovation across diverse industries.',              img:'https://placehold.co/400x400/1a3a8f/ffffff?text=BB' },
    { id:2, name:'Priya Sharma',  role:'Managing Director',    desc:'Strategic operations expert who has overseen expansion into 50+ global markets.',                                  img:'https://placehold.co/400x400/c0152a/ffffff?text=PS' },
    { id:3, name:'Rajan Thapa',   role:'Chief Financial Officer', desc:'CPA with expertise in international finance, risk management, and sustainable investment.',                     img:'https://placehold.co/400x400/1a3a8f/ffffff?text=RT' }
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
    { id:1, name:'Aarav Mehta',      title:'CEO, TechVentures',     text:'Bista Group has been an outstanding business partner. Their attention to detail and commitment to quality is unmatched.', stars:5 },
    { id:2, name:'Sarah Johnson',    title:'Import Manager, AU',     text:'We\'ve sourced premium products from Bista Group for years. Consistent quality and exceptional service every time.',          stars:5 },
    { id:3, name:'Dr. Ramesh Koirala', title:'Director, FinCorp',   text:'A trustworthy conglomerate with genuine values. Their leadership team is professional, responsive, and results-driven.',     stars:5 }
  ],
  contact: {
    email:      'bijaybista006@gmail.com',
    phone:      '+977-XXXXXXXX',
    addr:       'Kathmandu, Nepal',
    footerDesc: 'A diversified conglomerate committed to excellence, innovation, and sustainable growth across industries worldwide.',
    footerCopy: '© 2025 Bista Group. All Rights Reserved.'
  },
  emailjs: { pk:'', sid:'', tid:'' },
  rates:   { aud:0.0120, usd:0.0075 },
  theme:   { primary:'#1a3a8f', secondary:'#c0152a', bg:'#080c18', accent:'#2563eb' }
};

// ══════════ STORAGE HELPERS ══════════
function load(k) {
  try { const v = localStorage.getItem('bg_' + k); return v ? JSON.parse(v) : null; }
  catch { return null; }
}

// ══════════ STATE ══════════
const state = {};
function reloadStateFromStorage() {
  Object.keys(DEFAULTS).forEach(k => {
    state[k] = load(k) || JSON.parse(JSON.stringify(DEFAULTS[k]));
  });
}
reloadStateFromStorage();

// ══════════ LIVE SYNC FROM ADMIN ══════════
// Re-render whenever admin saves something (works across tabs of same origin).
window.addEventListener('storage', e => {
  if (!e.key || !e.key.startsWith('bg_')) return;
  reloadStateFromStorage();
  if (typeof renderAll === 'function') renderAll();
});
// BroadcastChannel for same-tab same-origin sync (admin <-> site).
try {
  const _bgChan = new BroadcastChannel('bista_group_sync');
  _bgChan.onmessage = () => {
    reloadStateFromStorage();
    if (typeof renderAll === 'function') renderAll();
  };
  window.__bgChan = _bgChan;
} catch (_) { /* BroadcastChannel not available */ }
// Also re-sync when the window regains focus (covers manual refreshes).
window.addEventListener('focus', () => {
  reloadStateFromStorage();
  if (typeof renderAll === 'function') renderAll();
});

// ══════════ CURRENCY ══════════
let curCode = 'NPR', curSym = 'रू';

function setCurrency(code, sym) {
  curCode = code;
  curSym  = sym;
  document.querySelectorAll('.currency-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().startsWith(code));
  });
  renderProducts();
}

function fmtPrice(npr) {
  if (curCode === 'NPR') return 'रू ' + npr.toLocaleString();
  if (curCode === 'AUD') return 'A$ ' + (npr * (state.rates.aud || 0.012)).toFixed(2);
  if (curCode === 'USD') return '$ '  + (npr * (state.rates.usd || 0.0075)).toFixed(2);
  return curSym + npr;
}

// ══════════ THEME ══════════
function applyTheme() {
  const t = state.theme;
  const r = document.documentElement.style;
  r.setProperty('--primary',   t.primary);
  r.setProperty('--secondary', t.secondary);
  r.setProperty('--bg-dark',   t.bg);
  r.setProperty('--accent',    t.accent);
}

// ══════════ RENDER FUNCTIONS ══════════
function renderAll() {
  applyTheme();
  renderHero();
  renderLogo();
  renderAbout();
  renderProducts();
  renderLeadership();
  renderGallery();
  renderTestimonials();
  renderContact();
}

function renderHero() {
  const h = state.hero;
  setTxt('hero-tag',        h.tag);
  setTxt('hero-title-span', h.title);
  setTxt('hero-sub',        h.sub);
}

function renderLogo() {
  const l = state.logo;
  const logoImgs = document.querySelectorAll('#nav-logo-img, #footer-logo');
  logoImgs.forEach(img => { img.src = l.url; });
  setTxt('nav-logo-text',    l.brand);
  setTxt('footer-brand-name', l.brand);
  document.title = l.brand;
}

function renderAbout() {
  const a = state.about;
  setSrc('about-img', a.img);
  setTxt('about-badge-num',  a.badgeNum);
  setTxt('about-badge-text', a.badgeTxt);
  setTxt('about-p1', a.p1);
  setTxt('about-p2', a.p2);
  setTxt('stat-1',   a.s1v); setTxt('stat-1-l', a.s1l);
  setTxt('stat-2',   a.s2v); setTxt('stat-2-l', a.s2l);
  setTxt('stat-3',   a.s3v); setTxt('stat-3-l', a.s3l);
}

function renderProducts() {
  const g = document.getElementById('products-grid');
  if (!g) return;
  g.innerHTML = state.products.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${esc(p.name)}" loading="lazy">
        <div class="product-overlay"><span>View Product</span></div>
      </div>
      <div class="product-info">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="product-price">${fmtPrice(p.price)}</div>
      </div>
    </div>`).join('');
}

function renderLeadership() {
  const g = document.getElementById('leadership-grid');
  if (!g) return;
  g.innerHTML = state.leadership.map(l => `
    <div class="leader-card fade-in">
      <div class="leader-img"><img src="${l.img}" alt="${esc(l.name)}" loading="lazy"></div>
      <div class="leader-info">
        <h3>${esc(l.name)}</h3>
        <div class="role">${esc(l.role)}</div>
        <p>${esc(l.desc)}</p>
      </div>
    </div>`).join('');
  initFadeIn();
}

function renderGallery() {
  const g = document.getElementById('gallery-grid');
  if (!g) return;
  g.innerHTML = state.gallery.map(item => `
    <div class="gallery-item">
      <img src="${item.url}" alt="${esc(item.cap || '')}" loading="lazy" title="${esc(item.cap || '')}">
    </div>`).join('');
}

function renderTestimonials() {
  const g = document.getElementById('testimonials-grid');
  if (!g) return;
  g.innerHTML = state.testimonials.map(t => `
    <div class="testi-card fade-in">
      <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="testi-text">"${esc(t.text)}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.name.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
        <div class="testi-author-info">
          <strong>${esc(t.name)}</strong>
          <span>${esc(t.title)}</span>
        </div>
      </div>
    </div>`).join('');
  initFadeIn();
}

function renderContact() {
  const c = state.contact;
  setTxt('contact-email', c.email);
  setTxt('contact-phone', c.phone);
  setTxt('contact-addr',  c.addr);
  setTxt('footer-desc',   c.footerDesc);
  setTxt('footer-copy',   c.footerCopy);
  setTxt('footer-email',  c.email);
  setTxt('footer-phone',  c.phone);
  setTxt('footer-addr',   c.addr);
}

// ══════════ PRODUCT MODAL ══════════
let currentProductId = null;

function openModal(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  currentProductId = id;
  setSrc('modal-img',    p.img);
  setTxt('modal-name',   p.name);
  setTxt('modal-price',  fmtPrice(p.price));
  setTxt('modal-desc',   p.fullDesc || p.desc);
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function contactSeller() {
  const p = state.products.find(x => x.id === currentProductId);
  if (p) {
    const subjectEl = document.getElementById('cf-subject');
    if (subjectEl) subjectEl.value = 'Inquiry about: ' + p.name;
  }
  closeModal();
  document.getElementById('contact').scrollIntoView({ behavior:'smooth' });
}

// Close modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('product-modal');
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
});

// ══════════ CONTACT FORM ══════════
function sendContact() {
  const name  = document.getElementById('cf-name')?.value.trim();
  const email = document.getElementById('cf-email')?.value.trim();
  const subj  = document.getElementById('cf-subject')?.value.trim();
  const msg   = document.getElementById('cf-message')?.value.trim();
  const msgEl = document.getElementById('contact-msg');

  if (!name || !email || !msg) {
    showFormMsg(msgEl, 'Please fill in all required fields.', 'error');
    return;
  }

  const ejs = state.emailjs;
  if (!ejs.pk || !ejs.sid || !ejs.tid) {
    showFormMsg(msgEl, 'EmailJS not configured. Please contact the site admin.', 'error');
    return;
  }

  // ── EmailJS placeholders ──
  // Replace YOUR_PUBLIC_KEY / SERVICE_ID / TEMPLATE_ID in the Admin → Contact → EmailJS section.
  // Your EmailJS template should have variables: {{from_name}}, {{reply_to}}, {{subject}}, {{message}}
  emailjs.init(ejs.pk);
  emailjs.send(ejs.sid, ejs.tid, {
    from_name: name,
    reply_to:  email,
    subject:   subj || 'Website Inquiry',
    message:   msg,
    to_email:  state.contact.email
  })
  .then(() => {
    showFormMsg(msgEl, 'Message sent! We\'ll be in touch soon.', 'success');
    ['cf-name','cf-email','cf-subject','cf-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  })
  .catch(err => {
    showFormMsg(msgEl, 'Failed to send. Please try again. (' + (err.text || err) + ')', 'error');
  });
}

function showFormMsg(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.className   = 'form-msg ' + type;
  setTimeout(() => { el.className = 'form-msg'; el.style.display = 'none'; }, 6000);
}

// ══════════ MOBILE NAV ══════════
function toggleMobile() { document.getElementById('mobile-menu')?.classList.toggle('open'); }
function closeMobile()  { document.getElementById('mobile-menu')?.classList.remove('open'); }

// ══════════ FADE-IN ══════════
function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el));
}

// ══════════ HELPERS ══════════
function setTxt(id, val) { const el = document.getElementById(id); if (el) el.textContent = val || ''; }
function setSrc(id, val) { const el = document.getElementById(id); if (el) el.src = val || ''; }
function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initFadeIn();
  window.addEventListener('scroll', initFadeIn);
});
