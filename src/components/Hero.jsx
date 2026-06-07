export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Hello, I'm</div>
          <h1>
            Amit <span>Baliyan</span>
          </h1>
          <p className="tagline">Software Engineer — Flutter &amp; Full-Stack Developer</p>
          <div className="hero-contact">
            <a href="tel:+918937915116"><i className="fas fa-phone" /> +91-8937915116</a>
            <a href="mailto:amitbaliyan071@gmail.com"><i className="fas fa-envelope" /> amitbaliyan071@gmail.com</a>
            <a href="https://www.linkedin.com/in/amit-baliyan-8327511b7/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /> LinkedIn</a>
            <a href="https://github.com/Amit00077" target="_blank" rel="noreferrer"><i className="fab fa-github" /> GitHub</a>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary"><i className="fas fa-code" /> View Projects</a>
            <a href="#experience" className="btn btn-outline"><i className="fas fa-briefcase" /> Experience</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">AB</div>
        </div>
      </div>
      <style>{`
        #hero {
          min-height: 100vh; display: flex; align-items: center;
          position: relative; overflow: hidden;
          padding-top: 80px;
        }
        #hero::before {
          content: ''; position: absolute; top: -40%; left: -20%;
          width: 70%; height: 100%;
          background: radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        #hero::after {
          content: ''; position: absolute; bottom: -30%; right: -20%;
          width: 60%; height: 80%;
          background: radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content { position: relative; z-index: 1; display: flex; align-items: center; gap: 4rem; }
        .hero-text { flex: 1; }
        .hero-greeting {
          font-size: 0.9rem; color: #38bdf8; font-weight: 600;
          text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.5rem;
        }
        .hero-text h1 {
          font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 800;
          line-height: 1.1; margin-bottom: 0.75rem;
        }
        .hero-text h1 span {
          background: linear-gradient(135deg, #38bdf8, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .tagline { font-size: 1.15rem; color: #94a3b8; margin-bottom: 1.5rem; }
        .hero-contact { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
        .hero-contact a {
          color: #cbd5e1; text-decoration: none; font-size: 0.9rem;
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.5rem 1rem; border: 1px solid rgba(14,165,233,0.2);
          border-radius: 8px; transition: all 0.25s;
        }
        .hero-contact a:hover { border-color: #0ea5e9; background: rgba(14,165,233,0.08); color: #fff; }
        .hero-contact a i { color: #38bdf8; width: 16px; }
        .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.75rem; border-radius: 8px; font-weight: 600;
          font-size: 0.9rem; text-decoration: none; cursor: pointer;
          border: none; transition: all 0.25s;
        }
        .btn-primary {
          background: linear-gradient(135deg, #0ea5e9, #0891b2);
          color: #fff;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(14,165,233,0.3); }
        .btn-outline {
          background: transparent; color: #e2e8f0;
          border: 1px solid rgba(14,165,233,0.3);
        }
        .btn-outline:hover { border-color: #0ea5e9; background: rgba(14,165,233,0.08); }
        .hero-visual { flex: 0 0 260px; }
        .hero-avatar {
          width: 260px; height: 260px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(14,165,233,0.2), rgba(6,182,212,0.2));
          border: 2px solid rgba(14,165,233,0.35);
          display: flex; align-items: center; justify-content: center;
          font-size: 5rem; font-weight: 700; color: #38bdf8;
          position: relative;
        }
        .hero-avatar::before {
          content: ''; position: absolute; inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(14,165,233,0.1);
          animation: pulse-ring 3s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.2; }
        }
        @media (max-width: 768px) {
          .hero-content { flex-direction: column-reverse; text-align: center; }
          .hero-contact { justify-content: center; }
          .hero-cta { justify-content: center; }
          .hero-visual { flex: 0 0 auto; }
          .hero-avatar { width: 180px; height: 180px; font-size: 3.5rem; }
        }
      `}</style>
    </section>
  )
}
