import projects from '../content/projects.json';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-kicker reveal">Featured Work</p>
        <h2 className="section-title reveal">What I've shipped</h2>
        <p className="section-sub reveal d1">Production systems built for real clients, with real requirements and real constraints.</p>

        <div className="projects-grid">
          {projects.items.map(proj => (
            <div className={`proj-card reveal${proj.delay ? ` ${proj.delay}` : ''}`} key={proj.idx}>
              <div className="proj-idx">{proj.idx}</div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>
              <div className="stack">
                {proj.stack.map(tech => (
                  <span className="stack-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
