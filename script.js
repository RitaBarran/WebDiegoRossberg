window.addEventListener('DOMContentLoaded', () => {
  const vinilo = document.querySelector('.vinilo');

  if (vinilo) {
    vinilo.classList.add('animar');
  }

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('ul');

  if (!toggle || !menu) return;

  const setMenuState = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };

  toggle.addEventListener('click', () => {
    setMenuState(!menu.classList.contains('is-open'));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuState(false);
  });
});
