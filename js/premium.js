document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("show"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("show"))
    );
  }

  const translations = {
    en: {
      "nav.about": "About",
      "nav.focus": "Focus",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.publications": "Publications",
      "nav.contact": "Contact",
      "hero.eyebrow": "Data Science · Oncology · Pharma",
      "hero.title": "Turning oncology and clinical data into clear decisions.",
      "hero.lead": "I design scalable bioinformatics workflows and analytics solutions for pharma and translational research — with a focus on quality, reproducibility, and business-ready insights.",
      "hero.ctaProjects": "View Projects",
      "hero.ctaCv": "Download CV",
      "hero.stat1t": "Pharma",
      "hero.stat1s": "Industry delivery",
      "hero.stat2t": "Oncology",
      "hero.stat2s": "Core domain",
      "hero.stat3t": "Pipelines",
      "hero.stat3s": "Production-ready",
      "hero.role": "Senior Data Scientist (Pharma/Bioinformatics)",
      "hero.location": "Fürth, Bavaria, Germany",
      "about.title": "About",
      "about.p1": "I work at the intersection of data science, bioinformatics, and oncology-focused pharmaceutical development. My core work includes NGS analytics, clinical-trial data interpretation, and pipeline engineering for reliable high-throughput analysis.",
      "about.p2": "With a PhD in Computational Biology and hands-on industry experience, I focus on building systems that are technically robust and practically useful for cross-functional teams.",
      "about.skills": "Core Skills",
      "focus.title": "What I focus on",
      "focus.c1t": "Oncology Data Science",
      "focus.c1p": "Integrative analysis of transcriptomic and genomic datasets to support translational decisions and biomarker-oriented insights.",
      "focus.c2t": "Pipeline Development",
      "focus.c2p": "Reproducible, scalable workflows for high-throughput sequencing data with strong quality controls and clear reporting.",
      "focus.c3t": "Clinical-Trial Context",
      "focus.c3p": "Data interpretation and communication tailored to regulated, multidisciplinary environments in pharma-facing projects.",
      "exp.title": "Experience",
      "projects.title": "Selected Projects",
      "pub.title": "Selected Publications",
      "pub.intro": "Peer-reviewed work in cancer genomics and translational bioinformatics.",
      "pub.r1": "Primary Author",
      "pub.p1": "Demonstrates how ecDNA amplifications drive tumor heterogeneity and adaptive behavior in pancreatic cancer.",
      "pub.read": "Read paper",
      "pub.r2": "First Author",
      "pub.t2": "Cancer genomics publication",
      "pub.p2": "First-author contribution focused on cancer genomics methodology and analytical interpretation.",
      "pub.r3": "Second Author",
      "pub.t3": "Translational bioinformatics publication",
      "pub.p3": "Second-author contribution supporting robust translational analysis in oncology research.",
      "pub.pubmed": "View on PubMed",
      "pub.fulltext": "Read full text",
      "contact.title": "Contact",
      "contact.p": "This page provides a focused overview of my background, expertise, and selected work in oncology data science and bioinformatics.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.send": "Send message",
      "alert.name": "Please enter your name.",
      "alert.email": "Please enter a valid email address.",
      "alert.message": "Please enter your message."
    },
    de: {
      "nav.about": "Über mich",
      "nav.focus": "Schwerpunkte",
      "nav.experience": "Erfahrung",
      "nav.projects": "Projekte",
      "nav.publications": "Publikationen",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Data Science · Onkologie · Pharma",
      "hero.title": "Ich mache aus Onkologie- und Studiendaten klare, belastbare Entscheidungen.",
      "hero.lead": "Ich entwickle skalierbare Bioinformatik-Workflows und Data-Science-Lösungen für Pharma und translationale Forschung – mit Fokus auf Qualität, Reproduzierbarkeit und Ergebnisse, auf die man sich verlassen kann.",
      "hero.ctaProjects": "Projekte ansehen",
      "hero.ctaCv": "CV herunterladen",
      "hero.stat1t": "Pharma",
      "hero.stat1s": "Praxis in der Industrie",
      "hero.stat2t": "Onkologie",
      "hero.stat2s": "Mein Kerngebiet",
      "hero.stat3t": "Pipelines",
      "hero.stat3s": "Direkt einsetzbar",
      "hero.role": "Senior Data Scientist (Pharma/Bioinformatik)",
      "hero.location": "Fürth, Bayern, Deutschland",
      "about.title": "Über mich",
      "about.p1": "Ich arbeite an der Schnittstelle von Data Science, Bioinformatik und onkologischer Pharmaentwicklung. Mein Fokus liegt auf NGS-Analysen, der Auswertung klinischer Studiendaten und dem Aufbau robuster Pipelines.",
      "about.p2": "Mit meinem PhD in Computational Biology und echter Industrieerfahrung baue ich Lösungen, die technisch sauber sind und im Teamalltag wirklich funktionieren.",
      "about.skills": "Kernkompetenzen",
      "focus.title": "Worauf ich mich konzentriere",
      "focus.c1t": "Onkologische Data Science",
      "focus.c1p": "Ich analysiere transkriptomische und genomische Daten so, dass daraus konkrete translationale Entscheidungen und biomarkerrelevante Erkenntnisse entstehen.",
      "focus.c2t": "Pipeline-Entwicklung",
      "focus.c2p": "Ich baue reproduzierbare, skalierbare Workflows für Hochdurchsatz-Sequenzierungsdaten – inklusive sauberer Qualitätskontrolle und klarer Reports.",
      "focus.c3t": "Klinischer Studienkontext",
      "focus.c3p": "Ich bereite Daten so auf, dass sie in regulierten, interdisziplinären Pharma-Projekten verständlich und entscheidungsrelevant sind.",
      "exp.title": "Erfahrung",
      "projects.title": "Ausgewählte Projekte",
      "pub.title": "Ausgewählte Publikationen",
      "pub.intro": "Peer-reviewte Arbeiten aus Krebsgenomik und translationaler Bioinformatik.",
      "pub.r1": "Hauptautor-Beitrag",
      "pub.p1": "Die Arbeit zeigt, wie ecDNA-Amplifikationen Tumorheterogenität und Anpassungsmechanismen beim Pankreaskarzinom antreiben.",
      "pub.read": "Paper lesen",
      "pub.r2": "Erstautor",
      "pub.t2": "Publikation zur Krebsgenomik",
      "pub.p2": "Erstautor-Arbeit mit Fokus auf Methodik und belastbare Analyse in der Krebsgenomik.",
      "pub.r3": "Zweitautor",
      "pub.t3": "Publikation zur translationalen Bioinformatik",
      "pub.p3": "Zweitautor-Arbeit mit Schwerpunkt auf robuster translationaler Datenanalyse in der Onkologie.",
      "pub.pubmed": "Auf PubMed ansehen",
      "pub.fulltext": "Volltext lesen",
      "contact.title": "Kontakt",
      "contact.p": "Diese Seite gibt einen kompakten Überblick über meinen Hintergrund, meine Schwerpunkte und ausgewählte Arbeiten in Onkologie-Data-Science und Bioinformatik.",
      "contact.name": "Name",
      "contact.email": "E-Mail",
      "contact.message": "Nachricht",
      "contact.send": "Nachricht senden",
      "alert.name": "Bitte gib deinen Namen ein.",
      "alert.email": "Bitte gib eine gültige E-Mail-Adresse ein.",
      "alert.message": "Bitte schreib eine Nachricht."
    }
  };

  const langEn = document.getElementById("langEn");
  const langDe = document.getElementById("langDe");

  const applyLang = (lang) => {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    if (langEn && langDe) {
      langEn.classList.toggle("active", lang === "en");
      langDe.classList.toggle("active", lang === "de");
    }
    localStorage.setItem("siteLang", lang);
  };

  if (langEn) langEn.addEventListener("click", () => applyLang("en"));
  if (langDe) langDe.addEventListener("click", () => applyLang("de"));

  applyLang(localStorage.getItem("siteLang") || "en");

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in-view"));
  }

  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="userName"]');
    const email = form.querySelector('input[name="userEmail"]');
    const message = form.querySelector('textarea[name="userMessage"]');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lang = localStorage.getItem("siteLang") || "en";
    const dict = translations[lang] || translations.en;

    if (!name.value.trim()) return alert(dict["alert.name"]);
    if (!emailPattern.test(email.value.trim())) return alert(dict["alert.email"]);
    if (!message.value.trim()) return alert(dict["alert.message"]);

    form.submit();
  });
});
