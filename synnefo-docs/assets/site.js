/* ==========================================================
   Synnefo docs: site navigation + index cards.
   TO ADD A NEW PAGE: add one line to PAGES below. That's it.
   Every page loads this with:  <script src="../assets/site.js" data-root=".."></script>
   (index.html uses data-root=".")
   ========================================================== */
const PAGES = [
  { title: "Database Schema", href: "pages/schema.html", icon: "🗄️", tag: "Design", desc: "All 45 MongoDB collections: fields, types, indexes, 3NF rules and a relationship map." },
  { title: "Full Data Flow", href: "pages/data-flow.html", icon: "🧠", tag: "Design", desc: "One student's journey across every collection as an expandable mind map with sample data." },
  { title: "UI Structure", href: "pages/ui-structure.html", icon: "🧭", tag: "Design", desc: "57 screens, role-based sidebars and the navigation map between screens." },
  { title: "Sprint Plan", href: "pages/sprint-plan.html", icon: "🗓️", tag: "Plan", desc: "11 sprints: schema, backend, UI and a demo for every module, with progress tracking." },
];
(function () {
  const root = (document.currentScript && document.currentScript.dataset.root) || ".";
  const here = location.pathname;
  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.innerHTML = `<a class="brand" href="${root}/index.html">Synnefo Docs</a>` +
    PAGES.map(p => `<a href="${root}/${p.href}" class="${here.endsWith(p.href) ? "active" : ""}">${p.icon} ${p.title}</a>`).join("");
  document.body.prepend(nav);
  const box = document.getElementById("page-cards");
  if (box) box.innerHTML = PAGES.map(p =>
    `<a class="card link" href="${root}/${p.href}"><h3>${p.icon} ${p.title}</h3><p>${p.desc}</p><span class="tag">${p.tag}</span></a>`).join("");
})();
