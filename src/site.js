const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
}
document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) document.querySelectorAll('details[open]').forEach((other) => { if (other !== detail) other.open = false; });
  });
});
