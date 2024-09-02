/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  search,
  whiteCheck,
} from "../../constant/images";
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const CourseSideBar = () => {
  return (
    <>
      <Header />
      <PageBanner title="Courses" pageTitle="Courses" />
      <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
              <FilteredCourse
                classNameForTabOne={
                  "grid md:grid-cols-2 grid-cols-1 gap-[30px]"
                }
                classNameForTabTwo={"grid  grid-cols-1 gap-[30px]"}
              />
            </div>
            <div class="lg:col-span-4 col-span-12">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseSideBar;

const SideBar = () => {
  const [priceVal, setPriceVal] = useState(0)
  return (
    <div className="sidebarWrapper space-y-[30px]">
      <div className="wdiget widget_search">
        <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search keyword..."
              className="border-none focus:ring-0 bg-transparent"
            />
          </div>
          <div className="flex-none">
            <button className="btn btn-primary">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Price Filter</h4>
        {/* <div className="slider-range"></div> */}
    
        <input type="range" max={10000} min={1500} className="slider-range" onChange={(e) => setPriceVal(e.target.value)} />
        <div className="price_slider_amount">
          <div className=" mt-6">
            <div className="flex space-x-2 text-xl font-medium text-black">
              <span className=" flex-none">Price:</span>
              <input
                type="number"
                name="price"
                placeholder="Add Your Price"
                value={priceVal}
                disabled
                className="amount flex-1 border-none focus:outline-none focus:ring-0 p-0 text-xl font-medium text-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Categories</h4>

        <ul className=" list-item space-y-4">
          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Development (23)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Art &amp; Design (45)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Data Science (14)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Data Science (14)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Technology (28)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>It Management (34)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Skill Level</h4>

        <ul className=" list-item space-y-5">
          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">All Levels (82)</span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">Beginner Levels (82)</span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">Intermediate Level (82)</span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">Expert Level (82)</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Language</h4>

        <ul className=" list-item space-y-5">
          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">Spanish Language</span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">Arabic Language</span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">United States (US)</span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">United Kingdom (UK)</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Rating By</h4>

        <ul className=" list-item space-y-5">
          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">
                <img src={rating1} alt="" />
              </span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">
                <img src={rating2} alt="" />
              </span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">
                <img src={rating3} alt="" />
              </span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">
                <img src={rating4} alt="" />
              </span>
            </label>
          </li>

          <li className=" block">
            <label className=" flex space-x-3 form-check cursor-pointer">
              <input type="checkbox" className=" hidden form-check-input" />
              <span className="ck-box flex flex-col items-center justify-center">
                <img src={whiteCheck} alt="" className="object-contain" />
              </span>
              <span className="form-check-label">
                <img src={rating5} alt="" />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
