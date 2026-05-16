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
    { id:1, name:'Bijay Bista',   role:'Founder & CEO',           desc:'Visionary leader with 25+ years of experience driving growth and innovation across diverse industries.',    fullDesc:'Bijay Bista founded the Bista Group with a vision to create a world-class diversified conglomerate. With over 25 years of leadership experience across manufacturing, trading, and consulting sectors, he has steered the group to become a trusted name in the region and beyond.', img:'https://placehold.co/400x400/1a3a8f/ffffff?text=BB' },
    { id:2, name:'Priya Sharma',  role:'Managing Director',        desc:'Strategic operations expert who has overseen expansion into 50+ global markets.',                         fullDesc:'Priya Sharma brings over 18 years of operational expertise to the Bista Group. Her strategic vision has been instrumental in driving the group\'s expansion into more than 50 global markets, establishing strong partnerships and distribution networks across Asia, Europe, and the Americas.', img:'https://placehold.co/400x400/c0152a/ffffff?text=PS' },
    { id:3, name:'Rajan Thapa',   role:'Chief Financial Officer',  desc:'CPA with expertise in international finance, risk management, and sustainable investment.',               fullDesc:'Rajan Thapa is a Certified Public Accountant with over 15 years of expertise in international finance and risk management. He oversees the group\'s financial operations, investment portfolio, and sustainable growth initiatives, ensuring robust fiscal discipline across all business units.', img:'https://placehold.co/400x400/1a3a8f/ffffff?text=RT' }
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
  contact: {
    email:'bijaybista006@gmail.com', phone:'+977-XXXXXXXX', addr:'Kathmandu, Nepal',
    footerDesc:'A diversified conglomerate committed to excellence, innovation, and sustainable growth across industries worldwide.',
    footerCopy:'© 2025 Bista Group. All Rights Reserved.'
  },
  payment: {
    cart: { enabled:true, maxQty:10 },
    checkout: {
      enabled:true,
      customerForm: {
        enabled:true,
        fields: [
          { id:1, label:'Full Name',     type:'text',     required:true, enabled:true },
          { id:2, label:'Phone Number',  type:'tel',      required:true, enabled:true },
          { id:3, label:'Email Address', type:'email',    required:true, enabled:true },
          { id:4, label:'Address',       type:'textarea', required:true, enabled:true }
        ]
      },
      pickup: {
        enabled:true,
        stores:[ { id:1, name:'Main Store', address:'Kathmandu, Nepal', hours:'9am–6pm Mon–Sat' } ]
      },
      delivery: {
        enabled:true,
        providers: {
          manual:  { enabled:true,  label:'Standard Delivery', charge:200, info:'3–5 business days' },
          dhl:     { enabled:false, label:'DHL Express',       charge:0,   info:'Contact for international rates' },
          auspost: { enabled:false, label:'Australia Post',    charge:0,   info:'Contact for rates' },
          tnt:     { enabled:false, label:'TNT',               charge:0,   info:'Contact for rates' }
        }
      }
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
  emailjs:    { pk:'', sid:'', tid:'' },
  cloudinary: { cloud:'dyjzhbvkf', preset:'bista-group-unassigned' },
  rates:      { aud:0.0120, usd:0.0075 },
  theme:      { primary:'#1a3a8f', secondary:'#c0152a', bg:'#080c18', accent:'#2563eb' },
  visibility: { about:true, products:true, services:true, leadership:true, gallery:true, testimonials:true, contact:true },
  sectionTitles: { about:'About Us', products:'Our Products', services:'Our Services', leadership:'Leadership', gallery:'Gallery', testimonials:'Testimonials', contact:'Contact Us' },
  design:     { layout:'default', heroAlign:'center', navStyle:'top', cardStyle:'shadow', navHide:'always', navHover:'simple' },
  customSections: [],
  contactForm: {
    fields: [
      { id:1, key:'name',    label:'Full Name',     type:'text',     required:true,  enabled:true,  placeholder:'Your name' },
      { id:2, key:'email',   label:'Email Address', type:'email',    required:true,  enabled:true,  placeholder:'your@email.com' },
      { id:3, key:'phone',   label:'Phone Number',  type:'tel',      required:false, enabled:false, placeholder:'+1 234 567 8900' },
      { id:4, key:'subject', label:'Subject',       type:'text',     required:false, enabled:true,  placeholder:'How can we help?' },
      { id:5, key:'message', label:'Message',       type:'textarea', required:true,  enabled:true,  placeholder:'Tell us more...' }
    ]
  },
  auth: {
    enabled:true, googleEnabled:true, emailVerification:false, allowGuest:true,
    signupFields: [
      { id:1, key:'name',  label:'Full Name',   type:'text', required:true,  enabled:true, placeholder:'Your full name' },
      { id:2, key:'phone', label:'Phone Number',type:'tel',  required:false, enabled:true, placeholder:'+1 234 567 8900' }
    ]
  },
  typography: { headingFont:'Segoe UI', bodyFont:'Segoe UI', baseFontSize:16, headingScale:2.5, lineHeight:1.7, letterSpacing:0 }
};

// ══════════ STATE ══════════
const state = {};
Object.keys(DEFAULTS).forEach(k => { state[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });

// ══════════ CURRENCY ══════════
let curCode = 'NPR', curSym = 'रू';

const CURRENCIES = [
  { code:'NPR', sym:'रू', label:'NPR (रू)' },
  { code:'USD', sym:'$',  label:'USD ($)'  },
  { code:'AUD', sym:'A$', label:'AUD (A$)' },
];

function setCurrency(code, sym) {
  curCode = code; curSym = sym;
  document.querySelectorAll('.currency-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.code === code);
  });
  renderProducts();
}

function fmtPrice(npr) {
  if (curCode === 'NPR') return 'रू ' + Math.round(npr).toLocaleString();
  if (curCode === 'AUD') return 'A$ ' + (npr * (state.rates.aud || 0.012)).toFixed(2);
  if (curCode === 'USD') return '$ '  + (npr * (state.rates.usd || 0.0075)).toFixed(2);
  return curSym + npr;
}

function fmtNPR(npr) { return 'रू ' + Math.round(npr).toLocaleString(); }

// ══════════ ORDER PREFIX (derives 2-letter code from company name) ══════════
function getOrderPrefix() {
  const brand = (state.logo && state.logo.brand) || 'BG';
  const words = brand.trim().split(/\s+/);
  let abbr;
  if (words.length >= 2) abbr = (words[0][0] + words[1][0]).toUpperCase();
  else abbr = brand.slice(0, 2).toUpperCase();
  return abbr + '-';
}

function initCurrency() {
  const pmt     = state.payment || {};
  const curCfg  = pmt.currency  || {};
  const defCode = curCfg.default  || 'NPR';
  const enabled = curCfg.enabled  || ['NPR'];
  const list    = CURRENCIES.filter(c => enabled.includes(c.code));
  const bar     = document.getElementById('currency-bar');
  if (bar) {
    bar.innerHTML = list.map(c =>
      `<button class="currency-btn${c.code===defCode?' active':''}" data-code="${c.code}" onclick="setCurrency('${c.code}','${c.sym}')">${c.label}</button>`
    ).join('');
  }
  const def = list.find(c => c.code === defCode) || list[0];
  if (def) { curCode = def.code; curSym = def.sym; }
}

// ══════════ HELPERS ══════════
function setTxt(id, val) { const el = document.getElementById(id); if (el) el.textContent = val || ''; }
function setSrc(id, val) { const el = document.getElementById(id); if (el) el.src = val || ''; }
function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function getGalleryItems()    { return Array.isArray(state.gallery) ? state.gallery : (state.gallery.items || []); }
function getGalleryInterval() { return Array.isArray(state.gallery) ? 4 : (state.gallery.interval || 4); }
function getProductImages(p)  { return (p.images && p.images.length) ? p.images : (p.img ? [p.img] : ['https://placehold.co/600x400/1a3a8f/ffffff?text=Product']); }

// ══════════ THEME ══════════
function applyTheme() {
  const t = state.theme, r = document.documentElement.style;
  r.setProperty('--primary',   t.primary);
  r.setProperty('--secondary', t.secondary);
  r.setProperty('--bg-dark',   t.bg);
  r.setProperty('--accent',    t.accent);
}

// ══════════ TYPOGRAPHY ══════════
const _GFONT_MAP = {
  'Playfair Display':'Playfair+Display:wght@400;700',
  'Poppins':'Poppins:wght@400;600;700',
  'Rajdhani':'Rajdhani:wght@400;600;700',
  'Space Grotesk':'Space+Grotesk:wght@400;600;700',
  'Lora':'Lora:wght@400;600;700',
  'Lato':'Lato:wght@400;700',
  'Roboto':'Roboto:wght@400;500;700',
  'DM Sans':'DM+Sans:wght@400;500;700',
  'Source Sans 3':'Source+Sans+3:wght@400;600;700',
  'Raleway':'Raleway:wght@400;600;700',
  'Oswald':'Oswald:wght@400;500;700',
  'Bebas Neue':'Bebas+Neue'
};

function loadGoogleFonts(headingFont, bodyFont) {
  const fonts = [...new Set([headingFont, bodyFont])].filter(f => _GFONT_MAP[f]);
  const hEl = document.getElementById('gfont-heading');
  const bEl = document.getElementById('gfont-body');
  if (fonts.length && hEl) {
    const params = fonts.map(f => 'family=' + _GFONT_MAP[f]).join('&');
    hEl.href = `https://fonts.googleapis.com/css2?${params}&display=swap`;
  }
  if (bEl && !_GFONT_MAP[bodyFont]) bEl.href = '';
}

function applyTypography() {
  const t = state.typography || {};
  const r = document.documentElement.style;
  const hf = t.headingFont  || 'Segoe UI';
  const bf = t.bodyFont     || 'Segoe UI';
  const fs = parseFloat(t.baseFontSize) || 16;
  const hs = parseFloat(t.headingScale) || 2.5;
  const lh = parseFloat(t.lineHeight)   || 1.7;
  const ls = parseFloat(t.letterSpacing)|| 0;
  r.setProperty('--font-heading',  `"${hf}", system-ui, sans-serif`);
  r.setProperty('--font-body',     `"${bf}", system-ui, sans-serif`);
  r.setProperty('--font-size-base', `${fs}px`);
  r.setProperty('--heading-scale',  `${hs}rem`);
  r.setProperty('--line-height',    `${lh}`);
  r.setProperty('--letter-spacing', `${ls}px`);
  loadGoogleFonts(hf, bf);
}

// ══════════ DESIGN ══════════
function applyDesign() {
  const d = state.design || {};
  const body = document.body;
  // Remove all layout classes
  body.classList.remove(
    'layout-minimal','layout-bold','layout-organic','layout-bento',
    'layout-immersive','layout-brutalist','layout-minimalist',
    'hero-left','nav-sidebar-left','nav-sidebar-right','nav-floating',
    'cards-flat','cards-glass'
  );
  // Apply layout
  const layoutCls = { minimal:'layout-minimal', bold:'layout-bold', organic:'layout-organic',
    bento:'layout-bento', immersive:'layout-immersive', brutalist:'layout-brutalist',
    minimalist:'layout-minimalist' };
  if (layoutCls[d.layout]) body.classList.add(layoutCls[d.layout]);
  if (d.heroAlign === 'left')          body.classList.add('hero-left');
  if (d.navStyle === 'sidebar-left')   body.classList.add('nav-sidebar-left');
  if (d.navStyle === 'sidebar-right')  body.classList.add('nav-sidebar-right');
  if (d.navStyle === 'floating')       body.classList.add('nav-floating');
  if (d.cardStyle === 'flat')          body.classList.add('cards-flat');
  if (d.cardStyle === 'glass')         body.classList.add('cards-glass');
  body.classList.remove('nav-autohide');
  if (d.navHide === 'autohide') body.classList.add('nav-autohide');
  body.classList.remove('nav-hover-underline','nav-hover-glow','nav-hover-fill');
  if (d.navHover === 'underline') body.classList.add('nav-hover-underline');
  if (d.navHover === 'glow')      body.classList.add('nav-hover-glow');
  if (d.navHover === 'fill')      body.classList.add('nav-hover-fill');
}

// ══════════ VISIBILITY ══════════
function applyVisibility() {
  const v = state.visibility || {};
  const sections = ['about','products','services','leadership','gallery','testimonials','contact'];
  sections.forEach(s => {
    const sec  = document.getElementById(s);
    const navLi = document.getElementById('nav-' + s);
    const mobA  = document.getElementById('mob-' + s);
    const show  = v[s] !== false;
    if (sec)   sec.style.display   = show ? '' : 'none';
    if (navLi) navLi.style.display = show ? '' : 'none';
    if (mobA)  mobA.style.display  = show ? '' : 'none';
  });
}

// ══════════ SECTION TITLES ══════════
function renderSectionTitles() {
  const t = state.sectionTitles || {};
  Object.keys(t).forEach(k => {
    const el = document.getElementById('st-' + k);
    if (el) el.innerHTML = t[k];
  });
}

// ══════════ RENDER ALL ══════════
function renderAll() {
  applyTheme();
  applyTypography();
  applyDesign();
  initCurrency();
  renderHero();
  renderLogo();
  renderAbout();
  renderProducts();
  renderServices();
  renderLeadership();
  renderGallery();
  renderTestimonials();
  renderContact();
  renderSectionTitles();
  applyVisibility();
  renderCustomSections();
  renderContactForm();
  // Reveal page — removes flash of default "Bista Group" content
  document.documentElement.style.opacity = '1';
  const ih = document.getElementById('init-hide');
  if (ih) ih.remove();
}

function renderHero() {
  const h = state.hero;
  setTxt('hero-tag', h.tag);
  setTxt('hero-title-span', h.title);
  setTxt('hero-sub', h.sub);
}

function renderLogo() {
  const l = state.logo;
  document.querySelectorAll('#nav-logo-img, #footer-logo').forEach(img => { img.src = l.url; });
  setTxt('nav-logo-text', l.brand);
  setTxt('footer-brand-name', l.brand);
  document.title = l.brand;
}

function renderAbout() {
  const a = state.about;
  setSrc('about-img', a.img);
  setTxt('about-badge-num', a.badgeNum);
  setTxt('about-badge-text', a.badgeTxt);
  setTxt('about-p1', a.p1);
  setTxt('about-p2', a.p2);
  setTxt('stat-1', a.s1v); setTxt('stat-1-l', a.s1l);
  setTxt('stat-2', a.s2v); setTxt('stat-2-l', a.s2l);
  setTxt('stat-3', a.s3v); setTxt('stat-3-l', a.s3l);
}

function renderProducts() {
  const g = document.getElementById('products-grid');
  if (!g) return;
  g.innerHTML = state.products.map(p => {
    const imgs  = getProductImages(p);
    const isFav = _userFavs.includes(p.id);
    return `<div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <img src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy">
        <div class="product-overlay"><span>View Product</span></div>
        ${imgs.length > 1 ? `<div class="product-img-count">${imgs.length} photos</div>` : ''}
        <button class="fav-btn${isFav?' active':''}" onclick="event.stopPropagation();toggleFavourite(${p.id})" title="${isFav?'Remove from favourites':'Add to favourites'}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="product-price">${fmtPrice(p.price)}</div>
      </div>
    </div>`;
  }).join('');
}

// ══════════ CONTACT FORM (DYNAMIC) ══════════
function renderContactForm() {
  const container = document.getElementById('contact-form-fields');
  if (!container) return;
  const fields = (state.contactForm?.fields || []).filter(f => f.enabled !== false);
  if (!fields.length) return; // keep static fallback
  container.innerHTML = fields.map(f => {
    const req = f.required ? ' <span style="color:var(--secondary)">*</span>' : '';
    const attrs = `id="cf-${f.key}" placeholder="${esc(f.placeholder||f.label)}"${f.required?' required':''}`;
    const inp   = f.type === 'textarea'
      ? `<textarea ${attrs} rows="4"></textarea>`
      : `<input type="${esc(f.type||'text')}" ${attrs}>`;
    return `<div class="form-group"><label>${esc(f.label)}${req}</label>${inp}</div>`;
  }).join('');
}

function renderServices() {
  const g = document.getElementById('services-grid');
  if (!g) return;
  g.innerHTML = (state.services || []).map(s => `
    <div class="service-card fade-in">
      ${s.img ? `<img class="service-img" src="${esc(s.img)}" alt="${esc(s.title)}" loading="lazy">` : ''}
      <div class="service-icon">${s.icon || '⭐'}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
    </div>`).join('');
  initFadeIn();
}

function renderLeadership() {
  const g = document.getElementById('leadership-grid');
  if (!g) return;
  g.innerHTML = state.leadership.map(l => `
    <div class="leader-card fade-in" onclick="openLeaderModal(${l.id})" style="cursor:pointer;">
      <div class="leader-img"><img src="${esc(l.img)}" alt="${esc(l.name)}" loading="lazy"></div>
      <div class="leader-info">
        <h3>${esc(l.name)}</h3>
        <div class="role">${esc(l.role)}</div>
        <p>${esc(l.desc)}</p>
        <span class="leader-view-more">View Profile →</span>
      </div>
    </div>`).join('');
  initFadeIn();
}

// ══════════ GALLERY SLIDESHOW ══════════
let slideIdx = 0, slideTimer = null;

function renderGallery() {
  const wrap = document.getElementById('gallery-slideshow');
  if (!wrap) return;
  const items = getGalleryItems();
  if (!items.length) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = `
    <div class="slideshow-track" id="slideshow-track">
      ${items.map((item, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}" data-idx="${i}">
          <img src="${esc(item.url)}" alt="${esc(item.cap || '')}">
          ${item.cap ? `<div class="slide-caption">${esc(item.cap)}</div>` : ''}
        </div>`).join('')}
    </div>
    <button class="slide-btn slide-prev" onclick="slideGo(-1)">&#10094;</button>
    <button class="slide-btn slide-next" onclick="slideGo(1)">&#10095;</button>
    <div class="slide-dots">
      ${items.map((_,i) => `<button class="slide-dot ${i===0?'active':''}" onclick="slideTo(${i})"></button>`).join('')}
    </div>`;
  slideIdx = 0;
  startSlideshow();
}

function startSlideshow() {
  clearInterval(slideTimer);
  const secs = getGalleryInterval();
  if (secs > 0) slideTimer = setInterval(() => slideGo(1), secs * 1000);
}

function slideTo(idx) {
  const items = getGalleryItems();
  slideIdx = (idx + items.length) % items.length;
  document.querySelectorAll('.slide').forEach((s,i) => s.classList.toggle('active', i === slideIdx));
  document.querySelectorAll('.slide-dot').forEach((d,i) => d.classList.toggle('active', i === slideIdx));
  clearInterval(slideTimer);
  startSlideshow();
}

function slideGo(dir) { slideTo(slideIdx + dir); }

function renderTestimonials() {
  const g = document.getElementById('testimonials-grid');
  if (!g) return;
  g.innerHTML = state.testimonials.map(t => `
    <div class="testi-card fade-in">
      <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="testi-text">"${esc(t.text)}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
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

