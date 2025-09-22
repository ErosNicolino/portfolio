document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menu mobile toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navList.style.display = expanded ? 'none' : 'flex';
  });

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if(window.innerWidth < 900) navList.style.display = 'none';
      }
    });
  });

  // Fade-in seções
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('fade-in');
    });
  }, {threshold:0.15});
  sections.forEach(section => observer.observe(section));

  // Formulário funcional (alert apenas, sem back-end)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    alert(`Mensagem enviada!\nNome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`);
    form.reset();
  });
});
