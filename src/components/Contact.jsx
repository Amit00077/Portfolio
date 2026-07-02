import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    setError(false)
    setSent(false)

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }

    setTimeout(() => {
      setSent(false)
      setError(false)
    }, 5000)
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
          <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/mwvdwnno">
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <button type="submit" className="btn btn-primary">
              {error ? <><i className="fas fa-exclamation-triangle" /> Failed</> : sent ? <><i className="fas fa-check" /> Sent!</> : <><i className="fas fa-paper-plane" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        #contact { background: #f8fafc; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: start; }
        .contact-info h3 { font-size: 1.3rem; font-weight: 700; color: #0f172a; margin-bottom: 0.75rem; letter-spacing: -0.02em; }
        .contact-info p { color: #475569; font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.8; }
        .contact-details { display: flex; flex-direction: column; gap: 0.75rem; }
        .contact-details a {
          color: #475569; text-decoration: none; font-size: 0.88rem;
          display: inline-flex; align-items: center; gap: 0.75rem;
          padding: 0.7rem 1rem; border: 1px solid #e2e8f0;
          border-radius: 12px; transition: all 0.3s;
          background: #fff;
        }
        .contact-details a:hover { border-color: #14b8a6; color: #0f172a; transform: translateX(4px); }
        .contact-details a i { color: #14b8a6; width: 16px; text-align: center; font-size: 0.85rem; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: flex; gap: 1rem; }
        .contact-form input, .contact-form textarea {
          width: 100%; padding: 0.85rem 1rem; border-radius: 12px;
          border: 1px solid #e2e8f0;
          background: #fff; color: #1e293b;
          font-family: inherit; font-size: 0.9rem; outline: none;
          transition: all 0.25s;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border-color: #14b8a6;
          box-shadow: 0 0 0 3px rgba(20,184,166,0.08);
        }
        .contact-form input::placeholder, .contact-form textarea::placeholder {
          color: #94a3b8;
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
