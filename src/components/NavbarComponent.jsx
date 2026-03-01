import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className="bg-body-tertiary"
      >
        <Container fluid style={{ maxWidth: "1200px" }}>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

          <Navbar.Toggle
          aria-controls="navbarFull"
          onClick={() => setExpanded(!expanded)}
>
  {expanded ? (
    <span style={{ fontSize: "1.5rem" }}>✕</span>
  ) : (
    <span className="navbar-toggler-icon"></span>
  )}
</Navbar.Toggle>

          <Navbar.Collapse id="navbarFull">
            <Nav className="ms-auto my-2 my-lg-0">

              <Nav.Link href="#home" className="mx-3">Home</Nav.Link>

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