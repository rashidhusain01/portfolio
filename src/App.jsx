import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Config from "./components/Config";

export default function App(){
  // load theme from localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(()=> {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero config={Config} />
        <About config={Config} />
        <Skills config={Config} />
        <Projects config={Config} />
        <Contact config={Config} />
      </main>
      <Footer config={Config} />
    </>
  );
}