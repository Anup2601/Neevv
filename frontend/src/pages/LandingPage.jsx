import Header from '../components/Header';
import HeroSection from '../components/HeroSection';  
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TechSection from '../components/TechSection';
import Footer from '../components/Footer';
const LandingPage= () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TechSection />
      <Footer />
    </div>
  );
};

export default LandingPage;