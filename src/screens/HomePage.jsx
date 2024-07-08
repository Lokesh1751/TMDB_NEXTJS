import React from "react";
import HeroSection from "../Services/HeroSection";
import Oscars from "../components/Oscars";
import TrendingSection from "../Services/TrendingSection";
import PopularSection from "../Services/PopularSection";
function HomePage() {
  return (
    <div>
      <HeroSection />
      <Oscars />
      <TrendingSection />
      <PopularSection />
    </div>
  );
}

export default HomePage;
