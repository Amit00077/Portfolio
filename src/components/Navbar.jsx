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
          background: rgba(26,26,46,0.88); backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(14,165,233,0.1);
          padding: 0 2rem;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
        }
        .logo {
          font-weight: 800; font-size: 1.4rem;
          background: linear-gradient(135deg, #38bdf8, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          text-decoration: none;
        }
        .nav-links { display: flex; gap: 1.75rem; list-style: none; }
        .nav-links a {
          color: #94a3b8; text-decoration: none; font-size: 0.875rem;
          font-weight: 500; transition: color 0.2s; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px; background: #0ea5e9; transition: width 0.25s;
        }
        .nav-links a:hover { color: #e2e8f0; }
        .nav-links a:hover::after { width: 100%; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
        .hamburger span { width: 26px; height: 2.5px; background: #e2e8f0; border-radius: 3px; transition: all 0.3s; display: block; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        @media (max-width: 768px) {
          .nav-links {
            position: fixed; top: 64px; left: 0; right: 0;
            background: rgba(26,26,46,0.97); flex-direction: column;
            padding: 1.5rem 2rem; gap: 1.25rem;
            transform: translateY(-110%); transition: transform 0.35s;
          border-bottom: 1px solid rgba(14,165,233,0.1);
          }
          .nav-links.open { transform: translateY(0); }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
