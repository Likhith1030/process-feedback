import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import { SendIcon } from "../components/Icons";

const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// ── Validation helpers ────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errs = {};

  if (!form.name.trim())
    errs.name = "Name is required.";
  else if (form.name.trim().length < 2)
    errs.name = "Name must be at least 2 characters.";

  if (!form.email.trim())
    errs.email = "Email is required.";
  else if (!EMAIL_RE.test(form.email))
    errs.email = "Please enter a valid email address.";

  if (!form.emailRetype.trim())
    errs.emailRetype = "Please retype your email.";
  else if (form.email !== form.emailRetype)
    errs.emailRetype = "Email addresses do not match.";

  if (!form.subject.trim())
    errs.subject = "Subject is required.";
  else if (form.subject.trim().length < 3)
    errs.subject = "Subject must be at least 3 characters.";

  if (!form.message.trim())
    errs.message = "Message is required.";
  else if (form.message.trim().length < 20)
    errs.message = "Message must be at least 20 characters.";

  return errs;
}

// ── Shared field styles ───────────────────────────────────────
const baseInput = {
  border: "2px solid #e5e7eb",
  padding: "9px 14px",
  borderRadius: 10,
  fontSize: 15,
  background: "#fff",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "inherit",
  color: "#213547",
  transition: "border-color 0.2s",
};

const labelStyle = {
  fontWeight: 500,
  color: "#374151",
  marginBottom: 6,
  fontSize: 15,
  display: "block",
};

const errorStyle = {
  color: "#b91c1c",
  fontSize: 13,
  marginTop: 4,
  display: "block",
};

const STATUS_STYLES = {
  success: { background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0" },
  error:   { background: "#fef2f2", color: "#b91c1c", border: "1px solid #fecaca" },
  info:    { background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" },
};

// ── Field component ───────────────────────────────────────────
function Field({ id, label, type = "text", placeholder, value, onChange, onBlur, error, touched }) {
  const borderColor = touched && error ? "#ef4444" : touched && !error ? "#22c55e" : "#e5e7eb";
  return (
    <div style={{ marginTop: 8 }}>
      <label style={labelStyle} htmlFor={id}>
        {label} <span style={{ color: "#ef4444" }}>*</span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ ...baseInput, borderColor }}
        onFocus={(e) => { e.target.style.borderColor = "#3b82f6"; }}
      />
      {touched && error && <span style={errorStyle}>{error}</span>}
    </div>
  );
}

