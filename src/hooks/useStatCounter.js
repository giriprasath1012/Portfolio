import { useEffect } from 'react';

function animateStat(el) {
  const target   = parseFloat(el.dataset.target);
  const suffix   = el.dataset.suffix || '';
  const isFloat  = el.dataset.float === 'true';
  const duration = 1800;
  const frames   = 60;
  let   frame    = 0;

  const id = setInterval(() => {
    frame++;
    const progress = frame / frames;
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = target * eased;

    el.textContent = isFloat
      ? val.toFixed(2) + suffix
      : Math.round(val) + suffix;

    if (frame >= frames) {
      el.textContent = isFloat ? target.toFixed(2) + suffix : target + suffix;
      clearInterval(id);
    }
  }, duration / frames);

  return id;
}

export default function useStatCounter() {
  useEffect(() => {
    const intervals = [];
    const statObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const num = e.target.querySelector('.stat-num');
        if (num && !num.dataset.animated) {
          num.dataset.animated = '1';
          intervals.push(animateStat(num));
        }
        statObs.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.stat-card').forEach(c => statObs.observe(c));

    return () => {
      statObs.disconnect();
      intervals.forEach(clearInterval);
    };
  }, []);
}
