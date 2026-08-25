"use client";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-logo">
          PF.
        </span>

        <p>
          Web Development · IT Systems ·
          <br />
          Social Media & Creative
        </p>
      </div>

      <div className="footer-center">
        <span>
          BUILT WITH
        </span>

        <p>
          Next.js · TypeScript · Framer Motion
        </p>
      </div>

      <div className="footer-right">
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-back-top"
        >
          Back to top

          <span>↑</span>
        </button>

        <span>
          © {new Date().getFullYear()} Paul Fangot
        </span>
      </div>
    </footer>
  );
}