// ══════════ CUSTOM SECTIONS ══════════
function renderCustomSections() {
  const container = document.getElementById('custom-sections-container');
  if (!container) return;
  const sections = state.customSections || [];
  const visible  = sections.filter(cs => cs.visible !== false);

  // Rebuild custom nav items
  document.querySelectorAll('.custom-nav-item').forEach(el => el.remove());
  const contactLi = document.getElementById('nav-contact');
  const mobContactA = document.getElementById('mob-contact');
  visible.slice().reverse().forEach(cs => {
    if (contactLi) {
      const li = document.createElement('li');
      li.className = 'custom-nav-item'; li.id = 'nav-cs-' + cs.id;
      li.innerHTML = `<a href="#cs-${cs.id}">${esc(cs.title)}</a>`;
      contactLi.parentNode.insertBefore(li, contactLi);
    }
    if (mobContactA) {
      const a = document.createElement('a');
      a.className = 'custom-nav-item'; a.id = 'mob-cs-' + cs.id;
      a.href = '#cs-' + cs.id; a.textContent = cs.title;
      a.onclick = () => closeMobile();
      mobContactA.parentNode.insertBefore(a, mobContactA);
    }
  });

  container.innerHTML = visible.map(cs => `
    <section id="cs-${cs.id}" class="custom-section">
      <div style="text-align:center;margin-bottom:2.5rem;">
        ${cs.tag ? `<p class="section-tag">${esc(cs.tag)}</p>` : ''}
        <h2 class="section-title"><span>${esc(cs.title)}</span></h2>
        <div class="divider" style="margin:1rem auto 0;"></div>
      </div>
      ${renderCsBody(cs)}
    </section>`).join('');
  initFadeIn();
}

function renderCsBody(cs) {
  const d = cs.data || {};
  switch (cs.layout) {
    case 'content-block':
      return `<div class="about-grid">
        ${d.img ? `<div class="about-img fade-in"><img src="${esc(d.img)}" alt="${esc(cs.title)}"></div>` : ''}
        <div class="about-text fade-in">
          ${d.p1 ? `<p>${esc(d.p1)}</p>` : ''}
          ${d.p2 ? `<p style="margin-top:1rem;">${esc(d.p2)}</p>` : ''}
        </div>
      </div>`;
    case 'card-grid':
      return `<div class="cs-card-grid">
        ${(d.items||[]).map(item => `
          <div class="cs-card fade-in">
            ${item.img ? `<img src="${esc(item.img)}" alt="${esc(item.name)}" loading="lazy">` : ''}
            <div class="cs-card-body"><h3>${esc(item.name)}</h3><p>${esc(item.desc)}</p></div>
          </div>`).join('')}
      </div>`;
    case 'icon-grid':
      return `<div class="services-grid">
        ${(d.items||[]).map(item => `
          <div class="service-card fade-in">
            <div class="service-icon">${item.icon || '⭐'}</div>
            <h3>${esc(item.title)}</h3><p>${esc(item.desc)}</p>
          </div>`).join('')}
      </div>`;
    case 'centered-text':
      return `<div class="cs-centered-text fade-in"><p>${esc(d.body || '')}</p></div>`;
    default: return '';
  }
}

