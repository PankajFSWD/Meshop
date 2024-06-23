import React from "react";
import Hero from "../assets/hero.jpg";

function Herosection() {
  return (
    <div>
      <div className=" relative">
        <div>
          <img
            src={Hero}
            alt="err"
            className="w-full  object-cover object-center"
          />
        </div>
        <div className=" absolute top-[20%] left-[50%]">
          <h1 className="text-5xl font-bold text-[white] ">
            Discover Your Next Adventure !!
          </h1>
          <p className=" text-center text-2xl mt-5 font-semibold ">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
