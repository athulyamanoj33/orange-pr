// ===================== ORANGE PR — interactions =====================

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.navbar__grid');
  const navLinks = document.querySelector('.navbar__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });
  }

  // Hero slider dots (visual only — cycles active state)
  const dots = document.querySelectorAll('.hero .dot');
  if (dots.length) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('is-active'));
        dot.classList.add('is-active');
      });
    });
  }

  // Testimonial slider arrows (visual only — no data cycling wired up)
  const testimonialArrows = document.querySelectorAll('.testimonials .slider-arrow');
  testimonialArrows.forEach(btn => {
    btn.addEventListener('click', () => {
      // Placeholder for future testimonial cycling logic
    });
  });

  // Simple contact form UX: prevent default submit (no backend wired up)
  const contactForm = document.querySelector('.contact__form-card form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! Your message has been received (demo only — no backend connected).');
      contactForm.reset();
    });
  }

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for subscribing! (demo only — no backend connected).');
      newsletterForm.reset();
    });
  }
});