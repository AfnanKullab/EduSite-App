import React from "react";
import HeroArea from "../../Components/HeroArea";
import Footer from "../../Components/Footer";
import ContactForm from "../../Components/ContactForm";
import NavBar from "../../Components/NavBar";

export default function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <HeroArea />
      <ContactForm />
      <Footer />
    </div>
  );
}
