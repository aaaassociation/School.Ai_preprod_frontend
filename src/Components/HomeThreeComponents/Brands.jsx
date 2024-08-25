/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { b1, b2, b3, b4, b5 } from "../../constant/images";

const Brands = () => {
  return (
    <div className="brands-area pt-20 pb-14 bg-black ">
      <div className="container">
        <ul className="flex flex-wrap items-center lg:justify-between justify-center  ">
          {[b1, b2, b3, b4, b5].map((item, index) => (
            <li
              className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150  "
              key={index}
            >
              <a href="#" className=" block">
                <img src={item} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
