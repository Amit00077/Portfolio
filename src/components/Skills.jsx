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
        .skill-group {
          background: #fff; border: 1px solid #e2e8f0;
          border-radius: 16px; padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.3s;
        }
        .skill-group:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
        }
        .skill-group h4 {
          font-size: 0.78rem; text-transform: uppercase; letter-spacing: 1.5px;
          color: #14b8a6; margin-bottom: 1rem; font-weight: 600;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill-tags span {
          background: #f8fafc; color: #334155;
          padding: 0.35rem 0.9rem; border-radius: 8px;
          font-size: 0.82rem; border: 1px solid #e2e8f0;
          transition: all 0.25s;
        }
        .skill-tags span:hover {
          border-color: #14b8a6; color: #14b8a6;
          background: #f0fdfa;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  )
}
