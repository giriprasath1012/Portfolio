import contact from '../content/contact.json';

const link = key => contact.links.find(l => l.key === key) ?? { href: '', label: '' };

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-kicker reveal">Contact</p>
          <h2 className="section-title reveal">Let's build<br /><span style={{ color: 'var(--accent)' }}>something great.</span></h2>
          <p className="section-sub reveal d1" style={{ marginBottom: 0 }}>
            {contact.intro}
          </p>
          <div className="contact-links reveal d2">
            <a href={link('email').href} className="clink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {link('email').label}
            </a>
            <a href={link('linkedin').href} target="_blank" className="clink" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              {link('linkedin').label}
            </a>
            <a href={link('github').href} target="_blank" className="clink" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              {link('github').label}
            </a>
            <a href={link('phone').href} className="clink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              {link('phone').label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
