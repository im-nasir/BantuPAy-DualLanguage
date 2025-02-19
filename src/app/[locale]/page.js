import { useTranslations } from 'next-intl';
import NavBar from '../components/navBar';
import Intro from '../components/Intro';
import About from '../components/About';
import FeaturesSection from '../components/Features';
import AccountPlans from '../components/Pricing';
import PreSignUpForm from '../components/signup';
import Carousel from '../components/carousel';
import Map from '../components/map';
import ContactForm from '../components/contact';
import PricingTable from '../components/Pricingss';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      
      < NavBar />
      < Intro />
      < About />
      < FeaturesSection />
      < PricingTable />
      < PreSignUpForm />
      < Carousel />
      < Map />
      < ContactForm />
    
    </div>
  );
}
