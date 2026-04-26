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
  emailjs:    { pk:'', sid:'', tid:'' },
  cloudinary: { cloud:'dyjzhbvkf', preset:'bista-group-unassigned' },
  rates:      { aud:0.0120, usd:0.0075 },
  theme:      { primary:'#1a3a8f', secondary:'#c0152a', bg:'#080c18', accent:'#2563eb' },
  visibility: { about:true, products:true, services:true, leadership:true, gallery:true, testimonials:true, contact:true },
  sectionTitles: { about:'About Us', products:'Our Products', services:'Our Services', leadership:'Leadership', gallery:'Gallery', testimonials:'Testimonials', contact:'Contact Us' },
  design:     { layout:'default', heroAlign:'center', navStyle:'top', cardStyle:'shadow' },
  customSections: []
};

// ══════════ STATE ══════════
const state = {};
Object.keys(DEFAULTS).forEach(k => { state[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });

// ══════════ CURRENCY ══════════
let curCode = 'NPR', curSym = 'रू';
function setCurrency(code, sym) {
  curCode = code; curSym = sym;
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

// ══════════ DESIGN ══════════
function applyDesign() {
  const d = state.design || {};
  const body = document.body;
  body.classList.remove(
    'layout-minimal','layout-bold','hero-left',
    'nav-sidebar-left','nav-sidebar-right','nav-floating',
    'cards-flat','cards-glass'
  );
  if (d.layout === 'minimal')          body.classList.add('layout-minimal');
  if (d.layout === 'bold')             body.classList.add('layout-bold');
  if (d.heroAlign === 'left')          body.classList.add('hero-left');
  if (d.navStyle === 'sidebar-left')   body.classList.add('nav-sidebar-left');
  if (d.navStyle === 'sidebar-right')  body.classList.add('nav-sidebar-right');
  if (d.navStyle === 'floating')       body.classList.add('nav-floating');
  if (d.cardStyle === 'flat')          body.classList.add('cards-flat');
  if (d.cardStyle === 'glass')         body.classList.add('cards-glass');
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
  applyDesign();
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
    const imgs = getProductImages(p);
    return `<div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <img src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy">
        <div class="product-overlay"><span>View Product</span></div>
        ${imgs.length > 1 ? `<div class="product-img-count">${imgs.length} photos</div>` : ''}
      </div>
      <div class="product-info">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="product-price">${fmtPrice(p.price)}</div>
      </div>
    </div>`;
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
  const imgs = getProductImages(p);
  renderModalImages(imgs);
  setTxt('modal-name',  p.name);
  setTxt('modal-price', fmtPrice(p.price));
  setTxt('modal-desc',  p.fullDesc || p.desc);
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
  const name  = document.getElementById('cf-name')?.value.trim();
  const email = document.getElementById('cf-email')?.value.trim();
  const subj  = document.getElementById('cf-subject')?.value.trim();
  const msg   = document.getElementById('cf-message')?.value.trim();
  const msgEl = document.getElementById('contact-msg');
  if (!name || !email || !msg) { showFormMsg(msgEl, 'Please fill in all required fields.', 'error'); return; }
  const ejs = state.emailjs;
  if (!ejs.pk || !ejs.sid || !ejs.tid) { showFormMsg(msgEl, 'EmailJS not configured. Please contact the site admin.', 'error'); return; }
  emailjs.init(ejs.pk);
  emailjs.send(ejs.sid, ejs.tid, { from_name:name, reply_to:email, subject:subj||'Website Inquiry', message:msg, to_email:state.contact.email })
  .then(() => {
    showFormMsg(msgEl, 'Message sent! We\'ll be in touch soon.', 'success');
    ['cf-name','cf-email','cf-subject','cf-message'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  })
  .catch(err => { showFormMsg(msgEl, 'Failed to send. (' + (err.text || err) + ')', 'error'); });
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

// ══════════ FALLBACK: load from static data.json ══════════
function loadFromJson() {
  fetch('./data.json')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      Object.keys(DEFAULTS).forEach(k => {
        if (data[k] !== undefined && data[k] !== null) state[k] = data[k];
      });
    })
    .catch(() => {})
    .finally(() => { renderAll(); initFadeIn(); });
}

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', initFadeIn);
  loadFromJson();
});
