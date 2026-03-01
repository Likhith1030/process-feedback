import { useState, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NAV_ITEMS = [
  {
    label: "Student Tools",
    items: [
      "Start Writing",
      "Start Coding",
      "Google Docs Extension",
      "Canvas Extension",
      "All Extensions",
      "Student Guides",
    ],
  },
  {
    label: "Teacher Tools",
    items: ["Rubrics", "Feedback", "Analytics"],
  },
  {
    label: "Institutions",
    items: ["Partnerships", "Case Studies"],
  },
  {
    label: "About",
    items: ["Company", "Contact"],
  },
];

const styles = {
  navbar: {
    backgroundColor: "#88c0f9",
    minHeight: 80,
  },
  brand: {
    fontSize: 24,
    fontWeight: 700,
    color: "#243447",
    lineHeight: 1.2,
    textDecoration: "none",
  },
  tagline: {
    fontSize: 14,
    color: "#243447",
    opacity: 0.8,
    display: "block",
  },
  navBtn: {
    fontSize: 16,
    fontWeight: 700,
    color: "#305674",
    padding: "6px 12px",
    borderRadius: 8,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 4,
    whiteSpace: "nowrap",
    transition: "background-color 0.15s",
  },
  navBtnHover: {
    backgroundColor: "#DAE8FE",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    marginTop: 8,
    backgroundColor: "#DAE8FE",
    border: "1px solid #5E9BFF",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    padding: "4px 0",
    minWidth: 220,
    zIndex: 1000,
  },
  dropdownItem: {
    fontSize: 16,
    color: "#3B4A5A",
    padding: "8px 20px",
    borderRadius: 8,
    cursor: "pointer",
    transition: "background-color 0.15s",
  },
};

function HoverNavBtn({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      style={{ ...styles.navBtn, ...(hovered ? styles.navBtnHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

function HoverDropdownItem({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.dropdownItem,
        backgroundColor: hovered ? "#ffffff" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

export default function AppNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const timeouts = useRef({});

  const handleEnter = (label) => {
    clearTimeout(timeouts.current[label]);
    setOpenMenu(label);
  };

  const handleLeave = (label) => {
    timeouts.current[label] = setTimeout(() => {
      setOpenMenu((prev) => (prev === label ? null : prev));
    }, 150);
  };

  return (
    <Navbar expand="md" style={styles.navbar} className="py-0">
      <Container fluid className="px-4">

        {/* ── Logo ── */}
        <Navbar.Brand href="/" style={{ textDecoration: "none" }}>
          <span style={styles.brand}>Process Feedback</span>
          <span style={styles.tagline}>Every Student's Work Has a Story</span>
        </Navbar.Brand>

        {/* ── Hamburger (mobile) ── */}
        <Navbar.Toggle aria-controls="main-nav" />

        {/* ── Nav Links ── */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-1 py-2 py-md-0">

            {/* Home */}
            <HoverNavBtn>Home</HoverNavBtn>

            {/* Dropdowns */}
            {NAV_ITEMS.map((nav) => (
              <div
                key={nav.label}
                style={{ position: "relative" }}
                onMouseEnter={() => handleEnter(nav.label)}
                onMouseLeave={() => handleLeave(nav.label)}
              >
                {/* Button */}
                <HoverNavBtn>
                  {nav.label}
                  {/* Chevron icon */}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="#305674"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </HoverNavBtn>

                {/* Desktop dropdown */}
                {openMenu === nav.label && (
                  <div
                    className="d-none d-md-block"
                    style={styles.dropdownMenu}
                    onMouseEnter={() => handleEnter(nav.label)}
                    onMouseLeave={() => handleLeave(nav.label)}
                  >
                    {nav.items.map((item) => (
                      <HoverDropdownItem key={item}>{item}</HoverDropdownItem>
                    ))}
                  </div>
                )}

                {/* Mobile: always show sub-items when navbar is expanded */}
                <div className="d-md-none ps-3 pb-1">
                  {nav.items.map((item) => (
                    <div
                      key={item}
                      style={{ ...styles.dropdownItem, fontSize: 14 }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}