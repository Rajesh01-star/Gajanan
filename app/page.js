// component imports
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import PointersSection from "./Components/PointerSection";
import WhyChooseUs from "./Components/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PointersSection />
      <WhyChooseUs />
    </main>
  );
}
