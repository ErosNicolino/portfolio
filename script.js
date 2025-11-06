const translations = {
  pt: {
    site_title: "Eros Nicolino — Portfólio",
    nav_home: "Home",
    nav_about: "Sobre",
    nav_qualifications: "Qualificações",
    nav_projects: "Projetos",
    nav_contact: "✉️ Contato",
    hero_title: "Olá, eu sou <span class=\"name\">Eros Nicolino</span>",
    hero_lead: "Engenheiro de Dados (AWS) & Python Developer | Pós-graduando em Machine Learning Engineering",
    hero_btn_projects: "Ver trabalhos",
    hero_btn_contact: "✉️ Contato",
    about_title: "Sobre mim",
    about_p1: "Fascinado por dados, minha jornada da Gestão de TI para a Engenharia de Dados foi impulsionada pelo desejo de construir soluções escaláveis. Agora, meu foco é usar Machine Learning e AWS para transformar dados brutos em insights de negócios.",
    about_p2: "Meu objetivo é utilizar as melhores práticas de processamento (Batch/Stream), orquestração e arquitetura de dados (Data Lake/Lakehouse) para otimizar fluxos e gerar valor para o negócio.",
    qual_title: "Qualificações",
    qual_education_title: "Formação Acadêmica",
    qual_edu_1_title: "Pós-Graduação em Machine Learning Engineering",
    qual_edu_1_loc: "FIAP - São Paulo",
    qual_edu_1_date: "Conclusão: Julho 2026",
    qual_edu_2_title: "Gestão da Tecnologia da Informação",
    qual_edu_2_loc: "FAM - São Paulo",
    qual_edu_2_date: "Concluído: Julho 2024",
    qual_certs_title: "Certificações e Cursos",
    qual_certs_official: "Certificações Oficiais",
    qual_cert_1_title: "AWS Certified Cloud Practitioner",
    qual_cert_1_desc: "Cloud & Dados",
    qual_cert_2_title: "Google Cloud Associate",
    qual_cert_2_desc: "Cloud & Dados",
    qual_certs_alura: "Formações Relevantes (Alura)",
    qual_alura_1_title: "Formação SQL com MySQL Server da Oracle",
    qual_alura_1_desc: "Modelagem e Otimização de Bancos de Dados",
    qual_alura_2_title: "Formação Modelagem de dados",
    qual_alura_2_desc: "Normalização, Lógica e Física",
    qual_alura_3_title: "Formação Redes de computadores",
    qual_alura_3_desc: "Infraestrutura, VLANs e Roteamento",
    skills_title: "Habilidades Técnicas",
    skills_cloud_title: "Cloud & Dados (AWS)",
    skills_data_title: "Dados, ML & BI",
    skills_tools_title: "Programação & Ferramentas",
    projects_title: "Projetos",
    proj_1_title: "Pong AI - Agente de Reinforcement Learning",
    proj_1_desc: "Desenvolvimento de um agente de inteligência artificial para jogar o clássico jogo Pong, utilizando conceitos de Reinforcement Learning. O agente aprende a estratégia ideal através de tentativas e erros, otimizando suas decisões para maximizar a pontuação sem intervenção humana.",
    proj_2_title: "Pipeline Batch Serverless - Bovespa (Tech Challenge FIAP)",
    proj_2_desc: "Desenvolvimento de um pipeline de dados batch serverless na AWS para ingestão, processamento e análise de dados do pregão da B3. Orquestração com S3 Events e AWS Lambda para trigger de job ETL no AWS Glue.",
    proj_3_title: "Tech Challenge - Books API (Associado à FIAP)",
    proj_3_desc: "API completa (Flask) para consulta de dados de livros, com autenticação JWT. Inclui pipeline de web scraping, endpoints RESTful com documentação Swagger (OpenAPI) e um dashboard de monitoramento interativo com Streamlit.",
    btn_code: "Código",
    btn_inprogress: "Em Andamento",
    footer_title: "Vamos nos conectar",
    footer_desc: "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas visões.",
    footer_btn_cv: "Baixar CV (PT-BR)",
    footer_socials: "Mídias Sociais",
    footer_rights: "Todos os direitos reservados."
  },
  en: {
    site_title: "Eros Nicolino — Portfolio",
    nav_home: "Home",
    nav_about: "About",
    nav_qualifications: "Qualifications",
    nav_projects: "Projects",
    nav_contact: "✉️ Contact",
    hero_title: "Hello, I'm <span class=\"name\">Eros Nicolino</span>",
    hero_lead: "Data Engineer (AWS) & Python Developer | Postgraduate in Machine Learning Engineering",
    hero_btn_projects: "View works",
    hero_btn_contact: "✉️ Contact",
    about_title: "About Me",
    about_p1: "Fascinated by data, my journey from IT Management to Data Engineering was driven by the desire to build scalable solutions. Now, my focus is on using Machine Learning and AWS to transform raw data into business insights.",
    about_p2: "My goal is to use best practices in processing (Batch/Stream), orchestration, and data architecture (Data Lake/Lakehouse) to optimize flows and generate value for the business.",
    qual_title: "Qualifications",
    qual_education_title: "Academic Education",
    qual_edu_1_title: "Postgraduate in Machine Learning Engineering",
    qual_edu_1_loc: "FIAP - São Paulo",
    qual_edu_1_date: "Conclusion: July 2026",
    qual_edu_2_title: "Information Technology Management",
    qual_edu_2_loc: "FAM - São Paulo",
    qual_edu_2_date: "Completed: July 2024",
    qual_certs_title: "Certifications and Courses",
    qual_certs_official: "Official Certifications",
    qual_cert_1_title: "AWS Certified Cloud Practitioner",
    qual_cert_1_desc: "Cloud & Data",
    qual_cert_2_title: "Google Cloud Associate",
    qual_cert_2_desc: "Cloud & Data",
    qual_certs_alura: "Relevant Training (Alura)",
    qual_alura_1_title: "SQL with MySQL Server (Oracle) Training",
    qual_alura_1_desc: "Database Modeling and Optimization",
    qual_alura_2_title: "Data Modeling Training",
    qual_alura_2_desc: "Normalization, Logical & Physical",
    qual_alura_3_title: "Computer Networks Training",
    qual_alura_3_desc: "Infrastructure, VLANs & Routing",
    skills_title: "Technical Skills",
    skills_cloud_title: "Cloud & Data (AWS)",
    skills_data_title: "Data, ML & BI",
    skills_tools_title: "Programming & Tools",
    projects_title: "Projects",
    proj_1_title: "Pong AI - Reinforcement Learning Agent",
    proj_1_desc: "Development of an AI agent to play the classic Pong game, using Reinforcement Learning concepts. The agent learns the optimal strategy through trial and error, optimizing its decisions to maximize the score without human intervention.",
    proj_2_title: "Serverless Batch Pipeline - Bovespa (FIAP Tech Challenge)",
    proj_2_desc: "Development of a serverless batch data pipeline on AWS for ingestion, processing, and analysis of B3 trading data. Orchestration with S3 Events and AWS Lambda to trigger an ETL job in AWS Glue.",
    proj_3_title: "Tech Challenge - Books API (FIAP Associate)",
    proj_3_desc: "Complete API (Flask) for querying book data, with JWT authentication. Includes a web scraping pipeline, RESTful endpoints with Swagger (OpenAPI) documentation, and an interactive monitoring dashboard with Streamlit.",
    btn_code: "Code",
    btn_inprogress: "In Progress",
    footer_title: "Let's connect",
    footer_desc: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    footer_btn_cv: "Download CV (PT-BR)",
    footer_socials: "Social Media",
    footer_rights: "All rights reserved."
  },
  es: {
    site_title: "Eros Nicolino — Portafolio",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_qualifications: "Calificaciones",
    nav_projects: "Proyectos",
    nav_contact: "✉️ Contacto",
    hero_title: "Hola, soy <span class=\"name\">Eros Nicolino</span>",
    hero_lead: "Ingeniero de Datos (AWS) & Python Developer | Postgrado en Ingeniería de Machine Learning",
    hero_btn_projects: "Ver trabajos",
    hero_btn_contact: "✉️ Contacto",
    about_title: "Sobre mí",
    about_p1: "Fascinado por los datos, mi viaje de la Gestión de TI a la Ingeniería de Datos fue impulsado por el deseo de construir soluciones escalables. Ahora, mi enfoque es usar Machine Learning y AWS para transformar datos brutos en insights de negocio.",
    about_p2: "Mi objetivo es utilizar las mejores prácticas de procesamiento (Batch/Stream), orquestación y arquitectura de datos (Data Lake/Lakehouse) para optimizar flujos y generar valor para el negocio.",
    qual_title: "Calificaciones",
    qual_education_title: "Formación Académica",
    qual_edu_1_title: "Postgrado en Ingeniería de Machine Learning",
    qual_edu_1_loc: "FIAP - São Paulo",
    qual_edu_1_date: "Conclusión: Julio 2026",
    qual_edu_2_title: "Gestión de Tecnología de la Información",
    qual_edu_2_loc: "FAM - São Paulo",
    qual_edu_2_date: "Completado: Julio 2024",
    qual_certs_title: "Certificaciones y Cursos",
    qual_certs_official: "Certificaciones Oficiales",
    qual_cert_1_title: "AWS Certified Cloud Practitioner",
    qual_cert_1_desc: "Nube y Datos",
    qual_cert_2_title: "Google Cloud Associate",
    qual_cert_2_desc: "Nube y Datos",
    qual_certs_alura: "Formaciones Relevantes (Alura)",
    qual_alura_1_title: "Formación SQL con MySQL Server (Oracle)",
    qual_alura_1_desc: "Modelado y Optimización de Bases de Datos",
    qual_alura_2_title: "Formación Modelado de Datos",
    qual_alura_2_desc: "Normalización, Lógica y Física",
    qual_alura_3_title: "Formación Redes de Computadoras",
    qual_alura_3_desc: "Infraestructura, VLANs y Enrutamiento",
    skills_title: "Habilidades Técnicas",
    skills_cloud_title: "Nube y Datos (AWS)",
    skills_data_title: "Datos, ML & BI",
    skills_tools_title: "Programación y Herramientas",
    projects_title: "Proyectos",
    proj_1_title: "Pong AI - Agente de Aprendizaje por Refuerzo",
    proj_1_desc: "Desarrollo de un agente de IA para jugar al clásico juego Pong, utilizando conceptos de Aprendizaje por Refuerzo. El agente aprende la estrategia óptima a través de prueba y error, optimizando sus decisiones para maximizar la puntuación sin intervención humana.",
    proj_2_title: "Pipeline Batch Serverless - Bovespa (Tech Challenge FIAP)",
    proj_2_desc: "Desarrollo de un pipeline de datos batch serverless en AWS para la ingesta, procesamiento y análisis de datos de la bolsa de B3. Orquestación con S3 Events y AWS Lambda para activar un job ETL en AWS Glue.",
    proj_3_title: "Tech Challenge - Books API (Asociado a FIAP)",
    proj_3_desc: "API completa (Flask) para consultar datos de libros, con autenticación JWT. Incluye un pipeline de web scraping, endpoints RESTful con documentación Swagger (OpenAPI) y un panel de monitoreo interactivo con Streamlit.",
    btn_code: "Código",
    btn_inprogress: "En Progreso",
    footer_title: "Conectemos",
    footer_desc: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
    footer_btn_cv: "Descargar CV (PT-BR)",
    footer_socials: "Redes Sociales",
    footer_rights: "Todos los derechos reservados."
  }
};

