import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.png"
        className="profile-img"
        width={90}
        height={90}
        alt="Franks personal headshot"
      />
      <div className="hero-text">
        <h2>Hey, I&apos;m Frank 👋</h2>
        <p>I&apos;m a software developer based in Hamburg. Soetimes I do...</p>
      </div>
    </div>
  );
}
