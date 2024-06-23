import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
function Navbar({ cart }) {
  const [isopen, setClose] = useState(false);
  const toggleChange = () => {
    {
      isopen === false ? setClose(true) : setClose(false);
    }
  };
  return (
    <div className="">
      <header className="text-gray-600 bg-slate-200 body-font shadow-xl relative">
        <div className="container mx-auto flex p-5  justify-evenly flex-col  sm:flex-row items-center">
          <Link className="flex title-font  items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/">
              <h3 className="font-bold text-3xl">
                Me
                <span className=" text-red-600">Shop</span>
              </h3>
            </Link>
          </Link>
          <div>
            <nav className="sm:hidden font-bold  md:ml-4 md:py-1 md:pl-4 md:border-gray-400  md:block flex flex-wrap items-center text-lg justify-center ">
              <Link to="/" className="cursor-pointer mr-5 hover:text-gray-900">
                Home
              </Link>
              <Link
                to="/allproducts"
                className="cursor-pointer mr-5 hover:text-gray-900"
              >
                All Products
              </Link>
              <a className="cursor-pointer mr-5 hover:text-gray-900">Kids</a>
              <a className="mr-5 hover:text-gray-900 cursor-pointer">Mens</a>
            </nav>
          </div>
          {isopen ? (
            <div>
              <nav className="absolute md:hidden top-[73px] left-0 h-screen w-full z-10 bg-slate-700 text-white font-bold  flex flex-col gap-6 items-center text-lg justify-center ">
                <Link
                  to="/"
                  className="cursor-pointer mr-5 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/allproducts"
                  className="cursor-pointer mr-5 hover:text-gray-900"
                >
                  All Products
                </Link>
                <a className="cursor-pointer mr-5 hover:text-gray-900">Kids</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">Mens</a>
                <button
                  onClick={toggleChange}
                  className="absolute text-white top-[10px] right-0 z-10 px-4 py-2 cursor-pointer"
                >
                  <RxCross2 size={30} />
                </button>
              </nav>
            </div>
          ) : (
            " "
          )}
          <Link to="/login">
            <button className="font-bold inline-flex text-lg items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded  sm:ml-5 ">
              Login
            </button>
          </Link>{" "}
          <Link to="/cart">
            <button className="font-bold flex flex-col justify-center  items-center bg-gray-100 border-0  px-3 focus:outline-none hover:bg-gray-200 rounded text-base sm:ml-5 sm:mr-5 ">
              <span className="text-red-700"> {cart.length}</span>
              <FaCartShopping size={25} className=" mr-2" />
            </button>
          </Link>
          {isopen ? (
            <button onClick={toggleChange}>
              <div className=" hidden">
                <GiHamburgerMenu size={25} />
              </div>
            </button>
          ) : (
            <button onClick={toggleChange}>
              <div className="ml-3  md:hidden">
                <GiHamburgerMenu size={25} />
              </div>
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
