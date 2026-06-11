const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Best Team Award',
    desc: "Won at Wissen Technology's 10th Annual Day for outstanding delivery and team performance on the Client Onboarding Platform.",
    delay: '',
  },
  {
    icon: '⚡',
    title: 'Automation Head Recognition',
    desc: 'Recognized for refactoring and scaling the Playwright POM framework, improving maintainability and test coverage across business lines.',
    delay: 'd1',
  },
  {
    icon: '🚀',
    title: "Director's Appreciation",
    desc: 'Appreciated by the Director for building and shipping the full Razer Reusable Components product within a single month to spec.',
    delay: 'd2',
  },
  {
    icon: '🎓',
    title: 'Notable Facilitator',
    desc: 'Awarded by the ASCII Association for mentoring junior students through college placement preparation — teaching and guiding the next cohort.',
    delay: 'd3',
  },
  {
    icon: '🥇',
    title: 'School First Rank',
    desc: 'Achieved first rank in both SSLC and HSC board examinations — academic precision that laid the foundation for everything after.',
    delay: 'd1',
  },
  {
    icon: '☁️',
    title: 'Oracle Cloud Certified',
    desc: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate. Also certified in Prompt Engineering (Udemy) and Spring Boot (Infosys Springboard).',
    delay: 'd2',
  },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <p className="section-kicker reveal">Recognition</p>
        <h2 className="section-title reveal">Earned, not given</h2>
        <p className="section-sub reveal d1">Awards and recognition from clients, directors, and communities across professional and academic settings.</p>

        <div className="ach-grid">
          {ACHIEVEMENTS.map(item => (
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
