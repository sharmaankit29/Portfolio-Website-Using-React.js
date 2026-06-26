import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [html, setHtml] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined" && window.katex && window.katex.renderToString) {
      try {
        const rendered = window.katex.renderToString("\\mathit{Welcome}", { throwOnError: false });
        setHtml(rendered);
      } catch (e) {
        setHtml("<i>Welcome</i>");
      }
    } else {
      setHtml("<i>Welcome</i>");
    }
  }, []);

  if (!visible) return null;

  // Smooth scroll to top over a specific duration (ms)
  const scrollToTopDuration = (duration) => {
    if (typeof window === "undefined") return;
    const start = window.scrollY || document.documentElement.scrollTop || 0;
    const startTime = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = start * (1 - easeOutCubic(progress));
      window.scrollTo(0, val);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

  const handleClick = () => {
    if (exiting) return;
    setExiting(true);
    // navigate to home route (so header highlights Home)
    try { navigate && navigate('/'); } catch (e) {}
    // scroll page to top over 2s
    scrollToTopDuration(2000);
    // animate overlay slide-up for 2s then remove from DOM
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <div
      className={`landing-overlay ${exiting ? "exiting" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <div
        className="landing-content"
        dangerouslySetInnerHTML={{ __html: html || "Welcome" }}
      />
    </div>
  );
}

