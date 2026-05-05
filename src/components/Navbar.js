import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../data/Constants";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";
import logo from "../logo.svg";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen]               = useState(false);
  const [openDropdown, setOpenDropdown]           = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const { dark, toggle } = useTheme();

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
      <div className="pf-nav-inner">

        {/* ── Logo ──────────────────────────────────────────── */}
        <Link to="/" className="pf-logo-wrap" aria-label="Process Feedback home">
          <img
            src={logo}
            alt="Process Feedback logo"
            className="pf-logo-img"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <span className="pf-logo-sub">Course Project at UMSL.</span>
        </Link>

        {/* ── Desktop nav ───────────────────────────────────── */}
        <div className="pf-desk-nav">
          {NAV_ITEMS.map((item) => {
            if (!item.items) {
              return (
                <Link key={item.label} to={item.href} className="pf-nav-link">
                  {item.label}
                </Link>
              );
            }

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

        {/* ── Right side: toggle + hamburger ────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
          <button
            className="pf-theme-toggle"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="pf-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{ margin: 0 }}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
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
}
