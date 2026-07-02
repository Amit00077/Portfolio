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
              <div className="stat-icon"><i className="fas fa-rocket" /></div>
              <div className="num">6+</div>
              <div className="label">Apps Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-users" /></div>
              <div className="num">20K+</div>
              <div className="label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-layer-group" /></div>
              <div className="num">30+</div>
              <div className="label">UI Components</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-code" /></div>
              <div className="num">400+</div>
              <div className="label">Coding Problems</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        #about { background: #f8fafc; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .about-text p { color: #475569; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.9; }
        .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .stat-card {
          background: #fff; border: 1px solid #e2e8f0;
          border-radius: 16px; padding: 1.5rem 1rem; text-align: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.3s;
        }
        .stat-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }
        .stat-icon i { color: #14b8a6; font-size: 1.1rem; margin-bottom: 0.5rem; opacity: 0.8; }
        .stat-card .num {
          font-size: 2rem; font-weight: 800;
          background: linear-gradient(135deg, #14b8a6, #0d9488);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-card .label { color: #64748b; font-size: 0.78rem; margin-top: 0.15rem; font-weight: 500; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
