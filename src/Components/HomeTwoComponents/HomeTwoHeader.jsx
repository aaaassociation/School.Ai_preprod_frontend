/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import wfb from "../../assets/images/social/wfb.svg";
import wt from "../../assets/images/social/wt.svg";
import wi from "../../assets/images/social/w-i.svg";
import wins from "../../assets/images/social/w-ins.svg";
import search from "../../assets/images/svg/search.svg";
import logo from "../../assets/images/logo/logo.png";
import man2 from "../../assets/images/banner/man2.png";
import MobileMenu from "../MobileMenu";
import { useAuth } from "../../context/AuthContext";

const HomeTwoHeader = () => {
  const scrollNav = useRef(null);
  const navigate = useNavigate();
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { currentUser, logout } = useAuth();

  let body = document.querySelector("body");
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollNav.current) {
        let windowScroll = window.scrollY > 100;
        scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  showSearchBar
    ? body.classList.add("modal-open")
    : body.classList.remove("modal-open");

  body.classList.contains("modal-open")
    ? (document.documentElement.scrollTop = 0)
    : "";

  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/2.png')] bg-cover bg-no-repeat bg-center overflow-hidden xl:pb-[130px]">
      <header className="site-header ">
        <div className="bg-primary text-white py-3 md:block hidden">
          <div className=" container">
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 ">
              <ul className=" flex  divide-x divide-white divide-opacity-25 text-base lg:justify-start justify-center">
                <li className="mr-4">Rue du marché 20, 1204 Geneva, Switzerland</li>
                <li className="pl-4">
                  <a href="mailto:contactinfo@gmail.com">
                    AAA.ai
                  </a>
                </li>
              </ul>
              <ul className=" text-base flex  lg:justify-end justify-center divide-x divide-white divide-opacity-25 items-center">
                <li className="px-2">Follow Us On:</li>
                <li className="px-2">
                  <a href="#">
                    <img src={wfb} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wt} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wi} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wins} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="main-header py-8 header-normal2  rt-sticky top-0 w-full z-[999] "
          ref={scrollNav}
        >
          <div className="container">
            <div className=" flex items-center justify-between ">
              <Link
                to={"/schoolai/home"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]  "
              >
                <img src={logo} alt="" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li>
                      <Link to={"/schoolai/home"}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/about"}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/courses"}>
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/blog-standard"}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/contacts"}>
                        Contacts
                      </Link>
                    </li>
                  </ul>
                  <div className=" lg:block hidden">
                    <div className="border border-gray rounded-md  h-[46px] modal-search">
                      <input
                        type="text"
                        className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                        placeholder="Search.."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div>
                    <button
                      type="button"
                      className=" md:w-[56px] md:h-[56px] h-10 w-10 rounded bg-white flex flex-col items-center justify-center modal- 
                      trigger"
                      onClick={handleShowSearchBar}
                    >
                      <img src={search} alt="" />
                    </button>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-white flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                  <div className=" hidden lg:block">
                    {currentUser ? (
                      <button
                        onClick={logout}
                        className="btn btn-primary py-[15px] px-8"
                      >
                        Log out
                      </button>
                    ) : (
                      <a
                        href="/schoolai/login"
                        className="btn btn-primary py-[15px] px-8"
                      >
                        Start Free Trial
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className=" lg:hidden block">
          <div className="border border-gray rounded-md  h-[46px] modal-search">
            <input
              type="text"
              className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
      <div className="container relative">
        <div className="xl:max-w-[570px] xl:pt-[129px] lg:py-28 md:py-20 py-14  lg:space-y-10 space-y-6">
          <div className=" lg:text-[77px] lg:leading-[106.4px]  md:text-6xl md:leading-[72px] text-black font-bold text-5xl leading-[62px]">
            Better <span className="text-primary">Learning Future</span> Starts
            With SchoolAI
          </div>
          <div className=" plain-text text-gray leading-[30px] border-l-2 border-primary pl-4">
            It is long established fact that reader distracted by the readable
            content.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0 pt-5">
            <div
              className="btn btn-primary cursor-pointer"
              onClick={() => {
                if (currentUser !== null) {
                  navigate("/schoolai/courses");
                } else {
                  navigate("/schoolai/login");
                }
              }}
            >
              Get Started Now
            </div>
          </div>
        </div>
        <div className="imge-box  hidden  xl:block absolute right-[-60px] top-1/2  -translate-y-1/2 mt-[60px]  ">
          <img src={man2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeTwoHeader;
