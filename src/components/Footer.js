import { Link } from "react-router-dom";
import { FOOTER_ROW1, FOOTER_ROW2 } from "../data/Constants";
import { FacebookIcon, TwitterIcon, LinkedInIcon, YouTubeIcon } from "./Icons";

// ── Styles scoped to footer ───────────────────────────────────
const FOOTER_STYLES = `
  .pf-footer {
    background: #88c0f9;
    width: 100%;
  }
  .pf-footer-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px 24px 32px;
  }

  /* Two 4-column grids */
  .pf-footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    .pf-footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
  }
  @media (max-width: 479px) {
    .pf-footer-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Column title — bold uppercase, matches screenshot */
  .pf-fc-title {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #1e3a5f;
    margin: 0 0 12px 0;
  }

  /* Link list */
  .pf-fc-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .pf-fc-list li {
    padding: 3px 0;
  }
  .pf-fc-link {
    font-size: 14px;
    color: #1e3a5f;
    text-decoration: none !important;
    transition: color 0.15s;
    display: inline-block;
  }
  .pf-fc-link:hover {
    color: #1d4ed8;
    text-decoration: none !important;
  }

  /* Divider */
  .pf-footer-hr {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.35);
    margin: 8px 0 24px;
  }

  /* Bottom bar */
  .pf-footer-bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    font-size: 13px;
    color: #1e3a5f;
  }
  .pf-footer-legal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }
  .pf-footer-legal a {
    color: #1e3a5f;
    text-decoration: none !important;
  }
  .pf-footer-legal a:hover {
    color: #1d4ed8;
    text-decoration: none !important;
  }
  .pf-footer-legal .copyleft-link {
    text-decoration: underline !important;
  }
  .pf-footer-dot {
    opacity: 0.6;
  }

  /* Social icons */
  .pf-social-row {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .pf-social-btn {
    width: 28px;
    height: 28px;
    border-radius: 9999px;
    background: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e5e7eb;
    transition: opacity 0.15s;
    flex-shrink: 0;
    text-decoration: none !important;
  }
  .pf-social-btn:hover {
    opacity: 0.8;
    text-decoration: none !important;
  }
  .pf-social-btn svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
  }
`;

// ── Single footer column ──────────────────────────────────────
function FooterCol({ col }) {
  const isExternal = (href) => href.startsWith("http");

  return (
    <div>
      <p className="pf-fc-title">{col.title}</p>
      <ul className="pf-fc-list">
        {col.links.map((l) => (
          <li key={l.label}>
            {isExternal(l.href) ? (
              <a
                href={l.href}
                className="pf-fc-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ) : (
              <Link to={l.href} className="pf-fc-link">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="pf-footer">
      <style>{FOOTER_STYLES}</style>

      <div className="pf-footer-inner">
       
        {/* Row 1: Teacher Tools | Student Tools | Institutions | About */}
        <div className="pf-footer-grid">
          {FOOTER_ROW1.map((col) => (
            <FooterCol key={col.title} col={col} />
          ))}
        </div>

        {/* Row 2: Teacher Guides | Student Guides | General | Contact Us */}
        <div className="pf-footer-grid">
          {FOOTER_ROW2.map((col) => (
            <FooterCol key={col.title} col={col} />
          ))}
        </div>

        {/* Divider */}
        <hr className="pf-footer-hr" />

        {/* Bottom bar: legal left, social icons right */}
        <div className="pf-footer-bottom">
          <div className="pf-footer-legal">
             <p>
        Content from www.processfeedback.org. This project includes text and images sourced from the original website
        for educational purposes. <Link to="/attribution">Attribution</Link>
            </p>

            
          </div>

          <div className="pf-social-row">
            <a href="/" className="pf-social-btn"
              aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="/" className="pf-social-btn"
              aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="/" className="pf-social-btn"
              aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="/" className="pf-social-btn"
              aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
