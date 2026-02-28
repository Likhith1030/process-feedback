import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../data/Constants";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "./Icons";
import logo from "../logo.svg"

// ── Navbar-scoped styles ──────────────────────────────────────
const NAV_STYLES = `
  .pf-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 60px;
    background: #88c0f9;
    display: flex;
    align-items: center;
  }
  .pf-nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  /* Logo */
  .pf-logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    text-decoration: none !important;
  }
  .pf-logo-img  { height: 32px; width: auto; object-fit: contain; }
  .pf-logo-sub  { margin-top: 2px; font-size: 11px; white-space: nowrap; color: #003f81; }

  /* Desktop nav container */
  .pf-desk-nav {
    display: none;
    align-items: center;
    gap: 2px;
    height: 100%;
  }
  @media (min-width: 1024px) { .pf-desk-nav { display: flex; } }

  /* Nav link / button — shared base */
  .pf-nav-link {
    height: 34px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    border-radius: 6px;
    color: #334155;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    gap: 3px;
    cursor: pointer;
    background: transparent;
    border: none;
    text-decoration: none !important;
    transition: background 0.15s, color 0.15s;
    font-family: inherit;
  }
  /* Only show highlight on hover — no permanent active style */
  .pf-nav-link:hover {
    background: #bfdbfe;
    color: #1d4ed8;
    text-decoration: none !important;
  }

  /* Dropdown wrapper */
  .pf-dropdown-wrap {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
  }

  /* Dropdown panel — WHITE background, matches original */
  .pf-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    padding-top: 6px;
    z-index: 60;
    opacity: 0;
    visibility: hidden;
    transform: translateY(4px);
    transition: opacity 0.18s, transform 0.18s, visibility 0.18s;
    min-width: 220px;
  }
  .pf-dropdown-menu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .pf-dropdown-list {
    list-style: none;
    padding: 6px;
    margin: 0;
    background: #dbeafe;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.06);
  }

  /* Dropdown items — NO underline, hover bg only */
  .pf-dropdown-item {
    display: block;
    padding: 9px 12px;
    color: #334155;
    border-radius: 7px;
    font-size: 14px;
    text-decoration: none !important;
    transition: background 0.12s, color 0.12s;
  }
  .pf-dropdown-item:hover {
    background: #eff6ff;
    color: #1d4ed8;
    text-decoration: none !important;
  }

  /* Hamburger */
  .pf-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 6px;
    background: transparent;
    border: none;
    color: #334155;
    cursor: pointer;
    margin-left: auto;
    transition: background 0.15s;
    font-family: inherit;
  }
  .pf-hamburger:hover { background: #bfdbfe; }
  @media (max-width: 1023px) { .pf-hamburger { display: flex; } }

  /* Mobile menu panel */
  .pf-mobile-menu {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 50;
    background: #c3e0fd;
    border-top: 1px solid #bfdbfe;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
  .pf-mobile-menu.hidden { display: none; }
  @media (min-width: 1024px) { .pf-mobile-menu { display: none !important; } }

  /* Mobile Home link */
  .pf-mob-link {
    display: block;
    padding: 12px 20px;
    font-weight: 500;
    color: #1d4ed8;
    border-radius: 8px;
    margin: 0 12px;
    transition: background 0.15s;
    text-decoration: none !important;
  }
  .pf-mob-link:hover { background: #eff6ff; text-decoration: none !important; }

  /* Mobile accordion section */
  .pf-mob-section { padding: 0 12px; margin-top: 2px; }
  .pf-mob-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    font-weight: 500;
    color: #334155;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.15s;
    font-family: inherit;
    text-decoration: none !important;
  }
  .pf-mob-trigger:hover { background: #bfdbfe; }
  .pf-mob-trigger.open  { background: #bfdbfe; color: #1d4ed8; }

  .pf-mob-arrow { transition: transform 0.2s; }
  .pf-mob-arrow.open { transform: rotate(180deg); }

  .pf-mob-panel {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.25s ease-out, opacity 0.25s ease-out;
  }
  .pf-mob-panel.open { max-height: 400px; opacity: 1; }

  /* Mobile sub-links — NO underline */
  .pf-mob-sub {
    display: block;
    padding: 8px 20px;
    color: #334155;
    border-radius: 8px;
    font-size: 14px;
    margin: 0 4px 0 28px;
    transition: background 0.15s;
    text-decoration: none !important;
  }
  .pf-mob-sub:hover {
    background: #eff6ff;
    color: #1d4ed8;
    text-decoration: none !important;
  }
`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen]               = useState(false);
  const [openDropdown, setOpenDropdown]           = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);

  // Not used for permanent active style — kept only for potential future use
  useLocation();

  const toggleMobileSection = (label) =>
    setOpenMobileSection((prev) => (prev === label ? null : label));

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  };

  const isExternal = (href) => href.startsWith("http");

  return (
    <nav className="pf-nav" aria-label="Primary">
      <style>{NAV_STYLES}</style>

      <div className="pf-nav-inner">

        {/* ── Logo ──────────────────────────────────────────── */}
        <Link to="/" className="pf-logo-wrap" aria-label="Process Feedback home">
          <img
            src={logo}
            alt="Process Feedback logo"
            className="pf-logo-img"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <span className="pf-logo-sub">Course Project at UMSL.
</span>
        </Link>

        {/* ── Desktop nav ───────────────────────────────────── */}
        <div className="pf-desk-nav">
          {NAV_ITEMS.map((item) => {
            // Simple link (Home)
            if (!item.items) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="pf-nav-link"
                >
                  {item.label}
                </Link>
              );
            }

            // Dropdown trigger + panel
            return (
              <div
                key={item.label}
                className="pf-dropdown-wrap"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="pf-nav-link"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label} <ChevronDownIcon size={18} />
                </button>

                <div className={`pf-dropdown-menu${openDropdown === item.label ? " open" : ""}`}>
                  <ul className="pf-dropdown-list" role="menu">
                    {item.items.map((sub) => (
                      <li key={sub.label} role="none">
                        {isExternal(sub.href) ? (
                          <a
                            href={sub.href}
                            className="pf-dropdown-item"
                            target="_blank"
                            rel="noopener noreferrer"
                            role="menuitem"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            to={sub.href}
                            className="pf-dropdown-item"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Hamburger ─────────────────────────────────────── */}
        <button
          className="pf-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`pf-mobile-menu${mobileOpen ? "" : " hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul style={{ padding: "12px 0", listStyle: "none", margin: 0 }}>
          <li>
            <Link to="/" className="pf-mob-link" onClick={closeMobile}>
              Home
            </Link>
          </li>

          {NAV_ITEMS.filter((i) => i.items).map((item) => {
            const isOpen = openMobileSection === item.label;
            return (
              <li key={item.label} className="pf-mob-section">
                <button
                  className={`pf-mob-trigger${isOpen ? " open" : ""}`}
                  onClick={() => toggleMobileSection(item.label)}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <span className={`pf-mob-arrow${isOpen ? " open" : ""}`}>
                    <ChevronDownIcon size={20} />
                  </span>
                </button>

                <div className={`pf-mob-panel${isOpen ? " open" : ""}`}>
                  <ul style={{ paddingBottom: 8, listStyle: "none", margin: 0, padding: 0 }}>
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        {isExternal(sub.href) ? (
                          <a
                            href={sub.href}
                            className="pf-mob-sub"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobile}
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            to={sub.href}
                            className="pf-mob-sub"
                            onClick={closeMobile}
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}// navbar v1
