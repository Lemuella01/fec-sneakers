import React, { useState } from "react";
import { data } from "../data/data";
import Article from "./Article";
import Header from "./Header";
import "../style.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Main = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
 

 

  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  return (
    <div>
      <Header />
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 lg:place-items-center lg:py-16 lg:px-20 ">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  className="w-full  lg:rounded-2xl cursor-pointer"
                  src={item.mainImage}
                  alt=""
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2 "
                    >
                      <FaChevronLeft />
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>


          <div className="hidden lg:block">
          
                <img
                  className="w-/12 lg:rounded-2xl cursor-pointer"
                  src={mainImage}
                  alt=""
                />

               
              </div>
            
         

          

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-60"
                } border-2  rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img className="w-20 " src={item.thumbnail} alt="" />
              </li>
            ))}
          </ul>
        </article>

        <Article />
      </section>
    </div>
  );
};

export default Main;
