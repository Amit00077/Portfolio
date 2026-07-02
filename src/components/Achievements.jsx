const achievements = [
  { icon: 'fa-trophy', text: 'Solved 400+ coding problems on LeetCode and GeeksforGeeks.' },
  { icon: 'fa-chart-line', text: 'Delivered mobile applications improving user retention by 35%.' },
  { icon: 'fa-bolt', text: 'Consistently achieved 95% sprint success rate in Agile development cycles.' },
  { icon: 'fa-robot', text: 'Built AI-powered full-stack applications using FastAPI, PostgreSQL, Docker, and LLM integrations.' },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="section-title">Achievements</h2>
          <p className="section-sub">Milestones and recognitions</p>
        </div>
        <div className="achievements-list">
          {achievements.map((a, i) => (
            <div key={i} className="ach-item fade-up">
              <div className="ach-icon"><i className={`fas ${a.icon}`} /></div>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .achievements-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
        .ach-item {
          display: flex; align-items: flex-start; gap: 1rem;
          padding: 1.25rem; border-radius: 14px;
          background: #fff; border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.3s;
        }
        .ach-item:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }
        .ach-icon {
          flex-shrink: 0; width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(20,184,166,0.08), rgba(13,148,136,0.08));
          border: 1px solid rgba(20,184,166,0.12);
        }
        .ach-icon i { color: #14b8a6; font-size: 1rem; }
        .ach-item p { color: #475569; font-size: 0.85rem; line-height: 1.65; }
      `}</style>
    </section>
  )
}
