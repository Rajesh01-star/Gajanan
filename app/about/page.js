import CredibleSection from "../Components/AboutPage/CredibleSection";
import InstructorSection from "../Components/AboutPage/InstructorSection";
import PageHero from "../Components/PageHero";
import SubHeading from "../Components/SubHeading";
import TestimonialSection from "../Components/TestimonialSection";
import WhyChooseUs from "../Components/WhyChooseUs";

// component imports
export default function About() {
  return (
    <main>
      <PageHero pageTitle={"About"} />
      <SubHeading text={"Develop your skills"} />
      <WhyChooseUs />
      <CredibleSection />
      <SubHeading text={"We built our trust"} />
      <TestimonialSection />
      <SubHeading text={"Our Instructos"} />
      <InstructorSection />
    </main>
  );
}
