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

// ============================================================
// IMAGES — bucket Supabase "lakou-inivesite"
// Colle l'URL publique dans chaque src="" vide du fichier index.html
// (bannière, cartes, photo du fondateur). Tant que c'est vide,
// une icône ou un motif de secours s'affiche à la place.
// ============================================================

// ============================================================
// DONNÉES DES DOMAINES
// ============================================================
const domaines = {
  archi: {
    image: "",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff8ec" stroke-width="1.8"><path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6M7 14h.01M17 14h.01M7 10.5h.01M17 10.5h.01"/></svg>`,
    badge: 'actif', badgeText: 'Actif',
    title: 'Architecture',
    quoi: "L'architecture forme des étudiants capables de concevoir, dessiner et bâtir l'espace haïtien — des logements aux équipements publics — en tenant compte du climat, des matériaux locaux et de l'identité du pays.",
    dedans: [
      "Portfolios et projets d'étudiants",
      "Dossiers techniques : plans, coupes, façades",
      "Travaux validés par des enseignants",
      "Profils publics d'étudiants et d'enseignants"
    ],
    universites: [
      "Université Quisqueya (UniQ) — Faculté des Sciences de la Géomatique et d'Architecture",
      "Université d'État d'Haïti (UEH) — Faculté des Sciences",
      "Université de Technologie d'Haïti (UNITECH) — Faculté de Génie et d'Architecture",
      "Université de la Renaissance d'Haïti (URH)"
    ],
    duree: "4 à 5 ans selon l'université",
    url: 'https://lakou-archi-k68x.vercel.app/'
  },
  ingenierie: {
    image: "",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff8ec" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
    badge: 'actif', badgeText: 'Actif',
    title: 'Ingénierie',
    quoi: "L'ingénierie regroupe quatre filières qui forment les étudiants à concevoir et résoudre des problèmes techniques concrets à travers Haïti.",
    dedans: [
      "Projets et travaux pratiques par filière",
      "Mémoires et rapports de fin d'études",
      "Portfolios d'étudiants",
      "Ressources organisées par institution"
    ],
    filieres: [
      { nom: "Génie Civil", desc: "Conception et construction des bâtiments, routes et ouvrages publics : structures, matériaux, géotechnique et hydraulique." },
      { nom: "Génie Électrique", desc: "Production, transport et distribution de l'énergie électrique, machines électriques, énergies renouvelables et télécommunications." },
      { nom: "Génie Informatique", desc: "Programmation, bases de données, réseaux et systèmes informatiques." },
      { nom: "Électromécanique", desc: "Équilibre entre électricité et mécanique, pour la conception et l'entretien de systèmes industriels." }
    ],
    universites: [
      "Université Quisqueya (UniQ) — Faculté des Sciences de la Géomatique et d'Architecture",
      "Université d'État d'Haïti (UEH) — Faculté des Sciences",
      "Université de Technologie d'Haïti (UNITECH) — Faculté de Génie et d'Architecture",
      "Université de la Renaissance d'Haïti (URH)"
    ],
    duree: "4 à 5 ans selon la filière et l'université",
    url: 'https://lakou-enjenye26.vercel.app/index.html'
  },
  medecine: {
    soon: true, title: 'Médecine',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff8ec" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z"/></svg>`
  },
  droit: {
    soon: true, title: 'Droit',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff8ec" stroke-width="1.8"><path d="M12 3v18M5 8l-4 6a4 4 0 008 0l-4-6zM19 8l-4 6a4 4 0 008 0l-4-6zM5 8h14M8 21h8"/></svg>`
  }
};

// ---------- MODAL ----------
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('[data-modal]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
  card.addEventListener('keypress', (e) => { if (e.key === 'Enter') openModal(card.dataset.modal); });
});

function openModal(key){
  const d = domaines[key];
  if (!d) return;
  const imageHtml = d.image ? `<img src="${d.image}" alt="${d.title}">` : d.icon;

  if (d.soon){
    modalContent.innerHTML = `
      <div class="modal-image">${imageHtml}</div>
      <div class="badge bientot">Bientôt</div>
      <h2>${d.title}</h2>
      <div class="modal-soon-msg">Ce domaine n'est pas encore construit. Il sera ajouté au Lakou prochainement — reviens voir !</div>
    `;
  } else {
    const filieresHtml = d.filieres
      ? `<div class="modal-block"><h4>Les filières</h4>${d.filieres.map(f => `
          <div class="filiere">
            <div class="filiere-nom">${f.nom}</div>
            <div class="filiere-desc">${f.desc}</div>
          </div>`).join('')}</div>`
      : '';

    modalContent.innerHTML = `
      <div class="modal-image">${imageHtml}</div>
      <div class="badge ${d.badge}">${d.badgeText}</div>
      <h2>${d.title}</h2>
      <div class="modal-block">
        <h4>Qu'est-ce que c'est</h4>
        <p>${d.quoi}</p>
      </div>
      <div class="modal-block">
        <h4>Ce que vous y trouverez</h4>
        <ul>${d.dedans.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      ${filieresHtml}
      <div class="modal-block">
        <h4>Où étudier ce domaine en Haïti</h4>
        <ul>${d.universites.map(u => `<li>${u}</li>`).join('')}</ul>
      </div>
      <div class="duree-box">
        <span class="label">Durée des études</span>
        <span class="valeur">${d.duree}</span>
      </div>
      <button class="btn-explorer" id="explorerBtn">
        Explorer l'archive
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    `;
    document.getElementById('explorerBtn').addEventListener('click', () => { window.location.href = d.url; });
  }
  modalOverlay.classList.add('open');
}

function closeModal(){ modalOverlay.classList.remove('open'); }
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