// ── Send Email Section ────────────────────────────────────────
function SendEmailSection() {
  const EMAIL = "contact@processfeedback.org";
  const [copyState, setCopyState] = useState("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 10000);
    } catch {
      setCopyState("error");
      setTimeout(() => setCopyState("idle"), 10000);
    }
  };

  return (
    <div style={{ background: "#fff", width: "100%" }}>
      <section className="pf-section">
        <h2 style={{ color: "#003066", fontWeight: 700, marginTop: 0 }}>Send us an email</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: 24, alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#374151" }}>
              We can be reached at{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "#2563eb", textDecoration: "underline" }}>
                {EMAIL}
              </a>
              , which is <strong>our preferred method</strong> of communication. Please email us
              directly with your email account.
            </p>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button
                onClick={handleCopy}
                disabled={copyState === "copied"}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 24px", borderRadius: "9999px",
                  border: "1px solid #003066",
                  background: copyState === "copied" ? "#003066" : "#fff",
                  color:  copyState === "copied" ? "#fff" : "#003066",
                  fontWeight: 500, fontSize: 15, cursor: copyState === "copied" ? "not-allowed" : "pointer",
                  margin: 16, boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
                  transition: "all 0.2s", opacity: copyState === "copied" ? 0.8 : 1, fontFamily: "inherit",
                }}
              >
                {copyState === "copied" ? "Email Address Copied ✓" : "Copy Email Address"}
              </button>
              {copyState === "copied" && (
                <p style={{
                  marginTop: 4, maxWidth: 448, padding: "8px 12px", borderRadius: 8,
                  fontSize: 14, textAlign: "center", background: "#f0fdf4",
                  color: "#166534", border: "1px solid #bbf7d0", margin: "4px auto",
                }}>
                  Email address copied. Open your email app, paste the address, and send your message.
                </p>
              )}
              {copyState === "error" && (
                <p style={{
                  marginTop: 4, maxWidth: 448, padding: "8px 12px", borderRadius: 8,
                  fontSize: 14, textAlign: "center", background: "#fef2f2",
                  color: "#b91c1c", border: "1px solid #fecaca", margin: "4px auto",
                }}>
                  Copy failed. Please manually copy {EMAIL}.
                </p>
              )}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <img
              src="https://processfeedback.org/_astro/email-us.B189QabB_Ui2LM.webp"
              alt="Contact us illustration"
              style={{ width: "100%", maxWidth: 260, borderRadius: 12 }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Contact Form ──────────────────────────────────────────────
const EMPTY_FORM = { name: "", email: "", emailRetype: "", subject: "", message: "" };
const EMPTY_TOUCHED = { name: false, email: false, emailRetype: false, subject: false, message: false };

function ContactForm() {
  const [form, setForm]         = useState(EMPTY_FORM);
  const [touched, setTouched]   = useState(EMPTY_TOUCHED);
  const [status, setStatus]     = useState({ type: "", msg: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  const update = useCallback((field) => (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, [field]: val }));
  }, []);

  const touch = useCallback((field) => () =>
    setTouched((prev) => ({ ...prev, [field]: true })),
  []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // mark all fields touched so errors show on submit attempt
    setTouched({ name: true, email: true, emailRetype: true, subject: true, message: true });
    if (!isValid) {
      setStatus({ type: "error", msg: "Please fix the errors above before submitting." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "info", msg: "Sending your message…" });

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY ||
          SERVICE_ID === "your_service_id") {
        // EmailJS not configured — show instructions
        throw new Error("not_configured");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        PUBLIC_KEY,
      );

      setStatus({ type: "success", msg: "Thank you! Your message has been sent. We'll get back to you soon." });
      setSubmitted(true);
      setForm(EMPTY_FORM);
      setTouched(EMPTY_TOUCHED);
    } catch (err) {
      if (err.message === "not_configured") {
        setStatus({
          type: "error",
          msg: "Email service is not yet configured. Please email us directly at contact@processfeedback.org.",
        });
      } else {
        setStatus({
          type: "error",
          msg: "Something went wrong. Please email us directly at contact@processfeedback.org.",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const textFields = [
    { id: "name",        label: "Your name",    type: "text",  placeholder: "John Doe" },
    { id: "email",       label: "Your email",   type: "email", placeholder: "you@university.edu" },
    { id: "emailRetype", label: "Retype email", type: "email", placeholder: "you@university.edu" },
    { id: "subject",     label: "Subject",      type: "text",  placeholder: "Topic of your message" },
  ];

  const msgBorderColor = touched.message && errors.message ? "#ef4444"
    : touched.message && !errors.message ? "#22c55e"
    : "#e5e7eb";

  return (
    <div style={{ background: "#eff6ff", width: "100%" }}>
      <section className="pf-section" style={{ paddingBottom: 48 }}>
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>Send us a message</h2>
        <p style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 20px", fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
          Use the form below to send us a message. Please double-check your email address before
          submitting — that's where we will reply.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginTop: 16, alignItems: "flex-start" }}>
          {/* Illustration */}
          <div style={{ display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <img
              src="https://processfeedback.org/_astro/send-message.C2-ZvS2n_Z2oew9C.webp"
              alt="Send message illustration"
              style={{ width: "100%", maxWidth: 260 }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          {/* Form card */}
          <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{
            background: "linear-gradient(to bottom right, #eff6ff, #fff, #eff6ff)",
            border: "1px solid #e5e7eb", borderRadius: 20, padding: "16px 20px",
            boxShadow: "0 12px 24px -5px rgba(0,0,0,.08)",
          }}>
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {textFields.map((f) => (
                <Field
                  key={f.id}
                  {...f}
                  value={form[f.id]}
                  onChange={update(f.id)}
                  onBlur={touch(f.id)}
                  error={errors[f.id]}
                  touched={touched[f.id]}
                />
              ))}

              {/* Textarea */}
              <div style={{ marginTop: 8 }}>
                <label style={labelStyle} htmlFor="message">
                  Message <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Share your question or feedback (at least 20 characters)"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  onBlur={touch("message")}
                  onFocus={(e) => { e.target.style.borderColor = "#3b82f6"; }}
                  style={{ ...baseInput, resize: "none", borderColor: msgBorderColor }}
                />
                {touched.message && errors.message && (
                  <span style={errorStyle}>{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <button
                  type="submit"
                  className="pf-btn"
                  disabled={submitting || submitted}
                  style={{ opacity: (submitting || submitted) ? 0.6 : 1 }}
                >
                  {submitted ? "Message Sent ✓" : submitting ? "Sending…" : "Send Message"}
                  {!submitted && <SendIcon />}
                </button>
              </div>

              {/* Status banner */}
              {status.msg && (
                <div style={{
                  marginTop: 12, padding: "14px 12px", borderRadius: 12,
                  textAlign: "center", fontWeight: 500, fontSize: 15,
                  ...STATUS_STYLES[status.type],
                }}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Contact Page ──────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to us with your questions or feedback"
      />
      <SendEmailSection />
      <ContactForm />
    </>
  );
}
// contact v1
