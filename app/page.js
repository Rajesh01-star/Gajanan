// component imports
import CourseOptionsSection from "./Components/CourseOptionsSection";
import FAQSection from "./Components/FAQSection";
import HeroSection from "./Components/HeroSection";
import PointersSection from "./Components/PointerSection";
import TestimonialSection from "./Components/TestimonialSection";
import WhyChooseUs from "./Components/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <PointersSection />
      <WhyChooseUs />
      <CourseOptionsSection />
      <TestimonialSection />
      <FAQSection />
    </main>
  );
}
