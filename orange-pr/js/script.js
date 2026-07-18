document.addEventListener('DOMContentLoaded', () => {
  
  const navToggle = document.querySelector('.navbar__grid');
  const navLinks = document.querySelector('.navbar__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });
  }

  
  const dots = document.querySelectorAll('.hero .dot');
  if (dots.length) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('is-active'));
        dot.classList.add('is-active');
      });
    });
  }

 
  const testimonialArrows = document.querySelectorAll('.testimonials .slider-arrow');
  testimonialArrows.forEach(btn => {
    btn.addEventListener('click', () => {
      
    });
  });

  const contactForm = document.querySelector('.contact__form-card form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! Your message has been received (demo only — no backend connected).');
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for subscribing! (demo only — no backend connected).');
      newsletterForm.reset();
    });
  }
});