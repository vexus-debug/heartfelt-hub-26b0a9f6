import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechnologySection from "@/components/TechnologySection";
import GalleryPreview from "@/components/GalleryPreview";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <TechnologySection />
      <GalleryPreview />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
