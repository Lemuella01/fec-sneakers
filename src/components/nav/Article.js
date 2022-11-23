import React, { useContext, useState } from "react";
import minus from "../../image/icon-minus.svg";
import plus from "../../image/icon-plus.svg";
import "../style.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserContext } from "../UserContext";

const Article = () => {
  const { quantity, setQuantity } = useContext(UserContext);

  const handleMinus = () => {
    setQuantity(quantity - 1);

    if (quantity <= 0) setQuantity(0);
  };

  return (
    <article className="px-10 pb-36">
      <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
        Sneakers company
      </h2>
      <h1 className="text-slate-900 font-bold text-3xl lg:text-4xl">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-slate-600 mb-10 leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
        <ul className="flex items-center gap-5">
          <li className="text-slate-900 font-bold text-2xl">$125.00</li>
          <li className="bg-orange-100 py-1 px-2 text-orange-400  tracking-wide text-sm font-bold inline-block rounded shadow ">
            50%
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          <s>$250.00</s>
        </p>
      </div>

      <div className="mt-10 lg:flex items-center justify-between gap-2 ">
        <div className=" flex items-center justify-around  bg-slate-100  px-4 rounded shadow lg:flex-1 ">
          <p className="cursor-pointer    " onClick={handleMinus}>
            <img className=" " src={minus} alt="" />
          </p>
          <div className="h-10 text-3xl text-orange-300 ">|</div>

          <p className="">{quantity}</p>

          <div className="h-10 text-3xl text-orange-300 ">|</div>
          <p
            className="cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            <img src={plus} alt="" />
          </p>
        </div>

        <div className="lg:flex-1">
          <button
            name="submit"
            disabled={quantity > 0 ? false : true}
            className={`${quantity > 0 ? "bg-orange-500 hover:bg-orange-600" : "cursor-not-allowed bg-gray-500"} flex items-center justify-center gap-4 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 transition-all duration-200`}
          >
            <AiOutlineShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};
export default Article;
