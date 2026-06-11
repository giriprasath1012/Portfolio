import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { sec: 'about',        label: 'About' },
  { sec: 'skills',       label: 'Skills' },
  { sec: 'experience',   label: 'Experience' },
  { sec: 'projects',     label: 'Projects' },
  { sec: 'achievements', label: 'Achievements' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const secObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        setActive(e.target.id);
      });
    }, { threshold: 0.45 });
    sections.forEach(s => secObs.observe(s));
    return () => secObs.disconnect();
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <div className="nav__logo">Giri Prasath <span>V</span></div>
        <div className={`nav__links${open ? ' open' : ''}`} id="nav-links">
          {NAV_LINKS.map(link => (
            <a
              key={link.sec}
              href={`#${link.sec}`}
              data-sec={link.sec}
              className={active === link.sec ? 'active' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav__cta">
          <a href="mailto:giriprasath1012@gmail.com">Get in Touch →</a>
        </div>
        <div className="nav__ham" id="ham" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
