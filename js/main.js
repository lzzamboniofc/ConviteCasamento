const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const nav = document.querySelector('.floating-nav');
const hero = document.querySelector('.hero');

if (nav && hero) {
  const navObserver = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0.15 });
  navObserver.observe(hero);
}

// Parallax apenas em desktop e somente quando o usuário permite movimento.
if (window.matchMedia('(min-width: 820px) and (prefers-reduced-motion: no-preference)').matches && hero) {
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY * 0.12, 70);
    hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
  }, { passive: true });
}

const giftButton = document.querySelector('[data-gift-demo]');
if (giftButton) {
  giftButton.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Substitua este link pela sua lista de presentes.');
  });
}

const rsvpForm = document.querySelector('.rsvp-form');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Presença registrada na demonstração!');
  });
}
