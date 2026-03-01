import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style>{`
        .custom-navbar {
          background-color: #88c0f9 !important;
          padding-top: 1rem;
          padding-bottom: 1rem;
          min-height: 70px;
        }

        .custom-navbar .navbar-brand {
          color: #243447 !important;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .custom-navbar .nav-link {
          color: #243447 !important;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .custom-navbar .nav-link:hover {
          color: #0d1f30 !important;
        }

        .custom-navbar .dropdown-toggle {
          color: #243447 !important;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .custom-navbar .dropdown-menu {
          background-color: #88c0f9;
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .custom-navbar .dropdown-item {
          color: #243447 !important;
          font-size: 1rem;
        }

        .custom-navbar .dropdown-item:hover {
          background-color: rgba(36, 52, 71, 0.1);
          color: #0d1f30 !important;
        }

        .custom-navbar .navbar-toggler {
          border-color: #243447;
        }

        /* ✅ Mobile: natural drop-down, no fixed overlay */
        @media (max-width: 991.98px) {
          .custom-navbar .navbar-collapse {
            background-color: #88c0f9;
            padding: 0.5rem 0.5rem 1rem;
          }

          .custom-navbar .nav-link,
          .custom-navbar .dropdown-toggle {
            font-size: 1.15rem;
            padding: 0.85rem 0.75rem !important;
            border-bottom: 1px solid rgba(36, 52, 71, 0.15);
          }

          /* Make dropdowns expand inline (not as floating menus) */
          .custom-navbar .dropdown-menu {
            box-shadow: none;
            padding-left: 1rem;
            border-top: none;
          }
        }
      `}</style>

      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className="custom-navbar"
      >
        <Container fluid style={{ maxWidth: "1200px" }}>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarFull"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <span style={{ fontSize: "1.5rem", color: "#243447" }}>✕</span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarFull">
            <Nav className="ms-auto my-2 my-lg-0">

              <Nav.Link href="#home" className="mx-3" onClick={() => setExpanded(false)}>Home</Nav.Link>

              <NavDropdown title="Student Tools" id="dropdown-1" className="mx-3">
                <NavDropdown.Item href="#start-writing">Start Writing</NavDropdown.Item>
                <NavDropdown.Item href="#start-coding">Start Coding</NavDropdown.Item>
                <NavDropdown.Item href="#google-docs-extension">Google Docs Extension</NavDropdown.Item>
                <NavDropdown.Item href="#canvas-extension">Canvas Extension</NavDropdown.Item>
                <NavDropdown.Item href="#all-extensions">All Extensions</NavDropdown.Item>
                <NavDropdown.Item href="#student-guides">Student Guides</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Teacher Tools" id="dropdown-2" className="mx-3">
                <NavDropdown.Item href="#create-editor">Create an Editor</NavDropdown.Item>
                <NavDropdown.Item href="#create-assignment">Create an Assignment</NavDropdown.Item>
                <NavDropdown.Item href="#google-docs-extension-teacher">Google Docs Extension</NavDropdown.Item>
                <NavDropdown.Item href="#all-extensions-teacher">All Extensions</NavDropdown.Item>
                <NavDropdown.Item href="#upcoming-webinar">Upcoming Webinar</NavDropdown.Item>
                <NavDropdown.Item href="#teacher-guides">Teacher Guides</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Institutions" id="dropdown-3" className="mx-3">
                <NavDropdown.Item href="#lms-integration">LMS Integration</NavDropdown.Item>
                <NavDropdown.Item href="#lti-access">LTI Access</NavDropdown.Item>
                <NavDropdown.Item href="#canvas-extension-institutions">Canvas Extension</NavDropdown.Item>
                <NavDropdown.Item href="#docs">Docs</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About" id="dropdown-4" className="mx-3">
                <NavDropdown.Item href="#about-project">About the Project</NavDropdown.Item>
                <NavDropdown.Item href="#related-research">Related Research</NavDropdown.Item>
                <NavDropdown.Item href="#team">Team</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent