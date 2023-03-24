import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="social_icons">
          <a
            href="https://github.com/FrankSiyli"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/github-icon.png"
              alt="github"
              width={100}
              height={100}
            ></Image>
          </a>

          <a
            href="https://www.linkedin.com/in/frank-siyli-45b154226/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedin-icon.png"
              alt="linkedin"
              width={100}
              height={100}
            ></Image>
          </a>
          <a
            href="/CV"
            aria-label="CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/resume.png"
              alt="CV"
              width={90}
              height={90}
            ></Image>
          </a>
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
