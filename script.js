const translations = {
  pt: {
    // --- META & NAVIGATION ---
    site_title: "Eros Nicolino — Engenheiro de Dados",
    nav_home: "Home",
    nav_projects: "Projetos",
    nav_skills: "Skills",
    nav_about: "Sobre",
    nav_cv: "CV ↓",

    // --- HERO SECTION ---
    hero_title:
      'Data Engineer | AWS | Python<br /><span class="italic-accent">Serverless Pipelines.</span>',
    hero_lead:
      "Engenharia de dados focada em redução de custos e escalabilidade. Transformo dados brutos em inteligência de negócio com arquiteturas AWS robustas.",
    hero_btn_projects: "Ver Projetos & Impacto",
    hero_btn_contact: "Entrar em Contato",

    // --- PROJECTS SECTION ---
    projects_title: "Projetos de Impacto",
    projects_subtitle:
      "Arquiteturas desenhadas para performance e eficiência de custos.",
    impact_label: "Impacto:",

    // Buttons
    btn_github: "GitHub & Docs",
    btn_demo: "Ver Demo Online",

    // Project 1: Financial Pipeline
    proj_2_title: "Financial Data Pipeline",
    proj_2_desc:
      "Pipeline ETL processando dados da B3. Arquitetura orientada a eventos garantindo dados sempre atualizados.",
    proj_2_metric_1: "✅ Custo Zero em Idle (Serverless)",
    proj_2_metric_2: "✅ Automação 100% via EventBridge",

    // Project 2: WebRTC
    proj_3_title: "LiveLink Streaming",
    proj_3_desc:
      "Sistema de vídeo P2P eliminando custo de servidores de mídia intermediários.",
    proj_3_metric_1: "✅ Latência Sub-300ms",
    proj_3_metric_2: "✅ Escalabilidade Horizontal P2P",

    // Project 3: Pong AI
    proj_1_title: "Pong AI Agent (DQN)",
    proj_1_desc:
      "Agente autônomo treinado com Deep Q-Networks demonstrando lógica de recompensa complexa.",
    proj_1_metric_1: "✅ +50.000 iterações de treino",
    proj_1_metric_2: "✅ Taxa de vitória > 95%",

    // Project 4: Books API
    proj_4_title: "Enterprise Books API",
    proj_4_desc:
      "API Production-Ready com documentação automática e segurança implementada.",
    proj_4_metric_1: "✅ Auth Segura (JWT)",
    proj_4_metric_2: "✅ Pipeline de Scraping Integrado",

    // Project 5: Battleship
    proj_5_title: "Probabilistic Battleship",
    proj_5_desc:
      "IA tática baseada em mapas de calor probabilísticos calculando a melhor jogada estatisticamente a cada turno.",
    proj_5_metric_1: "✅ Decisão puramente estatística",
    proj_5_metric_2: "✅ Heatmaps em Tempo Real",

    // Project 6: AeroPredict (NOVO)
    proj_6_title: "AeroPredict — Previsão de Atrasos de Voos",
    proj_6_desc:
      "Pipeline completo de Machine Learning para previsão de atrasos de voos com prevenção de data leakage, validação cruzada estratificada e comparação entre modelos.",
    proj_6_metric_1: "✅ Pipeline sem Data Leakage",
    proj_6_metric_2: "✅ ROC-AUC ~0.64 com validação estratificada",
    proj_6_metric_3:
      "✅ Análise de importância de variáveis e benchmark entre modelos",

    // --- SKILLS & ABOUT ---
    skills_ai_title: "Data Engineering & AI",
    skills_backend_title: "Backend & Systems",
    about_title: "Background Técnico",
    about_p1:
      "Meu foco é resolver problemas de negócio complexos usando dados. Com forte base em matemática e algoritmos, transito entre infraestrutura de dados escalável na AWS e desenvolvimento backend de alta performance.",
    edu_1_title: "Pós-Graduação: ML Engineering",
    edu_1_school: "FIAP (Cursando)",
    edu_2_title: "Gestão de TI",
    edu_2_school: "FAM (Concluído)",

    // --- FOOTER ---
    footer_title: "Tem um desafio de dados?",
    footer_subtitle: "Disponível para projetos e contratação.",
    footer_btn: "Vamos Conversar",
  },

  en: {
    // --- META & NAVIGATION ---
    site_title: "Eros Nicolino — Data Engineer",
    nav_home: "Home",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_about: "About",
    nav_cv: "Resume ↓",

    // --- HERO SECTION ---
    hero_title:
      'Data Engineer | AWS | Python<br /><span class="italic-accent">Serverless Pipelines.</span>',
    hero_lead:
      "Data engineering focused on cost reduction and scalability. Transforming raw data into business intelligence with robust AWS architectures.",
    hero_btn_projects: "View Projects & Impact",
    hero_btn_contact: "Get in Touch",

    // --- PROJECTS SECTION ---
    projects_title: "Impactful Projects",
    projects_subtitle:
      "Architectures designed for performance and cost efficiency.",
    impact_label: "Impact:",

    // Buttons
    btn_github: "GitHub & Docs",
    btn_demo: "Live Demo",

    // Project 1: Financial Pipeline
    proj_2_title: "Financial Data Pipeline",
    proj_2_desc:
      "ETL pipeline processing B3 financial data using event-driven architecture for real-time availability.",
    proj_2_metric_1: "✅ Zero Idle Cost (Serverless)",
    proj_2_metric_2: "✅ 100% Automation via EventBridge",

    // Project 2: WebRTC
    proj_3_title: "LiveLink Streaming",
    proj_3_desc:
      "P2P video system eliminating the cost of intermediate media servers.",
    proj_3_metric_1: "✅ Sub-300ms Latency",
    proj_3_metric_2: "✅ P2P Horizontal Scalability",

    // Project 3: AeroPredict (NEW)
    proj_6_title: "AeroPredict — Flight Delay Prediction",
    proj_6_desc:
      "End-to-end Machine Learning pipeline for flight delay prediction using structured aviation data, featuring leakage prevention, stratified cross-validation, and model benchmarking.",
    proj_6_metric_1: "✅ Data Leakage-Free Pipeline",
    proj_6_metric_2: "✅ ROC-AUC ~0.64 with Stratified Validation",
    proj_6_metric_3: "✅ Feature Importance Analysis & Model Benchmarking",

    // Project 4: Pong AI
    proj_1_title: "Pong AI Agent (DQN)",
    proj_1_desc:
      "Autonomous agent trained with Deep Q-Networks demonstrating complex reward logic.",
    proj_1_metric_1: "✅ +50,000 training iterations",
    proj_1_metric_2: "✅ Win rate > 95%",

    // Project 5: Books API
    proj_4_title: "Enterprise Books API",
    proj_4_desc:
      "Production-ready API featuring automatic documentation and secure authentication.",
    proj_4_metric_1: "✅ Secure Auth (JWT)",
    proj_4_metric_2: "✅ Integrated Scraping Pipeline",

    // Project 6: Battleship
    proj_5_title: "Probabilistic Battleship",
    proj_5_desc:
      "Tactical AI powered by real-time probabilistic heatmaps calculating the statistically optimal move each turn.",
    proj_5_metric_1: "✅ Purely statistical decision-making",
    proj_5_metric_2: "✅ Real-time Heatmaps",

    // --- SKILLS & ABOUT ---
    skills_ai_title: "Data Engineering & AI",
    skills_backend_title: "Backend & Systems",
    about_title: "Technical Background",
    about_p1:
      "My focus is solving complex business problems using data. With a strong foundation in mathematics and algorithms, I bridge scalable AWS data infrastructure and high-performance backend engineering.",
    edu_1_title: "Postgrad: ML Engineering",
    edu_1_school: "FIAP (In Progress)",
    edu_2_title: "IT Management",
    edu_2_school: "FAM (Completed)",

    // --- FOOTER ---
    footer_title: "Have a data challenge?",
    footer_subtitle: "Available for projects and hiring.",
    footer_btn: "Let's Talk",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");

  const setLanguage = (lang) => {
    const langData = translations[lang] || translations["pt"];

    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (langData[key]) {
        element.innerHTML = langData[key];
      }
    });

    document.documentElement.lang = lang;

    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("preferredLanguage", lang);
  };

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  setLanguage(localStorage.getItem("preferredLanguage") || "pt");

  // Mobile Menu
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isVisible = nav.getAttribute("data-visible") === "true";
      nav.setAttribute("data-visible", !isVisible);
    });

    document.querySelectorAll(".nav-list a").forEach((link) => {
      link.addEventListener("click", () =>
        nav.setAttribute("data-visible", "false"),
      );
    });
  }

  // Scroll Reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".scroll-reveal, .reveal-item")
    .forEach((el) => observer.observe(el));
});
