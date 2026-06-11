import about from '../content/about.json';

function renderHighlighted(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <span className="hi" key={i}>{part.slice(2, -2)}</span>
      : <span key={i}>{part}</span>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <p className="section-kicker reveal">About me</p>
            <h2 className="section-title reveal">Building things<br /><span style={{ color: 'var(--accent)' }}>that actually work.</span></h2>
            <div className="about__bio reveal d1">
              {about.bioParagraphs.map((p, i) => (
                <p key={i}>{renderHighlighted(p)}</p>
              ))}
            </div>
          </div>
          <div className="stats-grid reveal d2">
            {about.stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-num" data-target={stat.target} data-suffix={stat.suffix} data-float={stat.float ? 'true' : 'false'}>0</div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
