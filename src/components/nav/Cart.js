import React, { useContext } from 'react'
import thumbnail from "../../image/image-product-1-thumbnail copy.jpg";
import iconDelete from "../../image/icon-delete.svg"
import { UserContext } from '../UserContext';

const Cart = () => {
  const {quantity} = useContext(UserContext )
  const text = "Autumn Limited Edition Sneakers";
  const price =  quantity *  125.00
  

  


  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
        style={{
          zIndex: 1000,
        }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>

        <div className="flex items-center justify-between">
          {<img src={thumbnail} alt="" className="rounded-lg w-14" /> }
          <ul>
            <li className="text-slate-600 text-sm">{`${text.substring(
              0,
              23
            )}...`}</li>
            <li className="text-slate-600 text-sm">
              
              <span className="font-bold text-slate-900">$ {  price > 0 ? price: 'cart is empty'  }</span>
            </li>
          </ul>
  
          <button>
            <img src={iconDelete} alt="" />
          </button>
        </div>

        <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
      </article>
    </>
  );
}

export default Cart