// ══════════ PRODUCT MODAL ══════════
let currentProductId = null, modalImgIdx = 0;

function openModal(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  currentProductId = id;
  modalImgIdx = 0;
  _modalQty = 1;
  const imgs = getProductImages(p);
  renderModalImages(imgs);
  setTxt('modal-name',  p.name);
  setTxt('modal-price', fmtPrice(p.price));
  setTxt('modal-desc',  p.fullDesc || p.desc);
  // Cart mode
  const cartEnabled = state.payment?.cart?.enabled !== false;
  const qtyRow = document.getElementById('modal-qty-row');
  const addBtn = document.getElementById('add-to-cart-btn');
  const qtyVal = document.getElementById('modal-qty-val');
  const qtyMax = document.getElementById('modal-qty-max');
  if (qtyRow) qtyRow.style.display = cartEnabled ? '' : 'none';
  if (addBtn) addBtn.style.display = cartEnabled ? '' : 'none';
  if (qtyVal) qtyVal.textContent = '1';
  if (qtyMax) qtyMax.textContent = '';
  // Hide old payment panel if present
  const panel = document.getElementById('payment-panel');
  if (panel) panel.style.display = 'none';
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModalImages(imgs) {
  const imgEl   = document.getElementById('modal-img');
  const prevBtn = document.getElementById('modal-img-prev');
  const nextBtn = document.getElementById('modal-img-next');
  const dotsEl  = document.getElementById('modal-img-dots');
  if (imgEl) imgEl.src = imgs[modalImgIdx] || '';
  const multi = imgs.length > 1;
  if (prevBtn) prevBtn.style.display = multi ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = multi ? 'flex' : 'none';
  if (dotsEl) {
    dotsEl.innerHTML = multi
      ? imgs.map((_,i) => `<span class="modal-dot ${i===modalImgIdx?'active':''}" onclick="modalGoImg(${i})"></span>`).join('')
      : '';
  }
}

function modalGoImg(idx) {
  const p = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const imgs = getProductImages(p);
  modalImgIdx = (idx + imgs.length) % imgs.length;
  renderModalImages(imgs);
}

function modalNextImg() { modalGoImg(modalImgIdx + 1); }
function modalPrevImg() { modalGoImg(modalImgIdx - 1); }

function closeModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function contactSeller() {
  const p = state.products.find(x => x.id === currentProductId);
  if (p) { const el = document.getElementById('cf-subject'); if (el) el.value = 'Inquiry about: ' + p.name; }
  closeModal();
  document.getElementById('contact').scrollIntoView({ behavior:'smooth' });
}

// ══════════ PAYMENT PANEL ══════════
function togglePaymentPanel() {
  const panel  = document.getElementById('payment-panel');
  const buyBtn = document.getElementById('buy-now-btn');
  if (!panel) return;
  const opening = !panel.classList.contains('open');
  panel.classList.toggle('open');
  if (buyBtn) buyBtn.textContent = opening ? '✕ Close' : '💳 Buy Now';
  if (opening) renderPaymentPanel();
}

function getPayTotals(p) {
  const pmt = state.payment || {};
  const pct  = parseFloat((pmt.charge || {}).pct) || 0;
  const fee  = pct > 0 ? Math.round(p.price * pct / 100) : 0;
  const total = p.price + fee;
  return { pct, fee, total, label: (pmt.charge || {}).label || 'Processing fee' };
}

function renderPaymentPanel() {
  const p = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const { pct, fee, total, label } = getPayTotals(p);
  const gws = (state.payment || {}).gateways || {};

  // Breakdown
  const brkEl = document.getElementById('payment-breakdown');
  if (brkEl) {
    brkEl.innerHTML =
      `<div><span>Product Price</span><span>${fmtNPR(p.price)}</span></div>` +
      (pct > 0 ? `<div><span>${esc(label)} (${pct}%)</span><span>${fmtNPR(fee)}</span></div>` : '') +
      `<div class="pb-total"><span>Total (NPR)</span><span>${fmtNPR(total)}</span></div>`;
  }

  // Gateways
  const gwEl = document.getElementById('payment-gateways');
  if (gwEl) {
    let html = '';
    if (gws.contact?.enabled !== false) html += `<button class="gw-btn gw-contact" onclick="payContact()">✉ Contact Seller</button>`;
    if (gws.stripe?.enabled)  html += `<button class="gw-btn gw-stripe"  onclick="payStripe()">💳 Stripe</button>`;
    if (gws.esewa?.enabled)   html += `<button class="gw-btn gw-esewa"   onclick="payESewa()">🟢 eSewa</button>`;
    if (gws.khalti?.enabled)  html += `<button class="gw-btn gw-khalti"  onclick="payKhalti()">🟣 Khalti</button>`;
    if (gws.fonepay?.enabled) html += `<button class="gw-btn gw-fonepay" onclick="payFonepay()">📲 Fonepay QR</button>`;
    if (gws.eway?.enabled)    html += `<button class="gw-btn gw-eway"    onclick="payEway()">🔴 eWay</button>`;
    gwEl.innerHTML = html;
  }
}

function payContact() {
  const p = state.products.find(x => x.id === currentProductId);
  if (p) { const el = document.getElementById('cf-subject'); if (el) el.value = 'Purchase inquiry: ' + p.name; }
  closeModal();
  document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' });
}

function payStripe() {
  const gw = (state.payment?.gateways?.stripe) || {};
  if (!gw.payLink) { showPayMsg('Stripe payment link not configured.', 'error'); return; }
  sendPaymentConfirmation('Stripe');
  window.open(gw.payLink, '_blank');
}

function payESewa() {
  const p  = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const gw = (state.payment?.gateways?.esewa) || {};
  if (!gw.merchantId) { showPayMsg('eSewa merchant ID not configured.', 'error'); return; }
  const { fee, total } = getPayTotals(p);
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://esewa.com.np/epay/main';
  const fields = {
    tAmt: total, amt: p.price, txAmt: 0, psc: fee, pdc: 0,
    scd: gw.merchantId, pid: getOrderPrefix() + p.id + '-' + Date.now(),
    su:  gw.successUrl || window.location.href,
    fu:  gw.failureUrl || window.location.href
  };
  Object.entries(fields).forEach(([k, v]) => {
    const inp = document.createElement('input');
    inp.type = 'hidden'; inp.name = k; inp.value = v;
    form.appendChild(inp);
  });
  document.body.appendChild(form);
  sendPaymentConfirmation('eSewa');
  form.submit();
}

function payKhalti() {
  const p  = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const gw = (state.payment?.gateways?.khalti) || {};
  if (!gw.pk) { showPayMsg('Khalti public key not configured.', 'error'); return; }
  const { total } = getPayTotals(p);
  const params = new URLSearchParams({
    public_key:       gw.pk,
    product_identity: getOrderPrefix() + p.id,
    product_name:     p.name,
    amount:           total * 100,   // paisa
    product_url:      window.location.href
  });
  sendPaymentConfirmation('Khalti');
  window.open('https://khalti.com/bazaar/?' + params.toString(), '_blank');
}

function payFonepay() {
  const p  = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const gw = (state.payment?.gateways?.fonepay) || {};
  if (!gw.qrImg && !gw.merchantCode) { showPayMsg('Fonepay QR not configured.', 'error'); return; }
  const { total } = getPayTotals(p);
  const qrPanel = document.getElementById('fonepay-qr-panel');
  if (!qrPanel) return;
  qrPanel.style.display = 'block';
  qrPanel.innerHTML =
    (gw.qrImg ? `<img src="${esc(gw.qrImg)}" alt="Fonepay QR">` :
     `<p style="font-size:.9rem;">Merchant Code: <strong>${esc(gw.merchantCode)}</strong></p>`) +
    `<p>Scan &amp; pay <strong>${fmtNPR(total)}</strong></p>` +
    `<p style="margin-top:.3rem;font-size:.75rem;opacity:.7;">After paying, tap the button below to send confirmation.</p>` +
    `<button class="btn btn-primary" style="margin-top:.8rem;padding:.5rem 1.3rem;font-size:.84rem;" onclick="confirmFonepay()">✓ I've Paid</button>`;
}

function confirmFonepay() {
  sendPaymentConfirmation('Fonepay QR');
  showPayMsg('Thank you! Confirmation sent to the seller.', 'success');
}

function payEway() {
  const gw = (state.payment?.gateways?.eway) || {};
  if (!gw.payUrl) { showPayMsg('eWay payment URL not configured.', 'error'); return; }
  sendPaymentConfirmation('eWay');
  window.open(gw.payUrl, '_blank');
}

function sendPaymentConfirmation(gateway) {
  const p   = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const pmt = state.payment || {};
  if (!pmt.email?.enabled) return;
  const ejs = state.emailjs || {};
  const _ejsTid = ejs.tidPayment || ejs.tid || ''; if (!ejs.pk || !ejs.sid || !_ejsTid) return;
  const custName  = document.getElementById('pmt-name')?.value.trim()  || 'Customer';
  const custEmail = document.getElementById('pmt-email')?.value.trim() || '';
  const { total } = getPayTotals(p);
  const replace = str => String(str || '')
    .replace(/{product}/g,  p.name)
    .replace(/{customer}/g, custName)
    .replace(/{amount}/g,   fmtNPR(total))
    .replace(/{gateway}/g,  gateway);
  emailjs.init(ejs.pk);
  emailjs.send(ejs.sid, _ejsTid, {
    from_name: custName, reply_to: custEmail,
    subject:   replace(pmt.email.subject),
    message:   replace(pmt.email.body),
    to_email:  state.contact.email
  }).catch(() => {});
}

function showPayMsg(text, type) {
  const el = document.getElementById('pay-msg');
  if (!el) return;
  el.textContent = text;
  el.className = 'pay-msg ' + type;
  setTimeout(() => { el.className = 'pay-msg'; }, 5000);
}

// ══════════ CART STATE ══════════
let cart = [], _modalQty = 1;

function cartMaxQty() { return (state.payment?.cart?.maxQty) || 10; }
function cartTotalQty() { return cart.reduce((s,i) => s + i.qty, 0); }
function cartSubtotal()  { return cart.reduce((s,i) => s + i.price * i.qty, 0); }

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const btn   = document.getElementById('cart-nav-btn');
  const qty   = cartTotalQty();
  if (badge) badge.textContent = qty;
  if (btn)   btn.style.display = qty > 0 ? 'flex' : 'none';
}

