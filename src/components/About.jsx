export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">A quick snapshot of my professional profile</p>
        </div>
        <div className="about-grid">
          <div className="about-text fade-up">
            <p>
              Software Engineer with 3+ years of experience building scalable mobile and web
              applications. Experienced in Flutter, React, FastAPI, PostgreSQL, Firebase, and REST API
              development.
            </p>
            <p>
              Skilled in state management, authentication systems, payment gateway integrations,
              AI-powered applications, CI/CD pipelines, and performance optimization. Proven track
              record of delivering production-ready applications in Agile environments.
            </p>
          </div>
          <div className="about-stats fade-up">
            <div className="stat-card">
              <div className="num">6+</div>
              <div className="label">Apps Delivered</div>
            </div>
            <div className="stat-card">
              <div className="num">20K+</div>
              <div className="label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="num">30+</div>
              <div className="label">UI Components</div>
            </div>
            <div className="stat-card">
              <div className="num">400+</div>
              <div className="label">Coding Problems</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        #about { background: #16213e; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .about-text p { color: #94a3b8; margin-bottom: 1rem; font-size: 0.95rem; }
        .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .stat-card {
          background: rgba(14,165,233,0.07); border: 1px solid rgba(14,165,233,0.15);
          border-radius: 12px; padding: 1.5rem; text-align: center;
        }
        .stat-card .num {
          font-size: 2rem; font-weight: 800;
          background: linear-gradient(135deg, #38bdf8, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-card .label { color: #64748b; font-size: 0.8rem; margin-top: 0.25rem; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
