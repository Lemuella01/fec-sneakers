import React, { useState, useContext} from "react";
import logo from "../../image/logo.svg";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import avatar from "../../image/image-avatar.png";
import "../style.css"
import menu from "../../image/icon-menu.svg";
import close from "../../image/icon-close.svg";
import Cart from "./Cart"
import { UserContext } from "../UserContext";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const {quantity} = useContext(UserContext)

  return (
    <div>
    <header className="relative flex item-center justify-between p-8 border-b border-slate-400 max-w-6xl mx-auto"  >
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img src={menu} alt="" className="cursor-pointer" />
              </li>
            )}
            {isOpen && (
              <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img src={close} alt="" className="cursor-pointer w-6" />
              </li>
            )}
            <li>
              <img src={logo} alt="" />
            </li>
          </ul>

          <nav className={isOpen && "open "} >
            <ul className="list-items">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex items-center justify-start gap-4">
          
            <li>
           
              
              <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart  className="text-xl   text-black-600" />
                
              </button>
            <sup className=" text-sm text-white bg-orange-500 px-1 rounded-full "  >
                {quantity}
              </sup>
            
            </li>
            <li>{cartIsOpen && <Cart />}</li>
            <li>
              <img src={avatar} alt="" className="w-12" />
            </li>
          </ul>
        </div>
      
    </header>
    </div>
  );
};

export default Header;
