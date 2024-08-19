/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseBlock = () => {
  return (
    <div
      className="lg:pt-10 section-padding-bottom bg-white bg-[url('../images/all-img/section-bg-14.png')] bg-center bg-no-repeat
            bg-cover"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
          <div className="bg-[url('../images/all-img/bg-ins-1.png')] bg-cover  bg-no-repeat p-10  rounded-md">
            <div className="max-w-[337px]">
              <div className="mini-title">Build Your Career</div>
              <div className=" text-[34px] text-black leading-[51px]">
                Become an <span className="shape-bg"> Instructor</span>
              </div>
              <div className=" mt-6 mb-12">
                Learn at your own pace, move the between multiple courses.
              </div>
              <a href="#" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
          <div className="bg-[url('../images/all-img/bg-ins-2.png')]  bg-no-repeat p-10 bg-cover rounded-md">
            <div className="max-w-[337px]">
              <div className="mini-title">Build Your Career</div>
              <div className=" text-[34px] text-black leading-[51px]">
                Get Free <span className="shape-bg">Courses</span>
              </div>
              <div className=" mt-6 mb-12">
                Learn at your own pace, move the between multiple courses.
              </div>
              <a href="#" className="btn btn-black">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBlock;
