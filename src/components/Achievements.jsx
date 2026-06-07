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
              <i className={`fas ${a.icon}`} />
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .achievements-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
        .ach-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; border-radius: 10px; background: rgba(14,165,233,0.06); border: 1px solid rgba(14,165,233,0.12); }
        .ach-item i { color: #38bdf8; font-size: 1.1rem; margin-top: 0.1rem; }
        .ach-item p { color: #94a3b8; font-size: 0.85rem; }
      `}</style>
    </section>
  )
}
