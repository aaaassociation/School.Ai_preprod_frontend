/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure, Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  author,
  camera,
  ck,
  fb,
  file2,
  fileIcon,
  headphone,
  instra,
  laptop,
  likeIcon,
  ln,
  lock,
  pencil,
  play,
  singleCourseThumb,
  starIcon,
  target,
  thumb,
  twitter,
  user,
  user2,
  ux,
  web,
  wifi,
  yt,
  twIcon,
  pnIcon,
  insIcon,
  rc1,
  rc2,
  rc3,
  clockIcon,
  cmnt1,
  cmnt2,
} from "../constant/images";

const CourseDetails = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="single-course-details">
              <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                <img
                  src={singleCourseThumb}
                  alt=""
                  className=" rounded-md object-fut w-full h-full block"
                />
              </div>
              <div className=" mb-6">
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white ">
                  Data Science
                </span>
              </div>
              <h2>UI/UX Design and Graphics Learning Bootcamp 2022</h2>
              <div
                className="author-meta mt-6 sm:flex  lg:space-x-16 sm:space-x-5 space-y-5 
               sm:space-y-0 items-center"
              >
                <div className="flex space-x-4 items-center group">
                  <div className="flex-none">
                    <div className="h-12 w-12 rounded">
                      <img
                        src={author}
                        alt=""
                        className=" object-cover w-full h-full rounded"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className=" text-secondary  ">
                      Trainer
                      <a href="#" className=" text-black">
                        : Md Shamim Hossain
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <span className=" text-secondary  ">
                    Last Update:
                    <a href="#" className=" text-black">
                      10 February, 2022
                    </a>
                  </span>
                </div>
              </div>
              <Tab.Group>
                <div className="nav-tab-wrapper mt-12">
                  <Tab.List as="ul" id="tabs-nav" className="course-tab mb-8">
                    {["OverView", "Carriculum", "Instructor", "Reviews"].map(
                      (item, index) => (
                        <Tab
                          as="li"
                          key={index}
                          className={({ selected }) =>
                            selected ? "active" : null
                          }
                        >
                          <a href={`#tab`}>{item}</a>
                        </Tab>
                      )
                    )}
                  </Tab.List>
                  <Tab.Panels id="tabs-content">
                    <Tab.Panel id="tab1" className="tab-content">
                      <div>
                        <h3 className=" text-2xl">Course Description</h3>
                        <p className="mt-4">
                          This tutorial will help you learn quickly and
                          thoroughly. Lorem ipsum, or lipsum as it sometimes
                          known, is dummy text used in laying out print, graphic
                          or web designs. Lorem ipsum dolor sit amet,
                          consectetuer adipiscing elit. Donec odio. Quisque
                          volutpat mattis eros.
                          <br /> <br /> You’ll be exposed to principles and
                          strategies, but, more importantly, you’ll learn how
                          actually apply these abstract concepts by coding three
                          different websites for three very different the
                          audiences. Lorem ipsum is dummy text used in laying
                          out print, graphic or web designs Lorem ipsum blinding
                          shot chinwag knees.
                        </p>
                        <div className="bg-[#F8F8F8] space-y-6 p-8 rounded-md my-8">
                          <h4 className=" text-2xl">What You will Learn?</h4>
                          <ul className=" grid sm:grid-cols-2 grid-cols-1 gap-6">
                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className=" text-2xl">What You will Learn?</h4>
                          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                            <div className=" bg-white  rounded px-5 py-[18px] flex   shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={laptop} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Computer/Mobile
                              </span>
                            </div>
                            <div className=" bg-white  rounded px-5 py-[18px] flex  shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={pencil} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Paper & Pencil
                              </span>
                            </div>
                            <div className=" bg-white  rounded px-5 py-[18px] flex  shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={wifi} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Internet Connect
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel id="tab2" className="tab-content">
                      <div>
                        <h3 className=" text-2xl">Course Description</h3>
                        <div className="md:flex md:space-x-10  space-x-3 flex-wrap mt-4 mb-6">
                          <span>Level Beginner</span>
                          <span>12 Lectures</span>
                          <span>Total: 5 Hours 56 Minutes 24 Seconds</span>
                        </div>
                        <ul className="list  course-accrodain space-y-6">
                          <Disclosure as="li">
                            {({ open }) => (
                              <li className={open ? "open" : ""}>
                                <Disclosure.Button
                                  as="button"
                                  className="accrodain-button"
                                >
                                  <span className="icon-pm fle x-none"></span>
                                  <span className=" flex-1">Introduction</span>
                                  <div className="flex-none extra-text  hidden sm:block">
                                    3 Lectures, 34:51 min
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                  <div className="content">
                                    <div className=" text-xl font-semibold text-black mb-2">
                                      Intermediate Level
                                    </div>
                                    <p>
                                      This tutorial will help you learn quickly
                                      and thoroughly. Lorem ipsum is dummy text
                                      used in laying out print, graphic or web
                                      designs
                                    </p>
                                    <div className=" text-xl font-semibold text-black mb-2 mt-6">
                                      2 Videos, 1 Audio, 1 Notebook
                                    </div>
                                    <div className=" mt-8 ">
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={headphone} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC]        
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={fileIcon} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </li>
                            )}
                          </Disclosure>
                          <Disclosure as="li">
                            {({ open }) => (
                              <li className={open ? "open" : ""}>
                                <Disclosure.Button
                                  as="button"
                                  className="accrodain-button"
                                >
                                  <span className="icon-pm fle x-none"></span>
                                  <span className=" flex-1">Introduction</span>
                                  <div className="flex-none extra-text  hidden sm:block">
                                    3 Lectures, 34:51 min
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                  <div className="content">
                                    <div className=" text-xl font-semibold text-black mb-2">
                                      Intermediate Level
                                    </div>
                                    <p>
                                      This tutorial will help you learn quickly
                                      and thoroughly. Lorem ipsum is dummy text
                                      used in laying out print, graphic or web
                                      designs
                                    </p>
                                    <div className=" text-xl font-semibold text-black mb-2 mt-6">
                                      2 Videos, 1 Audio, 1 Notebook
                                    </div>
                                    <div className=" mt-8 ">
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={headphone} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC]        
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={fileIcon} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </li>
                            )}
                          </Disclosure>
                          <Disclosure as="li">
                            {({ open }) => (
                              <li className={open ? "open" : ""}>
                                <Disclosure.Button
                                  as="button"
                                  className="accrodain-button"
                                >
                                  <span className="icon-pm fle x-none"></span>
                                  <span className=" flex-1">Introduction</span>
                                  <div className="flex-none extra-text  hidden sm:block">
                                    3 Lectures, 34:51 min
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                  <div className="content">
                                    <div className=" text-xl font-semibold text-black mb-2">
                                      Intermediate Level
                                    </div>
                                    <p>
                                      This tutorial will help you learn quickly
                                      and thoroughly. Lorem ipsum is dummy text
                                      used in laying out print, graphic or web
                                      designs
                                    </p>
                                    <div className=" text-xl font-semibold text-black mb-2 mt-6">
                                      2 Videos, 1 Audio, 1 Notebook
                                    </div>
                                    <div className=" mt-8 ">
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={headphone} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC]        
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={fileIcon} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </li>
                            )}
                          </Disclosure>
                          <Disclosure as="li">
                            {({ open }) => (
                              <li className={open ? "open" : ""}>
                                <Disclosure.Button
                                  as="button"
                                  className="accrodain-button"
                                >
                                  <span className="icon-pm fle x-none"></span>
                                  <span className=" flex-1">Introduction</span>
                                  <div className="flex-none extra-text  hidden sm:block">
                                    3 Lectures, 34:51 min
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                  <div className="content">
                                    <div className=" text-xl font-semibold text-black mb-2">
                                      Intermediate Level
                                    </div>
                                    <p>
                                      This tutorial will help you learn quickly
                                      and thoroughly. Lorem ipsum is dummy text
                                      used in laying out print, graphic or web
                                      designs
                                    </p>
                                    <div className=" text-xl font-semibold text-black mb-2 mt-6">
                                      2 Videos, 1 Audio, 1 Notebook
                                    </div>
                                    <div className=" mt-8 ">
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={camera} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <span className=" bg-primary text-white px-3 rounded">
                                            Preview
                                          </span>

                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC] 
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={headphone} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                      <a
                                        href="#"
                                        className=" flex items-start pb-4 mb-4 last:mb-0 last:pb-0 border-b border-[#ECECEC]        
                                        last:border-0"
                                      >
                                        <div className="flex-1 flex">
                                          <span className="flex-none  mr-2">
                                            <img src={fileIcon} alt="" />
                                          </span>
                                          <span className="flex-1">
                                            Video: Getting Started and
                                            Introductions
                                          </span>
                                        </div>
                                        <div className="flex-none flex space-x-3">
                                          <img src={lock} alt="" />
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </li>
                            )}
                          </Disclosure>
                        </ul>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel id="tab3" className="tab-content">
                      <div className=" bg-[#F8F8F8] rounded-md p-8">
                        <div className="md:flex space-x-5 mb-8">
                          <div className="h-[310px] w-[270px] flex-none rounded mb-5 md:mb-0">
                            <img
                              src={ux}
                              alt=""
                              className=" w-full h-full object-cover  rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="max-w-[300px]">
                              <h4 className=" text-[34px] font-bold leading-[51px]">
                                Daniel Smith
                              </h4>
                              <div className=" text-primary mb-6">
                                User Experience Designer
                              </div>
                              <ul className=" list space-y-4">
                                <li className=" flex space-x-3">
                                  <img src={file2} alt="" />
                                  <div>65+ Courses</div>
                                </li>

                                <li className=" flex space-x-3">
                                  <img src={user2} alt="" />
                                  <div>2k+ Student Learned</div>
                                </li>

                                <li className=" flex space-x-3">
                                  <img src={starIcon} alt="" />
                                  <div>547+ Reviews</div>
                                </li>

                                <li className=" flex space-x-3">
                                  <img src={likeIcon} alt="" />
                                  <div>4.9 Average Rating</div>
                                </li>
                              </ul>
                              <ul className=" flex space-x-3 mt-8">
                                <li className="">
                                  <a href="#">
                                    <img src={fb} alt="" />
                                  </a>
                                </li>

                                <li className="">
                                  <a href="#">
                                    <img src={ln} alt="" />
                                  </a>
                                </li>

                                <li className="">
                                  <a href="#">
                                    <img src={yt} alt="" />
                                  </a>
                                </li>

                                <li className="">
                                  <a href="#">
                                    <img src={instra} alt="" />
                                  </a>
                                </li>

                                <li className="">
                                  <a href="#">
                                    <img src={twitter} alt="" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel as="div" id="tab4" className="tab-content">
                      <div>
                        <div className="grid grid-cols-12 gap-5">
                          <div className="md:col-span-8 col-span-12">
                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Fragment key={index}>
                                      <iconify-icon
                                        icon="heroicons:star-20-solid"
                                        class="text-tertiary"
                                      ></iconify-icon>
                                    </Fragment>
                                  ))}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      style={{ width: "40%" }}
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      40%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="10"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      10%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="0"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="0"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="0"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-4 col-span-12">
                            <div className="bg-white min-h-[219px] p-6 flex flex-col justify-center items-center shadow-box7 rounded space-y-3">
                              <h2>4.9</h2>
                              <div className="flex space-x-3">
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                              </div>
                              <span className=" block">(2 Review)</span>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-8">
                          <h4 className=" text-xl font-bold text-black">
                            Reviews
                          </h4>
                          <ul className=" list space-y-6 mt-6">
                            <li className=" flex space-x-6 ">
                              <div className="flex-none">
                                <div className="h-[72px] w-[72px] rounded-full">
                                  <img
                                    src={cmnt1}
                                    alt=""
                                    className=" object-cover w-full h-full"
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex space-x-3 mb-4">
                                  {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Fragment key={index}>
                                      <iconify-icon
                                        icon="heroicons:star-20-solid"
                                        class="text-tertiary"
                                      ></iconify-icon>
                                    </Fragment>
                                  ))}
                                </div>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration.
                                </p>
                                <div className="author mt-4">
                                  <span className="block text-xl font-bold text-black">
                                    Daniel Smith
                                  </span>
                                  <span className="block">Jan 24, 2022</span>
                                </div>
                              </div>
                            </li>
                            <li className=" flex space-x-6 ">
                              <div className="flex-none">
                                <div className="h-[72px] w-[72px] rounded-full">
                                  <img
                                    src={cmnt2}
                                    alt=""
                                    className=" object-cover w-full h-full"
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex space-x-3 mb-4">
                                  {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Fragment key={index}>
                                      <iconify-icon
                                        icon="heroicons:star-20-solid"
                                        class="text-tertiary"
                                      ></iconify-icon>
                                    </Fragment>
                                  ))}
                                </div>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration.
                                </p>
                                <div className="author mt-4">
                                  <span className="block text-xl font-bold text-black">
                                    Daniel Smith
                                  </span>
                                  <span className="block">Jan 24, 2022</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="wdiget custom-text space-y-5 ">
                <a className="h-[220px]  rounded relative block" href="#">
                  <img
                    src={thumb}
                    alt=""
                    className=" block w-full h-full object-cover rounded "
                  />
                  <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src={play} alt="" />
                  </div>
                </a>
                <h3>Free</h3>
                <button className="btn btn-primary w-full text-center ">
                  Enroll Now
                </button>
                <ul className="list  ">
                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={user} alt="" />
                      <div className=" text-black font-semibold">
                        Instructor
                      </div>
                    </div>
                    <div className="flex-none">Daniel Smith</div>
                  </li>

                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={file2} alt="" />
                      <div className=" text-black font-semibold">Lectures</div>
                    </div>
                    <div className="flex-none">23</div>
                  </li>

                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={clockIcon} alt="" />
                      <div className=" text-black font-semibold">Duration</div>
                    </div>
                    <div className="flex-none">2Hr 36Minutes</div>
                  </li>

                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={starIcon} alt="" />
                      <div className=" text-black font-semibold">Enrolled</div>
                    </div>
                    <div className="flex-none">2k Students</div>
                  </li>

                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={target} alt="" />
                      <div className=" text-black font-semibold">
                        Course level
                      </div>
                    </div>
                    <div className="flex-none">Intermediate</div>
                  </li>

                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={web} alt="" />
                      <div className=" text-black font-semibold">Language</div>
                    </div>
                    <div className="flex-none">English</div>
                  </li>
                </ul>
                <ul className="flex space-x-4 items-center pt-3 ">
                  <li className=" text-black font-semibold">Share On:</li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={fb} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={twIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={pnIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={insIcon} alt="" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="wdiget">
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
                      <div className="flex space-x-3 mb-2">
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                      </div>
                      <div className="mb-1 font-semibold text-black">
                        Greatest Passion In...
                      </div>
                      <span className=" text-secondary font-semibold">
                        $38.00
                      </span>
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
                      <div className="flex space-x-3 mb-2">
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                      </div>
                      <div className="mb-1 font-semibold text-black">
                        Greatest Passion In...
                      </div>
                      <span className=" text-secondary font-semibold">
                        $38.00
                      </span>
                    </div>
                  </li>
                  <li
                    className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 
                   last:border-0 border-b"
                  >
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
                      <div className="flex space-x-3 mb-2">
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="heroicons:star-20-solid"
                          class="text-tertiary"
                        ></iconify-icon>
                      </div>
                      <div className="mb-1 font-semibold text-black">
                        Greatest Passion In...
                      </div>
                      <span className=" text-secondary font-semibold">
                        $38.00
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
