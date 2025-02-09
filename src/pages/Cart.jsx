import React from "react";
import Layout from "../componenets/Layout";
import { useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

function Cart({ cart, handelInc, handelDec, RemoveItem, totalprice }) {
  const Navigate = useNavigate();
  const BacktoHome = () => {
    Navigate("/allproducts");
  };

  return (
    <Layout>
      <div className=" ">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-xl my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              {/* cart section start */}
              {cart.map((cartitem) => (
                <div
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={cartitem.id}
                >
                  <div className="flex w-2/5">
                    {" "}
                    {/* product */}
                    <div className="w-20">
                      <img
                        className="h-24 object-cover object-center w-full"
                        src={cartitem.images[2]}
                        alt="err"
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {cartitem.title}
                      </span>
                      <span className="text-red-500 text-xs">
                        {cartitem.brand}
                      </span>
                      <a
                        onClick={() => RemoveItem(cartitem.id)}
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <button onClick={() => handelDec(cartitem.id)}>-</button>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      Value={cartitem.quantity}
                    />
                    <button onClick={() => handelInc(cartitem.id)}>+</button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${cartitem.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${cartitem.price * cartitem.quantity}
                  </span>
                </div>
              ))}

              {/* cart section end */}

              <a
                href="#"
                className="flex font-semibold text-indigo-600 text-sm mt-10 "
                onClick={BacktoHome}
              >
                <IoReturnDownBack size={30} className="mr-3" /> Continue
                Shopping
              </a>
            </div>
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="font-semibold text-sm">${totalprice()}</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${totalprice()}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
