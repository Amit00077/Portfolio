const projects = [
  {
    title: 'ProcessHQ – Workflow & Operations Management Platform',
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
    link: 'https://play.google.com/store/apps/details?id=com.ai.processhq.transfomer',
  },
  {
    title: 'Invictaa Plus – Competitive Exam Preparation Platform',
    stack: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Firebase', 'Git'],
    desc: 'Comprehensive e-learning platform for competitive and government examinations with mock tests, test series, performance analytics, and educational content.',
    points: [
      'Developed the complete cross-platform mobile application using Flutter.',
      'Integrated REST APIs for authentication, course management, test submissions, and result processing.',
      'Implemented scalable state management using the BLoC architecture.',
      'Built responsive and reusable UI components for a consistent user experience.',
      'Optimized application performance and API handling for smooth operation.',
      'Contributed to an application with 100K+ downloads on the Google Play Store.',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.invictaapro.app',
  },
  {
    title: 'Bureau Veritas (BV Labs) – Field Operations & Driver Management Solution',
    stack: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Firebase', 'Git'],
    desc: 'Mobile solution to streamline field operations, driver management, and task execution workflows with real-time activity tracking.',
    points: [
      'Developed and maintained the Flutter application for Android and iOS platforms.',
      'Integrated backend APIs for task assignment, status tracking, and data synchronization.',
      'Implemented secure authentication and role-based access workflows.',
      'Built responsive interfaces optimized for field users and operational teams.',
      'Improved application performance through efficient state management and code optimization.',
      'Collaborated with backend and QA teams to deliver production-ready features.',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.upgradeworkaboo.bvlabs',
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
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="playstore-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 20.5v-17c0-.6.5-1 1-1l.2-.1L16.6 12 4.2 21.6 4 21.5c-.5 0-1-.4-1-1zm15.9-7.6l3.6-2.1c.5-.3.9-.7.9-1.3s-.4-1-.9-1.3L18.9 6.3l-4.3 4.3 4.3 4.3zM6.6 3.4L16.2 9l-4.3 4.3L4 3.4h2.6zm0 17.2H4l7.9-9.9 4.3 4.3-9.6 5.6z"/></svg>
                  Google Play
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #projects {
          background: linear-gradient(135deg, #0c1222 0%, #1a1a2e 50%, #0f172a 100%);
        }
        #projects .section-title { color: #f1f5f9; }
        #projects .section-sub { color: #94a3b8; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.5rem; }
        .project-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; padding: 1.75rem; transition: all 0.35s;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(45,212,191,0.2);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
          background: rgba(255,255,255,0.07);
        }
        .project-card .stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
        .project-card .stack span {
          background: rgba(45,212,191,0.08); color: #5eead4;
          font-size: 0.68rem; font-weight: 500; padding: 0.2rem 0.6rem; border-radius: 6px;
          border: 1px solid rgba(45,212,191,0.1);
        }
        .project-card h3 { font-size: 1.05rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.6rem; line-height: 1.4; }
        .project-card p { color: #94a3b8; font-size: 0.85rem; line-height: 1.65; }
        .project-card ul { margin-top: 0.6rem; padding-left: 1.1rem; }
        .project-card li { color: #94a3b8; font-size: 0.82rem; margin-bottom: 0.3rem; line-height: 1.65; }
        .project-card li::marker { color: #2dd4bf; }
        .playstore-link {
          display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 1rem;
          background: rgba(45,212,191,0.08); color: #5eead4; padding: 0.4rem 0.85rem;
          border-radius: 8px; font-size: 0.78rem; font-weight: 500; text-decoration: none;
          border: 1px solid rgba(45,212,191,0.12); transition: all 0.3s;
        }
        .playstore-link:hover { background: rgba(45,212,191,0.15); color: #99f6e4; }
        @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
