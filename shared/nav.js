/* ============================================================
   LAKOU — shared/nav.js
   Bandeau de liaison entre les sites du réseau Lakou.

   UTILISATION :
   Colle ce fichier dans un dossier /shared/ à la racine de
   CHACUN de tes 3 repos (lakou-inivesite, lakou-archi, lakou-enjenye),
   puis ajoute cette ligne juste après <body> dans chaque index.html :

     <script src="shared/nav.js" data-site="inivesite" defer></script>

   Remplace data-site par : "inivesite", "archi" ou "ingenierie"
   selon le site où tu l'installes. Le bandeau s'adapte tout seul
   et ne montre jamais un lien vers la page où l'on se trouve déjà.
   ============================================================ */

(function () {
  const SITES = {
    inivesite:  { label: "Lakou Inivesite", url: "https://lakou-inivesite.vercel.app/" },
    archi:      { label: "Architecture",     url: "https://lakou-archi-k68x.vercel.app/" },
    ingenierie: { label: "Ingénierie",       url: "https://lakou-enjenye26.vercel.app/index.html" }
  };

  const script = document.currentScript;
  const current = (script && script.dataset.site) || "inivesite";

  const style = document.createElement('style');
  style.textContent = `
    .lakou-network-bar{
      display:flex; align-items:center; gap:6px; flex-wrap:wrap;
      font-family:'Karla', sans-serif; font-size:0.72rem;
      background:#211712; color:#f2e4c8;
      padding:7px 16px; letter-spacing:0.02em;
    }
    .lakou-network-bar a{ color:#f2e4c8; text-decoration:none; font-weight:700; }
    .lakou-network-bar a:hover{ text-decoration:underline; }
    .lakou-network-bar .lakou-sep{ opacity:0.4; }
    .lakou-network-bar .lakou-current{ opacity:0.55; }
  `;
  document.head.appendChild(style);

  const bar = document.createElement('div');
  bar.className = 'lakou-network-bar';

  const parts = [];
  parts.push(`<a href="${SITES.inivesite.url}">🏠 Lakou Inivesite</a>`);
  Object.keys(SITES).forEach((key) => {
    if (key === 'inivesite') return;
    const site = SITES[key];
    if (key === current) {
      parts.push(`<span class="lakou-sep">›</span><span class="lakou-current">${site.label}</span>`);
    } else {
      parts.push(`<span class="lakou-sep">›</span><a href="${site.url}">${site.label}</a>`);
    }
  });

  bar.innerHTML = parts.join(' ');
  document.body.insertBefore(bar, document.body.firstChild);
})();
