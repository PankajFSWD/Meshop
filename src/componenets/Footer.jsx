import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-50">
      <footer className="  bg-black text-white ">
        <div className="container text-white px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center  md:mt-0 mt-10 text-white ">
            <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <h3 className=" text-2xl">
                Me
                <span className=" text-xl text-red-500">Shop</span>
              </h3>
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center  order-first  ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-white ">
              <h2 className="title-font   tracking-widest text-sm mb-3 font-bold ">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-white tracking-widest text-sm mb-3 font-bold ">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-700">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-700">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-700">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-700">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-gray-100 tracking-widest text-sm mb-3 font-bold ">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-100 hover:text-gray-700">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-gray-700">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-gray-700">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-gray-700">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-gray-100 tracking-widest text-sm mb-3 font-bold ">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-100 hover:text-red-700">First Link</a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-red-700">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-red-700">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-red-700">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-red-700">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-100 text-sm text-center sm:text-left">
              © 2024 MeShop —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-100 ml-1"
                target="_blank"
              >
                @MeShop
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-2xl cursor-pointer">
              <a className=" ml-3 text-gray">
                <FaFacebook />
              </a>
              <a className="ml-3  text-gray">
                <FaYoutube />
              </a>
              <a className="ml-3 text-gray">
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
