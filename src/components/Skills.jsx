const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    cls: 'g',
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    cls: 'b',
    items: ['Spring Boot', 'React JS', 'React Native', 'Angular', 'Playwright', '.NET', 'jQuery'],
  },
  {
    label: 'Tools & Platforms',
    cls: 'v',
    items: ['Git / GitHub', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Microservices', 'CI/CD'],
  },
  {
    label: 'Testing',
    cls: 'a',
    items: ['Playwright', 'End-to-End Testing', 'Regression Testing', 'Smoke Testing', 'Page Object Model (POM)'],
  },
  {
    label: 'Methodologies',
    cls: 'p',
    items: ['Agile / Scrum', 'SDLC', 'OOP', 'Design Patterns', 'RBAC'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-kicker reveal">Technical Skills</p>
        <h2 className="section-title reveal">Tools of the trade</h2>
        <p className="section-sub reveal d1">A full-stack toolkit spanning backend services, frontend interfaces, test automation, and database systems.</p>
        <div className="skills__cats reveal d2">
          {SKILL_CATEGORIES.map(cat => (
            <div className="skill-cat" key={cat.label}>
              <div className="skill-cat__label">{cat.label}</div>
              <div className="skill-tags">
                {cat.items.map(item => (
                  <span className={`tag ${cat.cls}`} key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
