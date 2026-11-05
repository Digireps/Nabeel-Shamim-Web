import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import InvestmentsSection from "@/components/InvestmentsSection";
import StatsSection from "@/components/StatsSection";
import AwardsSection from "@/components/AwardsSection";
import PressSection from "@/components/PressSection";
import BoardSeatsSection from "@/components/BoardSeatsSection";
import PublishedBooksSection from "@/components/PublishedBooksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // If the browser reloads with a hash in the URL or previous scroll restoration,
    // clear the hash and ensure the page always starts at the top
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroductionSection />
        <InvestmentsSection />
        <StatsSection />
        <AwardsSection />
        <PressSection />
        <PublishedBooksSection />
        <BoardSeatsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
