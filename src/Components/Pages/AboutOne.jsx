import React from "react";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import Accordion from "../HomeThreeComponents/Accordion";
import Team from "../HomeThreeComponents/Team";
import About from "../HomeTwoComponents/About";
import Counter from "../HomeTwoComponents/Counter";
import PageBanner from "../PageBanner";
import Testimonials from "../Testimonials";

const AboutOne = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"} pageTitle="About Us"/>
      <About />
      <Feature />
      <Counter />
      <Testimonials />
      <Team />
      <Accordion />
      <Footer />
    </>
  );
};

export default AboutOne;
