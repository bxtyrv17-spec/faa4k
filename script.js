const navbar   = document.getElementById('navbar');
const navBurger = document.getElementById('navBurger');

navBurger.addEventListener('click', () => {
  const open = navbar.classList.toggle('is-open');
  navBurger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});

// Close drawer when any drawer link is clicked
document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('is-open');
    navBurger.setAttribute('aria-label', 'Открыть меню');
  });
});

// Close drawer on outside tap
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navbar.classList.remove('is-open');
  }
});
