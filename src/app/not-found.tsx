import React from "react";

const css = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,800&display=swap");

.nf {
  --ox: #2a0509;
  --wine: #4a0a14;
  --crimson: #d62839;
  --coral: #ff6b6b;
  --blush: #ffd9d9;
  --ink: #fff4f4;

  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem 1.25rem;
  box-sizing: border-box;
  color: var(--ink);
  font-family: "Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", sans-serif;
  background:
    radial-gradient(60rem 36rem at 50% 38%, var(--wine) 0%, transparent 70%),
    var(--ox);
  text-align: center;
}

.nf *, .nf *::before, .nf *::after { box-sizing: border-box; }

.nf-code {
  position: relative;
  margin: 0;
  font-size: clamp(7rem, 26vw, 18rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--crimson);
  text-shadow: 0.04em 0.04em 0 var(--wine);
  user-select: none;
}

.nf-code span.slip {
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 0.025em var(--coral);
  transform: rotate(-7deg) translateY(0.03em);
}

.nf-title {
  margin: 1.5rem 0 0.5rem;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.01em;
}

.nf-text {
  margin: 0 auto 2rem;
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--blush);
  opacity: 0.85;
}

.nf-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.nf-btn {
  appearance: none;
  display: inline-block;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  border: 2px solid var(--crimson);
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
}

.nf-btn.primary { background: var(--crimson); color: #fff; }
.nf-btn.primary:hover { background: var(--coral); border-color: var(--coral); color: var(--ox); }

.nf-btn.ghost { background: transparent; color: var(--ink); border-color: var(--coral); }
.nf-btn.ghost:hover { background: var(--coral); color: var(--ox); }

.nf-btn:focus-visible {
  outline: 3px solid var(--blush);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: no-preference) {
  .nf-code span.slip { animation: nf-wobble 2.4s ease-in-out 0.4s 1 both; }
}

@keyframes nf-wobble {
  0%   { transform: rotate(0deg) translateY(0); }
  40%  { transform: rotate(-12deg) translateY(0.05em); }
  70%  { transform: rotate(-5deg) translateY(0.02em); }
  100% { transform: rotate(-7deg) translateY(0.03em); }
}
`;

const NotFound: React.FC = () => {
  return (
    <main className="nf">
      <style>{css}</style>
      <div>
        <h1 className="nf-code" aria-label="Error 404">
          4<span className="slip">0</span>4
        </h1>
        <h2 className="nf-title">Page not found</h2>
        <p className="nf-text">
          The page you're looking for doesn't exist or has moved. Check the
          address for typos, or head back to somewhere familiar.
        </p>
        <div className="nf-actions">
          <a className="nf-btn primary" href="/">
            Go to homepage
          </a>
          <button
            type="button"
            className="nf-btn ghost"
            onClick={() => window.history.back()}
          >
            Go back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;