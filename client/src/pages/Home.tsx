/*
 * HOME PAGE — Sweeptakes.com
 * Full-page assembly of all sections
 * Design: Superhero Command Center
 * Mr. Sweeps leads the voice throughout
 * Auth + i18n enabled
 */
import Navbar from "@/components/Navbar";
import BonusTicker from "@/components/BonusTicker";
import HeroSection from "@/components/HeroSection";
import WhatAreSection from "@/components/WhatAreSection";
import TopCasinos from "@/components/TopCasinos";
import HowWeRank from "@/components/HowWeRank";
import BonusGuide from "@/components/BonusGuide";
import FeaturedReview from "@/components/FeaturedReview";
import LegalStates from "@/components/LegalStates";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#060e1f" }}>
      <Navbar />
      <HeroSection />
      <BonusTicker />
      <WhatAreSection />
      <TopCasinos />
      <HowWeRank />
      <FeaturedReview />
      <BonusGuide />
      <LegalStates />
      <TrustSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
