import Link from "next/link";
import Image from "next/image";
import LangSwitch from "./ui/lang-switcher";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Animated Background Elements */}
      <div className="navbar-bg-effects">
        <div className="navbar-glow"></div>
        <div className="navbar-particles">
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
        </div>
      </div>

      {/* Logo Section */}
      <div className="navbar-logo">
        <div className="logo-container">
          <Image src="/Logo.png" alt="Logo" width={70} height={70} priority={true}/>
          <div className="logo-glow"></div>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="navbar-content">
        {/* Language Switcher */}
        <div className="nav-item">
          <LangSwitch />
        </div>

        {/* Divider */}
        <div className="nav-divider"></div>

        {/* Social Icons */}
        <div className="social-icons">
          <Link href="https://www.facebook.com/BantuPayLTD?_rdc=1&_rdr" target="_blank" className="social-link">
            <div className="social-icon-wrapper">
              <FaFacebook className="social-icon" size={18} />
              <div className="social-ripple"></div>
            </div>
          </Link>
          <Link href="https://x.com/bantupayltd?s=11" target="_blank" className="social-link">
            <div className="social-icon-wrapper">
              <FaTwitter className="social-icon" size={18} />
              <div className="social-ripple"></div>
            </div>
          </Link>
          <Link href="https://www.instagram.com/bantu_pay/" target="_blank" className="social-link">
            <div className="social-icon-wrapper">
              <FaInstagram className="social-icon" size={18} />
              <div className="social-ripple"></div>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/company/bantu-payment/?trk=public_profile_topcard-current-company&originalSubdomain=uk" target="_blank" className="social-link">
            <div className="social-icon-wrapper">
              <FaLinkedin className="social-icon" size={18} />
              <div className="social-ripple"></div>
            </div>
          </Link>
          <Link href="https://www.tiktok.com/@bantu_pay" target="_blank" className="social-link">
            <div className="social-icon-wrapper">
              <FaTiktok className="social-icon" size={18} />
              <div className="social-ripple"></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
