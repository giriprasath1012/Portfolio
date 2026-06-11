import achievements from '../content/achievements.json';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <p className="section-kicker reveal">Recognition</p>
        <h2 className="section-title reveal">Earned, not given</h2>
        <p className="section-sub reveal d1">Awards and recognition from clients, directors, and communities across professional and academic settings.</p>

        <div className="ach-grid">
          {achievements.items.map(item => (
            <div className={`ach-card reveal${item.delay ? ` ${item.delay}` : ''}`} key={item.title}>
              <span className="ach-icon">{item.icon}</span>
              <div className="ach-title">{item.title}</div>
              <p className="ach-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
