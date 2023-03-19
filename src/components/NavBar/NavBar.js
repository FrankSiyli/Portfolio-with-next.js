import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/profile.png"
              className="profile-img"
              width={90}
              height={90}
              alt="Franks personal headshot"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
