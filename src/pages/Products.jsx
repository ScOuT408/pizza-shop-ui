import React from "react";
import ProductCard from "../components/ProductCard";
import Pizza1 from "../assets/pizza-1.png";
import Pizza2 from "../assets/pizza-2.png";
import Pizza3 from "../assets/pizza-3.png";
import Pizza4 from "../assets/pizza-4.png";
import { SearchIcon } from "@heroicons/react/outline";

function Products() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center my-12">
        <h1 className="text-3xl capitalize">
          <span className="text-primary"> available </span> pizza's
        </h1>
      </div>

      {/* Products */}
      <div className="grid grid-cols-3 gap-3 p-3">
        <div className="border border-red-400 shadow-md h-[300px] sticky top-24 md:col-span-3 md:static md:top-0">
          <div className="p-3 relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full relative border border-slate-300 shadow-sm outline-none p-2 rounded-full"
            />
            <SearchIcon className="bg-red-300 absolute right-5 h-8 p-[6px] rounded-full text-slate-100 cursor-pointer" />
          </div>

          {/* Filter Pizzas */}
          <div className="p-2">
            <h2 className="text-xl text-red-400 text-center">
              Filter Types...
            </h2>
            <select
              className="w-full p-2 mt-3 border-[1px] border-slate-200 shadow-sm capitalize focus:outline-none rounded-full"
              name="category"
            >
              <option value="" disabled>
                please select category
              </option>
              <option value="all">all</option>
              <option value="veg">veg</option>
              <option value="non-veg">non-veg</option>
            </select>
          </div>
        </div>
        <div className="col-span-2 w-full md:col-span-3">
          <div className="grid grid-cols-3 gap-4 w-full 2xl:grid-cols-2 sm:grid-cols-1">
            <ProductCard name="Pizza-1" price="20" image={Pizza1} />
            <ProductCard name="Pizza-2" price="40" image={Pizza2} />
            <ProductCard name="Pizza-3" price="30" image={Pizza3} />
            <ProductCard name="Pizza-4" price="50" image={Pizza4} />
            <ProductCard name="Pizza-4" price="50" image={Pizza4} />
            <ProductCard name="Pizza-4" price="50" image={Pizza4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
