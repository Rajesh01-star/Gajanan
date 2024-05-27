"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
// component imports
import ContactForm from "../Components/ContactPage/ContactForm";
// import MapSection from "../Components/ContactPage/MapSection";
import PageHero from "../Components/PageHero";
import SubHeading from "../Components/SubHeading";

export default function Contact() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course");
  return (
    <main>
      <PageHero pageTitle={"Contact Us"} />
      <SubHeading text={"Contact With Us "} />
      <Suspense>
        <ContactForm course={course} />
      </Suspense>
      {/* <MapSection /> */}
    </main>
  );
}
