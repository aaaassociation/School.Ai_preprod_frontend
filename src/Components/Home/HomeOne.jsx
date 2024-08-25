import React, { useEffect } from "react";
import About from "../About";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Brands from "../Brands";
import Courses from "../Courses";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import NewsLetter from "../NewsLetter";
import Platform from "../Platform";
import Team from "../Team";
import Testimonials from "../Testimonials";
import Topics from "../Topics";

const HomeOne = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Brands section_padding_bottom={"section-padding-bottom"} />
      <Feature />
      <Courses />
      <Platform />
      <NewsLetter />
      <Topics />
      <Testimonials />
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default HomeOne;
