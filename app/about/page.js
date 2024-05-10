import InstructorSection from "../Components/AboutPage/InstructorSection";
import PageHero from "../Components/PageHero";
import SubHeading from "../Components/SubHeading";

// component imports
export default function About() {
  return (
    <main>
      <PageHero pageTitle={"About"}/>
      <SubHeading text={"Our Instructos"} />
      <InstructorSection />
    </main>
  );
}
