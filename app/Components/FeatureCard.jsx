// FeatureCard.js

const FeatureCard = ({ imageSrc, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default FeatureCard;
  