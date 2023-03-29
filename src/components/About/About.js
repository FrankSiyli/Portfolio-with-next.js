import Image from "next/image";

export default function About() {
  return (
    <div aria-label="About Me" className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            After almost two decades in the automotive industry, it was time for
            a change. Something with new stimuli and enough opportunities to
            develop myself further. The bootcamp at &quot;neueFische&quot; was
            the perfect start into the IT-world and from mid of may 2023 I am
            looking for a team where I can develop my knowledge and be a part of
            something new.
          </p>
        </div>
      </div>
    </div>
  );
}
