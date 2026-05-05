import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import { PersonIcon } from "../components/Icons";
import { TEAM_CURRENT, TEAM_ALUMNI } from "../data/Constants";

// ── Team Card ─────────────────────────────────────────────────
function TeamCard({ name, role, variant = "blue" }) {
  const themes = {
    blue:  { avatarBg: "#dbeafe", iconColor: "#2563eb", nameBg: "#1e3a5f", roleBg: "#4b5563", border: "#bfdbfe" },
    green: { avatarBg: "#dcfce7", iconColor: "#16a34a", nameBg: "#14532d", roleBg: "#4b5563", border: "#bbf7d0" },
  };
  const t = themes[variant];

  return (
    <div className="pf-team-card">
      {/* Avatar circle */}
      <div
        className="pf-team-avatar"
        style={{ background: t.avatarBg, color: t.iconColor }}
      >
        <PersonIcon />
      </div>
      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="pf-team-name" style={{ color: t.nameBg }}>{name}</p>
        <p className="pf-team-role" style={{ color: "#6b7280", borderColor: "#e5e7eb", margin: 0, fontSize: 13 }}>
          {role}
        </p>
      </div>
    </div>
  );
}

// ── Team Page ─────────────────────────────────────────────────
export default function Team() {
  return (
    <>
      <PageHero title="Process Feedback's Team" />

      {/* ── Current team ──────────────────────────────────── */}
      <div style={{ background: "var(--color-team-current-bg)", width: "100%" }}>
        <section className="pf-section">
          <AnimateIn>
            <h2 style={{
              color: "#003066", fontWeight: 700,
              background: "linear-gradient(135deg, #003066, #0852a6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Current Team
            </h2>
          </AnimateIn>
          <AnimateIn>
            <div className="pf-team-grid" style={{ marginTop: 32 }}>
              {TEAM_CURRENT.map((member) => (
                <TeamCard key={member.name} {...member} variant="blue" />
              ))}
            </div>
          </AnimateIn>
        </section>
      </div>

      {/* ── Alumni ────────────────────────────────────────── */}
      <div style={{ background: "var(--color-team-alumni-bg)", width: "100%" }}>
        <section className="pf-section">
          <AnimateIn>
            <h2 style={{ color: "#14532d", fontWeight: 700 }}>
              Alumni
            </h2>
            <p style={{ textAlign: "center", color: "#374151", marginTop: 8, fontSize: 15 }}>
              We are grateful to our alumni for their contributions to Process Feedback.
            </p>
          </AnimateIn>
          <AnimateIn>
            <div className="pf-team-grid" style={{ marginTop: 32 }}>
              {TEAM_ALUMNI.map((member) => (
                <TeamCard key={member.name} {...member} variant="green" />
              ))}
            </div>
          </AnimateIn>
        </section>
      </div>

      {/* ── Acknowledgements ──────────────────────────────── */}
      <div style={{ background: "var(--color-team-ack-bg)", width: "100%" }}>
        <section className="pf-section">
          <AnimateIn>
            <h2 style={{ fontWeight: 700 }}>Acknowledgements</h2>
          </AnimateIn>
          <AnimateIn>
            <div style={{ maxWidth: 896, margin: "24px auto 0", fontSize: 15, lineHeight: 1.7, color: "var(--color-team-ack-text)" }}>
              <p>
                A heartfelt thanks to <strong>Judge0</strong> for providing us with free access to their
                APIs for about nine months in 2023. We no longer use Judge0 as our primary technology
                but their support allowed us to develop and refine critical features during our early stages.
              </p>
              <p>
                We are grateful to <strong>Cloudflare</strong> for their "Cloudflare for Startups" program,
                which enabled us to kickstart our development in 2023. At the time, Cloudflare's Turnstile
                was still in beta and we trusted their innovative technology. Today, we rely on Cloudflare
                for most of our technology.
              </p>
              <p>
                <strong>Missouri Online</strong> played a vital role in helping us design our first user
                interface. We are especially thankful to their team for evaluating our design and offering
                feedback that helped shape the platform's UI.
              </p>
            </div>
          </AnimateIn>
        </section>
      </div>
    </>
  );
}// team v1
