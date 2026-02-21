import { TEACHER_GUIDES } from "../data/Constants";
import { GlobeIcon } from "../components/Icons";

export default function TeacherGuides() {
  return (
    <div style={{
      background: "#fffff",
      minHeight: "100vh",
      padding: "40px 24px 80px",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#6b7280", marginBottom: 32 }}>
          <GlobeIcon/>
          <span style={{ opacity: 0.5 }}>/</span>
          <a href="/docs" style={{ color: "#374151", textDecoration: "none" }}
            onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.target.style.textDecoration = "none"}>
            docs
          </a>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: "#374151", fontWeight: 500, textDecoration: "underline" }}>teachers</span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 2.75rem)",
          fontWeight: 800,
          color: "#1a1a2e",
          marginBottom: 32,
          lineHeight: 1.2,
        }}>
          Teacher Guides
        </h1>

        {/* Numbered list */}
        <ol style={{ padding: "0 0 0 28px", margin: 0 }}>
          {TEACHER_GUIDES.map((guide) => (
            <li key={guide.label} style={{ marginBottom: 10 }}>
              <a
                href={guide.href}
                style={{
                  color: "#1d4ed8",
                  fontSize: 15,
                  fontWeight: 600,
                  lineHeight: 1.4,
                  textDecoration: "underline",
                  textDecorationColor: "rgba(29,78,216,0.4)",
                  textUnderlineOffset: 3,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#1e40af"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#1d4ed8"; }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {guide.label}
              </a>
            </li>
          ))}
        </ol>

      </div>
    </div>
  );
}