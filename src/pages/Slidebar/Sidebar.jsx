import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import HomeScreem from "../HomeScreen/HomeScreem";
import OrdersScreen from "../OrdersScreen/OrdersScreen";
import "./Slidebar.css";
import { ProductsContext } from "../../context/ProductsContext";
import StatusScreen from "../StatusScreen/StatusScreen";
import SuccessScreen from "../SuccessScreen/SuccessScreen";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { productsCart } = useContext(ProductsContext);

  const handleStateChange = (state) => {
    setOpen(state.isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className="w-full bg-menu content z-10">
        <div className="flex w-full items-center justify-between p-4">
          <IoMenu color="white" size={40} onClick={() => setOpen(!open)} />

          <div className="flex flex-col items-center justify-center relative">
            <Link className="menu-item" to="/orders" onClick={closeMenu}>
              <div className="relative">
                <button
                  type="button"
                  className="w-5 h-5 text-sm rounded-full text-white bg-red-500 absolute flex items-center justify-center bottom-4 right-0"
                >
                  <span className="p-1">{productsCart.length}</span>
                </button>
                <IoCart color="white" size={26} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Menu
        isOpen={open}
        onStateChange={handleStateChange}
        overlayClassName={"custom-overlay"} // Evitar conflictos de superposición
        customBurgerIcon={false} // Ocultar el ícono de hamburguesa predeterminado
      >
        <Link className="menu-item" to="/home" onClick={closeMenu}>
          <div className="flex items-center gap-2">
            <IoMdHome size={25} />
            <p className="text-xl">Home</p>
          </div>
        </Link>

        <Link className="menu-item" to="/orders" onClick={closeMenu}>
          <div className="flex items-center gap-2">
            <FaCartArrowDown size={25} />
            <p className="text-xl">Cart</p>
          </div>
        </Link>

        <Link className="menu-item" to="/info" onClick={closeMenu}>
          <div className="flex items-center gap-2">
            <BsInfoCircleFill size={25} />
            <p className="text-xl">Buy Info</p>
          </div>
        </Link>
      </Menu>

      <div className="pt-28 containerPage bg-white">
        <Routes>
          <Route path="/" element={<HomeScreem />} />
          <Route path="/home" element={<HomeScreem />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/success" element={<SuccessScreen />} />
          <Route path="/status" element={<StatusScreen />} />

        </Routes>
      </div>
    </Router>
  );
};

export default Sidebar;
