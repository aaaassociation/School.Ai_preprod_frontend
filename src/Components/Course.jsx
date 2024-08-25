/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { clock, file, star } from "../constant/images";

const course = ({ course, index }) => {
  return (
    <a
      className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
      href="#"
      key={Math.random() * 1000 * index}
    >
      <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
        <img
          src={course.img}
          alt="images"
          className=" w-full h-full object-cover rounded-t-[8px]"
        />
        <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
          {course.post}
        </span>
      </div>
      <div className="course-content p-8">
        <div className="text-secondary font-bold text-2xl mb-3">
          {course.price}
        </div>
        <h4 className=" text-xl mb-3 font-bold">{course.title}</h4>
        <div className="flex justify-between  space-x-3">
          <span className=" flex items-center space-x-2">
            <img src={file} alt="" />
            <span>{course.lesson}</span>
          </span>
          <span className=" flex items-center space-x-2">
            <img src={clock} alt="" />
            <span>{course.time}</span>
          </span>
          <span className=" flex items-center space-x-2">
            <img src={star} alt="" />
            <span>{course.ratings}</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default course;
