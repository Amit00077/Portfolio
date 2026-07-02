import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#hero" className="logo" onClick={handleClick}>
          AB
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={handleClick}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${open ? ' active' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <style>{`
        .navbar {
          position: fixed; top: 0; width: 100%; z-index: 1000;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          padding: 0 2rem;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px;
        }
        .logo {
          font-weight: 800; font-size: 1.3rem;
          background: linear-gradient(135deg, #0f172a, #14b8a6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          text-decoration: none; letter-spacing: -0.03em;
        }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a {
          color: #475569; text-decoration: none; font-size: 0.85rem;
          font-weight: 500; transition: color 0.25s; position: relative;
          letter-spacing: 0.01em;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -5px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #14b8a6, #0d9488);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 2px;
        }
        .nav-links a:hover { color: #0f172a; }
        .nav-links a:hover::after { width: 100%; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { width: 24px; height: 2px; background: #334155; border-radius: 2px; transition: all 0.3s; display: block; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        @media (max-width: 768px) {
          .nav-links {
            position: fixed; top: 68px; left: 0; right: 0;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 1.5rem 2rem; gap: 1.25rem;
            transform: translateY(-110%); transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            border-bottom: 1px solid #e2e8f0;
          }
          .nav-links.open { transform: translateY(0); }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
