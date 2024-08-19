/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  fbIcon,
  footerLogo2,
  insIcon,
  pnIcon,
  twIcon,
  insIcon1,
  insIcon2,
  insIcon3,
  insIcon4,
  insIcon5,
  insIcon6,
} from "../../constant/images";

const Footer = () => {
  return (
    <footer>
      <div className="relative z-[1] mx-auto max-w-[1170px] rounded-md bg-[url('../images/all-img/section-bg-3.png')] bg-cover bg-center bg-no-repeat p-20">
        <div className="items-center space-x-4 space-y-5 text-center lg:flex lg:space-y-0 lg:text-left">
          <div className="flex-1">
            <div className="max-w-[590px] text-3xl font-bold text-white md:text-3xl lg:text-[44px] lg:leading-[61px]">
              Education Is About Creating Leaders For Tomorrow
            </div>
          </div>
          <div className="flex-none">
            <button className="btn bg-white font-bold text-black">
              Register Today
            </button>
          </div>
        </div>
      </div>
      <div className="-mt-[150px] bg-[url('../images/all-img/section-bg-10.png')] bg-cover bg-center bg-no-repeat pt-[150px]">
        <div className="section-padding container">
          <div className="grid grid-cols-12 gap-5">
            <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
              <div className="lg:max-w-[270px]">
                <a href="#" className="mb-10 block">
                  <img src={footerLogo2} alt="" />
                </a>
                <p>
                  Lorem ipsum amet, consectetur adipiscing elit. Suspendis
                  varius enim eros elementum tristique. Duis cursus.
                </p>
                <ul className="flex space-x-4 pt-8">
                  <li>
                    <a href="#" className="flex h-10 w-10">
                      <img src={fbIcon} alt="" />
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
            </div>
            <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-6">
              <div className="ml-auto xl:w-[80%]">
                <div className="flex space-x-[80px]">
                  <div className="flex-1 lg:flex-none">
                    <h4 className="mb-8 text-2xl font-bold text-black">
                      Links
                    </h4>
                    <ul className="list-item space-y-5">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Courses</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <h4 className="mb-8 text-2xl font-bold text-black">
                      Legal
                    </h4>
                    <ul className="list-item space-y-5">
                      <li>
                        <a href="#">Legal</a>
                      </li>
                      <li>
                        <a href="#">Tearms of Use</a>
                      </li>
                      <li>
                        <a href="#">Tearm & Condition</a>
                      </li>
                      <li>
                        <a href="#">Payment Method</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
              <h4 className="mb-8 text-2xl font-bold text-black">
                Instagram Post
              </h4>
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
                      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
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

        <div className="container border-t border-[#E9D4D0] py-8 text-center text-base">
          &copy; Copyright 2024 | SchoolAI App | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
