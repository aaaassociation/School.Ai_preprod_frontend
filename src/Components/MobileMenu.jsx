/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { fbIcon, twIcon, pnIcon, insIcon } from "../constant/images";

const MobileMenu = ({ activeMenu, setActiveMenu }) => {
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const [showBlogMenu, setShowBlogMenu] = useState(false);
  const [showCourseMenu, setShowCourseMenu] = useState(false);

  const handleShowHomeMenu = () => {
    setShowHomeMenu(!showHomeMenu);
  };
  const handleShowPageMenu = () => {
    setShowPageMenu(!showPageMenu);
  };
  const handleShowBlogMenu = () => {
    setShowBlogMenu(!showBlogMenu);
  };
  const handleShowCourseMenu = () => {
    setShowCourseMenu(!showCourseMenu);
  };

  return (
    <>
      <div className="openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] active-mobile-menu">
        <div className="flex justify-between px-6 flex-none">
          <Link to={"/schoolai/home"} className="brand-logo flex-none mr-10 ">
            <img src={logo} alt="logo" />
          </Link>
          <span
            className=" text-3xl text-black cursor-pointer rt-mobile-menu-close"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <iconify-icon icon="fe:close"></iconify-icon>
          </span>
        </div>
        <div className="mobile-menu mt-6 flex-1 ">
          <ul className="menu-active-classNamees">
            <li
              className={`menu-item-has-children ${showHomeMenu ? "open" : ""}`}
              onClick={handleShowHomeMenu}
            >
              <a href="#">Home</a>
              <ul
                className="sub-menu"
                style={
                  showHomeMenu ? { display: "block" } : { display: "none" }
                }
              >
                <li>
                  <Link to={"/schoolai/home"}>Home</Link>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item-has-children ${showPageMenu ? "open" : ""}`}
              onClick={handleShowPageMenu}
            >
              <a href="#">Pages</a>
              <ul
                className="sub-menu"
                style={
                  showPageMenu ? { display: "block" } : { display: "none" }
                }
              >
                <li>
                  <Link to={"/schoolai/about"}>About</Link>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item-has-children ${
                showCourseMenu ? "open" : ""
              }`}
              onClick={handleShowCourseMenu}
            >
              <a href="#">Courses</a>
              <ul
                className="sub-menu"
                style={
                  showCourseMenu ? { display: "block" } : { display: "none" }
                }
              >
                <li>
                  <Link to={"/schoolai/courses"}>Courses</Link>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item-has-children ${showBlogMenu ? "open" : ""}`}
              onClick={handleShowBlogMenu}
            >
              <a href="#">Blog</a>
              <ul
                className="sub-menu"
                style={
                  showBlogMenu ? { display: "block" } : { display: "none" }
                }
              >
                <li>
                  <Link to={"/schoolai/blog-standard"}>Blog Standard</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/schoolai/contacts"}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className=" flex-none pb-4">
          <div className=" text-center text-black font-semibold mb-2">
            Follow Us
          </div>
          <ul className="flex space-x-4 justify-center ">
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={fbIcon} alt="fbIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={twIcon} alt="twIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={pnIcon} alt="pnIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={insIcon} alt="insIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`rt-mobile-menu-overlay ${activeMenu && "active"}`}></div>
    </>
  );
};

export default MobileMenu;
