import React from "react";
import Pizza1 from "../assets/pizza-1.png";

function ProductView() {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div>
        <h1 className="text-center capitalize text-3xl">
          <span className="text-primary"> pizza name </span> details
        </h1>
      </div>

      {/* Pizza Detail */}
      <div className="mt-11 mb-10">
        <div className="flex items-start p-2 md:!flex-col md:gap-3">
          <div className="flex-1 border-2 border-red-400 md:w-full">
            <div className="h-[400px] flex items-center justify-center sm:h-[280px]">
              <img src={Pizza1} alt="/" className="h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 border-2 border-red-400">
            <div className="p-2">
              <h1 className="text-4xl text-primary font-medium sm:text-2xl">
                MEXICAN GREEN WAVE
              </h1>
              <h2 className="mt-[30px] text-3xl text-primary font-medium sm:text-2xl">
                Category: Veg
              </h2>
              <h2 className="mt-[30px] text-3xl text-primary font-medium sm:text-2xl">
                $20.00
              </h2>
              <div className="mt-6 text-lg text-primary sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                illum fugiat perspiciatis mollitia vitae id quam quisquam cumque
                dolorem.
              </div>

              <div className="mt-7 flex items-center w-full sm:flex-col sm:gap-2">
                <input
                  type="number"
                  defaultValue={1}
                  className="p-2 border-2 border-red-400 outline-none mr-3 sm:w-full sm:ml-3"
                />
                <button className="w-full bg-red-400 text-white p-[10px] capitalize">
                  add to cart
                </button>
              </div>

              <div className="mt-2 invisible lg:mt-0">jfidf</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
