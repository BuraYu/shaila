import Image from "next/image";
import packagingHeroImage from "../../public/packaging-hero.webp";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] bg-black mb-10">
      <Image
        src={packagingHeroImage}
        alt="Clean packaging products display"
        fill
        priority
        className="object-cover w-full h-full opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight drop-shadow-lg max-w-3xl">
          Hochwertige Verpackungen für jede Branche
        </h1>
        <p className="text-md md:text-xl mt-4 max-w-xl drop-shadow-md text-gray-100">
          Nachhaltige & innovative Lösungen für Gastronomie, Einzelhandel und
          mehr.
        </p>

        {/* Buttons  */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="bg-gray-800 text-white hover:bg-gray-700">
            Produkte
          </Button>
          <Button className="bg-transparent text-white hover:bg-white hover:text-black border">
            Zum Katalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
