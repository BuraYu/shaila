import MaxWidthWrapper from "./MaxWidthWrapper";
import FeatureCard from "./FeatureCard";
import { Globe, MonitorSmartphone, Truck } from "lucide-react";

const Feature = () => {
  const featureCardData = [
    {
      name: "Einfache Bestellung",
      icon: <MonitorSmartphone size={40} />,
      description:
        "Bestellen Sie bequem per WhatsApp, E-Mail oder über unseren Online-Shop – ganz ohne Aufwand.",
    },
    {
      name: "Schneller Versand",
      icon: <Truck size={40} />,
      description:
        "Zuverlässiger und schneller Versand – auf Wunsch auch mit Expresslieferung möglich.",
    },
    {
      name: "Europaweite Lieferung",
      icon: <Globe size={40} />,
      description:
        "Wir liefern Ihre Bestellung in nahezu alle Länder Europas – pünktlich und sicher.",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col lg:flex-row mb-10">
        {featureCardData.map((ele, index) => (
          <FeatureCard
            key={index}
            name={ele.name}
            icon={ele.icon}
            description={ele.description}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Feature;
