/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { e1, e2, e3, e4, e5, e6, e7, e8, e9 } from "../constant/images";

const EventsList = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="flex  items-center mb-14">
          <div className="flex-1 flex space-x-6  items-center">
            <span>Showing 12 courses of 52</span>
          </div>
          <div className="flex-0">
            <div className="min-w-[272px]">
              <select>
                <option data-display="Sort By: Popularity">
                  Sort By: Popularity
                </option>
                <option value="1">Popularity</option>
                <option value="2">Another option</option>
                <option value="4">Potato</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {[e1, e2, e3, e4, e5, e6, e7, e8, e9].map((item, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-thumb h-[297px] rounded-t-[8px]  relative">
                <img
                  src={item}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                />
              </div>
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    to={"/schoolai/event-single"}
                    className=" hover:text-primary transition duration-150"
                  >
                    International Art Fair 2022
                  </Link>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>Thu, Oct 5, 2023 03:48 PM</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>Humberg City, Germany</span>
                  </li>
                </ul>
                <Link
                  to={"/schoolai/event-single"}
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  Book A Seat
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination mt-14">
          <ul className=" flex justify-center space-x-3">
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-left-20-solid"
                  className=" text-2xl"
                ></iconify-icon>
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
              >
                1
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                2
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                3
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                4
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-right-20-solid"
                  className=" text-2xl"
                ></iconify-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
