import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Allproducts from "./componenets/Allproducts";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import { useState } from "react";
// import { FaCalculator } from "react-icons/fa6";
import Navbar from "./componenets/Navbar";
import Singleproduct from "./componenets/Singleproduct";

function App() {
  const [cart, setcart] = useState([]);

  //  Add to cart

  const Addtocart = (product) => {
    const isexistcart = cart.find((itemcart) => itemcart.id === product.id);
    if (isexistcart) {
      const upDateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setcart(upDateCart);
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // increase item
  const handelInc = (id) => {
    const IncQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setcart(IncQuantity);
  };

  // decrease item

  const handelDec = (id) => {
    const DecQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setcart(DecQuantity);
  };

  // Remove Item
  const RemoveItem = (id) => {
    const filtereditm = cart.filter((filteritem) => filteritem.id !== id);
    setcart(filtereditm);
  };

  // total amount Calculate
  const totalprice = () => {
    const total = cart.reduce((total, reduceitem) => {
      return total + reduceitem.price * reduceitem.quantity;
    }, 0);
    return total;
  };

  // console.log(cart);
  return (
    <>
      <div>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handelInc={handelInc}
                handelDec={handelDec}
                RemoveItem={RemoveItem}
                totalprice={totalprice}
              />
            }
          />
          <Route
            path="/allproducts"
            element={<Allproducts Addtocart={Addtocart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route
            path="/singleproduct/:mech"
            element={<Singleproduct Addtocart={Addtocart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
