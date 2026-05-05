import { Link } from "react-router-dom";
import { FOOTER_ROW1, FOOTER_ROW2 } from "../data/Constants";
import { FacebookIcon, TwitterIcon, LinkedInIcon, YouTubeIcon } from "./Icons";

function FooterCol({ col }) {
  const isExternal = (href) => href.startsWith("http");

  return (
    <div>
      <p className="pf-footer-col-title">{col.title}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {col.links.map((l) => (
          <li key={l.label} style={{ padding: "3px 0" }}>
            {isExternal(l.href) ? (
              <a href={l.href} className="pf-footer-link" target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <Link to={l.href} className="pf-footer-link">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-footer-inner">

        <div className="pf-footer-grid">
          {FOOTER_ROW1.map((col) => <FooterCol key={col.title} col={col} />)}
        </div>

        <div className="pf-footer-grid">
          {FOOTER_ROW2.map((col) => <FooterCol key={col.title} col={col} />)}
        </div>

        <hr className="pf-footer-hr" />

        <div className="pf-footer-bottom">
          <div className="pf-footer-legal">
            <p style={{ margin: 0 }}>
              Content from www.processfeedback.org. This project includes text and images sourced
              from the original website for educational purposes.{" "}
              <Link to="/attribution">Attribution</Link>
            </p>
          </div>

          <div className="pf-social-row">
            <a href="/" className="pf-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="/" className="pf-social-icon" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="/" className="pf-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="/" className="pf-social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
