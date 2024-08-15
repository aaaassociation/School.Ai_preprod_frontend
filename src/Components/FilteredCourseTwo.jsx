/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab } from "@headlessui/react";
import React from "react";
import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  clock,
  file,
  review,
  star,
} from "../constant/images";

const FilteredCourseTwo = () => {
  const listIcon = [
    "clarity:grid-view-line",
    "ant-design:unordered-list-outlined",
  ];
  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center  items-center mb-14">
        <div className="flex-1 flex flex-wrap gap-5  space-x-6  items-center">
          <Tab.List as="ul" id="tabs-nav" className=" flex space-x-4 cata-Tbas">
            {listIcon.map((className, key) => (
              <Tab
                as="li"
                className={({ selected }) => (selected ? "active" : "")}
                key={key}
              >
                <a
                  href="#"
                  className=" h-[60px] w-[60px]  flex flex-col justify-center items-center"
                >
                  <iconify-icon icon={className}></iconify-icon>
                </a>
              </Tab>
            ))}
          </Tab.List>
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
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel as="div" id="tab1" className="tab-content">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {[c1, c2, c3, c4, c5, c6].map((item, index) => (
              <a
                className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                href="single-course.html"
                key={index}
              >
                <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                  <img
                    src={item}
                    alt=""
                    className=" w-full h-full object-cover rounded-t-[8px]"
                  />
                  <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    Art &amp; Design
                  </span>
                </div>
                <div className="course-content p-8">
                  <div className="text-secondary font-bold text-2xl mb-3">
                    $29.28
                  </div>
                  <h4 className=" text-xl mb-3 font-bold">
                    Basic Fundamentals of Interior &amp; Graphics Design
                  </h4>
                  <div className="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                    <span className=" flex items-center space-x-2 mr-3">
                      <img src={file} alt="" />
                      <span>2 Lessons</span>
                    </span>
                    <span className=" flex items-center space-x-2 mr-3">
                      <img src={clock} alt="" />
                      <span>4h 30m</span>
                    </span>
                    <span className=" flex items-center space-x-2 ">
                      <img src={star} alt="" />
                      <span>4.8</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center pt-14">
            <a
              href="#"
              className=" btn btn-primary inline-flex items-center  space-x-[10px]"
            >
              <span>Load More</span>
              <span className=" relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </a>
          </div>
        </Tab.Panel>
        <Tab.Panel id="tab2" className="tab-content">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[30px]">
            {[c1, c2, c3, c4, c5, c6].map((item, index) => (
              <a
                className=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
            hover:shadow-box6 flex p-8 space-x-6"
                href="single-course.html"
                key={index}
              >
                <div className="flex-none">
                  <div className="w-[159px] h-[159px]  rounded  relative">
                    <img
                      src={item}
                      alt=""
                      className=" w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="course-content flex-1">
                  <div className="text-primary font-bold text-2xl mb-2 flex justify-between">
                    <span className=" inline-block">$29.28</span>
                    <span className=" flex space-x-1">
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                    </span>
                  </div>
                  <h4 className=" text-2xl leading-[36px] mb-4 font-bold">
                    Basic Fundamentals of Interior &amp; Graphics Design
                  </h4>
                  <div className="flex   space-x-6">
                    <span className=" flex items-center space-x-2">
                      <img src="assets/images/svg/file2.svg" alt="" />
                      <span>2 Lessons</span>
                    </span>
                    <span className=" flex items-center space-x-2">
                      <img src="assets/images/svg/user2.svg" alt="" />
                      <span>4k Lesson</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center pt-14">
            <a
              href="#"
              className=" btn btn-primary inline-flex items-center  space-x-[10px]"
            >
              <span>Load More</span>
              <span className=" relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </a>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourseTwo;
