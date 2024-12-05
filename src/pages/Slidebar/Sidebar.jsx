import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import HomeScreem from "../HomeScreen/HomeScreem";
import CartScreen from "../CartScreen/CartScreen";
import OrdersScreen from "../OrdersScreen/OrdersScreen";
import { IoCart } from "react-icons/io5";
import "./Slidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="w-full bg-menu content z-10">
        <div className="flex w-full items-center justify-between p-4">
          <IoMenu color="white" size={40} onClick={() => setOpen(!open)} />

          <div className="flex flex-col items-center justify-center relative">
            <div className="relative">
              <button
                type="button"
                class="w-5 h-5 text-sm  rounded-full text-white bg-red-500 absolute flex items-center justify-center bottom-4 right-0"
              >
                <span class="p-1">7</span>
              </button>
              <IoCart color="white" size={26} />
            </div>
          </div>
        </div>
      </div>

      <Menu isOpen={open}>
        <Link className="menu-item" to="/home">
          <div className="flex items-center gap-2">
            <IoMdHome size={25} />
            <p className="text-xl">Home</p>
          </div>
        </Link>

        <Link className="menu-item" to="/cart">
          <div className="flex items-center gap-2">
            <FaCartArrowDown size={25} />
            <p className="text-xl">Cart</p>
          </div>
        </Link>

        <Link className="menu-item" to="/orders">
          <div className="flex items-center gap-2">
            <IoMdHome size={25} />
            <p className="text-xl">Ordes</p>
          </div>
        </Link>
      </Menu>

      <div className="pt-28">
        <Routes>
          <Route path="/" element={<HomeScreem />}></Route>
          <Route path="/home" element={<HomeScreem />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/orders" element={<OrdersScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Sidebar;
