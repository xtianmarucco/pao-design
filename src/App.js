import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import AboutMe from "./components/about-me-section/AboutMe";
import ContactSection from "./components/contact-section/ContactSection";
import CvSection from "./components/cv-section/CvSection";
import SidebarNavigation from "./components/sidebar-navigation/SidebarNavigation";
import Home from "./components/welcome-section/Home";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = sectionsRef.current;
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <SidebarNavigation activeSection={activeSection} />
      <section id="home" ref={(el) => sectionsRef.current[0] = el}>
        <Home />
      </section>
      <section id="about" ref={(el) => sectionsRef.current[1] = el}>
        <AboutMe />
      </section>
      <section id="cv" ref={(el) => sectionsRef.current[2] = el}>
        <CvSection />
      </section>
      <section id="contact" ref={(el) => sectionsRef.current[3] = el}>
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
