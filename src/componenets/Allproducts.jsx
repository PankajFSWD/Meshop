import React, { useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Allproducts({ Addtocart }) {
  const navigate = useNavigate();
  const [Category, setCategory] = useState([]);
  const [Allproduct, setAllproducts] = useState([]);
  const [salectCategory, setsalectcategory] = useState("");
  const [Showproduct, setShowproduct] = useState([]);
  const [viewproducts, setviewproducts] = useState(false);

  const [searchProduct, setSearchProduct] = useState("");
  // For the Get All Categoty

  useEffect(() => {
    const getAllcategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllcategory();
  }, []);

  // all products from various Category

  useEffect(() => {
    const getAllproducts = async () => {
      try {
        if (salectCategory) {
          const pro = await axios(
            `https://dummyjson.com/products/category/${salectCategory}`
          );
          // console.log(pro.data.products);
          setAllproducts(pro.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllproducts();
  }, [salectCategory]);

  // for the select category in filter

  const salectcatgo = (item) => {
    setsalectcategory(item);
    setviewproducts(true);
  };

  // For show aLL PRODUCTS Without any Categoty
  useEffect(() => {
    const Showproducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      // console.log(res.data.products);
      setShowproduct(res.data.products);
    };
    Showproducts();
  }, []);

  // const hendlesearchproduct = (e) => {
  //   const query = e.target.value;
  //   // console.log(query);

  //   setSearchProduct(query);
  // const finditem = Allproduct.filter((searchI) =>
  //   searchI.title.includes(searchProduct)
  // );
  // // setShowproduct(finditem);
  // setAllproducts(finditem);
  // };
  const findProducts = () => {
    const finditem1 = Showproduct.filter((searchI) =>
      searchI.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setShowproduct(finditem1);
  };

  return (
    <Layout>
      {/* category of Products */}

      <h1 className="text-center text-3xl font-bold">All Products</h1>
      <div className="mt-5 flex flex-wrap justify-center gap-7">
        <select
          onClick={(item) => salectcatgo(item.target.value)}
          className="text-center rounded bg-slate-400 px-5 py-3 bottom-2"
        >
          <option>Fiter By Category </option>

          {Category.filter(
            (filterItem) => !["lighting", "motorcycle"].includes(filterItem)
          ).map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="text-black flex justify-center items-center mt-7">
        <input
          type="text"
          placeholder="Search Item"
          className=" w-min px-1 py-2 rounded"
          onChange={(e) => setSearchProduct(e.target.value)}
          value={searchProduct}
          // defaultValue="Search Items"
        />
        <button
          className="bg-blue-400 px-4 py-2 rounded ml-4"
          onClick={findProducts}
        >
          Search
        </button>
      </div>

      {/* All products category wise */}
      {viewproducts ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {Allproduct.map((products) => {
            return (
              <section key={products.id} className="text-gray-600 body-font">
                <div className="container px-5 pt-20 pb-5 mb-6 mx-auto">
                  <div className="flex flex-wrap -m-4 border-4 w-[300px]">
                    <div className=" p-4  ">
                      <Link
                        to={`/singleproduct/${products.id}`}
                        className="inline-block relative h-48 rounded overflow-hidden"
                      >
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-[100%] h-full block"
                          src={products.images[0]}
                        />
                      </Link>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          Title: {products.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          Price: ${products.price}
                        </h2>
                        <p className="mt-1"> Rating: {products.rating}</p>
                        <button
                          className="bg-blue-600 text-white rounded mt-4 px-2 py-2 mx-10"
                          onClick={() => Addtocart(products)}
                        >
                          Add Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center px-4 py-10 mt-4 gap-6 items-center ">
          {Showproduct.map((show) => (
            <div
              className="flex flex-col justify-center  flex-wrap border-2 mt-4 shadow-xl"
              key={show.id}
            >
              <Link to={`/singleproduct/${show.id}`}>
                <img
                  src={show.images[0]}
                  alt="err"
                  className=" object-cover object-center w-fit h-[150px]"
                />
              </Link>

              <p>Title: {show.title}</p>
              <p>Price: {show.price}</p>
              <p>Rating: {show.rating}</p>
              <button
                className="bg-blue-600 text-white rounded mt-4 px-2 py-2 mx-10 w-[80px]"
                onClick={() => Addtocart(show)}
              >
                Add Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Show All products without Any Category */}
    </Layout>
  );
}

export default Allproducts;
