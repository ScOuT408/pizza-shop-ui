import React from "react";
import Pizza2 from "../assets/pizza-2.png";
import { XCircleIcon } from "@heroicons/react/outline";

function Cart() {
  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="text-center mt-12">
        <h1 className="text-3xl">
          <span className="text-primary"> Your </span> Cart
        </h1>
      </div>

      {/* Cart Table */}
      <div className="flex items-start gap-3 mt-10 p-3 md:flex-col">
        <div className="flex-[0.7] md:flex-[1] md:w-full">
          <table className="w-full border-spacing-[20px]">
            <thead>
              <tr className="bg-red-300">
                <th>Product</th>
                <th>Name</th>
                <th className="sm:hidden">Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="!w-full text-center mb-3">
                <td className="flex justify-center items-center mt-4">
                  <div className="h-20 w-20 sm:h-12 sm:w-12">
                    <img
                      src={Pizza2}
                      alt="/"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="text-sm max-w-[100px]">
                  <div className="w-full sm:text-[12px]">
                    MEXICAN GREEN WAVE
                  </div>
                </td>
                <td className="sm:hidden">
                  <div>$20.00</div>
                </td>
                <td className="">
                  <div className="flex justify-center gap-4">
                    <span className="cursor-pointer">-</span>
                    <h3>4</h3>
                    <span className="cursor-pointer">+</span>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <XCircleIcon
                      width={30}
                      height={30}
                      className="cursor-pointer text-primary"
                    />
                  </div>
                </td>
              </tr>
              <tr className="!w-full text-center mb-3">
                <td className="flex justify-center items-center mt-4">
                  <div className="h-20 w-20 sm:h-12 sm:w-12">
                    <img
                      src={Pizza2}
                      alt="/"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="text-sm max-w-[100px]">
                  <div className="w-full sm:text-[12px]">
                    MEXICAN GREEN WAVE
                  </div>
                </td>
                <td className="sm:hidden">
                  <div>$20.00</div>
                </td>
                <td className="">
                  <div className="flex justify-center gap-4">
                    <span className="cursor-pointer">-</span>
                    <h3>4</h3>
                    <span className="cursor-pointer">+</span>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <XCircleIcon
                      width={30}
                      height={30}
                      className="cursor-pointer text-primary"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-6">
            <button className="border-2 border-red-400 text-primary capitalize font-medium p-2 cursor-pointer">
              add more pizza
            </button>
          </div>
        </div>
        <div className="flex-[0.3] bg-slate-100 md:flex-[1] md:w-full">
          <div className="bg-red-300">
            <h1 className="text-center text-2xl text-white"> Cart Totals </h1>
          </div>

          <div className="mt-6 flex justify-between items-center px-2">
            <h2>Sub Total:</h2>
            <h2>$105.00</h2>
          </div>

          <div className="mt-2 flex justify-between items-center px-2">
            <h2>Shipping:</h2>
            <h2>Free</h2>
          </div>

          <div className="mt-2 flex justify-between items-center px-2">
            <h2 className="text-xl">Total:</h2>
            <h2>$105.00</h2>
          </div>

          <div className="mt-6">
            <button className="w-full p-2 bg-black text-white capitalize">
              check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
