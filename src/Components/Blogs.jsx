/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import admin from "../assets/images/svg/admin.svg";
import calender from "../assets/images/svg/calender.svg";
import { blogsData } from "../constant/dummyData";
const Blogs = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <div className="lg:flex justify-between items-center ">
          <div className="mb-3">
            <div className="mini-title">Team Member</div>
            <div className="column-title ">
              Our Latest <span className="shape-bg">Blogs</span>
            </div>
          </div>
          <div className="mb-3">
            <a href="#" className=" btn btn-primary">
              Read All Blogs
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-7">
          {blogsData.map((blog, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                <img
                  src={blog.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                />
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                  {blog.type}
                </span>
              </div>
              <div className="course-content p-8">
                <div className="flex   lg:space-x-10 space-x-5 mb-5">
                  <Link
                    to={"/schoolai/single-blog"}
                    className=" flex items-center space-x-2"
                  >
                    <img src={admin} alt="" />
                    <span>{blog.position}</span>
                  </Link>
                  <Link
                    to={"/schoolai/single-blog"}
                    className=" flex items-center space-x-2"
                  >
                    <img src={calender} alt="" />
                    <span>{blog.date}</span>
                  </Link>
                </div>
                <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    to={"/schoolai/single-blog"}
                    className=" hover:text-primary transition duration-150"
                  >
                    {blog.title}
                  </Link>
                </h4>
                <Link
                  to={"/schoolai/single-blog"}
                  className=" text-black font-semibold hover:underline transition duration-150"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
