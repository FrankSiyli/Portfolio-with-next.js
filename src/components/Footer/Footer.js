export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-impressum">
          <p style={{ color: "white" }}>
            © {new Date().getFullYear()} Frank Siyli
          </p>
          <a
            href="/impressum"
            aria-label="impressum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            aria-label="datenschutz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz
          </a>
          <a
            href="/agb"
            aria-label="agb"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGB
          </a>
        </div>
      </div>
    </>
  );
}
