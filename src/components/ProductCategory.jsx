import MaxWidthWrapper from "./MaxWidthWrapper";
import Card from "./Card";
import bags from "../../public/bags.webp";
import burger from "../../public/burger.webp";
import coffee from "../../public/coffee.webp";
import pizza from "../../public/pizza.webp";
import napkins from "../../public/napkins.webp";
import hotDog from "../../public/hotDog.webp";
import riceBowls from "../../public/riceBowls.webp";
import pastaBowls from "../../public/pastaBowls.webp";
import bread from "../../public/bread.webp";
import iceCream from "../../public/iceCream.webp";
import Link from "next/link";

const ProductCategory = () => {
  const packages = [
    { image: bags, name: "Papiertragetaschen" },
    { image: burger, name: "Burgerkartons" },
    { image: coffee, name: "Kaffeebecher" },
    { image: napkins, name: "Servietten" },
    { image: pizza, name: "Pizzakartons" },
  ];

  const eventsCategory = [
    { image: hotDog, name: "Fast-Food Verpackungen" },
    { image: riceBowls, name: "Catering & Partyservice" },
    { image: pastaBowls, name: "Bar & Restaurant" },
    { image: bread, name: "Bäckerei & Cafes" },
    { image: iceCream, name: "Eisdiele" },
  ];

  return (
    <MaxWidthWrapper>
      <div className="mb-20 md:mx-20 mx-5">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-800 text-left">
            Einwegverpackungen für die Gastronomie
          </h1>
          <div className="self-end">
            <Link href="/products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((product, index) => (
            <Card key={index} image={product.image} product={product.name} />
          ))}
        </div>
      </div>

      <div className="mb-20 md:mx-20 mx-5">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-800 text-left">
            Du suchst praktische & günstige Gastroverpackungen?
          </h1>
          <div className="self-end">
            <Link href="/products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {eventsCategory.map((product, index) => (
            <Card key={index} image={product.image} product={product.name} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductCategory;
