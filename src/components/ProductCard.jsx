import React from "react";
import { EyeIcon, PlusIcon } from "@heroicons/react/outline";

function ProductCard({ name, image, price }) {
  return (
    <div className="border border-primary w-full shadow-lg mb-5 rounded-lg p-3">
      <div className="h-48 w-48 mx-auto">
        <img
          src={image}
          alt="/"
          className="h-full w-full object-cover p-1 bg-slate-300 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between px-5 mt-4 mb-2">
        <div className="text-xl tracking-wide font-medium">{name}</div>
        <div className="h-10 w-10 bg-red-400 text-slate-200 rounded-full flex items-center justify-center">
          <EyeIcon width={25} height={25} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between px-5 pb-3">
        <div className="text-xl tracking-wide font-medium bg-red-300 p-2">
          ${price}.00
        </div>
        <div className="h-10 w-10 bg-red-400 text-slate-200 rounded-full flex items-center justify-center">
          <PlusIcon width={25} height={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
