import experience from '../content/experience.json';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-kicker reveal">Work History</p>
        <h2 className="section-title reveal">Where I've built</h2>
        <p className="section-sub reveal d1">Delivering production software for enterprise clients across fintech and HR domains.</p>

        <div className="timeline reveal d2">
          {experience.items.map((item, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dot"></div>
              <div className="tl-date">{item.date}</div>
              <div className="tl-role">{item.role}</div>
              <div className="tl-company">{item.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
