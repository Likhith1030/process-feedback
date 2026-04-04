import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import { RESEARCH_PRIMARY, RESEARCH_ADDITIONAL } from "../data/Constants";
import { ArrowRight, ExternalArrow } from "../components/Icons";

// ── Responsive styles ─────────────────────────────────────────
const RESEARCH_STYLES = `
  .pf-paper-row {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: left;
    margin-top: 24px;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  .pf-paper-bullets { width: 100%; }
  .pf-paper-img-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: flex-end;
  }
  .pf-paper-img {
    border-radius: 8px;
    max-width: 100%;
    width: 100%;
    display: block;
    object-fit: contain;
  }
  @media (min-width: 1024px) {
    .pf-paper-row {
      flex-direction: row;
      align-items: flex-start;
    }
    .pf-paper-row-reverse { flex-direction: row-reverse; }
    .pf-paper-img-wrap { width: auto; flex-shrink: 0; }
    .pf-paper-img { max-width: 260px; width: auto; }
  }
`;

// // ── Icons ─────────────────────────────────────────────────────
// function ArrowRight() {
//   return (
//     <svg fill="currentColor" viewBox="0 0 448 512"
//       style={{ color: "#078C45", width: 16, height: 16, flexShrink: 0, marginTop: 2 }}>
//       <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
//     </svg>
//   );
// }

// function ExternalArrow() {
//   return (
//     <svg fill="currentColor" viewBox="0 0 512 512"
//       style={{ marginLeft: 8, width: "1em", height: "1em" }}>
//       <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
//     </svg>
//   );
// }

// ── Single paper section ──────────────────────────────────────
function PaperSection({ bg, journal, abstract, article, journalLabel, authors, readLabel, href, img, imgAlt, imagePosition }) {
  const rowClass = `pf-paper-row${imagePosition === "left" ? " pf-paper-row-reverse" : ""}`;

  return (
    <div style={{ width: "100%", textAlign: "center", background: bg }}>
      <section className="pf-section">

        <AnimateIn>
          <h2 style={{ fontWeight: 700, maxWidth: 768, margin: "0 auto 4px", color: "#00592A" }}>
            {journal}
          </h2>
        </AnimateIn>

        <AnimateIn>
          <div style={{ maxWidth: 768, margin: "4px auto 0", textAlign: "left" }}>
            <p><strong>Quick Abstract:</strong> {abstract}</p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className={rowClass}>
            <div className="pf-paper-bullets">
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { label: "Article",                                      value: article      },
                  { label: "Journal",                                      value: journalLabel },
                  { label: authors.includes(",") ? "Authors" : "Author",   value: authors      },
                ].map((item) => (
                  <li key={item.label}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, margin: "12px 0" }}>
                    <ArrowRight />
                    <span style={{ minWidth: 0 }}>{item.label}: {item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pf-paper-img-wrap">
              <img src={img} alt={imgAlt} className="pf-paper-img"
                onError={(e) => { e.target.style.display = "none"; }} />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <a href={href} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "10px 24px", borderRadius: 9999,
              border: "1px solid #00592A", background: bg,
              color: "#00592A", fontWeight: 500, fontSize: 15,
              textDecoration: "none", margin: 16, whiteSpace: "nowrap",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Read: {readLabel} <ExternalArrow />
          </a>
        </AnimateIn>

      </section>
    </div>
  );
}

// ── Research Page ─────────────────────────────────────────────
export default function Research() {
  return (
    <>
      <style>{RESEARCH_STYLES}</style>

      <PageHero
        title="Related Research"
        subtitle="Peer-reviewed research publications and articles related to the Process Feedback project"
      />

      <div style={{ width: "100%" }}>
        {RESEARCH_PRIMARY.map((paper) => (
          <PaperSection key={paper.journal} {...paper} />
        ))}
      </div>

      <div style={{ background: "#f3f4f6", width: "100%", padding: "40px 16px 24px", textAlign: "center" }}>
        <h1 style={{ color: "#003f81", fontWeight: 600, fontSize: 30, lineHeight: 1.2, margin: 0 }}>
          Additional Related Research
        </h1>
        <p style={{ opacity: 0.8, marginTop: 4 }}>
          Additional publications that indirectly support the Process Feedback project
        </p>
      </div>

      <div style={{ width: "100%" }}>
        {RESEARCH_ADDITIONAL.map((paper) => (
          <PaperSection key={paper.journal} {...paper} />
        ))}
      </div>
    </>
  );
}// research v1
