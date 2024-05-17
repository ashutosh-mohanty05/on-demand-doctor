import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import useTypeAnimation from "./useTypeAnimation.js";
const AboutUs = () => {
  const heroText = "Learn More About Us | Doctor On Call";
  const animatedHeroText = useTypeAnimation(heroText, 100, 300); 
  return (
    <>
      <Hero
        title={animatedHeroText}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
