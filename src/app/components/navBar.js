import Link from "next/link";
import Image from "next/image";
import LangSwitch from "./ui/lang-switcher";


export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div>
      <Image
        src={"/Logo.png"}
        alt="My Image"
        width={80} 
        height={80} 
      />
      </div>


      
      <div className="navbar-links items-center">
      <LangSwitch />
        <div className="social">
        <Link href="https://www.facebook.com/BantuPayLTD?_rdc=1&_rdr" target="_blank">
          <Image
          src={"/facebook.svg"}
          alt="Facebook"
          width={40} 
          height={40} 
        />
        </Link>
        </div>

        <div className="social">
        <Link href="https://facebook.com" target="_blank">
          <Image
          src={"/twitter.svg"}
          alt="Twitter"
          width={40} 
          height={40}
        />
         </Link>
        </div>

          <div className="social">
          <Link href="https://www.instagram.com/bantu_pay/" target="_blank">
          <Image
          src={"/insta2.svg"}
          alt="Instagram"
          width={40} 
          height={40} 
        />
         </Link>
          </div>

         <div className="social">
         <Link href="https://www.linkedin.com/company/bantu-payment/?trk=public_profile_topcard-current-company&originalSubdomain=uk" target="_blank">
          <Image
          src={"/linkedin.svg"}
          alt="LinkedIn"
          width={40} 
          height={40} 
        />
         </Link>
         </div>

          <div className="social">
            <Link href="https://www.tiktok.com/@bantu_pay" target="_blank">
            <Image
            src={"/tiktok2.svg"}
            alt="TikTok"
            width={40} 
            height={40} 
            
          />
         </Link>
          </div>
         
        
      </div>
    </nav>
  );
}
