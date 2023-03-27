import Image from "next/image";
import backgroundImage from "public/images/backgroundImage.jpg";

export default function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Image
        src="/images/headshot.jpeg"
        className="profile-img"
        width={90}
        height={90}
        priority
        unoptimized={true}
        alt="Franks personal headshot"
      />
      <div className="hero-text">
        <h2>Hey, I&apos;m Frank 👋</h2>
        <p>I&apos;m a software developer based in Hamburg.</p>
      </div>
    </div>
  );
}
