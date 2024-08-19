import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../HomeThreeComponents/About";
import CourseBlock from "../HomeThreeComponents/CourseBlock";

import Video from "../HomeTwoComponents/Video";
import NewsLetter from "../NewsLetter";
import PageBanner from "../PageBanner";
import Platform from "../Platform";
import Team from "../Team";
import Topics from "../Topics";

const AboutTwo = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"} pageTitle='About Us' num={2} />
      <About />
      <Topics />
      <Platform />
      <CourseBlock />
      <Video />
      <Team />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default AboutTwo;
