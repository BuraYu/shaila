import Image from "next/image";
import Link from "next/link";

const Card = ({ image, product }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-gray-300">
      <Link href="/products">
        <div className="overflow-hidden">
          <Image
            src={image}
            width={300}
            height={300}
            alt="image of the product"
            className="rounded-xl filter brightness-50 w-full transform transition-transform duration-300 group-hover:scale-115"
          />
        </div>
        <h3
          style={{ textShadow: "1px 1px 2px black" }}
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl text-shadow"
        >
          {product}
        </h3>
      </Link>
    </div>
  );
};

export default Card;
