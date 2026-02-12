import { useState } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteModal from "@/components/QuoteModal";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuote = () => setQuoteOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onRequestQuote={openQuote} />
      <main>
        <HeroSection onRequestQuote={openQuote} />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <GallerySection />
        <CTASection onRequestQuote={openQuote} />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
};

export default Index;
