import { useState } from "react";
import AnimateIn from "../components/AnimateIn";
import {
  StarIcon, DocReportIcon, ChromeIcon,
  ArrowRightIcon, ExternalLinkIcon,
} from "../components/Icons";
import {
  HERO_BULLETS_LEFT, HERO_BULLETS_RIGHT, STAT_CARDS,
  TEACHER_TOOLS, STUDENT_TOOLS, REVEAL_POINTS, FAQS,
} from "../data/Constants";

// ── Tool Card (used for both Teachers and Students) ───────────
function ToolCard({ title, points, btnLabel, href, variant }) {
  const isGreen = variant === "green";
  return (
    <div className={`pf-tool-card pf-tool-card-${isGreen ? "green" : "blue"}`}>
      <h3 className={`pf-tool-card-title pf-tool-card-title-${isGreen ? "green" : "blue"}`}>
        {title}
      </h3>
      <ul className="pf-tool-card-points">
        {points.map((p) => (
          <li key={p} className={`pf-tool-card-point pf-tool-card-point-${isGreen ? "green" : "blue"}`}>
            <span className="pf-tool-card-point-icon"><ArrowRightIcon size={14} /></span>
            {p}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`pf-card-btn pf-card-btn-${isGreen ? "green" : "blue"}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {btnLabel} <ExternalLinkIcon />
      </a>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div style={{ background: "#edf1fa", width: "100%" }}>
      <section className="pf-section">
        <AnimateIn>
          <h2 style={{ fontWeight: 700, marginBottom: 24 }}>Frequently Asked Questions</h2>
        </AnimateIn>
        <AnimateIn>
          <div className="pf-faq-box">
            {FAQS.map((faq, i) => (
              <div key={i} className="pf-faq-item">
                <button
                  className={`pf-faq-btn${openIndex === i ? " open" : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`pf-faq-icon${openIndex === i ? " open" : ""}`}
                    width="32" height="32" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true" style={{ flexShrink: 0 }}
                  >
                    <path d="M7 10L12 15L17 10" />
                  </svg>
                </button>
                <div className={`pf-faq-panel${openIndex === i ? " open" : ""}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

// ── Reveal Writing Process ────────────────────────────────────
function RevealWritingProcess() {
  return (
    <div style={{ background: "var(--color-reveal-bg)", padding: "8px" }}>
      <AnimateIn>
        <div className="pf-reveal-card">
          <div style={{ width: "95%", margin: "0 auto" }}>
            <h2 style={{ color: "var(--color-reveal-heading)", fontWeight: 700, textAlign: "center" }}>
              We simply reveal the writing process data
            </h2>
            <ul style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16, listStyle: "none", padding: 0 }}>
              {REVEAL_POINTS.map((text, i) => (
                <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{
                    marginTop: 8, width: 12, height: 12, flexShrink: 0,
                    borderRadius: "9999px", background: "var(--color-reveal-dot)",
                    display: "inline-block",
                  }} />
                  <span style={{ color: "#111827", lineHeight: 1.7, fontSize: 15 }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}

// ── See It In Action ──────────────────────────────────────────
function SeeItInAction() {
  return (
    <div style={{ background: "#edf1fa", width: "100%" }}>
      <section className="pf-section">
        <AnimateIn>
          <div className="pf-action-card">
            <div className="pf-action-row">
              {/* Image */}
              <img
                src="https://processfeedback.org/_astro/teachers.BMv3acBb_ZEWi0j.webp"
                alt="Group of teachers discussing with laptop on table."
                className="pf-action-img"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              {/* Text + buttons */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24 }}>
                <div style={{ padding: "0 16px" }}>
                  <h2 style={{ textAlign: "left", marginTop: 0 }}>See It in Action</h2>
                  <p>
                    See a sample student writing process report, or try it yourself. It is free for
                    teachers and students.
                  </p>
                </div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", margin: "20px 0" }}>
                  <a
                    href="https://app.processfeedback.org/gdocs/g_17GWSvODr0wQtxPBXeplzkoqWw3xv4cOL_9ZbWmIpXOU_d6351d?report=true&token=4d4453da-f306-4e6f-9bd9-4223d9d145cb"
                    className="pf-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Sample Student Report <DocReportIcon />
                  </a>
                  <a
                    href="/gdocs"
                    className="pf-btn"
                  >
                    Try It in Google Docs <ChromeIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

// ── Main Home Page ────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(to bottom, #95cffa, #e7f5fe)", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 40 }}>
          <h1 style={{
            textAlign: "center",
            color: "var(--color-header-text)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 6vw, 60px)",
            lineHeight: 1.2,
            margin: "40px 0 0",
            padding: "0 8px",
          }}>
            <span style={{ whiteSpace: "nowrap" }}>Course&nbsp;Project&nbsp;</span>
            <span style={{ whiteSpace: "nowrap" }}>at&nbsp;UMSL.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "1rem", maxWidth: 896, textAlign: "center",
            margin: "16px auto 0", padding: "0 16px", lineHeight: 1.6,
          }}>
            Process Feedback is a learning-first alternative to plagiarism or AI detection. It
            enables teachers and students to see the writing process or AI use, and to discuss
            how the learning process can be improved.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "center", margin: "40px 0 20px" }}>
            <a
              href="https://app.processfeedback.org/gdocs/g_17GWSvODr0wQtxPBXeplzkoqWw3xv4cOL_9ZbWmIpXOU_d6351d?report=true&token=4d4453da-f306-4e6f-9bd9-4223d9d145cb"
              className="pf-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Sample Student Report <DocReportIcon />
            </a>
            <a href="/gdocs" className="pf-btn">
              Try It In Google Docs <ChromeIcon />
            </a>
          </div>

          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            {[1, 2, 3, 4, 5].map((n) => <StarIcon key={n} />)}
          </div>
          <p style={{ textAlign: "center", marginTop: 8, color: "#2563eb", fontSize: 14 }}>
            Loved by students and teachers!
          </p>

          {/* Feature bullet lists */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, margin: "40px 16px", paddingBottom: 0 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {HERO_BULLETS_LEFT.map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, margin: "16px 0", maxWidth: 300 }}>
                  <span style={{ color: "#6EB3FA", flexShrink: 0, marginTop: 2 }}><ArrowRightIcon /></span>
                  {text}
                </li>
              ))}
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {HERO_BULLETS_RIGHT.map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, margin: "16px 0", maxWidth: 300 }}>
                  <span style={{ color: "#6EB3FA", flexShrink: 0, marginTop: 2 }}><ArrowRightIcon /></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Stat cards on solid #EDF1FA background ────────── */}
      <div style={{
        background: "#EDF1FA",
        width: "100%",
        paddingBottom: 0,
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
          padding: "0 16px",
        }}>
          {STAT_CARDS.map((card) => (
            <div key={card.label} style={{
              background: "#fff",
              borderRadius: 24,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              width: "clamp(200px, 22%, 320px)",
              transform: "translateY(-33%)",
            }}>
              <p style={{ fontSize: "2.25rem", color: "#60a5fa", fontWeight: 700, margin: 0 }}>{card.num}</p>
              <p style={{ fontSize: "1.125rem", fontWeight: 500, color: "#000", margin: 0 }}>{card.label}</p>
              <p style={{ fontSize: 14, color: "#374151", textAlign: "center", margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Tools – Teachers ──────────────────────────── */}
      <div style={{ background: "#f3fbf4", width: "100%" }}>
        <section className="pf-section" style={{ paddingTop: 80 }}>
          <AnimateIn><h2>Our Tools for Teachers</h2></AnimateIn>
          <AnimateIn style={{ maxWidth: "80%", margin: "20px auto 0", textAlign: "left" }}>
            <p>
              Ask students to submit their writing process reports or, instead, have them complete an
              additional self-reflection assignment. For large classes, our{" "}
              <a href="/docs/i-have-a-large-class" style={{ color: "#2563eb", textDecoration: "underline" }}>
                teacher dashboard
              </a>{" "}
              provides a summary of all your students' writing processes in one place.
            </p>
          </AnimateIn>
          <AnimateIn>
            <div className="pf-tool-grid">
              {TEACHER_TOOLS.map((t) => (
                <ToolCard key={t.title} {...t} variant="green" />
              ))}
            </div>
          </AnimateIn>
          <AnimateIn style={{ maxWidth: "80%", margin: "32px auto 0", textAlign: "center" }}>
            <p>
              <strong>Not sure where to start?</strong> Learn how to try Process Feedback in a class
              by reading our{" "}
              <a href="/docs/teachers" style={{ color: "#2563eb", textDecoration: "underline" }}>
                <strong>Teacher Guides</strong>
              </a>.
            </p>
          </AnimateIn>
        </section>
      </div>

      {/* ── Our Tools – Students ──────────────────────────── */}
      <div style={{ background: "#f9faff", width: "100%" }}>
        <section className="pf-section">
          <AnimateIn><h2>Our Tools for Students</h2></AnimateIn>
          <AnimateIn style={{ maxWidth: "80%", margin: "20px auto 0", textAlign: "left" }}>
            <p>
              Process Feedback works for both writing, coding, Google Docs, Canvas, and more. It shows
              typing time, breaks, and other writing-process data to help students reflect on how they worked.
            </p>
          </AnimateIn>
          <AnimateIn>
            <div className="pf-tool-grid">
              {STUDENT_TOOLS.map((t) => (
                <ToolCard key={t.title} {...t} variant="blue" />
              ))}
            </div>
          </AnimateIn>
        </section>
      </div>

      {/* ── Reveal Writing Process ────────────────────────── */}
      <RevealWritingProcess />

      {/* ── FAQ ───────────────────────────────────────────── */}
      <FAQ />

      {/* ── See It In Action ──────────────────────────────── */}
      <SeeItInAction />
    </>
  );
}// home hero v1
