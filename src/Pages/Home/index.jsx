import React from "react";
// import Header from "../../Components/Header";
import About from "./About";
import Courses from "./Courses";
import CallToAction from "../../Components/CallToAction";
import WhyEduSite from "../../Components/WhyEduSite";
import ContactUs from "../../Components/ContactUs";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <div className="home">
      {/* <Header /> */}
      <About />
      <Courses />
      <CallToAction />
      <WhyEduSite />
      <ContactUs />
      <Footer />
    </div>
  );
}
