const FeatureCard = ({ name, icon, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96">
      <span className="text-gray-600 mb-4">{icon}</span>
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
