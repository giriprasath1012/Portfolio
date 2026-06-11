export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <p className="section-kicker reveal">About me</p>
            <h2 className="section-title reveal">Building things<br /><span style={{ color: 'var(--accent)' }}>that actually work.</span></h2>
            <div className="about__bio reveal d1">
              <p>
                I'm a full-stack engineer at <span className="hi">Wissen Technology</span>, delivering
                production software for enterprise clients in fintech and HR domains. I work across
                the whole stack — from Spring Boot microservices to React Native mobile apps — and
                I care about clean architecture, not just shipped features.
              </p>
              <p>
                I graduated from <span className="hi">Coimbatore Institute of Technology</span> with a CGPA
                of 8.58, and have been recognized multiple times by clients and leadership for delivery
                quality — including a Best Team Award and Director appreciation for shipping a complete
                product solo in under a month.
              </p>
              <p>
                Off the keyboard: <span className="hi">chess</span> and <span className="hi">badminton</span> —
                both teach you to think several moves ahead and react with precision under pressure.
              </p>
            </div>
          </div>
          <div className="stats-grid reveal d2">
            <div className="stat-card">
              <div className="stat-num" data-target="1" data-suffix="+">0</div>
              <div className="stat-lbl">Years Professional Exp.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" data-target="5" data-suffix="+">0</div>
              <div className="stat-lbl">Awards &amp; Recognitions</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" data-target="8.58" data-suffix="" data-float="true">0</div>
              <div className="stat-lbl">CGPA / 10.0</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" data-target="96" data-suffix="%">0</div>
              <div className="stat-lbl">HSC Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
