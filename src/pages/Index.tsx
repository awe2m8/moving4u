import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import VoiceAssistant from "@/components/VoiceAssistant";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyChooseSection />
    <TestimonialsSection />
    <QuoteSection />
    <Footer />
    <VoiceAssistant />
  </div>
);

export default Index;
