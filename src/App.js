import React, { useState, useEffect } from "react";

// Details
const BUSINESS_NAME = "VR TEX";
const PERSON_NAME = "REGURAMAN V";
const BUSINESS_DESC =
  "Supplying cotton, yarn, waste, and all types of knitted and woven fabrics with trusted expertise and dependable service.";
const CLIENT_NOTE =
  "Your reliable partner in sourcing quality materials and building lasting business relationships.";
const SPECIALISATIONS = [
  "Cotton",
  "Yarn",
  "Waste",
  "Knitted & Woven Fabrics"
];
const PHONE = "9865210615";
const EMAIL = "raghuveerabathran@gmail.com";

const COLORS = {
  light: {
    background: "#f8fbff",
    text: "#143d7a",
    accent: "#0077ff",
    card: "#ffffff",
    cardText: "#131c36",
    button: "#0077ff",
    buttonText: "#ffffff",
    toggleBg: "#e7eaf3",
    navBg: "#e9effb",
    shadow: "rgba(0, 119, 255, 0.09)",
    highlight: "#e6f2ff"
  },
  dark: {
    background: "#0a0a0a",
    text: "#fff",
    accent: "#e53935",
    card: "#181818",
    cardText: "#fff",
    button: "#e53935",
    buttonText: "#fff",
    toggleBg: "#222",
    navBg: "#111",
    shadow: "rgba(229, 57, 53, 0.15)",
    highlight: "#2a1515"
  },
};

