document.addEventListener("DOMContentLoaded", () => {
  const tr = {
    en: {
      "nav.work": "Work", "nav.about": "About", "nav.papers": "Publications", "nav.contact": "Contact",
      "hero.label": "Data Science · Oncology · Bioinformatics",
      "hero.title": "Building clear, high-impact data products for complex biomedical workflows.",
      "hero.text": "Placeholder text: This section will be refined later with your final narrative. Layout and visual direction are now the focus.",
      "hero.cta1": "See Recent Projects", "hero.cta2": "Download CV", "hero.role": "Senior Data Scientist (Bioinformatics)",
      "work.title": "Recent Projects", "work.text": "Placeholder copy. Project storytelling text to be finalized in the next content pass.",
      "work.featured": "Featured Project", "work.featuredText": "Placeholder: Problem framing, technical approach, and outcomes will be inserted here.",
      "work.card1": "Placeholder summary text for this project card.", "work.card2": "Placeholder summary text for this project card.",
      "about.title": "About", "about.text1": "Placeholder paragraph: concise profile text will be added in the content phase.",
      "about.text2": "Placeholder paragraph: this area is intentionally left as draft copy for later refinement.", "about.skills": "Core Skills",
      "papers.title": "Selected Publications", "papers.text": "Journal and publication details kept; explanatory text is placeholder for now.",
      "contact.title": "Contact", "contact.text": "Placeholder text for contact context and short intro.",
      "contact.name": "Name", "contact.email": "Email", "contact.message": "Message", "contact.send": "Send"
    },
    de: {
      "nav.work": "Projekte", "nav.about": "Über mich", "nav.papers": "Publikationen", "nav.contact": "Kontakt",
      "hero.label": "Data Science · Onkologie · Bioinformatik",
      "hero.title": "Klare, belastbare Data-Science-Lösungen für komplexe biomedizinische Workflows.",
      "hero.text": "Platzhaltertext: Dieser Abschnitt wird später mit finalem Inhalt ersetzt. Aktuell liegt der Fokus auf Layout und visueller Richtung.",
      "hero.cta1": "Aktuelle Projekte", "hero.cta2": "CV herunterladen", "hero.role": "Senior Data Scientist (Bioinformatik)",
      "work.title": "Aktuelle Projekte", "work.text": "Platzhaltertext. Die finale Projektstory folgt im nächsten Content-Schritt.",
      "work.featured": "Featured Project", "work.featuredText": "Platzhalter: Problemdefinition, technischer Ansatz und Ergebnis werden später ergänzt.",
      "work.card1": "Platzhalter-Zusammenfassung für diese Projektkarte.", "work.card2": "Platzhalter-Zusammenfassung für diese Projektkarte.",
      "about.title": "Über mich", "about.text1": "Platzhalterabsatz: kompaktes Profil folgt in der Content-Phase.",
      "about.text2": "Platzhalterabsatz: Dieser Bereich bleibt vorerst bewusst als Entwurfstext.", "about.skills": "Kernkompetenzen",
      "papers.title": "Ausgewählte Publikationen", "papers.text": "Journals und Publikationsdaten bleiben erhalten; erläuternder Text ist vorerst Platzhalter.",
      "contact.title": "Kontakt", "contact.text": "Platzhaltertext für kurze Kontakt-Einordnung.",
      "contact.name": "Name", "contact.email": "E-Mail", "contact.message": "Nachricht", "contact.send": "Senden"
    }
  };

  const enBtn = document.getElementById("langEn");
  const deBtn = document.getElementById("langDe");
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  const applyLang = (lang) => {
    const d = tr[lang] || tr.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (d[key]) el.textContent = d[key];
    });
    enBtn.classList.toggle("active", lang === "en");
    deBtn.classList.toggle("active", lang === "de");
    try { localStorage.setItem("siteLang", lang); } catch {}
  };

  enBtn?.addEventListener("click", () => applyLang("en"));
  deBtn?.addEventListener("click", () => applyLang("de"));
  try { applyLang(localStorage.getItem("siteLang") || "en"); } catch { applyLang("en"); }

  menuBtn?.addEventListener("click", () => nav.classList.toggle("show"));
  nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("show")));

  const reveals = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll(".section");
  const rail = document.getElementById("railProgress");
  const mobile = document.getElementById("mobileProgress");
  const dots = Array.from(document.querySelectorAll(".rail-dots a"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); });
  }, { threshold: 0.16 });
  [...reveals, ...sections].forEach((el) => io.observe(el));

  const syncScroll = () => {
    const doc = document.documentElement;
    const total = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
    if (rail) rail.style.height = `${pct}%`;
    if (mobile) mobile.style.width = `${pct}%`;

    const y = window.scrollY + window.innerHeight * 0.35;
    let active = "home";
    document.querySelectorAll("main section[id]").forEach((s) => {
      if (s.offsetTop <= y) active = s.id;
    });
    dots.forEach((d) => d.classList.toggle("active", d.dataset.rail === active));
    document.querySelectorAll(".nav a").forEach((a) => {
      a.classList.toggle("active", (a.getAttribute("href") || "").slice(1) === active);
    });
  };

  window.addEventListener("scroll", syncScroll, { passive: true });
  syncScroll();

  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    const n = form.querySelector('input[name="userName"]')?.value.trim();
    const m = form.querySelector('textarea[name="userMessage"]')?.value.trim();
    const em = form.querySelector('input[name="userEmail"]')?.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em || "");
    if (!n || !m || !ok) e.preventDefault();
  });
});