function showCartToast(msg) {
  const el = document.getElementById('cart-toast');
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

function modalQtyChange(delta) {
  const max = cartMaxQty();
  _modalQty = Math.max(1, Math.min(max, _modalQty + delta));
  const el = document.getElementById('modal-qty-val');
  if (el) el.textContent = _modalQty;
  const maxEl = document.getElementById('modal-qty-max');
  if (maxEl) maxEl.textContent = _modalQty >= max ? `Max ${max}` : '';
}

function modalAddToCart() {
  const p = state.products.find(x => x.id === currentProductId);
  if (!p) return;
  const existing = cart.find(i => i.id === p.id);
  const max = cartMaxQty();
  if (existing) { existing.qty = Math.min(existing.qty + _modalQty, max); }
  else { cart.push({ id:p.id, name:p.name, price:p.price, qty:_modalQty, img:getProductImages(p)[0]||'' }); }
  updateCartBadge();
  closeModal();
  showCartToast(`🛒 ${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartBadge(); renderCartPanel();
}

function setCartItemQty(id, qty) {
  if (qty <= 0) { removeFromCart(id); return; }
  const item = cart.find(i => i.id === id);
  if (item) { item.qty = Math.min(qty, cartMaxQty()); }
  updateCartBadge(); renderCartPanel();
}

function openCart() {
  renderCartPanel();
  document.getElementById('cart-panel')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-panel')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartPanel() {
  const itemsEl  = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');
  const countEl  = document.getElementById('cart-count-label');
  if (!itemsEl) return;
  const pct   = parseFloat((state.payment?.charge||{}).pct) || 0;
  const sub   = cartSubtotal();
  const fee   = pct > 0 ? Math.round(sub * pct / 100) : 0;
  const total = sub + fee;
  const label = (state.payment?.charge||{}).label || 'Processing fee';
  const qty   = cartTotalQty();
  if (countEl) countEl.textContent = qty ? `(${qty} item${qty!==1?'s':''})` : '';
  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cart-empty">🛒 Your cart is empty</div>';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${esc(item.img)}" alt="${esc(item.name)}" onerror="this.src='https://placehold.co/60x60/1a3a8f/fff?text=IMG'">
      <div class="cart-item-info">
        <div class="cart-item-name">${esc(item.name)}</div>
        <div class="cart-item-price">${fmtPrice(item.price)}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="cart-qty-btn" onclick="setCartItemQty(${item.id},${item.qty-1})">−</button>
        <span class="cart-qty-num">${item.qty}</span>
        <button class="cart-qty-btn" onclick="setCartItemQty(${item.id},${item.qty+1})">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>`).join('');
  if (footerEl) {
    footerEl.style.display = '';
    const subEl  = document.getElementById('cart-subtotal');
    const feeRow = document.getElementById('cart-fee-row');
    const feeEl  = document.getElementById('cart-fee');
    const feeLbl = document.getElementById('cart-fee-label');
    const totEl  = document.getElementById('cart-total');
    if (subEl)  subEl.textContent  = fmtPrice(sub);
    if (feeRow) feeRow.style.display = pct > 0 ? '' : 'none';
    if (feeEl)  feeEl.textContent  = fmtPrice(fee);
    if (feeLbl) feeLbl.textContent = `${label} (${pct}%)`;
    if (totEl)  totEl.textContent  = fmtPrice(total);
  }
}

// ══════════ CHECKOUT ══════════
let _coStep = 1, _coData = {};

function openCheckout() {
  if (!cart.length) return;
  _coStep = 1;
  _coData = { fulfillment:null, store:null, provider:null, providerCharge:0, customer:{} };
  closeCart();

  // If auth is enabled AND user not signed in AND guest not already chosen → show choice
  const authCfg = state.auth || {};
  if (authCfg.enabled && !_currentUser && authCfg.allowGuest !== false) {
    document.getElementById('guest-choice-overlay').style.display = 'flex';
    return; // checkout will resume via continueAsGuest() or chooseSignIn()
  }
  _proceedToCheckout();
}

function _proceedToCheckout() {
  document.getElementById('checkout-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Pre-fill customer data from logged-in user
  if (_currentUser) {
    _coData.customer = {
      name:  _currentUser.displayName || _currentUser.name || '',
      email: _currentUser.email || '',
      phone: _currentUser.phone || ''
    };
  }
  updateCheckoutSteps(); renderCheckout();
}

function dismissGuestChoice() {
  document.getElementById('guest-choice-overlay').style.display = 'none';
}
function continueAsGuest() {
  dismissGuestChoice();
  _proceedToCheckout();
}
function chooseSignIn() {
  dismissGuestChoice();
  openAuthModal('signin', () => { _proceedToCheckout(); });
}

function closeCheckout() {
  document.getElementById('checkout-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  const steps = document.getElementById('checkout-steps');
  if (steps) steps.style.display = '';
}

function updateCheckoutSteps() {
  for (let i=1;i<=3;i++) {
    const dot = document.getElementById('cstep-'+i);
    if (dot) { dot.classList.remove('active','done'); if(i<_coStep) dot.classList.add('done'); if(i===_coStep) dot.classList.add('active'); }
  }
  const titles = {1:'Fulfillment',2:'Your Details',3:'Payment'};
  const t = document.getElementById('checkout-modal-title');
  if (t) t.textContent = titles[_coStep] || 'Checkout';
}

function renderCheckout() {
  const body = document.getElementById('checkout-body');
  if (!body) return;
  if (_coStep===1) body.innerHTML = renderCOStep1();
  if (_coStep===2) body.innerHTML = renderCOStep2();
  if (_coStep===3) body.innerHTML = renderCOStep3();
}

function renderCOStep1() {
  const co = state.payment?.checkout || {};
  const pickupOn   = co.pickup?.enabled !== false;
  const deliveryOn = co.delivery?.enabled !== false;
  let html = '<div class="co-step-title">How would you like to receive your order?</div><div class="co-fulfill-options">';
  if (pickupOn)   html += `<div class="co-fulfill-card${_coData.fulfillment==='pickup'?' selected':''}" onclick="selectFulfillment('pickup')"><div class="co-fulfill-icon">🏪</div><div class="co-fulfill-label">Store Pickup</div><div class="co-fulfill-sub">Pick up at our store</div></div>`;
  if (deliveryOn) html += `<div class="co-fulfill-card${_coData.fulfillment==='delivery'?' selected':''}" onclick="selectFulfillment('delivery')"><div class="co-fulfill-icon">🚚</div><div class="co-fulfill-label">Home Delivery</div><div class="co-fulfill-sub">Delivered to your doorstep</div></div>`;
  if (!pickupOn && !deliveryOn) html += '<p style="color:var(--text-muted);text-align:center;">No fulfillment methods configured.</p>';
  html += '</div>';
  if (_coData.fulfillment==='pickup') {
    const stores = co.pickup?.stores || [];
    html += '<div class="co-stores-list">';
    stores.forEach(s => { html += `<div class="co-store-item${_coData.store===s.id?' selected':''}" onclick="selectStore(${s.id})"><strong>${esc(s.name)}</strong><br><span>${esc(s.address)}</span>${s.hours?`<br><small>${esc(s.hours)}</small>`:''}</div>`; });
    html += '</div>';
  }
  if (_coData.fulfillment==='delivery') {
    const providers = Object.entries(co.delivery?.providers||{}).filter(([,v])=>v.enabled);
    html += '<div class="co-providers-list">';
    providers.forEach(([key,prov]) => { html += `<div class="co-provider-card${_coData.provider===key?' selected':''}" onclick="selectProvider('${key}',${prov.charge||0})"><div><strong>${esc(prov.label)}</strong><small> — ${esc(prov.info||'')}</small></div><div class="co-provider-charge">${(prov.charge>0)?fmtNPR(prov.charge):'Free'}</div></div>`; });
    if (!providers.length) html += '<p style="color:var(--text-muted);">No delivery providers configured.</p>';
    html += '</div>';
  }
  html += `<div class="co-actions"><button class="btn btn-outline" onclick="closeCheckout()">Cancel</button><button class="btn btn-primary" onclick="coNext1()">Continue →</button></div>`;
  return html;
}

function selectFulfillment(type) { _coData.fulfillment=type; _coData.store=null; _coData.provider=null; _coData.providerCharge=0; renderCheckout(); }
function selectStore(id) { _coData.store=id; renderCheckout(); }
function selectProvider(key,charge) { _coData.provider=key; _coData.providerCharge=charge||0; renderCheckout(); }

function coNext1() {
  const co = state.payment?.checkout || {};
  if (!_coData.fulfillment) { _coShowMsg('Please select a fulfillment method.'); return; }
  if (_coData.fulfillment==='pickup') {
    const stores = co.pickup?.stores||[];
    if (stores.length>1 && !_coData.store) { _coShowMsg('Please select a pickup store.'); return; }
    if (stores.length===1) _coData.store = stores[0].id;
  }
  if (_coData.fulfillment==='delivery' && !_coData.provider) {
    const providers = Object.entries(co.delivery?.providers||{}).filter(([,v])=>v.enabled);
    if (providers.length>1) { _coShowMsg('Please select a delivery provider.'); return; }
    if (providers.length===1) { _coData.provider=providers[0][0]; _coData.providerCharge=providers[0][1].charge||0; }
  }
  _coStep=2; updateCheckoutSteps(); renderCheckout();
}

function renderCOStep2() {
  const fields = (state.payment?.checkout?.customerForm?.fields||[]).filter(f=>f.enabled!==false);
  let html = '<div class="co-step-title">Your Details</div><div class="co-customer-form">';
  fields.forEach(f => {
    if (f.type==='textarea') html += `<div class="co-form-group"><label>${esc(f.label)}${f.required?' *':''}</label><textarea id="co-field-${f.id}" placeholder="${esc(f.label)}" rows="3"></textarea></div>`;
    else html += `<div class="co-form-group"><label>${esc(f.label)}${f.required?' *':''}</label><input type="${esc(f.type)}" id="co-field-${f.id}" placeholder="${esc(f.label)}"></div>`;
  });
  html += '</div>';
  const sub=cartSubtotal(), pct=parseFloat((state.payment?.charge||{}).pct)||0;
  const fee=pct>0?Math.round(sub*pct/100):0, delCh=_coData.providerCharge||0, total=sub+fee+delCh;
  html += `<div class="co-order-summary"><div class="co-sum-title">Order Summary</div>`;
  html += cart.map(i=>`<div class="co-sum-row"><span>${esc(i.name)} × ${i.qty}</span><span>${fmtPrice(i.price*i.qty)}</span></div>`).join('');
  if (pct>0)  html += `<div class="co-sum-row"><span>Processing fee (${pct}%)</span><span>${fmtPrice(fee)}</span></div>`;
  if (delCh>0) html += `<div class="co-sum-row"><span>Delivery charge</span><span>${fmtPrice(delCh)}</span></div>`;
  html += `<div class="co-sum-row co-sum-total"><span>Total</span><span>${fmtPrice(total)}</span></div></div>`;
  html += `<div class="co-actions"><button class="btn btn-outline" onclick="_coStep=1;updateCheckoutSteps();renderCheckout()">← Back</button><button class="btn btn-primary" onclick="coNext2()">Continue →</button></div>`;
  return html;
}

function getCheckoutCustomer() {
  const fields = (state.payment?.checkout?.customerForm?.fields||[]).filter(f=>f.enabled!==false);
  const customer={}, missing=[];
  fields.forEach(f => {
    const el=document.getElementById('co-field-'+f.id);
    const v=el?el.value.trim():'';
    customer[f.label]=v;
    if(f.required&&!v) missing.push(f.label);
  });
  return { customer, missing };
}

function coNext2() {
  const {customer,missing} = getCheckoutCustomer();
  if (missing.length) { _coShowMsg('Please fill in: '+missing.join(', ')); return; }
  _coData.customer=customer; _coStep=3; updateCheckoutSteps(); renderCheckout();
}

function renderCOStep3() {
  const gws = (state.payment?.gateways)||{};
  const sub=cartSubtotal(), pct=parseFloat((state.payment?.charge||{}).pct)||0;
  const fee=pct>0?Math.round(sub*pct/100):0, delCh=_coData.providerCharge||0, total=sub+fee+delCh;
  let html = '<div class="co-step-title">Choose Payment Method</div>';
  html += `<div class="co-order-summary"><div class="co-sum-row co-sum-total"><span>Total to Pay</span><span>${fmtPrice(total)}</span></div></div>`;
  html += '<div class="co-gateways">';
  if (gws.contact?.enabled!==false) html += `<button class="gw-btn gw-contact" onclick="coPayContact()">✉ Contact Seller</button>`;
  if (gws.stripe?.enabled)  html += `<button class="gw-btn gw-stripe"  onclick="coPay('stripe')">💳 Stripe</button>`;
  if (gws.esewa?.enabled)   html += `<button class="gw-btn gw-esewa"   onclick="coPayESewa(${total})">🟢 eSewa</button>`;
  if (gws.khalti?.enabled)  html += `<button class="gw-btn gw-khalti"  onclick="coPayKhalti(${total})">🟣 Khalti</button>`;
  if (gws.fonepay?.enabled) html += `<button class="gw-btn gw-fonepay" onclick="coPayFonepay(${total})">📲 Fonepay QR</button>`;
  if (gws.eway?.enabled)    html += `<button class="gw-btn gw-eway"    onclick="coPay('eway')">🔴 eWay</button>`;
  html += '</div><div id="co-gw-extra"></div>';
  html += '<div class="form-msg" id="co-msg" style="margin-top:.8rem;"></div>';
  html += `<div class="co-actions"><button class="btn btn-outline" onclick="_coStep=2;updateCheckoutSteps();renderCheckout()">← Back</button></div>`;
  return html;
}

function _coTotals() {
  const sub=cartSubtotal(), pct=parseFloat((state.payment?.charge||{}).pct)||0;
  return { sub, fee:pct>0?Math.round(sub*pct/100):0, delCh:_coData.providerCharge||0,
           total:sub+(pct>0?Math.round(sub*pct/100):0)+(_coData.providerCharge||0) };
}

function buildOrder(gateway) {
  const {sub,fee,delCh,total} = _coTotals();
  return { id:getOrderPrefix()+Date.now(), items:cart.map(i=>({id:i.id,name:i.name,price:i.price,qty:i.qty})),
    customer:_coData.customer, fulfillment:_coData.fulfillment, store:_coData.store,
    provider:_coData.provider, subtotal:sub, fee, deliveryCharge:delCh, total,
    gateway, status:'pending', createdAt:new Date().toISOString() };
}

async function submitOrder(gateway) {
  const order = buildOrder(gateway);
  try {
    await DS.saveOrder(order);
  } catch(e) {
    // saveOrder already falls back to localStorage internally; log but don't block
    console.warn('[Order] saveOrder error (order may be in localStorage only):', e.message || e);
  }
  // Email confirmation is always optional — never blocks the order flow
  sendOrderConfirmationEmail(order);
  cart = []; updateCartBadge();
  showCOSuccess(order.id);
}

function sendOrderConfirmationEmail(order) {
  const pmt=state.payment||{}; if(!pmt.email?.enabled) return;
  const ejs=state.emailjs||{}; const _tid=ejs.tidPayment||ejs.tid||''; if(!ejs.pk||!ejs.sid||!_tid) return;
  const custName=Object.values(order.customer)[0]||'Customer';
  const custEmail=order.customer['Email Address']||order.customer['Email']||'';
  const itemsList=order.items.map(i=>`${i.name} × ${i.qty}`).join(', ');
  const replace=str=>String(str||'').replace(/{product}/g,itemsList).replace(/{customer}/g,custName).replace(/{amount}/g,fmtNPR(order.total)).replace(/{gateway}/g,order.gateway);
  emailjs.init(ejs.pk);
  emailjs.send(ejs.sid,_tid,{from_name:custName,reply_to:custEmail,subject:replace(pmt.email.subject),message:replace(pmt.email.body),to_email:state.contact.email}).catch(()=>{});
}

function showCOSuccess(orderId) {
  const body=document.getElementById('checkout-body');
  const steps=document.getElementById('checkout-steps');
  if(steps) steps.style.display='none';
  const t=document.getElementById('checkout-modal-title'); if(t) t.textContent='✅ Order Placed!';
  if(body) body.innerHTML=`<div class="co-success"><div class="co-success-icon">🎉</div><h3>Thank you for your order!</h3><p>Order ID: <strong>${esc(orderId)}</strong></p><p style="color:var(--text-muted);font-size:.9rem;">We'll be in touch soon to confirm your order.</p><button class="btn btn-primary" style="margin-top:1.5rem;" onclick="closeCheckout()">Continue Shopping</button></div>`;
}

function _coShowMsg(msg) {
  const el=document.getElementById('co-msg');
  if(el){el.textContent=msg;el.className='form-msg error';setTimeout(()=>{el.className='form-msg';},4000);}
  else alert(msg);
}

function coPayContact() {
  const custName=Object.values(_coData.customer)[0]||'';
  const el=document.getElementById('cf-subject');
  if(el) el.value='Order inquiry from '+(custName||'customer');
  submitOrder('Contact Seller').then(()=>{ setTimeout(()=>{closeCheckout();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});},1500); });
}

function coPay(gw) {
  const gws=state.payment?.gateways||{};
  if(gw==='stripe') {
    if(!gws.stripe?.payLink){_coShowMsg('Stripe payment link not configured.');return;}
    submitOrder('Stripe').then(()=>setTimeout(()=>window.open(gws.stripe.payLink,'_blank'),500));
  } else if(gw==='eway') {
    if(!gws.eway?.payUrl){_coShowMsg('eWay payment URL not configured.');return;}
    submitOrder('eWay').then(()=>setTimeout(()=>window.open(gws.eway.payUrl,'_blank'),500));
  }
}

function coPayESewa(total) {
  const gws=state.payment?.gateways?.esewa||{};
  if(!gws.merchantId){_coShowMsg('eSewa merchant ID not configured.');return;}
  const form=document.createElement('form'); form.method='POST'; form.action='https://esewa.com.np/epay/main';
  const fields={tAmt:total,amt:cartSubtotal(),txAmt:0,psc:0,pdc:0,scd:gws.merchantId,pid:getOrderPrefix()+Date.now(),su:gws.successUrl||window.location.href,fu:gws.failureUrl||window.location.href};
  Object.entries(fields).forEach(([k,v])=>{const inp=document.createElement('input');inp.type='hidden';inp.name=k;inp.value=v;form.appendChild(inp);});
  document.body.appendChild(form);
  submitOrder('eSewa').then(()=>form.submit());
}

function coPayKhalti(total) {
  const gws=state.payment?.gateways?.khalti||{};
  if(!gws.pk){_coShowMsg('Khalti public key not configured.');return;}
  const params=new URLSearchParams({public_key:gws.pk,product_identity:getOrderPrefix()+'Cart-'+Date.now(),product_name:(state.logo?.brand||'Bista Group')+' Order',amount:total*100,product_url:window.location.href});
  submitOrder('Khalti').then(()=>setTimeout(()=>window.open('https://khalti.com/bazaar/?'+params.toString(),'_blank'),500));
}

function coPayFonepay(total) {
  const gws=state.payment?.gateways?.fonepay||{};
  if(!gws.qrImg&&!gws.merchantCode){_coShowMsg('Fonepay QR not configured.');return;}
  const extra=document.getElementById('co-gw-extra'); if(!extra) return;
  extra.innerHTML=`<div class="fonepay-qr-panel">${gws.qrImg?`<img src="${esc(gws.qrImg)}" alt="Fonepay QR">`:`<p>Merchant Code: <strong>${esc(gws.merchantCode)}</strong></p>`}<p>Scan &amp; pay <strong>${fmtNPR(total)}</strong></p><button class="btn btn-primary" style="margin-top:.8rem;" onclick="coFonepayConfirm()">✓ I've Paid</button></div>`;
}

function coFonepayConfirm() { submitOrder('Fonepay QR'); }

// ══════════ LEADER MODAL ══════════
function openLeaderModal(id) {
  const l = state.leadership.find(x => x.id === id);
  if (!l) return;
  setSrc('leader-modal-img',  l.img);
  setTxt('leader-modal-name', l.name);
  setTxt('leader-modal-role', l.role);
  setTxt('leader-modal-desc', l.fullDesc || l.desc);
  document.getElementById('leader-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLeaderModal() {
  document.getElementById('leader-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ══════════ CONTACT FORM ══════════
function sendContact() {
  const msgEl = document.getElementById('contact-msg');
  const fields = (state.contactForm?.fields || []).filter(f => f.enabled !== false);

  // Collect values from all dynamic fields
  const data = {};
  for (const f of fields) {
    const el = document.getElementById('cf-' + f.key);
    const v  = el ? el.value.trim() : '';
    if (f.required && !v) {
      showFormMsg(msgEl, `Please fill in the required field: ${f.label}`, 'error');
      el?.focus(); return;
    }
    data[f.key] = v;
  }

  // Fallback for legacy static fields if dynamic fields not rendered
  const name  = data.name    || document.getElementById('cf-name')?.value.trim()    || '';
  const email = data.email   || document.getElementById('cf-email')?.value.trim()   || '';
  const subj  = data.subject || document.getElementById('cf-subject')?.value.trim() || '';
  const msg   = data.message || document.getElementById('cf-message')?.value.trim() || '';
  if (!name || !email || !msg) { showFormMsg(msgEl, 'Please fill in all required fields.', 'error'); return; }

  const enq = { id:'ENQ-'+Date.now(), name, email, subject:subj||'Website Inquiry', message:msg,
    extraFields: data, createdAt:new Date().toISOString() };

  // ── Always save enquiry to data store (regardless of EmailJS) ──
  DS.saveEnquiry(enq).catch(() => {});

  function _clearForm() {
    const allKeys = (state.contactForm?.fields||[]).map(f=>'cf-'+f.key);
    const staticIds = ['cf-name','cf-email','cf-subject','cf-message'];
    [...new Set([...allKeys,...staticIds])].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  }

  const ejs = state.emailjs || {};
  const _contactTid = ejs.tidContact || ejs.tid || '';
  if (!ejs.pk || !ejs.sid || !_contactTid || ejs.contactEnabled === false) {
    // EmailJS not configured / disabled — enquiry is already saved, show success
    showFormMsg(msgEl, '✅ Message received! We\'ll be in touch soon.', 'success');
    _clearForm();
    return;
  }

  // ── EmailJS configured — also send email notification ──
  emailjs.init(ejs.pk);
  emailjs.send(ejs.sid, _contactTid, {
    from_name: name, reply_to: email,
    subject:   subj || 'Website Inquiry',
    message:   msg,
    to_email:  state.contact.email
  })
  .then(() => {
    showFormMsg(msgEl, '✅ Message sent! We\'ll be in touch soon.', 'success');
    _clearForm();
  })
  .catch(err => {
    // Email failed but enquiry was already saved — still show success
    showFormMsg(msgEl, '✅ Message received! We\'ll be in touch soon.', 'success');
    _clearForm();
    console.warn('[Contact] EmailJS send failed (enquiry was saved):', err.text || err);
  });
}

function showFormMsg(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.className = 'form-msg ' + type;
  setTimeout(() => { el.className = 'form-msg'; el.style.display = 'none'; }, 6000);
}

// ══════════ MOBILE NAV ══════════
function toggleMobile() { document.getElementById('mobile-menu')?.classList.toggle('open'); }
function closeMobile()  { document.getElementById('mobile-menu')?.classList.remove('open'); }

// ══════════ NAV AUTO-HIDE ══════════
let _lastScrollY = 0;
function handleNavAutoHide() {
  const body = document.body;
  if (!body.classList.contains('nav-autohide')) return;
  if (body.classList.contains('nav-sidebar-left') || body.classList.contains('nav-sidebar-right')) return;
  const nav  = document.querySelector('nav');
  const cur  = window.scrollY;
  if (cur > _lastScrollY && cur > 80) nav?.classList.add('nav-hidden');
  else nav?.classList.remove('nav-hidden');
  _lastScrollY = cur;
}

// ══════════ FADE-IN ══════════
function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold:0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el));
}

// ══════════ MODAL BACKDROP ══════════
document.addEventListener('DOMContentLoaded', () => {
  ['product-modal','leader-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', e => { if (e.target === el) { closeModal(); closeLeaderModal(); } });
  });
});

