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
      <Home></Home>
      <AboutMe></AboutMe>
      <CvSection></CvSection>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
