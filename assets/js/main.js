/* =====================================================
   main.js · Caio Motorista Particular
   - Header scroll
   - Mobile nav
   - Reveal on scroll
   - Year footer
   - Click tracking (dataLayer-ready)
   ===================================================== */
(function(){
  'use strict';

  // ----- Header com efeito ao scroll -----
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Toggle do menu mobile -----
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded','false');
    }));
  }

  // ----- Reveal on scroll -----
  const revealEls = document.querySelectorAll('.section, .hero-content, .hero-card, .benefit, .service-card, .area-card, .review, .faq details');
  revealEls.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-40px 0px', threshold: 0.05 });
  revealEls.forEach(el => io.observe(el));

  // ----- Ano dinâmico no footer -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Tracking simples de cliques (compatível com GA/GTM) -----
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      const ev = el.getAttribute('data-track');
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'cta_click', cta: ev });
      }
      if (window.gtag) {
        window.gtag('event', 'cta_click', { cta_name: ev });
      }
    });
  });

})();
