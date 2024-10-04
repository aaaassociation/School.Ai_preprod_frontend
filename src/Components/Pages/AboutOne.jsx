import React from "react";
import Feature from "../Feature";
import Accordion from "../HomeThreeComponents/Accordion";
import Team from "../HomeThreeComponents/Team";
import About from "../HomeTwoComponents/About";
import Counter from "../HomeTwoComponents/Counter";
import PageBanner from "../PageBanner";
import Testimonials from "../Testimonials";

const AboutOne = () => {
  return (
    <>
      <PageBanner title={"About Us"} pageTitle="About Us" />
      <About />
      <Feature />
      <Counter />
      <Testimonials />
      <Team />
      <Accordion />
    </>
  );
};

export default AboutOne;
