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
const themeToggle = document.querySelector('.theme-toggle');

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

const root = document.body;
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  root.classList.add('dark-mode');
  themeToggle && (themeToggle.textContent = '☀️');
}

themeToggle?.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark-mode');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

const bookContent = {
  song: {
    label: 'Favourite song',
    title: 'Agar Tum Saath Ho',
    text: 'The feeling I return to.',
    number: '01 / 05',
    art: 'song-art'
  },
  quote: {
    label: 'Favourite line',
    title: '1% chance is enough to make it 100%.',
    text: 'A reminder to believe, begin, and keep going.',
    number: '02 / 05',
    art: 'quote-art'
  },
  book: {
    label: 'Favourite book',
    title: 'Ijoriya',
    text: 'By Subin Bhattarai — a story that stays with me.',
    number: '03 / 05',
    art: 'book-art'
  },
  belief: {
    label: 'A line I believe in',
    title: "God's plan over mine.",
    text: 'Trusting the journey, even when I cannot see the whole path.',
    number: '04 / 05',
    art: 'belief-art'
  },
  series: {
    label: 'On repeat',
    title: 'Marvel web series',
    text: 'Stories with a little wonder, courage, and imagination.',
    number: '05 / 05',
    art: 'series-art'
  }
};

const bookButtons = document.querySelectorAll('.shelf-book');
const panel = document.querySelector('.open-book');
const panelLabel = document.querySelector('[data-panel-label]');
const panelTitle = document.querySelector('[data-panel-title]');
const panelText = document.querySelector('[data-panel-text]');
const panelNumber = document.querySelector('[data-panel-number]');
const panelArt = document.querySelector('[data-panel-art]');

bookButtons.forEach((book) => {
  book.addEventListener('click', () => {
    const content = bookContent[book.dataset.book];
    if (!content || !panel) return;
    bookButtons.forEach((item) => item.classList.toggle('is-active', item === book));
    panel.classList.remove('is-open');
    window.setTimeout(() => {
      panelLabel.textContent = content.label;
      panelTitle.textContent = content.title;
      panelText.textContent = content.text;
      panelNumber.textContent = content.number;
      panelArt.className = `book-page book-page-art ${content.art}`;
      panel.classList.add('is-open');
    }, 120);
  });
});
