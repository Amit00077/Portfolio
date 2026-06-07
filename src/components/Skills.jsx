const groups = [
  {
    title: 'Languages',
    tags: ['Dart', 'TypeScript', 'Python', 'Java', 'C', 'SQL', 'JSON'],
  },
  {
    title: 'Frontend',
    tags: ['Flutter', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend & Databases',
    tags: ['FastAPI', 'REST APIs', 'JWT', 'OAuth 2.0', 'Redis', 'PostgreSQL', 'SQLAlchemy', 'Firestore'],
  },
  {
    title: 'State Management & AI',
    tags: ['BLoC', 'GetX', 'Zustand', 'TanStack Query', 'Groq API', 'DeepSeek API'],
  },
  {
    title: 'Tools & Practices',
    tags: [
      'Git', 'GitHub', 'Docker', 'GitHub Actions', 'Postman',
      'VS Code', 'OneSignal', 'Agile Scrum', 'CI/CD', 'Unit/Integration Testing',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-sub">Technologies and tools I work with</p>
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.title} className="skill-group fade-up">
              <h4>{g.title}</h4>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .skill-group { background: rgba(14,165,233,0.06); border: 1px solid rgba(14,165,233,0.12); border-radius: 12px; padding: 1.5rem; }
        .skill-group h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: #38bdf8; margin-bottom: 1rem; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill-tags span {
          background: rgba(14,165,233,0.08); color: #cbd5e1;
          padding: 0.35rem 0.9rem; border-radius: 20px;
          font-size: 0.82rem; border: 1px solid rgba(14,165,233,0.1);
          transition: all 0.2s;
        }
        .skill-tags span:hover { border-color: #0ea5e9; background: rgba(14,165,233,0.15); }
      `}</style>
    </section>
  )
}
