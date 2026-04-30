// script.js — простая логика: тема, навигация, лайтбокс
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Burger menu for small screens
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  const toggleNav = (open) => {
    if (!nav || !burger) return;
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    nav.setAttribute('aria-hidden', String(!open));
  };

  if (burger) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      toggleNav(!expanded);
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 760 && nav && nav.classList.contains('open')) {
      toggleNav(false);
    }
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
        // close mobile nav
        if (window.innerWidth < 760 && nav && nav.classList.contains('open')) {
          toggleNav(false);
        }
      }
    });
  });

  // Lightbox for gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeBtn = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || 'Gallery image';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  };
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

});