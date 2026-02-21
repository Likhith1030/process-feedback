import { Link } from "react-router-dom";

const STYLES = `
  .pf-error-page {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 16px 64px;
    text-align: center;
    background: #f0f2f5;
  }
  .pf-error-img {
    width: 100%;
    max-width: 340px;
    margin: 0 auto 8px;
    display: block;
  }
  .pf-error-title {
    font-size: 26px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 10px;
  }
  .pf-error-sub {
    font-size: 15px;
    color: #64748b;
    margin: 0 auto 28px;
    max-width: 400px;
    line-height: 1.6;
  }
  .pf-error-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 32px;
    border-radius: 9999px;
    background: #2563eb;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    border: none;
    box-shadow: 0 4px 14px rgba(37,99,235,0.35);
    transition: opacity 0.2s, transform 0.2s;
  }
  .pf-error-btn:hover {
    opacity: 0.9;
    transform: scale(0.97);
    color: #fff;
  }
  .pf-error-btn svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export default function Error() {
  return (
    <div className="pf-error-page">
      <style>{STYLES}</style>

      <img
        src="/404-error-with-people-holding-the-numbers-rafiki-1-e1745792378342.DP-wV06K_Zxqt56.webp"
        alt="404 — people holding numbers"
        className="pf-error-img"
      />

      <h1 className="pf-error-title">Page Not Found</h1>
      <p className="pf-error-sub">
        We can't find the page you were looking for.
      </p>

      <Link to="/" className="pf-error-btn">
        Return Home
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
