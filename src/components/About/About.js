import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div aria-label="About Me" className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Nach vielen Jahren in der Automobilindustrie suchte ich nach einer
            Veränderung. Ich wollte meiner Leidenschaft für Technologie
            nachgehen und meine Fähigkeiten erweitern. Ich entschied mich für
            ein Web Development Bootcamp.
            <br />
            <br />
            Diese Entscheidung war gold richtig
            <br />
            <br />
            und der perfekte Einstieg in die IT-Welt. Als erfahrener Handwerker
            suche ich praktische Ansätze zur Problemlösung und lege größten Wert
            auf Qualität. Ich bin ab sofort auf der Suche nach einem Team in dem
            ich weiter wachsen und meinen Beitrag leisten kann.
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
