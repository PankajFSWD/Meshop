import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { SiFsecure } from "react-icons/si";

function Service() {
  return (
    <>
      <div className="flex flex-wrap mx-auto px-5 justify-center items-center gap-10 py-12 font-bold ">
        <div className=" flex flex-col py-3 px-5 w-[190px] items-center  bg-red-700 text-white rounded ">
          <FaBagShopping size={30} />
          <p>FREE SHIPPING</p>
        </div>
        <div className="  py-3 px-5  items-center w-[190px] flex flex-col  bg-red-700 text-white rounded ">
          <SiFsecure size={30} />
          <p>AUTHENTIC </p>
        </div>
        <div className="  py-3 px-5 items-center w-[190px] flex flex-col  bg-red-700 text-white rounded ">
          <TbTruckReturn size={30} />
          <p>EASY RETURN</p>
        </div>
        <div className="  py-3 px-5  items-center w-[190px] flex flex-col  bg-red-700 text-white rounded ">
          <MdOutlinePayment size={30} />
          <p>SECURE PAYMENT</p>
        </div>
      </div>
    </>
  );
}

export default Service;
