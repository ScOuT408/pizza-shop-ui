import React from "react";

function CTABox({ show }) {
  return (
    <>
      {show && (
        <>
          <div className="bg-white w-[200px] h-[100px] flex items-center justify-center fixed top-28 right-16 z-30 sm:right-6 sm:top-24">
            <div className="text-red-400 capitalize text-center">
              <h2> Name: Harry Wales </h2>
              <div className="">
                <button className="capitalize mt-3 bg-red-400 py-2 px-4 cursor-pointer text-white">
                  logout
                </button>
                {/* <button className="capitalize mt-3 bg-red-400 py-2 px-4 cursor-pointer text-white">
                  logout
                </button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CTABox;
