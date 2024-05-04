// FeaturesSection.js

import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="mt-10 py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            imageSrc="/feature1.jpg"
            title="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, justo eget sodales condimentum, odio nulla fermentum odio, id dignissim nisi ligula sit amet dui. Nulla ut massa nulla."
          />
          {/* Feature 2 */}
          <FeatureCard
            imageSrc="/feature2.jpg"
            title="Feature 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, justo eget sodales condimentum, odio nulla fermentum odio, id dignissim nisi ligula sit amet dui. Nulla ut massa nulla."
          />
          {/* Feature 3 */}
          <FeatureCard
            imageSrc="/feature3.jpg"
            title="Feature 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, justo eget sodales condimentum, odio nulla fermentum odio, id dignissim nisi ligula sit amet dui. Nulla ut massa nulla."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
