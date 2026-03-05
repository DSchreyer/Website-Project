document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  const langEn = document.getElementById("langEn");
  const langDe = document.getElementById("langDe");

  const getStoredLang = () => {
    try {
      return localStorage.getItem("siteLang");
    } catch (error) {
      return null;
    }
  };

  const setStoredLang = (lang) => {
    try {
      localStorage.setItem("siteLang", lang);
    } catch (error) {
      // Ignore storage errors (e.g., private mode restrictions)
    }
  };

  const setMenuExpanded = (expanded) => {
    if (!menuBtn || !nav) return;
    nav.classList.toggle("show", expanded);
    menuBtn.setAttribute("aria-expanded", String(expanded));
  };

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      setMenuExpanded(!isExpanded);
    });

    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setMenuExpanded(false))
    );

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuExpanded(false);
    });
  }

  const translations = {
    en: {
      "nav.about": "About",
      "nav.focus": "Focus",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.publications": "Publications",
      "nav.cases": "Case Studies",
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
      "proof.i1t": "PhD in Computational Biology",
      "proof.i1p": "Method-first mindset grounded in translational relevance.",
      "proof.i2t": "Nature publication",
      "proof.i2p": "Primary-author contribution in high-impact oncology research.",
      "proof.i3t": "Pharma + academia experience",
      "proof.i3p": "Comfortable across scientific depth and stakeholder alignment.",
      "proof.i4t": "End-to-end pipeline delivery",
      "proof.i4p": "From raw data to decision-ready outputs.",
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
      "projects.featured": "Featured Case Study",
      "projects.featuredDesc": "Production-grade Nextflow pipeline for ecDNA analysis from high-throughput data.",
      "projects.problem": "Problem:",
      "projects.outcome": "Outcome:",
      "projects.p2a": "Clinical and transcriptomic signals are hard to explore together.",
      "projects.p2b": "Interactive exploration of cohorts with clinical context for faster hypothesis testing.",
      "projects.p3a": "Single-cell workflows often break reproducibility across environments.",
      "projects.p3b": "Automated, analysis-ready outputs with consistent processing across runs.",
      "cases.title": "Case Study Snapshots",
      "cases.intro": "How I structure delivery from problem framing to reproducible outcomes.",
      "cases.step1": "1. Problem framing",
      "cases.step2": "2. Data + workflow",
      "cases.step3": "3. Outcome",
      "cases.c1t": "oncology transcriptomics",
      "cases.c1a": "Define decision scope and relevant clinical/biological variables.",
      "cases.c1b": "Build reproducible analysis path with quality checks and interpretable outputs.",
      "cases.c1c": "Deliver findings that are traceable and directly usable by cross-functional teams.",
      "cases.c2t": "single-cell pipeline automation",
      "cases.c2a": "Stabilize inconsistent multi-step processing across environments and runs.",
      "cases.c2b": "Implement modular workflow blocks with explicit configuration and logging.",
      "cases.c2c": "Consistent analysis-ready outputs and lower operational friction for downstream work.",
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
      "contact.intent": "Profile overview, selected work, and publication highlights in oncology data science and bioinformatics.",
      "contact.ctaMail": "Email me",
      "contact.ctaLinkedIn": "Connect on LinkedIn",
      "contact.formTitle": "Start a conversation",
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
      "nav.cases": "Case Studies",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Data Science · Onkologie · Pharma",
      "hero.title": "Ich analysiere Onkologie- und Studiendaten und leite daraus belastbare Entscheidungen ab.",
      "hero.lead": "Ich entwickle skalierbare Bioinformatik-Workflows und Data-Science-Lösungen für Pharma und translationale Forschung. Mein Fokus liegt auf Qualität, Reproduzierbarkeit und klar nachvollziehbaren Ergebnissen.",
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
      "proof.i1t": "PhD in Computational Biology",
      "proof.i1p": "Methodisch fundiert und translational ausgerichtet.",
      "proof.i2t": "Nature-Publikation",
      "proof.i2p": "Hauptautor-Beitrag in hochrangiger Onkologie-Forschung.",
      "proof.i3t": "Pharma- und Akademia-Erfahrung",
      "proof.i3p": "Sicher in wissenschaftlicher Tiefe und Stakeholder-Kommunikation.",
      "proof.i4t": "End-to-end Pipeline Delivery",
      "proof.i4p": "Von Rohdaten bis zu entscheidungsfähigen Ergebnissen.",
      "about.title": "Über mich",
      "about.p1": "Ich arbeite an der Schnittstelle von Data Science, Bioinformatik und onkologischer Pharmaentwicklung. Dabei konzentriere ich mich auf NGS-Analysen, die Auswertung klinischer Studiendaten und den Aufbau robuster Pipelines.",
      "about.p2": "Mit meinem PhD in Computational Biology und praktischer Industrieerfahrung entwickle ich Lösungen, die technisch belastbar und für interdisziplinäre Teams nutzbar sind.",
      "about.skills": "Kernkompetenzen",
      "focus.title": "Worauf ich mich konzentriere",
      "focus.c1t": "Onkologische Data Science",
      "focus.c1p": "Ich analysiere transkriptomische und genomische Daten mit dem Ziel, translationale Entscheidungen und biomarkerrelevante Erkenntnisse zu unterstützen.",
      "focus.c2t": "Pipeline-Entwicklung",
      "focus.c2p": "Ich entwickle reproduzierbare, skalierbare Workflows für Hochdurchsatz-Sequenzierungsdaten mit strukturierter Qualitätskontrolle und klarer Berichterstattung.",
      "focus.c3t": "Klinischer Studienkontext",
      "focus.c3p": "Ich bereite Analysen so auf, dass Ergebnisse in regulierten, interdisziplinären Pharma-Projekten verständlich und entscheidungsrelevant sind.",
      "exp.title": "Erfahrung",
      "projects.title": "Ausgewählte Projekte",
      "projects.featured": "Ausgewählte Fallstudie",
      "projects.featuredDesc": "Produktionsreife Nextflow-Pipeline zur ecDNA-Analyse aus Hochdurchsatzdaten.",
      "projects.problem": "Problem:",
      "projects.outcome": "Ergebnis:",
      "projects.p2a": "Klinische und transkriptomische Signale lassen sich oft nur schwer gemeinsam auswerten.",
      "projects.p2b": "Interaktive Auswertung von Kohorten mit klinischem Kontext für schnelleres Hypothesentesten.",
      "projects.p3a": "Single-Cell-Workflows verlieren über verschiedene Umgebungen häufig an Reproduzierbarkeit.",
      "projects.p3b": "Automatisierte, analysefertige Outputs mit konsistenter Verarbeitung über mehrere Läufe.",
      "cases.title": "Case-Study Snapshots",
      "cases.intro": "So strukturiere ich Projekte von der Problemdefinition bis zu reproduzierbaren Ergebnissen.",
      "cases.step1": "1. Problemrahmen",
      "cases.step2": "2. Daten + Workflow",
      "cases.step3": "3. Ergebnis",
      "cases.c1t": "Onkologie-Transkriptomik",
      "cases.c1a": "Entscheidungsrahmen und relevante klinische/biologische Variablen definieren.",
      "cases.c1b": "Reproduzierbaren Analysepfad mit Qualitätschecks und gut interpretierbaren Outputs aufbauen.",
      "cases.c1c": "Nachvollziehbare Ergebnisse liefern, die in interdisziplinären Teams direkt nutzbar sind.",
      "cases.c2t": "Single-Cell Pipeline-Automatisierung",
      "cases.c2a": "Uneinheitliche, mehrstufige Verarbeitung über verschiedene Umgebungen stabilisieren.",
      "cases.c2b": "Modulare Workflow-Blöcke mit klarer Konfiguration und Logging umsetzen.",
      "cases.c2c": "Konsistente analysefertige Outputs und geringere Reibung in nachgelagerten Schritten.",
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
      "contact.p": "Diese Seite bietet einen kompakten Überblick über meinen Hintergrund, meine Schwerpunkte und ausgewählte Arbeiten in Onkologie-Data-Science und Bioinformatik.",
      "contact.intent": "Profilüberblick, ausgewählte Arbeiten und Publikations-Highlights in Onkologie-Data-Science und Bioinformatik.",
      "contact.ctaMail": "E-Mail schreiben",
      "contact.ctaLinkedIn": "Auf LinkedIn vernetzen",
      "contact.formTitle": "Gespräch starten",
      "contact.name": "Name",
      "contact.email": "E-Mail",
      "contact.message": "Nachricht",
      "contact.send": "Nachricht senden",
      "alert.name": "Bitte gib deinen Namen ein.",
      "alert.email": "Bitte gib eine gültige E-Mail-Adresse ein.",
      "alert.message": "Bitte schreib eine Nachricht."
    }
  };

  const applyLang = (lang) => {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    if (langEn && langDe) {
      const isEn = lang === "en";
      langEn.classList.toggle("active", isEn);
      langDe.classList.toggle("active", !isEn);
      langEn.setAttribute("aria-pressed", String(isEn));
      langDe.setAttribute("aria-pressed", String(!isEn));
    }

    setStoredLang(lang);
  };

  if (langEn) langEn.addEventListener("click", () => applyLang("en"));
  if (langDe) langDe.addEventListener("click", () => applyLang("de"));

  applyLang(getStoredLang() || "en");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (!prefersReducedMotion && "IntersectionObserver" in window && reveals.length) {
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

  const sections = Array.from(document.querySelectorAll("main .section, main .hero"));
  const railProgress = document.getElementById("railProgress");
  const mobileProgress = document.getElementById("mobileProgress");
  const railDots = Array.from(document.querySelectorAll(".rail-dots a"));
  const navLinks = Array.from(document.querySelectorAll(".nav a"));

  const setActiveRail = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let active = "home";
    sections.forEach((sec) => {
      if (sec.offsetTop <= y) active = sec.id || active;
    });
    railDots.forEach((dot) => {
      dot.classList.toggle("active", dot.dataset.rail === active);
    });
    navLinks.forEach((link) => {
      const id = (link.getAttribute("href") || "").replace("#", "");
      link.classList.toggle("active", id === active);
    });
    const doc = document.documentElement;
    const total = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
    if (railProgress) railProgress.style.height = `${pct}%`;
    if (mobileProgress) mobileProgress.style.width = `${pct}%`;
  };

  if (sections.length) {
    const secObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    }, { threshold: 0.18 });
    sections.forEach((sec) => secObserver.observe(sec));
    window.addEventListener("scroll", setActiveRail, { passive: true });
    setActiveRail();
  }

  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="userName"]');
    const email = form.querySelector('input[name="userEmail"]');
    const message = form.querySelector('textarea[name="userMessage"]');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lang = getStoredLang() || "en";
    const dict = translations[lang] || translations.en;

    if (!name.value.trim()) return alert(dict["alert.name"]);
    if (!emailPattern.test(email.value.trim())) return alert(dict["alert.email"]);
    if (!message.value.trim()) return alert(dict["alert.message"]);

    form.submit();
  });
});
