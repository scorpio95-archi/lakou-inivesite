/* ============================================================
   LAKOU INIVESITE — app.js (page mère)
   Gère : burger/menu latéral, accordéons du menu, recherche,
   et l'ouverture des cartes actives au clic.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- BURGER / MENU LATÉRAL ---------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const menuPanel = document.getElementById('menuPanel');
  const overlay = document.getElementById('overlay');

  function closeMenu(){
    burgerBtn.classList.remove('open');
    menuPanel.classList.remove('open');
    overlay.classList.remove('open');
  }
  function toggleMenu(){
    const isOpen = menuPanel.classList.toggle('open');
    burgerBtn.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
  }
  if (burgerBtn) burgerBtn.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeMenu));

  /* ---------- ACCORDÉONS DU MENU ----------
     Fonctionne pour n'importe quel .menu-accordion-toggle suivi
     directement d'un .menu-submenu — donc valable pour "Domaines
     universitaires", "Écoles professionnelles", et tout futur ajout. */
  document.querySelectorAll('.menu-accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      const submenu = btn.nextElementSibling;
      if (submenu && submenu.classList.contains('menu-submenu')) {
        submenu.classList.toggle('open');
      }
    });
  });

  /* ---------- RECHERCHE ---------- */
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  function openSearch(){
    if (!searchOverlay) return;
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 200);
  }
  function closeSearch(){
    if (searchOverlay) searchOverlay.classList.remove('open');
  }
  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  // Construit l'index de recherche à partir des cartes présentes sur la page
  // (fonctionne aussi bien pour les cartes "Domaines" que "Écoles pro")
  function buildSearchIndex(){
    const items = [];
    document.querySelectorAll('.card').forEach(card => {
      const titleEl = card.querySelector('.card-title');
      const descEl = card.querySelector('.card-desc');
      const link = card.querySelector('.btn-explorer');
      const title = titleEl ? titleEl.textContent.trim() : '';
      const desc = descEl ? descEl.textContent.trim() : '';
      const href = link ? link.getAttribute('href') : null;

      if (title) items.push({ title, desc, href });

      card.querySelectorAll('.disciplines-list li').forEach(li => {
        items.push({
          title: li.textContent.trim(),
          desc: `Discipline — ${title}`,
          href: href
        });
      });
    });
    return items;
  }

  const searchIndex = buildSearchIndex();

  function escapeHtml(str){
    return str.replace(/[&<>"']/g, s => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[s]));
  }

  function renderResults(query){
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = '';
      return;
    }
    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    );
    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-empty">Aucun résultat pour « ${escapeHtml(query)} ».</div>`;
      return;
    }
    searchResults.innerHTML = matches.map(item => {
      const tagOpen = item.href ? `<a class="search-result-item" href="${item.href}">` : `<div class="search-result-item">`;
      const tagClose = item.href ? '</a>' : '</div>';
      return `${tagOpen}<div class="srt">${escapeHtml(item.title)}</div><div class="srd">${escapeHtml(item.desc)}</div>${tagClose}`;
    }).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderResults(e.target.value));
  }

  /* ---------- CLIC SUR UNE CARTE ACTIVE → LIEN DIRECT ---------- */
  document.querySelectorAll('.card:not(.soon)').forEach(card => {
    const link = card.querySelector('.btn-explorer');
    if (!link) return;
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // laisse le lien natif agir normalement
      window.location.href = link.getAttribute('href');
    });
  });

});
