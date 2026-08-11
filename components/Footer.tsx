export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-logo">PF.</span>

        <p>
          Web Development · IT Systems ·
          <br />
          Social Media & Creative
        </p>
      </div>

      <div className="footer-center">
        <span>BUILT WITH</span>
        <p>Next.js · TypeScript · Framer Motion</p>
      </div>

      <div className="footer-right">
        <a href="#top">Back to top ↑</a>

        <span>
          © {new Date().getFullYear()} Paul Fangot
        </span>
      </div>
    </footer>
  );
}