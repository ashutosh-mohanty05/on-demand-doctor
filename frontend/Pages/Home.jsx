import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import useTypeAnimation from "./useTypeAnimation.js";

const Home = () => {
  const heroText = "Welcome to Doctor on call | Your Trusted Healthcare Provider";
  const animatedHeroText = useTypeAnimation(heroText, 100, 100); 

  return (
    <>
      <Hero title={animatedHeroText} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;