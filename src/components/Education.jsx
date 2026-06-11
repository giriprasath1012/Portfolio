import education from '../content/education.json';
import certifications from '../content/certifications.json';

const BASE = import.meta.env.BASE_URL;

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-kicker reveal">Education</p>
        <h2 className="section-title reveal">Academic foundation</h2>

        <div className="edu-grid reveal d1" style={{ marginTop: '48px' }}>
          {education.items.map(edu => (
            <div className="edu-card" key={edu.school}>
              <div className="edu-year">{edu.year}</div>
              <div className="edu-deg">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-score">{edu.score}<sup>{edu.scoreSuffix}</sup></div>
              <div className="edu-lbl">{edu.label}</div>
            </div>
          ))}
        </div>

        <p className="section-kicker reveal" style={{ marginBottom: '22px' }}>Certifications</p>
        <div className="certs-list reveal d1">
          {certifications.items.map((cert, i) => {
            const href = /^https?:\/\//.test(cert.href) ? cert.href : `${BASE}${cert.href}`;
            return (
              <a className="cert-card" href={href} target="_blank" rel="noopener" key={`${cert.name}-${i}`}>
                <div className="cert-ico">{cert.icon}</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-by">{cert.by}</div>
                  {cert.meta && <div className="cert-meta">{cert.meta}</div>}
                  {cert.id && <div className="cert-id">{cert.id}</div>}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
