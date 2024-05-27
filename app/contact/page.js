// component imports
// import ContactForm from "../Components/ContactPage/ContactForm";
import dynamic from "next/dynamic";
import MapSection from "../Components/ContactPage/MapSection";
import PageHero from "../Components/PageHero";
import SubHeading from "../Components/SubHeading";

const DynamicContactForm = dynamic(
  () => import("../Components/ContactPage/ContactForm"),
  { ssr: false }
);
export default function Contact() {
  return (
    <main>
      <PageHero pageTitle={"Contact Us"} />
      <SubHeading text={"Contact With Us "} />
      <DynamicContactForm />
      <MapSection />
    </main>
  );
}
