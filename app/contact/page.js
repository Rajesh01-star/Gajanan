// component imports
import ContactForm from "../Components/ContactPage/ContactForm";
import MapSection from "../Components/ContactPage/MapSection";
import PageHero from "../Components/PageHero";
import SubHeading from "../Components/SubHeading";
export default function Contact() {
  return (
    <main>
      <PageHero pageTitle={"Contact Us"} />
      <SubHeading text={"Contact With Us "} />
      <ContactForm />
      <MapSection />
    </main>
  );
}