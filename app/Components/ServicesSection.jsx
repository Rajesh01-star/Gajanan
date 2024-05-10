// FeaturesSection.js

import FeatureCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="mt-10 py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="w-full md:w-1/4 text-3xl font-bold text-center mb-12">
          We’re Offering the Best Services to You
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            imageSrc="/services1.jpg"
            title="Premium Instructor Training"
            description="Our driving school prides itself on maintaining an elite team of industry-leading instructors, committed to providing top-quality training, guidance, and support."
          />
          {/* Feature 2 */}
          <FeatureCard
            imageSrc="/services2.jpg"
            title="Navigating Road & Guidelines"
            description="We ensure students thoroughly grasp every road guideline and rule through comprehensive instruction and practical training, ensuring their safety and confidence on the road."
          />
          {/* Feature 3 */}
          <FeatureCard
            imageSrc="/services3.jpg"
            title="Get Your License with Confidence"
            description="Our driving school offers expert guidance and training for obtaining your driver's license, ensuring a smooth journey with tailored programs and full support."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
