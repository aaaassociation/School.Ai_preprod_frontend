/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { check } from "../../constant/images";

const Achivement = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-9.png')]  bg-no-repeat bg-center bg-cover ">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Some Fun Fact</div>
          <div className="column-title ">
            Our Great {' '}
            <span className="shape-bg">Achievement</span>
          </div>
        </div>
        <div className="pt-10 pb-8">
          <label className="  max-w-[254px] bg-white rounded-md shadow-box9 p-3 mx-auto flex cursor-pointer active-price items-center ">
            <input
              type="checkbox"
              id="pricechnage"
              className=" hidden form-check"
            />
            <span className=" flex-1 text-center active ">Monthly</span>
            <span className=" flex-1 text-center ">Yearly</span>
          </label>
        </div>
        <div className="space-y-8 max-w-[1170px] mx-auto border-t border-b border-black border-opacity-[0.1] ">
          <div
            className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:justify-between lg:space-x-8 items-center py-10 px-10
                rounded-md "
          >
            <div>
              <span className=" text-2xl text-black font-bold">Starter</span>
            </div>
            <div>
              <ul className=" space-y-4">
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Sed sed felis neque vehicula iaculis</span>
                </li>
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Cras consequat ligula vel augue</span>
                </li>
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Maecenas bibendum massa eget</span>
                </li>
              </ul>
            </div>
            <div className="w-[150px] text-center">
              <span className="block font-bold text-black text-[44px]">
                Free
              </span>
            </div>
            <div>
              <a href="#" className="btn btn-black">
                Get Started
              </a>
            </div>
          </div>

          <div
            className="flex lg:flex-row flex-col lg:justify-between space-y-6 lg:space-y-0 lg:space-x-8 items-center bg-white py-10 px-10
            rounded-md "
          >
            <div>
              <span className=" text-2xl text-primary font-bold">
                Professional
              </span>
            </div>
            <div>
              <ul className=" space-y-4">
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Sed sed felis neque vehicula iaculis</span>
                </li>
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Cras consequat ligula vel augue</span>
                </li>
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Maecenas bibendum massa eget</span>
                </li>
              </ul>
            </div>
            <div className="w-[150px] text-center">
              <span className="block font-bold text-black text-[44px]">
                $89.69
              </span>
            </div>
            <div>
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>

          <div
            className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:justify-between lg:space-x-8 items-center py-10 px-10
                rounded-md "
          >
            <div>
              <span className=" text-2xl text-black font-bold">Business</span>
            </div>
            <div>
              <ul className=" space-y-4">
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Sed sed felis neque vehicula iaculis</span>
                </li>
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Cras consequat ligula vel augue</span>
                </li>
                <li className=" flex space-x-[9px]">
                  <img src={check} alt="" />
                  <span>Maecenas bibendum massa eget</span>
                </li>
              </ul>
            </div>
            <div className="w-[150px] text-center">
              <span className="block font-bold text-black text-[44px]">
                $129.69
              </span>
            </div>
            <div>
              <a href="#" className="btn btn-black">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