// ══════════ USER AUTH SYSTEM ══════════
let _currentUser = null;       // Firebase user object or custom user
let _firebaseAuth = null;      // Firebase Auth instance
let _userFavs = [];            // Array of product IDs
let _authCallback = null;      // Called after successful sign-in

/* ── Init auth ── */
async function initAuth() {
  const authCfg = state.auth || {};
  const btn        = document.getElementById('user-auth-btn');
  const mobSignIn  = document.getElementById('mob-signin-link');

  // auth.enabled controls Sign In button visibility (defaults to true).
  // Admin can set enabled:false to fully hide it everywhere.
  const showBtn = authCfg.enabled !== false; // true unless explicitly disabled
  if (btn)       btn.style.display      = showBtn ? 'flex'  : 'none';
  if (mobSignIn) mobSignIn.style.display = showBtn ? 'block' : 'none';
  if (!showBtn) return;

  await _initFirebaseAuth();
}

/* ── Wire up Firebase Auth (called on init and lazily on first sign-in attempt) ── */
async function _initFirebaseAuth() {
  if (_firebaseAuth) return true; // already initialised

  const cfg = (typeof DS !== 'undefined') ? DS.getConfig() : null;
  if (!cfg || !cfg.firebase || !cfg.firebase.apiKey) return false; // Firebase not configured yet

  try {
    if (typeof firebase === 'undefined') return false; // Firebase SDK not loaded

    // Load Auth compat SDK if needed — use jsDelivr, NOT gstatic.com
    // gstatic.com is blocked by Firefox Focus and other privacy browsers.
    // jsDelivr mirrors the Firebase npm package and is not on any tracker block list.
    if (!firebase.auth) {
      await _loadAuthScript('https://cdn.jsdelivr.net/npm/firebase@9.23.0/firebase-auth-compat.js');
    }
    _firebaseAuth = firebase.auth();
    _firebaseAuth.onAuthStateChanged(user => {
      _currentUser = user;
      _onAuthStateChange(user);
    });

    // ── Handle redirect result from Google Sign-In (mobile redirect flow) ──
    // After signInWithRedirect(), Google sends the user back to this page.
    // getRedirectResult() resolves with the signed-in user on that return visit.
    try {
      const result = await _firebaseAuth.getRedirectResult();
      if (result && result.user) {
        // User just returned from Google OAuth redirect — close modal if open
        closeAuthModal();
        if (_authCallback) { _authCallback(); _authCallback = null; }
        sessionStorage.removeItem('_bista_auth_redirect');
      }
    } catch(e) {
      // auth/no-current-user is normal (not a redirect result) — ignore it
      if (e.code && e.code !== 'auth/no-current-user') {
        console.warn('[Auth] Redirect result error:', e.code, e.message);
      }
    }

    return true;
  } catch(e) {
    console.warn('[Auth] Firebase Auth init failed:', e.message);
    return false;
  }
}

