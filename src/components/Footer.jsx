import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
  return (
    <>
      <style>{`
        .custom-footer {
          background-color: #88c0f9;
          padding: 4rem 0 2rem;
          color: /243447;
        }

        .footer-heading {
          font-weight: 700;
          margin-bottom: 1.25rem;
        }

        .footer-link {
          display: block;
          color: #000;
          text-decoration: none;
          margin-bottom: 0.75rem;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        .footer-bottom {
          border-top: 1px solid rgba(36, 52, 71, 0.3);
          margin-top: 3rem;
          padding-top: 1.5rem;
          font-size: 0.9rem;
        }

        .social-icons a {
          margin-left: 12px;
          font-size: 1.2rem;
          color: #1d4ed8;
          text-decoration: none;
        }

        @media (max-width: 767.98px) {
          .custom-footer {
            padding: 3rem 1.5rem 2rem;
          }

          .footer-bottom {
            text-align: left;
          }
        }
      `}</style>

      <footer className="custom-footer">
        <Container>

          <Row className="gy-4">

            <Col md={3} sm={6}>
              <div className="footer-heading">Teacher Tools</div>
              <a href="/" className="footer-link">Create an Editor</a>
              <a href="/" className="footer-link">Create an Assignment</a>
              <a href="/" className="footer-link">Google Docs Extension</a>

              <div className="footer-heading mt-4">Teacher Guides</div>
              <a href="/" className="footer-link">Samples</a>
              <a href="/" className="footer-link">Upcoming Webinar</a>
              <a href="/" className="footer-link">Guides & Tutorials</a>
            </Col>

            <Col md={3} sm={6}>
              <div className="footer-heading">Student Tools</div>
              <a href="/" className="footer-link">Writing Editor</a>
              <a href="/" className="footer-link">Online Compiler</a>
              <a href="/" className="footer-link">Browser Extensions</a>

              <div className="footer-heading mt-4">Student Guides</div>
              <a href="/" className="footer-link">Why Use It</a>
              <a href="/" className="footer-link">Online Course</a>
              <a href="/" className="footer-link">Student Guides</a>
            </Col>

            <Col md={3} sm={6}>
              <div className="footer-heading">Institutions</div>
              <a href="/" className="footer-link">LMS Integration</a>
              <a href="/" className="footer-link">LTI Access</a>
              <a href="/" className="footer-link">Canvas Extension</a>

              <div className="footer-heading mt-4">General</div>
              <a href="/" className="footer-link">Pricing</a>
              <a href="/" className="footer-link">FAQs</a>
            </Col>

            <Col md={3} sm={6}>
              <div className="footer-heading">About</div>
              <a href="/" className="footer-link">About the Project</a>
              <a href="/" className="footer-link">Related Research</a>
              <a href="/" className="footer-link">Blog Articles</a>
              <a href="/" className="footer-link">Team</a>

              <div className="footer-heading mt-4">Contact Us</div>
              <a href="/" className="footer-link">Contact Us</a>
              <a href="/" className="footer-link">Schedule a Meeting</a>
            </Col>

          </Row>

          <Row className="footer-bottom align-items-center">
            <Col md={8}>
              No copyrights; <a href="/">Copyleft</a> © 2025, Process Feedback, LLC ·
              <a href="/" className="ms-2">Privacy Policy</a> ·
              <a href="/" className="ms-2">Terms of Use</a>
            </Col>

            <Col md={4} className="text-md-end social-icons mt-3 mt-md-0">
              <a href="/">f</a>
              <a href="/">t</a>
              <a href="/">in</a>
              <a href="/">▶</a>
            </Col>
          </Row>

        </Container>
      </footer>
    </>
  )
}

export default Footer