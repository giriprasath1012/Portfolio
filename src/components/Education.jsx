const BASE = import.meta.env.BASE_URL;

const EDUCATION = [
  {
    year: '2021 — 2025',
    degree: 'B.E. Computer Science & Engineering',
    school: 'Coimbatore Institute of Technology',
    score: '8.58',
    scoreSuffix: ' / 10',
    label: 'CGPA',
  },
  {
    year: '2019 — 2021',
    degree: 'Higher Secondary Certificate',
    school: 'S.C.M.H.S School',
    score: '96.3',
    scoreSuffix: '%',
    label: 'School First Rank',
  },
];

const CERTIFICATIONS = [
  {
    href: `${BASE}certs/oracle-cloud-ai-foundations.jpg`,
    icon: '☁️',
    name: 'Oracle Cloud Infrastructure AI Foundations Associate (2025)',
    by: 'Oracle',
    meta: 'Issued Oct 2025  ·  Expires Oct 2027',
    id: 'Credential ID: 102793391OCI25AICFA',
  },
  {
    href: `${BASE}certs/anthropic-ai-fluency.jpg`,
    icon: '🧠',
    name: 'Certificate of Completion: AI Fluency Framework & Foundations',
    by: 'Anthropic',
    meta: 'Issued May 2026',
    id: 'Credential ID: ckzytwcibvq4',
  },
  {
    href: `${BASE}certs/coursera-blockchain-scalability.pdf`,
    icon: '🔗',
    name: 'Blockchain Scalability and its Foundations in Distributed Systems',
    by: 'Coursera — University of Sydney',
    meta: 'Issued Nov 2023',
    id: 'Verify: coursera.org/verify/APRL6B2WWY77',
  },
  {
    href: 'https://www.udemy.com/certificate',
    icon: '🤖',
    name: 'The Complete Prompt Engineering for AI Bootcamp',
    by: 'Udemy',
  },
  {
    href: `${BASE}certs/infosys-springboot.pdf`,
    icon: '☕',
    name: 'Learning Spring Boot',
    by: 'Infosys Springboard',
    meta: 'Issued Nov 2024',
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-kicker reveal">Education</p>
        <h2 className="section-title reveal">Academic foundation</h2>

        <div className="edu-grid reveal d1" style={{ marginTop: '48px' }}>
          {EDUCATION.map(edu => (
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
          {CERTIFICATIONS.map(cert => (
            <a className="cert-card" href={cert.href} target="_blank" rel="noopener" key={cert.name}>
              <div className="cert-ico">{cert.icon}</div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-by">{cert.by}</div>
                {cert.meta && <div className="cert-meta">{cert.meta}</div>}
                {cert.id && <div className="cert-id">{cert.id}</div>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
