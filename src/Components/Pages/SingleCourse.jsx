import React from "react";
import CourseDetails from "../CourseDetails";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const SingleCourse = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Course Details"} pageName={"Course Details"} />
      <CourseDetails />
      <Footer />
    </>
  );
};

export default SingleCourse;
