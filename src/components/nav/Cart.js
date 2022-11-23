import React, { useContext } from "react";
import thumbnail from "../../image/image-product-1-thumbnail copy.jpg";
import iconDelete from "../../image/icon-delete.svg";
import { UserContext } from "../UserContext";

const Cart = () => {
  const { quantity, setQuantity } = useContext(UserContext);
 
  const price = quantity * 125.0;

  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
        style={{ zIndex: 1000 }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>
        {price > 0 && (
          <>
            <div className="flex items-center justify-between">
              <img src={thumbnail} alt="" className="rounded-lg w-14" />
              <div className="text-slate-600 text-sm">
                <p>Autumn Limited Edition...</p>
                <div>
                  <span className="font-bold text-slate-900">
                    ${price}
                  </span>
                </div>
              </div>

              <button onClick={() => setQuantity(0)}>
                <img src={iconDelete} alt="" />
              </button>
            </div>

            <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
              Checkout
            </button>
          </>
        )}
        {price === 0 && (
          <h4 className="text-lg">Cart is empty</h4>
        )}
      </article>
    </>
  );
};

export default Cart;
