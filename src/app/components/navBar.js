import Link from "next/link";
import Image from "next/image";
import LangSwitch from "./ui/lang-switcher";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image src="/Logo.png" alt="Logo" width={70} height={70} priority = {true}/>
      </div>

      {/* Navbar Links */}
      <div className="navbar-links">
        <LangSwitch />

        {/* Social Icons */}
        <div className="social-icons">
          <Link href="https://www.facebook.com/BantuPayLTD?_rdc=1&_rdr" target="_blank">
            <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
          </Link>
          <Link href="https://x.com/bantupayltd?s=11" target="_blank">
            <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/bantu_pay/" target="_blank">
            <Image src="/insta2.svg" alt="Instagram" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/company/bantu-payment/?trk=public_profile_topcard-current-company&originalSubdomain=uk" target="_blank">
            <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link href="https://www.tiktok.com/@bantu_pay" target="_blank">
            <Image src="/tiktok2.svg" alt="TikTok" width={30} height={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
