const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Zavřít nabídku' : 'Otevřít nabídku');
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Otevřít nabídku');
  toggle.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Independent photo carousel for each portfolio project.
document.querySelectorAll('.project-media').forEach(gallery => {
  const slides = [...gallery.querySelectorAll('.project-slide')];
  const count = gallery.querySelector('.gallery-count');
  let current = 0;
  function show(next) {
    slides[current].classList.remove('active');
    current = (next + slides.length) % slides.length;
    slides[current].classList.add('active');
    count.textContent = `${current + 1} / ${slides.length}`;
  }
  gallery.querySelector('.gallery-prev').addEventListener('click', () => show(current - 1));
  gallery.querySelector('.gallery-next').addEventListener('click', () => show(current + 1));
});
