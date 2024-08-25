/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  mainEvent,
  circleClock,
  rc1,
  rc2,
} from "../constant/images";

const EventDetails = () => {
  useEffect(() => {
    if (document.getElementById("timer")) {
      var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime(); // Update the count down every 1 second

      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Display the result in the element with id="demo"

        document.getElementById("timer").innerHTML =
          "<div class='text-[44px] font-bold'>" +
          days +
          "<div class=' text-lg font-medium mt-2 capitalize'>days</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          hours +
          "<div class='text-lg font-medium mt-2 capitalize'>hours</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          minutes +
          "<div class='text-lg font-medium mt-2 capitalize'>minutes</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          seconds +
          "<div class='text-lg font-medium mt-2 capitalize'>seconds</div></div>"; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <img src={mainEvent} alt="" className=" lg:mb-10 mb-6 block w-full" />
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <h3>Painting Contest 2022</h3>
            <div className="lg:my-6 my-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour.
            </div>
            <div className="bg-secondary text-white p-10 rounded-md">
              <div
                id="timer"
                className="md:flex space-y-4 md:space-y-0 justify-between text-center "
              >
                {/* <div className="text-[44px] font-bold">
                  {days}
                  <div className="text-lg font-medium mt-2 capitalize">
                    days
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {hours}
                  <div className="text-lg font-medium mt-2 capitalize">
                    hours
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {minutes}
                  <div className="text-lg font-medium mt-2 capitalize">
                    minutes
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {seconds}
                  <div className="text-lg font-medium mt-2 capitalize">
                    seconds
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" py-6">
              Among the major reasons why Python is “slow”, it really boils down
              to 2 — Python is interpreted as opposed to compiled, ultimately
              leading to slower execution times; and the fact that it is
              dynamically typed. Take, for example, TensorFlow, a Machine
              Learning library available in Python. These libraries were
              actually written in C++ and made available in Python, sort of
              forming a Python implementation. The same goes for Numpy and, to
              an extent, even Caer.
            </div>
            <div className="flex justify-between border-y border-[#ECECEC] py-4 md:mt-12 mt-10">
              <div className=" text-black font-semibold">Previous</div>
              <ul className="flex space-x-3 lg:justify-end items-center  ">
                {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                  <li key={indx}>
                    <a href="#" className="flex h-8 w-8">
                      <img src={item} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
              <div className="wdiget custom-text space-y-5 ">
                <h4 className=" widget-title">Event Details</h4>
                <ul className="list space-y-6  ">
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="" />
                      <div>4:00 pm - 6:00 pm</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src="assets/images/svg/circle-c.svg" alt="" />
                      <div>03 March, 2022</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="" />
                      <div>12/A, NewYork Sydney City</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="" />
                      <div>yourmail@gmail.com</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="" />
                      <div>+88018 2829 98267</div>
                    </div>
                  </li>
                </ul>
                <a href="#" className=" btn btn-primary btn-md text-lg">
                  Book A Seat
                </a>
              </div>

              <div className="wdiget">
                <h4 className=" widget-title">Special Guests</h4>
                <ul className="list space-y-6">
                  <li className=" flex space-x-4 border-[#ECECEC] ">
                    <div className="flex-none ">
                      <div className="h-20 w-20   rounded-full">
                        <img
                          src={rc1}
                          alt=""
                          className=" w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-bold text-black capitalize">
                        Sofia d. Flora
                      </div>
                      <span className=" text-primary font-semibold">
                        UI/UX Designer
                      </span>
                    </div>
                  </li>
                  <li className=" flex space-x-4 border-[#ECECEC] ">
                    <div className="flex-none ">
                      <div className="h-20 w-20   rounded-full">
                        <img
                          src={rc2}
                          alt=""
                          className=" w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-bold text-black capitalize">
                        Jhonson Steven
                      </div>
                      <span className=" text-primary font-semibold">
                        UI/UX Designer
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

export default EventDetails;
