import React from "react";
// import Header from "../../Components/Header";
import About from "./About";
import Courses from "./Courses";

export default function Home() {
  return (
    <div className="home">
      {/* <Header /> */}
      <About />
      <Courses />
    </div>
  );
}
