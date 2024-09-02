import React from "react";
import EventsList from "../EventsList";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const Event = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Events"} pageTitle="Events" />
      <EventsList />
      <Footer />
    </>
  );
};

export default Event;
