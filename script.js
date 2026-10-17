const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${(index % 4) * 70}ms`;
  revealObserver.observe(item);
});

const slider = document.querySelector('#projectSlider');
const previousButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

function moveProjects(direction) {
  if (!slider) return;
  slider.scrollBy({ left: direction * slider.clientWidth * 0.82, behavior: 'smooth' });
}

previousButton?.addEventListener('click', () => moveProjects(-1));
nextButton?.addEventListener('click', () => moveProjects(1));

menuToggle?.addEventListener('click', () => {
  const isOpen = primaryNavigation?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNavigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
