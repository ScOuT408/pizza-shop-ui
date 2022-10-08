import React from "react";
import Pizza1 from "../assets/pizza-1.png";
import Pizza2 from "../assets/pizza-2.png";
import Pizza3 from "../assets/pizza-3.png";
import Pizza4 from "../assets/pizza-4.png";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="relative mb-14">
        <div className="bg-red-300 h-12 w-12 rounded-full absolute -z-10 -top-1 -left-2 lg:hidden"></div>
        <h2 className="text-3xl uppercase font-medium z-20 lg:text-center sm:!text-3xl">
          <span className="!text-5xl sm:!text-3xl"> f</span>eatured products
        </h2>
      </div>

      <div className="grid grid-cols-4 place-items-center gap-4 mt-12 px-3 lg:grid-cols-2 sm:grid-cols-1">
        <ProductCard name="Pizza-1" price="20" image={Pizza1} />
        <ProductCard name="Pizza-2" price="40" image={Pizza2} />
        <ProductCard name="Pizza-3" price="30" image={Pizza3} />
        <ProductCard name="Pizza-4" price="50" image={Pizza4} />
      </div>
    </div>
  );
}

export default FeaturedProducts;