// Load Google Font
function useGoogleFont(fontName = "Inter") {
  useEffect(() => {
    const id = `google-font-${fontName.replace(/\s+/g, "")}`;
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@400;600;700&display=swap`;
      document.head.appendChild(link);
    }
  }, [fontName]);
}

function App() {
  // Default to dark mode
  const [mode, setMode] = useState("dark");
  useGoogleFont("Inter");

  const theme = COLORS[mode];
  const handleModeToggle = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const phoneHref = `tel:${PHONE.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${EMAIL}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.text,
        fontFamily: "'Inter', system-ui, sans-serif",
        transition: "background 0.6s cubic-bezier(.7,0,.3,1), color 0.4s",
      }}
      className={mode === "dark" ? "dark" : ""}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          background: theme.navBg,
          padding: "1.2rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: `0 2px 20px 0 ${theme.shadow}`,
          position: "sticky",
          top: 0,
          zIndex: 2,
          transition: "background 0.6s cubic-bezier(.7,0,.3,1)",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: "0.07em",
            color: theme.accent,
            textShadow: mode === "dark" ? "0 2px 12px #ff174422" : "0 2px 12px #0077ff18",
            transition: "color 0.4s",
          }}
        >
          {BUSINESS_NAME}
        </span>
        {/* Mode Toggle */}
        <button
          onClick={handleModeToggle}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.8em",
            fontWeight: 600,
            color: theme.text,
            fontSize: "1.1rem",
            position: "relative",
            padding: 0,
            transition: "color 0.4s",
          }}
          aria-label="Toggle dark/light mode"
        >
          <span
            style={{
              display: "inline-block",
              width: 44,
              height: 24,
              background: theme.toggleBg,
              borderRadius: 14,
              position: "relative",
              marginRight: 8,
              boxShadow: `0 1px 8px 0 ${theme.shadow}`,
              transition: "background 0.4s",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 3,
                left: mode === "light" ? 4 : 22,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: theme.accent,
                boxShadow: mode === "light"
                  ? "0 0 0 2px #fff, 0 1px 6px #0077ff33"
                  : "0 0 0 2px #222, 0 1px 6px #e5393523",
                transition: "left 0.35s cubic-bezier(.7,0,.3,1), background 0.4s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></span>
          </span>
          {mode === "light" ? "Dark" : "Light"}
        </button>
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: 600,
          margin: "3rem auto 2rem auto",
          padding: "2.2rem 1.1rem",
        }}
      >
        {/* Info Section */}
        <section
          style={{
            background: theme.card,
            color: theme.cardText,
            borderRadius: "22px",
            boxShadow: `0 4px 32px 0 ${theme.shadow}`,
            padding: "2.4rem 1.5rem 2rem 1.5rem",
            marginBottom: "2.7rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "background 0.6s cubic-bezier(.7,0,.3,1), color 0.4s, box-shadow 0.4s",
          }}
        >
          <h1
            style={{
              fontSize: "2.15rem",
              margin: "0 0 0.2em",
              color: theme.cardText,
              letterSpacing: "0.025em",
              fontWeight: 700,
              transition: "color 0.4s",
            }}
          >
            {PERSON_NAME}
          </h1>
          <div 
            className="specialisation-highlight"
            style={{
              display: "inline-block",
              background: theme.highlight,
              color: theme.accent,
              fontWeight: 700,
              fontSize: "1.17rem",
              padding: "0.38em 1.2em",
              borderRadius: "14px",
              boxShadow: `0 2px 18px 0 ${theme.shadow}`,
              margin: "0.7em 0 1.1em 0",
              cursor: "pointer",
              transition: "box-shadow 0.3s, transform 0.18s, background 0.3s",
            }}
            tabIndex={0}
          >
            {SPECIALISATIONS.join(", ")}
          </div>
          <p style={{ fontSize: "1.11rem", lineHeight: 1.63, margin: 0, opacity: 0.94 }}>
            {BUSINESS_DESC}
          </p>
        </section>
        {/* Contact Section */}
        <section
          style={{
            background: theme.card,
            color: theme.cardText,
            borderRadius: "22px",
            boxShadow: `0 4px 32px 0 ${theme.shadow}`,
            padding: "2.2rem 1.5rem 2rem 1.5rem",
            textAlign: "center",
            marginBottom: "2.2rem",
            transition: "background 0.6s cubic-bezier(.7,0,.3,1), color 0.4s, box-shadow 0.4s",
          }}
        >
          <h2
            style={{
              margin: "0 0 1.05em",
              color: theme.accent,
              fontWeight: 700,
              fontSize: "1.35rem",
              letterSpacing: "0.035em",
              textShadow: mode === "dark"
                ? "0 2px 10px #e5393522"
                : "0 2px 10px #0077ff12",
              transition: "color 0.4s",
            }}
          >
            Contact Details
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2em",
              alignItems: "center",
              fontSize: "1.12rem",
              marginBottom: "1.2em",
            }}
          >
            <AnimatedLink
              href={phoneHref}
              accent={theme.accent}
              mode={mode}
              text={PHONE}
              label="Call"
            />
            <AnimatedLink
              href={emailHref}
              accent={theme.accent}
              mode={mode}
              text={EMAIL}
              label="Email"
            />
          </div>
          <div
            style={{
              fontSize: "0.97em",
              color: theme.cardText,
              opacity: 0.87,
            }}
          >
            {CLIENT_NOTE}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          color: theme.cardText,
          opacity: 0.7,
          fontSize: "1em",
          padding: "1.3em",
          transition: "color 0.4s",
        }}
      >
        &copy; {new Date().getFullYear()} {PERSON_NAME}. All rights reserved.
      </footer>
      {/* Extra styles for smooth link/button transitions and highlight pop-up */}
      <style>{`
        .animated-link {
          transition: 
            background 0.35s cubic-bezier(.7,0,.3,1),
            color 0.3s cubic-bezier(.7,0,.3,1),
            box-shadow 0.4s cubic-bezier(.7,0,.3,1),
            transform 0.23s cubic-bezier(.7,0,.3,1);
          outline: none;
          border: none;
        }
        .animated-link:focus-visible {
          box-shadow: 0 0 0 3px #e5393544 !important;
          background: #fff3f3 !important;
        }
        .animated-link:hover, .animated-link:active {
          transform: translateY(-2px) scale(1.035);
          box-shadow: 0 6px 24px 0 #e5393522;
          background: #ffeaea !important;
          color: #b71c1c !important;
        }
        .animated-link.dark:hover, .animated-link.dark:active {
          background: #3c1818 !important;
          color: #ff5252 !important;
          box-shadow: 0 6px 24px 0 #e5393540;
        }
        .animated-link {
          -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
        .specialisation-highlight {
          box-shadow: 0 2px 18px 0 #e5393522;
          transition: box-shadow 0.25s, transform 0.18s, background 0.3s;
        }
        .specialisation-highlight:hover, .specialisation-highlight:focus-visible {
          background: #ffeaea !important;
          box-shadow: 0 8px 32px 0 #e5393555;
          transform: scale(1.08);
          outline: none;
        }
        .dark .specialisation-highlight:hover, .dark .specialisation-highlight:focus-visible {
          background: #3c1818 !important;
          box-shadow: 0 8px 32px 0 #e53935bb;
        }
      `}</style>
    </div>
  );
}

// Animated contact link component (no emoji)
function AnimatedLink({ href, text, accent, mode }) {
  return (
    <a
      href={href}
      className={`animated-link${mode === "dark" ? " dark" : ""}`}
      style={{
        color: accent,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "1.13rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        padding: "0.32em 1.1em",
        background: mode === "light" ? "#eaf3ff" : "#222",
        boxShadow: "0 1px 10px 0 rgba(0,119,255,0.05)",
        cursor: "pointer",
        letterSpacing: "0.01em",
        position: "relative",
        transition: "background 0.35s, color 0.3s, box-shadow 0.4s, transform 0.23s",
        outline: "none",
        userSelect: "text",
      }}
      tabIndex={0}
    >
      {text}
    </a>
  );
}

export default App;