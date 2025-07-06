// site.js
// Mobile nav, scroll animations, back-to-top, and animated counters for Justice For All

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });
  }

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('opacity-0', window.scrollY < 300);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Animated counters
  document.querySelectorAll('.counter').forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute('data-target');
      const speed = 200;
      const increment = target / speed;
      let count = 0;
      const update = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
    };
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      });
      observer.observe(counter);
    } else {
      animate();
    }
  });
});
