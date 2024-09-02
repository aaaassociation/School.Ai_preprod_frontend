import React, { useEffect } from "react";
import About from "../HomeTwoComponents/About";
import Achivement from "../HomeTwoComponents/Achivement";
import BlogArticle from "../HomeTwoComponents/BlogArticle";
import Categories from "../HomeTwoComponents/Categories";
import Counter from "../HomeTwoComponents/Counter";
import Courses from "../HomeTwoComponents/Courses";
import Footer from "../HomeTwoComponents/Footer";
import HomeTwoHeader from "../HomeTwoComponents/HomeTwoHeader";
import Video from "../HomeTwoComponents/Video";
import WhyChoose from "../HomeTwoComponents/WhyChoose";

const HomeTwo = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className="font-gilroy font-medium text-gray text-lg leading-[27px]">
      <HomeTwoHeader />
      <Categories />
      <About />
      <Courses />
      <Counter />
      <Video />
      <WhyChoose />
      <Achivement />
      <BlogArticle />
      <Footer />
    </section>
  );
};

export default HomeTwo;
