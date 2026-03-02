import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const isDesktop = () => window.innerWidth >= 992

  const handleMouseEnter = (id) => {
    if (isDesktop()) setOpenDropdown(id)
  }

  const handleMouseLeave = () => {
    if (isDesktop()) setOpenDropdown(null)
  }

  // ✅ Handles click toggle on mobile only
  const handleToggle = (id) => {
    if (!isDesktop()) {
      setOpenDropdown(prev => prev === id ? null : id)
    }
  }

  return (
    <>
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
            onClick={() => {
              setExpanded(!expanded)
              setOpenDropdown(null) // reset dropdowns when toggling menu
            }}
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

              <div onMouseEnter={() => handleMouseEnter('dropdown-1')} onMouseLeave={handleMouseLeave}>
                <NavDropdown
                  title="Student Tools"
                  id="dropdown-1"
                  className="mx-3"
                  show={openDropdown === 'dropdown-1'}
                  onToggle={() => handleToggle('dropdown-1')}
                >
                  <NavDropdown.Item href="#start-writing">Start Writing</NavDropdown.Item>
                  <NavDropdown.Item href="#start-coding">Start Coding</NavDropdown.Item>
                  <NavDropdown.Item href="#google-docs-extension">Google Docs Extension</NavDropdown.Item>
                  <NavDropdown.Item href="#canvas-extension">Canvas Extension</NavDropdown.Item>
                  <NavDropdown.Item href="#all-extensions">All Extensions</NavDropdown.Item>
                  <NavDropdown.Item href="#student-guides">Student Guides</NavDropdown.Item>
                </NavDropdown>
              </div>

              <div onMouseEnter={() => handleMouseEnter('dropdown-2')} onMouseLeave={handleMouseLeave}>
                <NavDropdown
                  title="Teacher Tools"
                  id="dropdown-2"
                  className="mx-3"
                  show={openDropdown === 'dropdown-2'}
                  onToggle={() => handleToggle('dropdown-2')}
                >
                  <NavDropdown.Item href="#create-editor">Create an Editor</NavDropdown.Item>
                  <NavDropdown.Item href="#create-assignment">Create an Assignment</NavDropdown.Item>
                  <NavDropdown.Item href="#google-docs-extension-teacher">Google Docs Extension</NavDropdown.Item>
                  <NavDropdown.Item href="#all-extensions-teacher">All Extensions</NavDropdown.Item>
                  <NavDropdown.Item href="#upcoming-webinar">Upcoming Webinar</NavDropdown.Item>
                  <NavDropdown.Item href="#teacher-guides">Teacher Guides</NavDropdown.Item>
                </NavDropdown>
              </div>

              <div onMouseEnter={() => handleMouseEnter('dropdown-3')} onMouseLeave={handleMouseLeave}>
                <NavDropdown
                  title="Institutions"
                  id="dropdown-3"
                  className="mx-3"
                  show={openDropdown === 'dropdown-3'}
                  onToggle={() => handleToggle('dropdown-3')}
                >
                  <NavDropdown.Item href="#lms-integration">LMS Integration</NavDropdown.Item>
                  <NavDropdown.Item href="#lti-access">LTI Access</NavDropdown.Item>
                  <NavDropdown.Item href="#canvas-extension-institutions">Canvas Extension</NavDropdown.Item>
                  <NavDropdown.Item href="#docs">Docs</NavDropdown.Item>
                </NavDropdown>
              </div>

              <div onMouseEnter={() => handleMouseEnter('dropdown-4')} onMouseLeave={handleMouseLeave}>
                <NavDropdown
                  title="About"
                  id="dropdown-4"
                  className="mx-3"
                  show={openDropdown === 'dropdown-4'}
                  onToggle={() => handleToggle('dropdown-4')}
                >
                  <NavDropdown.Item href="#about-project">About the Project</NavDropdown.Item>
                  <NavDropdown.Item href="#related-research">Related Research</NavDropdown.Item>
                  <NavDropdown.Item href="#team">Team</NavDropdown.Item>
                  <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
                </NavDropdown>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent