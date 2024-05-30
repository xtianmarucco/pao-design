import React from "react";
import "./App.css";
import AboutMe from "./components/about-me-section/AboutMe";
import ContactSection from "./components/contact-section/ContactSection";
import CvSection from "./components/cv-section/CvSection";
import SidebarNavigation from "./components/sidebar-navigation/SidebarNavigation";
import Home from "./components/welcome-section/Home";

function App() {
  return (
    <div className="App">
      <SidebarNavigation />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="cv">
        <CvSection />
      </section>
      <section id="portfolio">
        <CvSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
