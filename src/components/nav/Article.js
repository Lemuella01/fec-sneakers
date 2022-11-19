import React, { useContext } from "react";
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
    <article className="px-10 pb-10">
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
        <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
          <li className="cursor-pointer" onClick={handleMinus}>
            <img src={minus} alt="" />
          </li>
          <li>{quantity}</li>
          <li
            className="cursor-pointer"
            onClick={() => setQuantity(quantity+ 1)}
          >
            <img src={plus} alt="" />
          </li>
        </ul>

        <div className="lg:flex-1">
          <button
            onClick={() => setQuantity(quantity+ 1)}
            className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200 "
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
