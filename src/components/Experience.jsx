const experience = [
  {
    period: 'Nov 2025 – Present',
    company: 'NMG Technologies',
    role: 'Flutter Developer',
    points: [
      'Engineering cross-platform mobile applications using Flutter serving 10K+ active users.',
      'Integrated 20+ REST API endpoints and authentication services for mobile applications.',
      'Designed 30+ reusable UI components improving development efficiency by 25%.',
      'Optimized network requests reducing API latency by 20%.',
      'Partnering with a 5-member Agile team delivering features in 2-week sprint cycles.',
    ],
  },
  {
    period: 'Aug 2023 – Sep 2025',
    company: 'Webcoir IT Solution Pvt. Ltd.',
    role: 'Flutter Developer',
    points: [
      'Delivered 6+ mobile applications including 2 from scratch reaching 20K+ active users.',
      'Released 4 applications on Google Play Store and Apple App Store achieving 15K+ downloads.',
      'Integrated Stripe, Razorpay, and PayPal payment gateways supporting 10K+ transactions.',
      'Configured push notification systems using Firebase Cloud Messaging and OneSignal.',
      'Applied BLoC and GetX state management reducing debugging time by 40%.',
      'Automated CI/CD pipelines using GitHub Actions reducing release cycles by 30%.',
      'Enhanced application stability lowering crash rates by 30%.',
      'Coordinated with a 6-member Scrum team achieving 95% on-time delivery.',
      'Created 50+ unit and integration tests improving code reliability.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Where I've worked and what I've built</p>
        </div>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item fade-up">
              <div className="period">{exp.period}</div>
              <h3>{exp.company}</h3>
              <div className="role">{exp.role}</div>
              <ul>
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .timeline { position: relative; padding-left: 2.5rem; }
        .timeline::before {
          content: ''; position: absolute; left: 8px; top: 8px; bottom: 8px;
          width: 2px; background: linear-gradient(to bottom, #0ea5e9, #06b6d4);
        }
        .timeline-item {
          position: relative; margin-bottom: 2.5rem;
          padding: 1.5rem; border-radius: 12px;
          background: rgba(14,165,233,0.06); border: 1px solid rgba(14,165,233,0.12);
          transition: all 0.25s;
        }
        .timeline-item:hover { border-color: rgba(14,165,233,0.25); background: rgba(14,165,233,0.1); }
        .timeline-item::before {
          content: ''; position: absolute; left: -2.1rem; top: 1.8rem;
          width: 14px; height: 14px; border-radius: 50%;
          background: #0ea5e9; border: 3px solid #1a1a2e;
        }
        .timeline-item .period { font-size: 0.8rem; color: #38bdf8; font-weight: 600; margin-bottom: 0.25rem; }
        .timeline-item h3 { font-size: 1.15rem; font-weight: 700; }
        .timeline-item .role { color: #38bdf8; font-weight: 500; font-size: 0.9rem; margin-bottom: 0.75rem; }
        .timeline-item ul { padding-left: 1.25rem; }
        .timeline-item li { color: #94a3b8; font-size: 0.875rem; margin-bottom: 0.4rem; }
        .timeline-item li::marker { color: #38bdf8; }
      `}</style>
    </section>
  )
}
