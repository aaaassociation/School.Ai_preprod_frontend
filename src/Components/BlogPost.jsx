/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  bs1,
  bs2,
  bs3,
  user3,
  comment,
  q,
  calender,
  clockIcon,
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  rc3,
  rc1,
  insIcon1,
  insIcon3,
  insIcon2,
  search,
  rc2,
  insIcon4,
  insIcon5,
  insIcon6,
} from "../constant/images";
import ContactForm from "./ContactForm";

const BlogPost = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={bs1} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user3} alt="" />
                    <span>SchoolAI</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span>3 21 Feb, 22</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={clockIcon} alt="" />
                    <span>3 Min Read</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={comment} alt="" />
                    <span>02 Comments</span>
                  </a>
                </div>
                <h3>
                  Learn At Your Own Pace, with Lifetime Access on Mobile &
                  Desktop
                </h3>
                <p className="mt-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. As students across the globe
                  continue to see their learning plans significantly.
                </p>
                <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.png')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src={q} alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Education is one of the most powerful aspects of life.
                    Education and learning allow us to make sense of the world
                    around us, the world inside of us, and where we fit within
                    the world.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                    <span className=" text-xl font-semibold">
                      Rosalina D. Jackson
                    </span>
                  </div>
                </blockquote>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. As students across the globe
                  continue to see their learning plans significantly.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src={bs2} alt="" />
                  <img src={bs3} alt="" />
                </div>
                <h4 className="text-2xl mb-4">
                  Education Is About Academic Excellence And Cultural Diversity
                  Learning Community
                </h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable.
                </p>
                <ul className="list-disc marker:text-secondary space-y-4 mt-6">
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                  <ul className="flex space-x-3 xl:justify-end items-center  ">
                    <li className=" text-black font-semibold">Share On:</li>

                    {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                      <li key={indx}>
                        <a href="#" className="flex h-8 w-8">
                          <img src={item} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid xl:grid-cols-2 grid-cols-1  gap-[30px] md:mt-14 mt-8">
                  <a
                    className=" flex space-x-4 shadow-box7 rounded p-5 bg-white"
                    href="#"
                  >
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc1}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <span className=" text-primary  text-base mb-1">
                        Prev Post
                      </span>
                      <div className="mb-1 font-semibold text-black">
                        How Technology Can Help You Stay Healthy
                      </div>
                    </div>
                  </a>

                  <a
                    className=" flex  flex-row-reverse shadow-box7 bg-white rounded p-5"
                    href="#"
                  >
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded ml-4">
                        <img
                          src={rc3}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-right ">
                      <span className=" text-primary  text-base mb-1">
                        Next Post
                      </span>
                      <div className="mb-1 font-semibold text-black">
                        How Technology Can Help You Stay Healthy
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className=" mt-14">
              <h3 className=" mb-6">3 Comments</h3>
              <ul className="comments space-y-4">
                <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                  <div className="flex">
                    <div className="flex-none">
                      <div className="h-[72px] w-[72px] rounded-full mr-6">
                        <img
                          src={insIcon1}
                          alt=""
                          className="w-full block h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <span className="text-xl  font-semibold text-black block mb-1">
                            Ferira Watson
                          </span>
                          <span className=" block">Oct 09, 2021</span>
                        </div>
                        <a
                          href="#"
                          className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                            items-center space-x-2 leading-[1]"
                        >
                          <span className=" text-xl leading-[1] top-[3px] relative">
                            <iconify-icon
                              icon="charm:forward"
                              rotate="180deg"
                            ></iconify-icon>
                          </span>
                          <span className=" leading-[1]">Reply</span>
                        </a>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                  <ul className="comments mt-6 space-y-4 ml-14 border-t border-[#ECECEC]">
                    <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                      <div className="flex">
                        <div className="flex-none">
                          <div className="h-[72px] w-[72px] rounded-full mr-6">
                            <img
                              src={insIcon3}
                              alt=""
                              className="w-full block h-full object-contain rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between mb-2">
                            <div>
                              <span className="text-xl  font-semibold text-black block mb-1">
                                Ferira Watson
                              </span>
                              <span className=" block">Oct 09, 2021</span>
                            </div>
                            <a
                              href="#"
                              className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                                    items-center space-x-2 leading-[1]"
                            >
                              <span className=" text-xl leading-[1] top-[3px] relative">
                                <iconify-icon
                                  icon="charm:forward"
                                  rotate="180deg"
                                ></iconify-icon>
                              </span>
                              <span className=" leading-[1]">Reply</span>
                            </a>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <div className="flex">
                    <div className="flex-none">
                      <div className="h-[72px] w-[72px] rounded-full mr-6">
                        <img
                          src={insIcon2}
                          alt=""
                          className="w-full block h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <span className="text-xl  font-semibold text-black block mb-1">
                            Ferira Watson
                          </span>
                          <span className=" block">Oct 09, 2021</span>
                        </div>
                        <a
                          href="#"
                          className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                            items-center space-x-2 leading-[1]"
                        >
                          <span className=" text-xl leading-[1] top-[3px] relative">
                            <iconify-icon
                              icon="charm:forward"
                              rotate="180deg"
                            ></iconify-icon>
                          </span>
                          <span className=" leading-[1]">Reply</span>
                        </a>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" mt-14">
              <h3 className=" mb-4">Leave A Reply</h3>
              <div>
                Your email address will not be published. Requires fields are
                marked*
              </div>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12">
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
              <div className="wdiget widget-recent-post">
                <h4 className=" widget-title">Related Courses</h4>
                <ul className="list">
                  <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc1}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-semibold text-black">
                        How to Manage Ads For Clients The Right Way
                      </div>
                      <a className=" text-secondary font-semibold" href="#">
                        Read More
                      </a>
                    </div>
                  </li>
                  <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc2}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-semibold text-black">
                        How to Manage Ads For Clients The Right Way
                      </div>
                      <a className=" text-secondary font-semibold" href="#">
                        Read More
                      </a>
                    </div>
                  </li>
                  <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                    <div className="flex-none ">
                      <div className="h-20 w-20  rounded">
                        <img
                          src={rc3}
                          alt=""
                          className=" w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-semibold text-black">
                        How to Manage Ads For Clients The Right Way
                      </div>
                      <a className=" text-secondary font-semibold" href="#">
                        Read More
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="wdiget">
                <h4 className="widget-title">Popular Tags</h4>
                <ul className="flex flex-wrap">
                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Business
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Education
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Design
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Students
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Teachers
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      classNameroom
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      Online
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                    >
                      e-Learning
                    </a>
                  </li>

                  <li className="mr-2 mb-2">
                    <a
                      href="#"
                      className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text- 
                        white"
                    >
                      Book
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wdiget">
                <h4 className="widget-title">Instagram Feed</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    insIcon1,
                    insIcon2,
                    insIcon3,
                    insIcon4,
                    insIcon5,
                    insIcon6,
                  ].map((item, index) => (
                    <div key={index}>
                      <a
                        href="#"
                        className="group relative block h-20 w-full rounded"
                      >
                        <img
                          src={item}
                          alt=""
                          className="block h-full w-full rounded object-cover"
                        />
                        <div
                          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black 
                            bg-opacity-40
                                                    text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100"
                        >
                          <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                            <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
