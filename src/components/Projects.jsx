const projects = [
  {
    title: 'ProcessHQ – AI-Powered Workflow & Operations Management Platform',
    stack: ['Flutter', 'Dart', 'REST APIs', 'State Management', 'Enterprise Systems', 'Analytics'],
    desc: 'Enterprise mobility solution for streamlining workflows, automating recurring tasks, managing support tickets, and monitoring operational performance.',
    points: [
      'Developed and maintained the Flutter mobile application for Android.',
      'Implemented workflow management, task tracking, and support ticket modules.',
      'Integrated REST APIs for real-time data synchronization and operational monitoring.',
      'Built responsive, reusable UI components following scalable architecture principles.',
      'Optimized app performance, state management, and user experience across devices.',
      'Collaborated with backend and product teams to deliver enterprise-grade features.',
    ],
  },
  {
    title: 'PrepOS – AI-Powered Preparation Goal & Task Tracker',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Groq API', 'Tailwind CSS'],
    desc: 'Full-stack preparation platform with AI-generated multi-week roadmaps via Groq and DeepSeek LLM APIs.',
    points: [
      'Smart task distribution system respecting daily study hour limits.',
      'JWT auth with Google OAuth, refresh token rotation, Redis-backed token blacklisting.',
      'Real-time progress dashboard with streak counting and activity heatmaps.',
      'Async FastAPI backend with SQLAlchemy Async ORM and Docker containerization.',
    ],
  },
  {
    title: 'Maximus Jobs – Healthcare Recruitment Platform',
    stack: ['Flutter', 'Firebase', 'Firestore', 'FCM', 'OneSignal'],
    desc: 'Recruitment platform connecting 5K+ nurses with 500+ healthcare employers.',
    points: [
      'Job listings, real-time chat, application tracking, and push notifications.',
      'Reduced hiring turnaround time by 40%, improved engagement by 25%.',
      'Scaled to 20K+ monthly sessions with 99.2% crash-free rate.',
    ],
  },
  {
    title: 'Green Moves – Logistics & Transport Application',
    stack: ['Flutter', 'Google Maps API', 'Stripe', 'Razorpay', 'PayPal'],
    desc: 'Logistics platform supporting 10K+ shipment bookings with 3 payment gateways.',
    points: [
      'Integrated Stripe, Razorpay, and PayPal processing 5K+ secure transactions.',
      'GPS tracking via Google Maps API improving delivery efficiency by 30%.',
      'Maintained 4.6-star rating across 8K+ user reviews on app stores.',
    ],
  },
  {
    title: 'BlindChats – Secure Real-Time Messaging Platform',
    stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Push Notifications'],
    desc: 'Cross-platform messaging application for secure one-to-one communication, media sharing, and real-time message synchronization.',
    points: [
      'Built cross-platform messaging with real-time synchronization across Android and iOS.',
      'Implemented secure one-to-one communication, media sharing, and push notifications.',
      'Integrated user profile management and authentication flows.',
      'Delivered smooth UX with high-performance mobile interactions.',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Key projects I've built from the ground up</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card fade-up">
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #projects { background: #16213e; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.5rem; }
        .project-card {
          background: rgba(14,165,233,0.06); border: 1px solid rgba(14,165,233,0.12);
          border-radius: 14px; padding: 1.75rem; transition: all 0.3s;
        }
        .project-card:hover {
          transform: translateY(-4px); border-color: rgba(14,165,233,0.3);
          box-shadow: 0 12px 40px rgba(14,165,233,0.12);
        }
        .project-card .stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
        .project-card .stack span {
          background: rgba(14,165,233,0.1); color: #38bdf8;
          font-size: 0.7rem; font-weight: 500; padding: 0.2rem 0.6rem; border-radius: 4px;
        }
        .project-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem; }
        .project-card p { color: #94a3b8; font-size: 0.85rem; line-height: 1.65; }
        .project-card ul { margin-top: 0.6rem; padding-left: 1.1rem; }
        .project-card li { color: #94a3b8; font-size: 0.82rem; margin-bottom: 0.3rem; }
        .project-card li::marker { color: #38bdf8; }
        @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
