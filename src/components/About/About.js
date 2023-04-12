import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div aria-label="About Me" className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            After nearly two decades working in the automotive industry, I
            decided it was time for a change. I wanted to explore my passion for
            technology and expand my skillset. That&apos;s why I enrolled in the
            Web Dev bootcamp at &quot;neueFische&quot;. The experience was
            nothing short of transformative and gave me the perfect start into
            the world of IT. Starting from mid-May 2023, I am excited to join a
            team where I can continue to grow and contribute to something new.
            As a skilled craftsman, I pride myself on my hands-on approach to
            problem-solving and am committed to delivering high-quality results.
            I am eager to learn from others and bring my unique perspective to
            any project.
          </p>
        </div>
      </div>
      <div className="social_icons">
        <a
          className="icon_hide"
          href="https://github.com/FrankSiyli"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hide">Github</p>
          <Image
            src="/images/github-icon.png"
            alt="github"
            width={100}
            height={100}
          ></Image>
        </a>

        <a
          className="icon_hide"
          href="https://www.linkedin.com/in/frank-siyli-45b154226/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hide">Linkedin</p>
          <Image
            src="/images/linkedin-icon.png"
            alt="linkedin"
            width={100}
            height={100}
          ></Image>
        </a>
        <a
          className="icon_hide"
          href="/CV"
          aria-label="CV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hide">CV</p>
          <Image
            src="/images/resume.png"
            alt="CV"
            width={90}
            height={90}
          ></Image>
        </a>
      </div>
    </div>
  );
}