function _loadAuthScript(src) {
  return new Promise((res,rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src=src; s.onload=res; s.onerror=()=>rej(new Error('Failed: '+src));
    document.head.appendChild(s);
  });
}

async function _onAuthStateChange(user) {
  const btn        = document.getElementById('user-auth-btn');
  const label      = document.getElementById('user-auth-label');
  const mobLabel   = document.getElementById('mob-signin-label');
  if (user) {
    _currentUser = user;
    const firstName = (user.displayName||user.email||'Account').split(' ')[0];
    if (label)    label.textContent    = firstName;
    if (mobLabel) mobLabel.textContent = '👤 ' + firstName;
    if (btn) btn.classList.add('signed-in');
    // Load favourites
    _userFavs = await DS.getUserFavourites(user.uid).catch(()=>[]);
    renderProducts(); // re-render with heart state
    // Sync user profile to data store
    DS.saveCustomerUser({
      uid: user.uid, email: user.email, name: user.displayName||'',
      avatar: user.photoURL||'', authProvider: user.providerData?.[0]?.providerId||'email',
      emailVerified: user.emailVerified, lastSeen: new Date().toISOString(),
      createdAt: user.metadata?.creationTime || new Date().toISOString()
    }).catch(()=>{});
  } else {
    _currentUser = null;
    _userFavs = [];
    if (label)    label.textContent    = 'Sign In';
    if (mobLabel) mobLabel.textContent = 'Sign In / My Account';
    if (btn) btn.classList.remove('signed-in');
    renderProducts();
  }
}

function authBtnClick() {
  if (_currentUser) openProfile();
  else openAuthModal('signin');
}

