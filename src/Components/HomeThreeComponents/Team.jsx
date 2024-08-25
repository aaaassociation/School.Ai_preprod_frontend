/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { instructorData } from "../../constant/dummyData";

const Team = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Team Member</div>
          <div className="column-title ">
            Our Expert <span className="shape-bg">Instructors</span>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-7 pt-10">
          {instructorData.map((item, index) => (
            <div
              className=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   "
              key={index}
            >
              <div className=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-md "
                />
                <div className=" absolute right-0 bottom-0  flex flex-col justify-end items-end social-explore">
                  <button
                    type="button"
                    className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.01"
                        width="18"
                        height="18"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                    15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                    14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                    8.37868 2.25 9 2.25Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <ul className=" justify-center bg-primary rounded-tl-md transition-all duration-100 flex ">
                    <li>
                      <a
                        href="#"
                        className=" text-xl leading-[1] text-white  flex h-12 w-12 items-center justify-center"
                      >
                        <iconify-icon icon="bxl:facebook"></iconify-icon>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-xl leading-[1] text-white flex h-12 w-12 items-center justify-center"
                      >
                        <iconify-icon icon="bxl:twitter"></iconify-icon>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="  text-xl leading-[1]  flex h-12 w-12 items-center justify-center text-white "
                      >
                        <iconify-icon icon="bxl:linkedin"></iconify-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-content p-6">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">
                  {item.name}
                </h4>
                <div>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
