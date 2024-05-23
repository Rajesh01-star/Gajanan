// component imports
import CourseOptionsSection from "./Components/CourseOptionsSection";
import FAQSection from "./Components/FAQSection";
import HeroSection from "./Components/HeroSection";
import PointersSection from "./Components/PointerSection";
import SubHeading from "./Components/SubHeading";
import TestimonialSection from "./Components/TestimonialSection";
import WhyChooseUs from "./Components/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <PointersSection />
      <SubHeading text={"Get to know us"} />
      <WhyChooseUs />
      <SubHeading text={"Courses available"} />
      <CourseOptionsSection />
      <SubHeading text={"Our Testimonials"} />
      <TestimonialSection />
      <SubHeading text={"We're experienced"} />
      <FAQSection />
    </main>
  );
}
