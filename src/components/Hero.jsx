export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Hello, I'm</div>
          <h1>
            Amit <span>Baliyan</span>
          </h1>
          <p className="tagline">Software Engineer</p>
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
          <div className="hero-avatar">
            <div className="hero-avatar-ring" />
            <img src="/Amit.png" alt="Amit Baliyan" />
          </div>
        </div>
      </div>
      <style>{`
        #hero {
          min-height: 100vh; display: flex; align-items: center;
          position: relative; overflow: hidden;
          padding-top: 80px;
          background: linear-gradient(135deg, #0c1222 0%, #0f2a2a 40%, #134e4a 100%);
        }
        .hero-glow {
          position: absolute; border-radius: 50%;
          pointer-events: none; filter: blur(80px);
        }
        .hero-glow-1 {
          top: -20%; left: -10%;
          width: 60%; height: 80%;
          background: radial-gradient(circle, rgba(20,184,166,0.12), transparent 70%);
        }
        .hero-glow-2 {
          bottom: -30%; right: -10%;
          width: 50%; height: 70%;
          background: radial-gradient(circle, rgba(45,212,191,0.08), transparent 70%);
        }
        .hero-glow-3 {
          top: 40%; right: 30%;
          width: 30%; height: 40%;
          background: radial-gradient(circle, rgba(20,184,166,0.06), transparent 70%);
        }
        .hero-content { position: relative; z-index: 1; display: flex; align-items: center; gap: 4rem; }
        .hero-text { flex: 1; }
        .hero-greeting {
          font-size: 0.85rem; color: #5eead4; font-weight: 600;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 0.75rem;
          opacity: 0.9;
        }
        .hero-text h1 {
          font-size: clamp(2.6rem, 5.5vw, 4.2rem); font-weight: 800;
          line-height: 1.05; margin-bottom: 0.75rem;
          color: #f1f5f9; letter-spacing: -0.03em;
        }
        .hero-text h1 span {
          background: linear-gradient(135deg, #2dd4bf, #14b8a6, #0d9488);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .tagline { font-size: 1.1rem; color: #94a3b8; margin-bottom: 2rem; font-weight: 400; }
        .hero-contact { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem; }
        .hero-contact a {
          color: #cbd5e1; text-decoration: none; font-size: 0.85rem;
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; transition: all 0.3s;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(4px);
        }
        .hero-contact a:hover {
          border-color: rgba(45,212,191,0.3);
          background: rgba(45,212,191,0.08);
          color: #fff;
          transform: translateY(-1px);
        }
        .hero-contact a i { color: #2dd4bf; width: 16px; font-size: 0.8rem; }
        .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.8rem; border-radius: 10px; font-weight: 600;
          font-size: 0.9rem; text-decoration: none; cursor: pointer;
          border: none; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.01em;
        }
        .btn-primary {
          background: linear-gradient(135deg, #14b8a6, #0d9488);
          color: #fff;
          box-shadow: 0 4px 20px rgba(20,184,166,0.25);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(20,184,166,0.35); }
        .btn-outline {
          background: transparent; color: #e2e8f0;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .btn-outline:hover { border-color: #14b8a6; background: rgba(20,184,166,0.08); color: #2dd4bf; }
        .hero-visual { flex: 0 0 260px; }
        .hero-avatar {
          width: 260px; height: 260px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }
        .hero-avatar-ring {
          position: absolute; inset: -4px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(45,212,191,0.5), rgba(20,184,166,0.2), rgba(45,212,191,0.5));
          z-index: 0;
          animation: rotate-ring 6s linear infinite;
        }
        .hero-avatar img {
          position: relative; z-index: 1;
          width: calc(100% - 8px); height: calc(100% - 8px);
          object-fit: cover; border-radius: 50%;
          display: block; margin: 4px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        }
        @keyframes rotate-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-content { flex-direction: column-reverse; text-align: center; gap: 2.5rem; }
          .hero-contact { justify-content: center; }
          .hero-cta { justify-content: center; }
          .hero-visual { flex: 0 0 auto; }
          .hero-avatar { width: 180px; height: 180px; }
        }
      `}</style>
    </section>
  )
}
