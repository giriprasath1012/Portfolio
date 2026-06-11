const TIMELINE = [
  { date: '03 / 2026 — Present',    role: 'Associate Software Engineer', company: 'Wissen Technology' },
  { date: '06 / 2025 — 03 / 2026',  role: 'Trainee Analyst',             company: 'Wissen Technology' },
  { date: '01 / 2025 — 06 / 2025',  role: 'Software Engineer Intern',    company: 'Wissen Technology' },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-kicker reveal">Work History</p>
        <h2 className="section-title reveal">Where I've built</h2>
        <p className="section-sub reveal d1">Delivering production software for enterprise clients across fintech and HR domains.</p>

        <div className="timeline reveal d2">
          {TIMELINE.map(item => (
            <div className="tl-item" key={item.date}>
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
