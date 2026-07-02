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
              <div className="timeline-dot" />
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
        .timeline { position: relative; padding-left: 2rem; }
        .timeline::before {
          content: ''; position: absolute; left: 11px; top: 12px; bottom: 12px;
          width: 2px;
          background: linear-gradient(to bottom, #14b8a6, #0d9488, #14b8a6);
          border-radius: 2px;
        }
        .timeline-item {
          position: relative; margin-bottom: 2rem;
          padding: 1.75rem; border-radius: 16px;
          background: #fff; border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.3s;
        }
        .timeline-item:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
          transform: translateX(4px);
        }
        .timeline-dot {
          position: absolute; left: -1.55rem; top: 2rem;
          width: 14px; height: 14px; border-radius: 50%;
          background: linear-gradient(135deg, #14b8a6, #0d9488);
          border: 3px solid #f1f5f9;
          box-shadow: 0 0 0 3px rgba(20,184,166,0.15);
        }
        .timeline-item .period { font-size: 0.78rem; color: #14b8a6; font-weight: 600; margin-bottom: 0.25rem; letter-spacing: 0.02em; }
        .timeline-item h3 { font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 0.15rem; }
        .timeline-item .role { color: #64748b; font-weight: 500; font-size: 0.88rem; margin-bottom: 0.75rem; }
        .timeline-item ul { padding-left: 1.25rem; }
        .timeline-item li { color: #475569; font-size: 0.875rem; margin-bottom: 0.4rem; line-height: 1.7; }
        .timeline-item li::marker { color: #14b8a6; }
      `}</style>
    </section>
  )
}
