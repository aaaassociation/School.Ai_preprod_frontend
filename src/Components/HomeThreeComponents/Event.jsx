import React from "react";
import { Link } from "react-router-dom";
import { e1, e2, e3 } from "../../constant/images";

const Event = () => {
  return (
    <div className=" section-padding bg-white bg-[url('../images/all-img/section-bg-13.png')]  bg-no-repeat">
      <div className="container">
        <div className="text-center mb-14">
          <div className="mini-title">Join With Us</div>
          <div className="column-title ">
            Upcoming <span className="shape-bg">Events</span>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {[e1, e2, e3].map((item, index) => (
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
      </div>
    </div>
  );
};

export default Event;
