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
              alt="github"
              width={100}
              height={100}
            ></Image>
          </a>
          <a
            href="/resume"
            aria-label="resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/resume.png"
              alt="github"
              width={90}
              height={90}
            ></Image>
          </a>
          <p style={{ color: "white" }}>
            © {new Date().getFullYear()} Frank Siyli
          </p>
        </div>
      </div>
    </>
  );
}