/* ── Auth Modal ── */
function openAuthModal(mode, callback) {
  _authCallback = callback || null;
  const overlay = document.getElementById('auth-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderAuthModal(mode || 'signin');
}

function closeAuthModal() {
  document.getElementById('auth-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  _authCallback = null;
}

function renderAuthModal(mode) {
  const c = document.getElementById('auth-modal-content');
  if (!c) return;
  const authCfg  = state.auth || {};
  const brand    = state.logo?.brand || 'Bista Group';
  const hasGoogle = authCfg.googleEnabled !== false; // show unless explicitly disabled

  if (mode === 'signin') {
    c.innerHTML = `
      <div class="auth-logo">🛡</div>
      <h2 class="auth-title">Welcome back</h2>
      <p class="auth-sub">Sign in to <strong>${esc(brand)}</strong></p>
      ${hasGoogle ? `<button class="btn btn-google auth-google-btn" onclick="doGoogleSignIn()">
        <svg viewBox="0 0 24 24" width="18" height="18" style="margin-right:.5rem;vertical-align:middle;"><path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
      <div class="auth-divider"><span>or</span></div>` : ''}
      <div id="auth-err" class="auth-err" style="display:none;"></div>
      <div class="form-group"><label>Email</label><input type="email" id="auth-email" placeholder="you@email.com" autocomplete="email"></div>
      <div class="form-group"><label>Password</label><input type="password" id="auth-pass" placeholder="••••••••" autocomplete="current-password" onkeydown="if(event.key==='Enter')doSignIn()"></div>
      <button class="btn btn-primary auth-submit-btn" onclick="doSignIn()">Sign In</button>
      <div class="auth-footer-links">
        <a href="#" onclick="renderAuthModal('forgot');return false;">Forgot password?</a>
        <a href="#" onclick="renderAuthModal('signup');return false;">Create account →</a>
      </div>`;
  } else if (mode === 'signup') {
    const extraFields = (authCfg.signupFields||[]).filter(f=>f.enabled!==false);
    c.innerHTML = `
      <div class="auth-logo">✨</div>
      <h2 class="auth-title">Create Account</h2>
      <p class="auth-sub">Join <strong>${esc(brand)}</strong></p>
      ${hasGoogle ? `<button class="btn btn-google auth-google-btn" onclick="doGoogleSignIn()">
        <svg viewBox="0 0 24 24" width="18" height="18" style="margin-right:.5rem;vertical-align:middle;"><path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Sign up with Google
      </button>
      <div class="auth-divider"><span>or</span></div>` : ''}
      <div id="auth-err" class="auth-err" style="display:none;"></div>
      ${extraFields.map(f=>{ const req=f.required?'*':''; return `<div class="form-group"><label>${esc(f.label)}${req?` <span style="color:var(--secondary)">${req}</span>`:''}</label><input type="${esc(f.type||'text')}" id="auth-f-${f.key}" placeholder="${esc(f.placeholder||f.label)}"></div>`; }).join('')}
      <div class="form-group"><label>Email <span style="color:var(--secondary)">*</span></label><input type="email" id="auth-email" placeholder="you@email.com" autocomplete="email"></div>
      <div class="form-group"><label>Password <span style="color:var(--secondary)">*</span></label><input type="password" id="auth-pass" placeholder="Min. 6 characters" autocomplete="new-password"></div>
      <div class="form-group"><label>Confirm Password <span style="color:var(--secondary)">*</span></label><input type="password" id="auth-pass2" placeholder="Repeat password" onkeydown="if(event.key==='Enter')doSignUp()"></div>
      <button class="btn btn-primary auth-submit-btn" onclick="doSignUp()">Create Account</button>
      <div class="auth-footer-links">
        <a href="#" onclick="renderAuthModal('signin');return false;">← Already have an account?</a>
      </div>`;
  } else if (mode === 'forgot') {
    c.innerHTML = `
      <div class="auth-logo">🔑</div>
      <h2 class="auth-title">Reset Password</h2>
      <p class="auth-sub">We'll send a reset link to your email.</p>
      <div id="auth-err" class="auth-err" style="display:none;"></div>
      <div id="auth-ok"  class="auth-ok"  style="display:none;"></div>
      <div class="form-group"><label>Email</label><input type="email" id="auth-email" placeholder="you@email.com" onkeydown="if(event.key==='Enter')doResetPassword()"></div>
      <button class="btn btn-primary auth-submit-btn" onclick="doResetPassword()">Send Reset Link</button>
      <div class="auth-footer-links">
        <a href="#" onclick="renderAuthModal('signin');return false;">← Back to Sign In</a>
      </div>`;
  } else if (mode === 'verify') {
    c.innerHTML = `
      <div class="auth-logo">📧</div>
      <h2 class="auth-title">Verify Your Email</h2>
      <p class="auth-sub">We sent a verification link to <strong>${esc(_currentUser?.email||'')}</strong>. Please check your inbox and click the link to activate your account.</p>
      <button class="btn btn-outline auth-submit-btn" style="margin-top:.5rem;" onclick="doSignOut()">Sign Out</button>
      <button class="btn btn-primary auth-submit-btn" onclick="doResendVerification()">Resend Email</button>`;
  }
}

function _authErr(msg) {
  const el = document.getElementById('auth-err');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

async function doSignIn() {
  const email = document.getElementById('auth-email')?.value.trim();
  const pass  = document.getElementById('auth-pass')?.value;
  if (!email || !pass) { _authErr('Please enter email and password.'); return; }

  // Lazy-init Firebase Auth if not ready yet
  if (!_firebaseAuth) {
    const ok = await _initFirebaseAuth();
    if (!ok) {
      const cfg = (typeof DS !== 'undefined') ? DS.getConfig() : null;
      if (typeof firebase === 'undefined') {
        _authErr('⚠️ Sign-in scripts were blocked by your browser\'s content filter. ' +
          'Try disabling content blocking for this site, or use a different browser.');
      } else if (!cfg || !cfg.firebase || !cfg.firebase.apiKey) {
        _authErr('⚙️ Sign-in is not available yet — Firebase has not been configured for this site. Please contact the site owner.');
      } else {
        _authErr('⚙️ Sign-in could not be initialised. Please refresh the page and try again.');
      }
      return;
    }
  }

  const btn = document.querySelector('.auth-submit-btn');
  if (btn) { btn.textContent = 'Signing in…'; btn.disabled = true; }
  try {
    await _firebaseAuth.signInWithEmailAndPassword(email, pass);
    closeAuthModal();
    if (_authCallback) { _authCallback(); _authCallback = null; }
  } catch(e) {
    const msgs = {
      'auth/user-not-found':    'No account found with this email. Try creating one.',
      'auth/wrong-password':    'Incorrect password. Try again or reset it.',
      'auth/invalid-email':     'That doesn\'t look like a valid email address.',
      'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
      'auth/invalid-credential':'Email or password is incorrect.',
      'auth/network-request-failed': 'Network error. Check your internet connection.',
      'auth/unauthorized-domain': 'This domain is not authorised in Firebase. Add it under Firebase Console → Authentication → Settings → Authorised Domains.'
    };
    _authErr(msgs[e.code] || e.message);
    if (btn) { btn.textContent = 'Sign In'; btn.disabled = false; }
  }
}

async function doSignUp() {
  const email = document.getElementById('auth-email')?.value.trim();
  const pass  = document.getElementById('auth-pass')?.value;
  const pass2 = document.getElementById('auth-pass2')?.value;
  if (!email || !pass) { _authErr('Please fill in all required fields.'); return; }
  if (pass !== pass2)  { _authErr('Passwords do not match.'); return; }
  if (pass.length < 6) { _authErr('Password must be at least 6 characters.'); return; }

  // Lazy-init Firebase Auth if not ready yet
  if (!_firebaseAuth) {
    const ok = await _initFirebaseAuth();
    if (!ok) {
      _authErr('⚙️ Sign-in is not available yet — Firebase has not been configured for this site. Please contact the site owner.');
      return;
    }
  }
  const btn = document.querySelector('.auth-submit-btn');
  if (btn) { btn.textContent = 'Creating…'; btn.disabled = true; }

  // Collect extra signup fields
  const extraData = {};
  (state.auth?.signupFields||[]).filter(f=>f.enabled!==false).forEach(f=>{
    const el = document.getElementById('auth-f-'+f.key);
    if (el) extraData[f.key] = el.value.trim();
  });

  try {
    const cred = await _firebaseAuth.createUserWithEmailAndPassword(email, pass);
    const user = cred.user;
    // Update display name
    const displayName = extraData.name || email.split('@')[0];
    await user.updateProfile({ displayName }).catch(()=>{});
    // Email verification
    if (state.auth?.emailVerification) {
      await user.sendEmailVerification().catch(()=>{});
      renderAuthModal('verify');
    } else {
      closeAuthModal();
      if (_authCallback) { _authCallback(); _authCallback = null; }
    }
  } catch(e) {
    const msgs = {
      'auth/email-already-in-use':'An account with this email already exists.',
      'auth/invalid-email':'Invalid email address.',
      'auth/weak-password':'Password is too weak.'
    };
    _authErr(msgs[e.code] || e.message);
    if (btn) { btn.textContent = 'Create Account'; btn.disabled = false; }
  }
}

// Detect mobile/tablet so we can use redirect instead of popup
function _isMobileBrowser() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

async function doGoogleSignIn() {
  // Lazy-init Firebase Auth if not ready yet
  if (!_firebaseAuth) {
    const ok = await _initFirebaseAuth();
    if (!ok) {
      const cfg = (typeof DS !== 'undefined') ? DS.getConfig() : null;
      if (!cfg || !cfg.firebase || !cfg.firebase.apiKey) {
        _authErr('⚙️ Firebase is not configured yet. The site owner needs to connect a Firebase project in the Admin Panel → Configuration → Data Storage Backend.');
      } else if (typeof firebase === 'undefined') {
        // Firebase SDK failed to load — most likely blocked by a content/ad blocker
        _authErr('⚠️ Sign-in scripts were blocked by your browser\'s content filter. ' +
          'Try disabling content blocking for this site, or use a different browser.');
      } else {
        _authErr('⚙️ Google Sign-In could not be initialised. Please refresh the page and try again.');
      }
      return;
    }
  }

  try {
    const provider = new firebase.auth.GoogleAuthProvider();

    if (_isMobileBrowser()) {
      // ── Mobile: use redirect flow ──
      // Popups are blocked by default on iOS Safari, Firefox iOS, Chrome iOS.
      // Redirect sends user to Google, they sign in, then Google redirects back.
      // getRedirectResult() in _initFirebaseAuth() handles the return.
      sessionStorage.setItem('_bista_auth_redirect', '1');
      await _firebaseAuth.signInWithRedirect(provider);
      // Execution stops here — browser navigates away to Google
    } else {
      // ── Desktop: use popup flow ──
      await _firebaseAuth.signInWithPopup(provider);
      closeAuthModal();
      if (_authCallback) { _authCallback(); _authCallback = null; }
    }
  } catch(e) {
    if (e.code === 'auth/popup-blocked') {
      // Desktop popup was blocked — fall back to redirect automatically
      try {
        const provider2 = new firebase.auth.GoogleAuthProvider();
        sessionStorage.setItem('_bista_auth_redirect', '1');
        await _firebaseAuth.signInWithRedirect(provider2);
      } catch(e2) { _authErr(e2.message); }
    } else if (e.code === 'auth/unauthorized-domain') {
      _authErr('This domain is not authorised in Firebase. Add it under Firebase Console → Authentication → Settings → Authorised Domains.');
    } else if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
      _authErr(e.message);
    }
  }
}

async function doSignOut() {
  try {
    if (_firebaseAuth) await _firebaseAuth.signOut();
    _currentUser = null; _userFavs = [];
    closeProfile();
    const label = document.getElementById('user-auth-label');
    if (label) label.textContent = 'Sign In';
    document.getElementById('user-auth-btn')?.classList.remove('signed-in');
    renderProducts();
  } catch(e) { console.warn('[Auth] signOut error', e); }
}

async function doResetPassword() {
  const email = document.getElementById('auth-email')?.value.trim();
  if (!email) { _authErr('Please enter your email address.'); return; }
  if (!_firebaseAuth) {
    const ok = await _initFirebaseAuth();
    if (!ok) { _authErr('Authentication not configured.'); return; }
  }
  try {
    await _firebaseAuth.sendPasswordResetEmail(email);
    const ok = document.getElementById('auth-ok');
    if (ok) { ok.textContent = '✅ Reset link sent! Check your inbox.'; ok.style.display='block'; }
    const err = document.getElementById('auth-err'); if(err) err.style.display='none';
  } catch(e) {
    const msgs = { 'auth/user-not-found':'No account found with that email.', 'auth/invalid-email':'Invalid email address.' };
    _authErr(msgs[e.code] || e.message);
  }
}

async function doResendVerification() {
  try {
    await _currentUser?.sendEmailVerification();
    alert('Verification email resent! Check your inbox.');
  } catch(e) { alert(e.message); }
}

/* ── Favourites ── */
async function toggleFavourite(productId) {
  if (!_currentUser) { openAuthModal('signin'); return; }
  const idx = _userFavs.indexOf(productId);
  if (idx >= 0) _userFavs.splice(idx, 1); else _userFavs.push(productId);
  await DS.setUserFavourites(_currentUser.uid, _userFavs).catch(()=>{});
  renderProducts();
  // Update profile if open
  if (document.getElementById('profile-panel')?.classList.contains('open')) {
    if (document.getElementById('ptab-favourites')?.classList.contains('active')) {
      renderProfileTab('favourites');
    }
  }
}

/* ── User Profile Panel ── */
function openProfile() {
  if (!_currentUser) { openAuthModal('signin'); return; }
  const panel = document.getElementById('profile-panel');
  const dim   = document.getElementById('profile-dim');
  if (panel) panel.classList.add('open');
  if (dim)   dim.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderProfileHeader();
  switchProfileTab('overview');
}

function closeProfile() {
  document.getElementById('profile-panel')?.classList.remove('open');
  document.getElementById('profile-dim')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderProfileHeader() {
  const el = document.getElementById('profile-head-info');
  if (!el || !_currentUser) return;
  const name   = _currentUser.displayName || _currentUser.email || 'User';
  const initials = name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const avatar = _currentUser.photoURL;
  el.innerHTML = `
    <div class="profile-avatar">${avatar ? `<img src="${esc(avatar)}" alt="">` : `<span>${initials}</span>`}</div>
    <div class="profile-head-text">
      <strong>${esc(name)}</strong>
      <span>${esc(_currentUser.email||'')}</span>
      ${_currentUser.emailVerified === false ? '<span class="profile-unverified">Email not verified</span>' : ''}
    </div>`;
}

function switchProfileTab(tab) {
  document.querySelectorAll('.p-tab').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ptab-'+tab);
  if (btn) btn.classList.add('active');
  renderProfileTab(tab);
}

async function renderProfileTab(tab) {
  const body = document.getElementById('profile-body');
  if (!body || !_currentUser) return;

  if (tab === 'overview') {
    const allOrders = DS ? (await DS.getOrders().catch(()=>[])) : [];
    const myOrders  = allOrders.filter(o => o.customer?.email === _currentUser.email);
    const pending   = myOrders.filter(o => o.status === 'pending').length;
    const name      = _currentUser.displayName || 'there';
    body.innerHTML = `
      <div class="profile-overview">
        <h3 class="profile-section-title">Hello, ${esc(name.split(' ')[0])} 👋</h3>
        <div class="profile-stats-grid">
          <div class="profile-stat"><span class="ps-num">${myOrders.length}</span><span class="ps-lbl">Total Orders</span></div>
          <div class="profile-stat"><span class="ps-num">${pending}</span><span class="ps-lbl">Pending</span></div>
          <div class="profile-stat"><span class="ps-num">${_userFavs.length}</span><span class="ps-lbl">Favourites</span></div>
        </div>
        ${myOrders.length ? `
        <h4 class="profile-section-title" style="margin-top:1.5rem;">Recent Orders</h4>
        <div class="profile-orders-list">${myOrders.slice(0,3).map(o=>_renderOrderRow(o)).join('')}</div>
        <a href="#" onclick="switchProfileTab('orders');return false;" class="profile-see-all">See all orders →</a>` : `
        <div class="profile-empty-state">
          <div style="font-size:2.5rem;">🛒</div>
          <p>No orders yet. Start shopping!</p>
          <button class="btn btn-primary" style="margin-top:1rem;" onclick="closeProfile()">Browse Products</button>
        </div>`}
        ${_userFavs.length ? `
        <h4 class="profile-section-title" style="margin-top:1.5rem;">Saved Items</h4>
        <div class="profile-favs-mini">${_userFavs.slice(0,4).map(id=>{
          const p=state.products.find(x=>x.id===id);
          if(!p) return '';
          const img=getProductImages(p)[0];
          return `<div class="fav-mini-card" onclick="closeProfile();openModal(${p.id})"><img src="${esc(img)}" alt="${esc(p.name)}"><span>${esc(p.name)}</span></div>`;
        }).join('')}</div>
        <a href="#" onclick="switchProfileTab('favourites');return false;" class="profile-see-all">See all favourites →</a>` : ''}
      </div>`;

  } else if (tab === 'orders') {
    const allOrders = DS ? (await DS.getOrders().catch(()=>[])) : [];
    const myOrders  = allOrders.filter(o => o.customer?.email === _currentUser.email);
    body.innerHTML = myOrders.length
      ? `<div class="profile-orders-list full">${myOrders.map(o=>_renderOrderRow(o)).join('')}</div>`
      : `<div class="profile-empty-state"><div style="font-size:2.5rem;">📦</div><p>No orders yet.</p></div>`;

  } else if (tab === 'favourites') {
    const favProds = _userFavs.map(id=>state.products.find(p=>p.id===id)).filter(Boolean);
    body.innerHTML = favProds.length ? `
      <div class="profile-favs-grid">
        ${favProds.map(p=>{
          const img = getProductImages(p)[0];
          return `<div class="profile-fav-card">
            <div class="pfc-img" onclick="closeProfile();openModal(${p.id})"><img src="${esc(img)}" alt="${esc(p.name)}"></div>
            <div class="pfc-info">
              <strong>${esc(p.name)}</strong>
              <span>${fmtPrice(p.price)}</span>
            </div>
            <div class="pfc-actions">
              <button class="btn btn-primary" style="flex:1;padding:8px;" onclick="closeProfile();openModal(${p.id})">View</button>
              <button class="btn btn-outline" style="padding:8px 12px;" onclick="toggleFavourite(${p.id})" title="Remove">🗑</button>
            </div>
          </div>`;
        }).join('')}
      </div>` : `<div class="profile-empty-state"><div style="font-size:2.5rem;">❤</div><p>No saved items yet.<br>Click the ♡ on any product to save it.</p></div>`;

  } else if (tab === 'settings') {
    const u = _currentUser;
    body.innerHTML = `
      <div class="profile-settings">
        <h3 class="profile-section-title">Account Settings</h3>
        <div class="admin-card" style="padding:1.2rem;">
          <h4 style="margin-bottom:1rem;font-size:.95rem;">Profile Information</h4>
          <div class="form-group"><label>Display Name</label><input type="text" id="ps-name" value="${esc(u.displayName||'')}"></div>
          <button class="btn btn-primary" style="padding:10px 20px;font-size:.85rem;" onclick="saveProfileSettings()">Save Changes</button>
        </div>
        <div class="admin-card" style="padding:1.2rem;margin-top:1rem;">
          <h4 style="margin-bottom:.5rem;font-size:.95rem;">Security</h4>
          <p style="color:var(--text-muted);font-size:.82rem;margin-bottom:1rem;">Signed in as <strong>${esc(u.email||'')}</strong> via ${u.providerData?.[0]?.providerId||'email'}</p>
          ${u.providerData?.[0]?.providerId==='password' ? `
          <div class="form-group"><label>New Password</label><input type="password" id="ps-newpass" placeholder="Leave blank to keep current"></div>
          <button class="btn btn-outline" style="padding:10px 20px;font-size:.85rem;" onclick="saveNewPassword()">Update Password</button>` : ''}
        </div>
        <div class="admin-card" style="padding:1.2rem;margin-top:1rem;border-color:rgba(239,68,68,.3);">
          <button class="btn" style="background:rgba(239,68,68,.15);color:#f87171;border:1px solid rgba(239,68,68,.3);padding:10px 20px;font-size:.85rem;width:100%;" onclick="doSignOut()">Sign Out of Account</button>
        </div>
      </div>`;
  }
}

function _renderOrderRow(o) {
  const si = (typeof DS !== 'undefined') ? DS.statusInfo(o.status) : { label:o.status, color:'#8899bb' };
  return `<div class="profile-order-row" onclick="this.querySelector('.por-detail').classList.toggle('open')">
    <div class="por-main">
      <span class="por-id">${esc(o.id)}</span>
      <span class="por-date">${o.createdAt ? new Date(o.createdAt).toLocaleDateString() : ''}</span>
      <span class="por-status" style="color:${si.color}">${si.icon||''} ${si.label}</span>
    </div>
    <div class="por-detail">
      ${(o.items||[]).map(i=>`<div class="por-item"><span>${esc(i.name)} × ${i.qty}</span><span>${fmtPrice(i.price*i.qty)}</span></div>`).join('')}
      <div class="por-total"><strong>Total: ${fmtPrice(o.total||0)}</strong></div>
    </div>
  </div>`;
}

async function saveProfileSettings() {
  if (!_currentUser || !_firebaseAuth) return;
  const name = document.getElementById('ps-name')?.value.trim();
  try {
    if (name) await _currentUser.updateProfile({ displayName: name });
    renderProfileHeader();
    alert('Profile updated!');
  } catch(e) { alert(e.message); }
}

async function saveNewPassword() {
  const pass = document.getElementById('ps-newpass')?.value;
  if (!pass || pass.length < 6) { alert('Password must be at least 6 characters.'); return; }
  try {
    await _currentUser.updatePassword(pass);
    alert('Password updated!');
    document.getElementById('ps-newpass').value = '';
  } catch(e) { alert(e.code === 'auth/requires-recent-login' ? 'Please sign out and sign in again before changing your password.' : e.message); }
}

// ══════════ FALLBACK: load from static data.json ══════════
// After loading data.json, we also check localStorage for admin overrides.
// The admin panel writes auth/design/theme/typography to 'bista_config_override'
// so changes take effect on the main site immediately (no need to re-download data.json).
const LS_OVERRIDE_KEY = 'bista_config_override';

function _applyLocalOverride() {
  try {
    const raw = localStorage.getItem(LS_OVERRIDE_KEY);
    if (!raw) return;
    const override = JSON.parse(raw);
    if (override.auth       != null) state.auth       = { ...state.auth,       ...override.auth };
    if (override.design     != null) state.design     = { ...state.design,     ...override.design };
    if (override.theme      != null) state.theme      = { ...state.theme,      ...override.theme };
    if (override.typography != null) state.typography = { ...state.typography, ...override.typography };
  } catch(e) {
    // Silently ignore malformed override
  }
}

function loadFromJson() {
  fetch('./data.json')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      Object.keys(DEFAULTS).forEach(k => {
        if (data[k] !== undefined && data[k] !== null) state[k] = data[k];
      });
      // Apply Firebase/Supabase config from data.json — ensures orders sync to Firebase on all devices
      if (data.dsConfig && data.dsConfig.backend && data.dsConfig.backend !== 'local') {
        DS.setConfig(data.dsConfig);
      }
      // Deep-merge payment so missing keys get defaults
      if (data.payment) {
        const dp = DEFAULTS.payment;
        const dco = dp.checkout;
        const ico = (data.payment.checkout || {});
        state.payment = {
          ...dp, ...data.payment,
          cart:     { ...dp.cart,     ...(data.payment.cart     || {}) },
          currency: { ...dp.currency, ...(data.payment.currency || {}) },
          charge:   { ...dp.charge,   ...(data.payment.charge   || {}) },
          gateways: { ...dp.gateways, ...(data.payment.gateways || {}) },
          email:    { ...dp.email,    ...(data.payment.email    || {}) },
          checkout: {
            ...dco, ...ico,
            customerForm: { ...dco.customerForm, ...(ico.customerForm || {}),
              fields: (ico.customerForm?.fields || dco.customerForm.fields) },
            pickup:   { ...dco.pickup,   ...(ico.pickup   || {}),
              stores: (ico.pickup?.stores   || dco.pickup.stores) },
            delivery: { ...dco.delivery, ...(ico.delivery || {}),
              providers: { ...dco.delivery.providers, ...(ico.delivery?.providers || {}) } }
          }
        };
      }
      // Apply any admin-panel overrides saved to localStorage
      _applyLocalOverride();
    })
    .catch(() => {
      // Even on fetch failure, apply any cached overrides
      _applyLocalOverride();
    })
    .finally(() => { renderAll(); initFadeIn(); initAuth(); });
}

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => { initFadeIn(); handleNavAutoHide(); });
  // Safety net: reveal page after 2.5s even if data.json is slow
  setTimeout(() => { document.documentElement.style.opacity = '1'; }, 2500);
  loadFromJson();
});