document.addEventListener('DOMContentLoaded', () => {

  const langButtons = document.querySelectorAll('.lang-btn');
  
  /**
   @param {string} lang 
   */
  const setLanguage = (lang) => {
    const langData = translations[lang];
    if (!langData) return; 

    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      const translation = langData[key];
      
      if (translation) {
        element.innerHTML = translation;
      }
    });

    document.documentElement.lang = lang;

    document.title = langData.site_title;

    localStorage.setItem('preferredLanguage', lang);

    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  };

  const initLanguageSwitcher = () => {
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        setLanguage(selectedLang);
      });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(savedLang);
  };

  const initMobileMenu = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    
    if (!navToggle || !nav) return;

    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      const isExpanded = nav.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('nav-open')) {
          nav.classList.remove('nav-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  };

  const initScrollFadeIn = () => {
    const sections = document.querySelectorAll('section');
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  };

  const initScrollSpy = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const correspondingLink = document.querySelector(`.nav-list a[href="#${id}"]`);
          
          navLinks.forEach(link => link.classList.remove('active'));
          
          if (correspondingLink) {
            correspondingLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  };

  const initFooterYear = () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  };

  initLanguageSwitcher(); 
  initMobileMenu();
  initScrollFadeIn();
  initScrollSpy();
  initFooterYear();

});