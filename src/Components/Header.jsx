/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../context/AuthContext";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [usedCredits, setUsedCredits] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const { currentUser, logout } = useAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const fetchCredits = async () => {
    if (!currentUser) return;

    const userEmail = currentUser.email;

    // Fetch used credits from usage collection
    const usageQuery = query(collection(db, "usage"), where("email", "==", userEmail));
    const usageSnapshot = await getDocs(usageQuery);
    let totalUsedCredits = 0;
    usageSnapshot.forEach((doc) => {
      totalUsedCredits += doc.data().used_credit;
    });
    setUsedCredits(totalUsedCredits);

    // Fetch total credits from pricing collection
    const pricingQuery = query(collection(db, "pricing"), where("email", "==", userEmail));
    const pricingSnapshot = await getDocs(pricingQuery);
    let totalCredits = 0;
    pricingSnapshot.forEach((doc) => {
      totalCredits += doc.data().credits;
    });
    setTotalCredits(totalCredits / 2);

    // Redirect to pricing page if used credits are greater than or equal to total credits
    if (totalUsedCredits >= totalCredits / 2) {
      navigate("/schoolai/pricing");
    }
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const scrollNav = useRef(null);


  // Calculate remaining credits
  const remainingCredits = totalCredits - usedCredits;

  return (
    <>
      <header
        className="site-header home-one-header top-0 w-full z-[999] rt-sticky"
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className="flex items-center justify-between">
              <Link
                to={"/schoolai/home"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]"
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classes">
                    <li>
                      <Link to={"/schoolai/home"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/courses"}>Courses</Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/blog-standard"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/schoolai/contacts"}>Contacts</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px] items-center">
                  {currentUser ? (
                    <div className="hidden lg:flex items-center space-x-4">
                      <Link
                        to="/schoolai/pricing"
                        className="flex items-center bg-gray-100 p-2 rounded-md cursor-pointer"
                      >
                        <span className="text-yellow-500 mr-2">💎</span>
                        <span>{remainingCredits} Credits</span>
                      </Link>
                      <button
                        onClick={logout}
                        className="btn btn-primary py-[15px] px-8"
                        style={{ marginLeft: "50px" }}
                      >
                        Log out
                      </button>
                    </div>
                  ) : (
                    <div className="hidden lg:block">
                      <a href="/schoolai/login" className="btn btn-primary py-[15px] px-8">
                        Start Free Trial
                      </a>
                    </div>
                  )}
                  <div className="block lg:hidden">
                    <button
                      type="button"
                      className="text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon icon="cil:hamburger-menu" rotate="180deg"></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
