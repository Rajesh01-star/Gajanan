// FeaturesSection.js

import FeatureCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="mt-6 py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="w-full md:w-1/4 text-3xl font-bold text-center mb-12">
          We’re Offering the Best Services to You
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            imageSrc="/service/instructor.jpg"
            title="Premium Instructor Training"
            description="Our driving school prides itself on maintaining an elite team of industry-leading instructors, committed to providing top-quality training, guidance, and support."
          />
          {/* Feature 2 */}
          <FeatureCard
            imageSrc="/service/guideline.jpg"
            title="Navigating Road & Guidelines"
            description="We ensure students thoroughly grasp every road guideline and rule through comprehensive instruction and practical training, ensuring their safety and confidence on the road."
          />
          {/* Feature 3 */}
          <FeatureCard
            imageSrc="/service/license.jpg"
            title="Get Your License with Confidence"
            description="Our driving school offers expert guidance and training for obtaining your driver's license, ensuring a smooth journey with tailored programs and full support."
          />
          {/* Feature 4 */}
          <FeatureCard
            imageSrc="/service/admission.jpg"
            title="Instant Admission Approval"
            description="Experience hassle-free enrollment with our on-spot admission process. Get immediate approval and start your driving journey without delay."
          />
          {/* Feature 5 */}
          <FeatureCard
            imageSrc="/service/home_pickup.jpg"
            title="Convenient Home Pickup"
            description="Say goodbye to commuting hassles! Our driving school offers convenient home pickup services, ensuring you get started on your training right from your doorstep."
          />
          {/* Feature 6 */}
          <FeatureCard
            imageSrc="/service/basics.jpg"
            title="Learn Basic Car Maintenance"
            description="In addition to driving skills, our classes cover essential car maintenance tasks like changing tires, ensuring you're equipped with valuable knowledge to handle common roadside situations confidently."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
