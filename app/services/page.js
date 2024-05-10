// component imports
import FAQSection from "../Components/FAQSection";
import PageHero from "../Components/PageHero";
import ServicesSection from "../Components/ServicesSection";
import SubHeading from "../Components/SubHeading";
export default function Services() {
  return (
    <main>
      <PageHero pageTitle={"Services"} />
      <SubHeading text={"Our Services"} />
      <ServicesSection />
      <SubHeading text={"We're experienced"} />
      <FAQSection />
    </main>
  );
}
