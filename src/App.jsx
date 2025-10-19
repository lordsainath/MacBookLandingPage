import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <ProductViewer />
      </div>
    </>
  );
};

export default App;
