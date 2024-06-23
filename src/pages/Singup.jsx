import React from "react";
import Layout from "../componenets/Layout";
import { useNavigate } from "react-router-dom";

function Singup() {
  const Navigate = useNavigate();
  const toggletologin = () => {
    Navigate("/login");
  };
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="relative">
          <img
            src=""
            alt=""
            className="w-full object-center object-cover h-[600px]"
          />
        </div>
        <div className=" absolute top-20 right-20 container px-5 py-24 mx-auto flex flex-wrap flex-col content-center items-center ">
          <div className="lg:w-2/6 md:w-1/2 bg-blue-300 rounded-lg p-8 sm:w-max flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-center text-lg font-bold title-font mb-5">
              Sing-Up
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="full-email"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sing-Up
            </button>
            <div className="flex items-center justify-center mt-3">
              <p className="text-xs text-gray-100 mt-2 mr-2">
                Do You Have An Account?
              </p>
              <button onClick={toggletologin} className="mt-1 hover:text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Singup;
