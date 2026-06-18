/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const T = {
  ru: {
    'nav.work':    'Портфолио',
    'nav.about':   'Обо мне',
    'nav.contact': 'Контакт',
    'nav.cta':     'Связаться',

    'hero.role':  'Графический дизайнер',
    'hero.h1':    'Дизайн — это',
    'hero.h2':    'язык без слов',
    'hero.desc':  'Создаю визуальные образы, которые вдохновляют и навсегда остаются в памяти.',
    'hero.cta1':  'Смотреть работы',
    'hero.cta2':  'Обо мне',
    'hero.label': 'Дизайн студия',

    'stat.years':    'лет в дизайне',
    'stat.projects': 'проектов',
    'stat.clients':  'брендов',
    'stat.awards':   'награды',

    'about.tag':  'обо мне',
    'about.body': 'Хороший дизайн — это не просто красота. Это <mark>ясность мысли</mark>, воплощённая в форме, которая меняет то, как мир <mark>видит себя</mark>',

    'pf.tag':     'портфолио',
    'pf.heading': 'Избранные работы',
    'pf.c1': 'Брендинг',    'pf.c2': 'Айдентика',
    'pf.c3': 'UI/UX',       'pf.c4': 'Упаковка',
    'pf.c5': 'Типографика', 'pf.c6': 'Иллюстрация',

    'ct.tag':     'контакт',
    'ct.heading': 'Начнём что-то<br>создавать?',
    'ct.email':   'Написать на почту',
    'ct.tg':      'Telegram',
  },

  uz: {
    'nav.work':    'Portfolio',
    'nav.about':   'Men haqimda',
    'nav.contact': 'Aloqa',
    'nav.cta':     'Bog\'lanish',

    'hero.role':  'Grafik dizayner',
    'hero.h1':    'Dizayn —',
    'hero.h2':    'so\'zsiz til',
    'hero.desc':  'Ilhom beradigan va xotirada abadiy qoladigan vizual obrazlar yarataman.',
    'hero.cta1':  'Ishlarni ko\'rish',
    'hero.cta2':  'Men haqimda',
    'hero.label': 'Dizayn studiyasi',

    'stat.years':    'yil tajriba',
    'stat.projects': 'loyiha',
    'stat.clients':  'brend',
    'stat.awards':   'mukofot',

    'about.tag':  'men haqimda',
    'about.body': 'Yaxshi dizayn — bu faqat chiroyli ko\'rinish emas. Bu <mark>fikrning ravshanligi</mark>, shaklda mujassamlashgan va dunyo o\'zini qanday <mark>ko\'rishini</mark> o\'zgartiradi',

    'pf.tag':     'portfolio',
    'pf.heading': 'Tanlangan ishlar',
    'pf.c1': 'Brending',       'pf.c2': 'Identifikatsiya',
    'pf.c3': 'UI/UX',          'pf.c4': 'Qadoqlash',
    'pf.c5': 'Tipografiya',    'pf.c6': 'Illustratsiya',

    'ct.tag':     'aloqa',
    'ct.heading': 'Birgalikda nimadir<br>yarataylik?',
    'ct.email':   'Pochta yozish',
    'ct.tg':      'Telegram',
  },

  en: {
    'nav.work':    'Portfolio',
    'nav.about':   'About',
    'nav.contact': 'Contact',
    'nav.cta':     'Hire me',

    'hero.role':  'Graphic Designer',
    'hero.h1':    'Design is a',
    'hero.h2':    'language without words',
    'hero.desc':  'Creating visual images that inspire and stay in memory forever.',
    'hero.cta1':  'View work',
    'hero.cta2':  'About me',
    'hero.label': 'Design studio',

    'stat.years':    'years in design',
    'stat.projects': 'projects',
    'stat.clients':  'brands',
    'stat.awards':   'awards',

    'about.tag':  'about me',
    'about.body': 'Good design is not just beauty. It is <mark>clarity of thought</mark>, embodied in form that changes how the world <mark>sees itself</mark>',

    'pf.tag':     'portfolio',
    'pf.heading': 'Selected works',
    'pf.c1': 'Branding',    'pf.c2': 'Identity',
    'pf.c3': 'UI/UX',       'pf.c4': 'Packaging',
    'pf.c5': 'Typography',  'pf.c6': 'Illustration',

    'ct.tag':     'contact',
    'ct.heading': 'Let\'s create<br>something together',
    'ct.email':   'Send email',
    'ct.tg':      'Telegram',
  }
};

/* ═══════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLang(lang) {
  currentLang = lang;
  const dict = T[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k] !== undefined) el.textContent = dict[k];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });

  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

/* ═══════════════════════════════════════════
   THEME
═══════════════════════════════════════════ */
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const mc = document.getElementById('themeColor');
  if (mc) mc.content = theme === 'dark' ? '#0F0F0F' : '#F5F5F0';
  localStorage.setItem('theme', theme);
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  setTheme(cur === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.anim').forEach(el => observer.observe(el));

/* ═══════════════════════════════════════════
   HAMBURGER
═══════════════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const navBurger = document.getElementById('navBurger');

navBurger.addEventListener('click', () => {
  navbar.classList.toggle('is-open');
});

document.querySelectorAll('.drawer-link').forEach(link =>
  link.addEventListener('click', () => navbar.classList.remove('is-open'))
);

document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) navbar.classList.remove('is-open');
});

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
applyLang(currentLang);
setTheme(localStorage.getItem('theme') || 'dark');
