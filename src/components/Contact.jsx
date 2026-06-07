import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">Have a project in mind? Let's build something great together.</p>
        </div>
        <div className="contact-grid fade-up">
          <div className="contact-info">
            <h3>Let's talk</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="contact-details">
              <a href="mailto:amitbaliyan071@gmail.com">
                <i className="fas fa-envelope" /> amitbaliyan071@gmail.com
              </a>
              <a href="tel:+918937915116">
                <i className="fas fa-phone" /> +91-8937915116
              </a>
              <a href="https://www.linkedin.com/in/amit-baliyan-8327511b7/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" /> linkedin.com/in/amit-baliyan
              </a>
              <a href="https://github.com/Amit00077" target="_blank" rel="noreferrer">
                <i className="fab fa-github" /> github.com/Amit00077
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit" className="btn btn-primary">
              {sent ? <><i className="fas fa-check" /> Sent!</> : <><i className="fas fa-paper-plane" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        #contact { background: #1a1a2e; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: start; }
        .contact-info h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
        .contact-info p { color: #94a3b8; font-size: 0.9rem; margin-bottom: 1.5rem; }
        .contact-details { display: flex; flex-direction: column; gap: 0.75rem; }
        .contact-details a {
          color: #cbd5e1; text-decoration: none; font-size: 0.9rem;
          display: inline-flex; align-items: center; gap: 0.75rem;
          padding: 0.6rem 1rem; border: 1px solid rgba(14,165,233,0.15);
          border-radius: 8px; transition: all 0.25s;
        }
        .contact-details a:hover { border-color: #0ea5e9; background: rgba(14,165,233,0.06); color: #fff; }
        .contact-details a i { color: #38bdf8; width: 16px; text-align: center; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: flex; gap: 1rem; }
        .contact-form input, .contact-form textarea {
          width: 100%; padding: 0.85rem 1rem; border-radius: 8px;
          border: 1px solid rgba(14,165,233,0.15);
          background: rgba(14,165,233,0.04); color: #e2e8f0;
          font-family: inherit; font-size: 0.9rem; outline: none;
          transition: border-color 0.25s;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border-color: #0ea5e9;
        }
        .contact-form input::placeholder, .contact-form textarea::placeholder {
          color: #64748b;
        }
        .contact-form button { align-self: flex-start; cursor: pointer; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
