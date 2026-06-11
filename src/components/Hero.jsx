import heroPhoto from '../assets/hero-photo.png';
import useTypewriter from '../hooks/useTypewriter';
import hero from '../content/hero.json';

const metaText = key => hero.meta.find(m => m.key === key)?.text ?? '';

export default function Hero() {
  const tw = useTypewriter(hero.typewriterLines);
  const showPhoto = hero.showPhoto !== false;

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="hero__inner">
        <div className={`hero__layout${showPhoto ? '' : ' hero__layout--solo'}`}>

          {/* LEFT: Text Content */}
          <div className="hero__text-col">
            <p className="hero__kicker"><span className="kicker-dot"></span>{hero.kicker}</p>
            <h1 className="hero__name">{hero.name}<em>&nbsp;{hero.nameSuffix}</em></h1>
            <div className="hero__role-row">
              <div className="role-line"></div>
              <p className="hero__role"><span id="tw">{tw}</span><span id="cursor">|</span></p>
            </div>
            <p className="hero__bio">
              {hero.bio}
            </p>
            <div className="hero__actions">
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="#contact" className="btn-ghost">Get In Touch</a>
            </div>
            <div className="hero__meta">
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {metaText('location')}
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                {metaText('experience')}
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                {metaText('awards')}
              </div>
            </div>
          </div>

          {showPhoto && (
            <div className="hero__photo-col">
              <div className="hero__photo-wrap">
                <div className="hero__photo-glow"></div>
                <img className="hero__photo" src={heroPhoto} alt="Giri Prasath V" />
                <div className="hero__photo-fade"></div>
                <div className="hero__photo-fade-r"></div>
                <div className="hero__photo-border"></div>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-track"></div>
      </div>
    </section>
  );
}
