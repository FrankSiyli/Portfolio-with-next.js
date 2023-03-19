import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="social_icons">
          <p style={{ color: "white" }}>
            © {new Date().getFullYear()} Frank Siyli
          </p>
          <Link href="/resume" className="resume-button">
            CV
          </Link>
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
              alt="github"
              width={100}
              height={100}
            ></Image>
          </a>
        </div>
      </div>
    </>
  );
}
