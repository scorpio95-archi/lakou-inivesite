/* ============================================================
   LAKOU INIVESITE — app.js
   ============================================================ */

// ---------- MENU HAMBURGER ----------
const burgerBtn = document.getElementById('burgerBtn');
const menuPanel = document.getElementById('menuPanel');
const overlay = document.getElementById('overlay');

function toggleMenu(force){
  const open = force !== undefined ? force : !menuPanel.classList.contains('open');
  menuPanel.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  burgerBtn.classList.toggle('open', open);
}
burgerBtn.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu(false));
document.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// ---------- ACCORDÉON "DOMAINES UNIVERSITAIRES" DANS LE MENU ----------
const domainesToggle = document.getElementById('domainesToggle');
const domainesSubmenu = document.getElementById('domainesSubmenu');
domainesToggle.addEventListener('click', () => {
  domainesToggle.classList.toggle('open');
  domainesSubmenu.classList.toggle('open');
});

// ============================================================
// INDEX DE RECHERCHE
// Ajoute une entrée ici à chaque nouvelle famille Lakou créée.
// url:null => pas encore de page, affiché comme "Bientôt".
// ============================================================
const searchIndex = [
  {
    title: "Lakou Archi",
    desc: "Architecture, Urbanisme, Architecture intérieure",
    url: "https://lakou-archi-k68x.vercel.app/",
    keywords: ["architecture", "urbanisme", "architecture intérieure", "archi", "bâtiment", "construction", "plan", "maquette"]
  },
  {
    title: "Lakou Enjenyè",
    desc: "Génie civil, Génie électrique, Génie informatique, Électromécanique",
    url: "https://lakou-enjenye26.vercel.app/index.html",
    keywords: ["ingénierie", "génie", "génie civil", "génie électrique", "génie informatique", "électromécanique", "enjenye"]
  },
  {
    title: "Lakou Santé",
    desc: "Médecine, Pharmacie, Sciences infirmières, Odontologie, Santé publique",
    url: null,
    keywords: ["santé", "médecine", "pharmacie", "infirmière", "infirmiere", "odontologie", "dentaire", "sante publique"]
  }
];

// ---------- RECHERCHE ----------
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchClose = document.getElementById('searchClose');

function openSearch(){
  searchOverlay.classList.add('open');
  searchInput.value = '';
  renderResults('');
  setTimeout(() => searchInput.focus(), 100);
}
function closeSearch(){ searchOverlay.classList.remove('open'); }

searchBtn.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);
searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });

function renderResults(query){
  const q = query.trim().toLowerCase();

  const matches = q === ''
    ? searchIndex
    : searchIndex.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.keywords.some(k => k.includes(q))
      );

  if (matches.length === 0){
    searchResults.innerHTML = `<div class="search-empty">Aucun résultat pour « ${query} ». Essaie un autre mot-clé.</div>`;
    return;
  }

  searchResults.innerHTML = matches.map(item => {
    const label = item.url ? '' : ' — Bientôt';
    return item.url
      ? `<a class="search-result-item" href="${item.url}">
           <div class="srt">${item.title}</div>
           <div class="srd">${item.desc}</div>
         </a>`
      : `<div class="search-result-item" style="opacity:0.6;">
           <div class="srt">${item.title}${label}</div>
           <div class="srd">${item.desc}</div>
         </div>`;
  }).join('');
}

searchInput.addEventListener('input', (e) => renderResults(e.target.value));
