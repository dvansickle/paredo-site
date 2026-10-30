(() => {
  'use strict';
  const root = document.getElementById('comparisons');
  if (!root) return;
  const track = root.querySelector('#noise-track');
  const slides = [...track.querySelectorAll('.noise-slide')];
  const choices = [...root.querySelectorAll('[data-example]')];
  let current = 0;
  let queued = false;
  function update() {
    queued = false;
    current = Math.max(0, Math.min(slides.length - 1,
      Math.round(track.scrollLeft / track.clientWidth)));
    root.querySelector('#noise-status').textContent =
      `0${current + 1} / 0${slides.length} · ${slides[current].dataset.title}`;
    choices.forEach((button, index) => button.setAttribute('aria-pressed', String(index === current)));
  }
  function select(index) {
    const next = (index + slides.length) % slides.length;
    track.scrollTo({left: next * track.clientWidth, behavior: 'instant'});
    update();
  }
  root.querySelectorAll('[data-noise-controls]').forEach(element => { element.hidden = false; });
  root.querySelector('#noise-prev').addEventListener('click', () => select(current - 1));
  root.querySelector('#noise-next').addEventListener('click', () => select(current + 1));
  choices.forEach(button => button.addEventListener('click', () => select(Number(button.dataset.example))));
  track.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    select(current + (event.key === 'ArrowRight' ? 1 : -1));
  });
  // Native horizontal scrolling provides touch swipe and a usable no-script fallback.
  track.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, {passive: true});
  // Keep the selected example aligned when the viewport changes.
  new ResizeObserver(() => select(current)).observe(track);
  update();
})();
