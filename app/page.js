// component imports
import FeaturesSection from "./Components/FeatureSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
