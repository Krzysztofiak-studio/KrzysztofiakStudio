import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="font-sans text-foreground selection:bg-accent selection:text-primary-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <WhyUsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
