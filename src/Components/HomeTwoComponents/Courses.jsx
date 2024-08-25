/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { courseData } from "../../constant/dummyData";
import { file2, review, user2 } from "../../constant/images";
const Courses = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-7.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Featured Courses</div>
          <div className="column-title ">
            Choose Unlimited <span className="shape-bg">Courses</span>
          </div>
        </div>
        <div className="grid  xl:grid-cols-2 grid-cols-1 gap-[30px] lg:pt-10 pt-5">
          {courseData.map((course, index) => (
            <a
              className=" bg-white rounded-[8px] transition duration-150 border-b-4 hover:border-primary border-transparent
            hover:shadow-box6 sm:flex p-8 sm:space-x-6 space-y-6 sm:space-y-0"
              href="#"
              key={index}
            >
              <div className="flex-none">
                <div className="sm:w-[159px] h-[159px]  rounded  relative">
                  <img
                    src={course.img}
                    alt={course.img}
                    className=" w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="course-content flex-1">
                <div className="text-primary font-bold lg:text-2xl text-1xl mb-2 flex justify-between">
                  <span className=" inline-block">{course.price}</span>
                  <span className=" flex space-x-1">
                    {[1, 2, 3, 4].map((star, index) => (
                      <span
                        className="w-4 h-4 inline-block "
                        key={star + index}
                      >
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                    ))}
                  </span>
                </div>
                <h4 className=" lg:text-2xl lg:eading-[36px] text-1xl mb-4 font-bold">
                  {course.title}
                </h4>
                <div className="flex   space-x-6">
                  <span className=" flex items-center space-x-2">
                    <img src={file2} alt="" />
                    <span>2 Lessons</span>
                  </span>
                  <span className=" flex items-center space-x-2">
                    <img src={user2} alt="" />
                    <span>4k Lesson</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center lg:pt-16 pt-10">
          <a href="#" className=" btn btn-primary">
            View All Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
