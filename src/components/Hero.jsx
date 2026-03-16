import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return count
}

const Hero = () => {
  const countries = useCounter(100)
  const institutions = useCounter(500)
  const users = useCounter(50)

  return (
    <>
      <style>{`
        .hero-section {
          background: linear-gradient(to bottom, #88c0f9, #a9c8e8);
          padding: 8rem 0 6rem;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #0b3b75;
          margin-bottom: 1.5rem;
        }

        .hero-sub {
          max-width: 700px;
          margin: 0 auto 2rem;
          color: #243447;
        }

        .hero-btn {
          border-radius: 40px;
          padding: 0.6rem 1.8rem;
          font-weight: 600;
          margin: 0 0.5rem;
        }

        .stat-card {
          background: #f5f5f5;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          text-align: center;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: #3b82f6;
        }

        .stat-label {
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <section className="hero-section">
        <Container>

          <h1 className="hero-title">Process First. AI Second.</h1>

          <p className="hero-sub">
            Process Feedback is a learning-first alternative to plagiarism or AI detection.
            It enables teachers and students to see the writing process or AI use,
            and to discuss how the learning process can be improved.
          </p>

          <div className="mb-5">
            <Button variant="primary" className="hero-btn">
              View Sample Student Report
            </Button>
            <Button variant="primary" className="hero-btn">
              Try It In Google Docs
            </Button>
          </div>

          <Row className="g-4 mt-5">
            <Col md={4}>
              <div className="stat-card">
                <div className="stat-number">{countries}+</div>
                <div className="stat-label">Countries</div>
                <div>Used by teachers and students</div>
              </div>
            </Col>

            <Col md={4}>
              <div className="stat-card">
                <div className="stat-number">{institutions}+</div>
                <div className="stat-label">Institutions</div>
                <div>Used in schools, colleges, and universities</div>
              </div>
            </Col>

            <Col md={4}>
              <div className="stat-card">
                <div className="stat-number">{users.toLocaleString()}k+</div>
                <div className="stat-label">Active Users</div>
                <div>Have reviewed their writing process</div>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  )
}

export default Hero