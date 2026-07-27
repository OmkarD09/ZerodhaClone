import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./homepage.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="zk-homepage">
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;    
