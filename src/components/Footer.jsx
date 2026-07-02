export default function Footer() {
  return (
    <footer>
      <div className="footer-glow" />
      <p>&copy; 2026 Amit Baliyan. Built with <a href="#">passion</a>.</p>
      <style>{`
        footer {
          position: relative; overflow: hidden;
          text-align: center; padding: 3.5rem 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: #64748b; font-size: 0.8rem;
          background: linear-gradient(135deg, #0c1222, #0f172a);
        }
        .footer-glow {
          position: absolute; top: -50%; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 100%;
          background: radial-gradient(circle, rgba(20,184,166,0.06), transparent 70%);
          pointer-events: none;
        }
        footer a { color: #5eead4; text-decoration: none; position: relative; }
        footer a:hover { color: #2dd4bf; }
      `}</style>
    </footer>
  )
}
