const burgerHendler = () => {
  const burgerButtons = document.querySelectorAll('.lc-header-lpc-burger__burger-button');
  const burgerMenuWrap = document.querySelectorAll('.lc-header-lpc-burger__menu-wrapper');
  const burgerParanja = document.querySelectorAll('.lc-header-lpc-burger__paranja');
  const burgerMenu = document.querySelectorAll('.lc-header-lpc-burger__menu');

  for (b of burgerButtons) {
    let burgerButtonAttribute = 'false' === b.getAttribute('aria-expanded');
    b.addEventListener('click', () => {
      if (burgerButtonAttribute) {
        b.setAttribute('aria-expanded', 'true');
        [...burgerMenuWrap].forEach(e => e.classList.remove('lc-header-lpc-burger__menu-wrapper_hidden'));
        [...burgerParanja].forEach(e => e.classList.add('lc-header-lpc-burger__paranja_opened'));
        [...burgerMenu].forEach(e => e.classList.add('lc-header-lpc-burger__menu_opened'));
      }
    });
  }

  for (p of burgerParanja) {
    let burgerButtonAttribute = burgerButtons[0].getAttribute('aria-expanded');
    p.addEventListener('click', () => {
      if (burgerButtonAttribute)  {
        [...burgerButtons].forEach(e => e.setAttribute('aria-expanded', 'false'));
        [...burgerMenuWrap].forEach(e => e.classList.add('lc-header-lpc-burger__menu-wrapper_hidden'));
        [...burgerParanja].forEach(e => e.classList.remove('lc-header-lpc-burger__paranja_opened'));
        [...burgerMenu].forEach(e => e.classList.remove('lc-header-lpc-burger__menu_opened'));
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', burgerHendler);
