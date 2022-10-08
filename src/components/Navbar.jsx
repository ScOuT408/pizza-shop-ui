import React, { useState } from "react";
import PizzaLogo from "../assets/pizza-logo.png";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import CTABox from "./CTABox";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="bg-primary w-ful p-3 sticky top-0 left-0 shadow-sm right-0 z-30 md:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-white lm:text-[15px]">
          {/* image */}
          <div className="sm:hidden">
            <h2 className="bg-white rounded-sm text-primary capitalize p-2">
              order now !
            </h2>
          </div>

          {/* links */}
          <div className="!mr-12">
            <ul className="flex justify-start items-center gap-5 text-lg capitalize lm:text-[15px] lm:gap-2">
              <li>
                <Link to="/" className="!tracking-wider">
                  home
                </Link>
              </li>
              <img
                src={PizzaLogo}
                alt="/"
                width={75}
                height={75}
                className="sm:w-12 sm:h-12 object-cover"
              />
              <li>
                <Link to="/products" className="!tracking-wider">
                  pizza's
                </Link>
              </li>
            </ul>
          </div>

          {/* icons */}
          <div className="relative flex items-center justify-end gap-2">
            <UserIcon
              width={30}
              height={30}
              className="lm:w-[23px] lm:h-[23px] cursor-pointer"
              onClick={() => setShow(!show)}
            />
            <Link to="/cart">
              <ShoppingCartIcon
                width={30}
                height={30}
                className="lm:w-[23px] lm:h-[23px] cursor-pointer"
              />
            </Link>
            <div className="absolute -right-2 -top-3 w-5 h-5 bg-white rounded-full flex items-center justify-center text-primary">
              2
            </div>
          </div>
        </div>
      </header>
      <CTABox show={show} />
    </>
  );
}

export default Navbar;
