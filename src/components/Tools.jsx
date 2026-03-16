import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Tools = ({ title, description, tools, theme }) => {
  const isGreen = theme === "green"

  const sectionBg = isGreen ? "#f2fff8" : "#f2f8ff"

  const cardGradient = isGreen
    ? "linear-gradient(180deg,#f6fffb 0%, #b4ffd7 100%)"
    : "linear-gradient(180deg,#f5f9ff 0%, #b3d6ff 100%)"

  const textColor = isGreen ? "#166534" : "#1e40af"
  const borderHover = isGreen ? "#15803d" : "#1d4ed8"

  return (
    <>
      <style>{`

        .tools-section{
          padding:5rem 0;
          text-align:center;
        }

        .tools-title{
          font-size:2rem;
          font-weight:700;
          margin-bottom:1rem;
        }

        .tools-desc{
          max-width:720px;
          margin:0 auto 3rem auto;
          color:#4a5568;
          text-align:center;
        }

        .tool-card{
          border-radius:40px;
          padding:1.2rem 1.4rem;
          width:100%;
          max-width:260px;
          box-shadow:0 10px 25px rgba(0,0,0,0.08);
          transition:transform .25s ease, border .25s ease;
          border:1px solid #d1d5dc;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .tool-card:hover{
          transform:rotate(-2deg) translateY(-4px);
        }

        .tool-title{
          font-weight:700;
          font-size:1.15rem;
          margin-bottom:.4rem;
          color:#1f2937;
          text-align:center;
        }

        .tool-list{
          list-style:none;
          padding:0;
          margin:.3rem 0 .8rem 0;
          font-weight:500;
          width:100%;
          text-align:left;
          flex-grow:1;
        }

        .tool-list li{
          display:flex;
          align-items:flex-start;
          margin-bottom:.45rem;
        }

        .arrow{
          margin-right:6px;
          flex-shrink:0;
        }

        .point-text{
          flex:1;
          line-height:1.35;
        }

        .tool-btn{
          border-radius:30px;
          font-weight:600;
          background:transparent;
          padding:4px 12px;
          border:1px solid white;
          box-shadow:0 2px 6px rgba(0,0,0,0.12);
          width:auto;
          margin-top:auto;
          white-space:nowrap;
          display:flex;
          align-items:center;
          gap:6px;
        }

        .tool-btn:hover{
          background:transparent;
        }

        .tool-card:hover .tool-btn{
          border-color:currentColor;
        }

        .external-icon{
          width:14px;
          height:14px;
        }

        @media (max-width:768px){

          .tools-section{
            padding:4rem 1.2rem;
          }

          .tool-card{
            max-width:100%;
          }

        }

      `}</style>

      <section
        className="tools-section"
        style={{ background: sectionBg }}
      >
        <Container>

          <h2 className="tools-title">{title}</h2>

          <p className="tools-desc">{description}</p>

          <Row className="g-4 justify-content-center">

            {tools.map((tool, i) => (
              <Col lg={2} md={4} sm={6} xs={12} key={i} className="d-flex justify-content-center">

                <div
                  className="tool-card"
                  style={{
                    background: cardGradient,
                    color: textColor
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.borderColor = borderHover)
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.borderColor = "#d1d5dc")
                  }
                >

                  <div className="tool-title">{tool.title}</div>

                  <ul className="tool-list">
                    {tool.points.map((p, idx) => (
                      <li key={idx}>
                        <span className="arrow">→</span>
                        <span className="point-text">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="tool-btn"
                    style={{ color: textColor }}
                  >
                    {tool.button}

                    <svg
                      className="external-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7"/>
                      <path d="M8 7h9v9"/>
                    </svg>

                  </Button>

                </div>

              </Col>
            ))}

          </Row>

        </Container>
      </section>
    </>
  )
}

export default Tools