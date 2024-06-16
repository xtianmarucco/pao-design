import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BackToTop from "./components/back-to-top-button/BackToTop"
import AboutMe from "./components/about-me-section/AboutMe";
import ContactSection from "./components/contact-section/ContactSection";
import CvSection from "./components/cv-section/CvSection";
import SidebarNavigation from "./components/sidebar-navigation/SidebarNavigation";
import Home from "./components/welcome-section/Home";
import ProjectsSection from "./components/projects-section/ProjectsSection";

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
       {/* <img src="./doodle-1.svg" alt="Doodle 1" className="doodle doodle1" />
       <img src="./doodle-2.svg" alt="Doodle 2" className="doodle doodle2" />
       <img src="./doodle-3.svg" alt="Doodle 1" className="doodle doodle3" />
       <img src="./doodle-4.svg" alt="Doodle 2" className="doodle doodle4" />
       <img src="./doodle-5.svg" alt="Doodle 1" className="doodle doodle5" />
       <img src="./doodle-6.svg" alt="Doodle 2" className="doodle doodle6" />
       <img src="./doodle-7.svg" alt="Doodle 2" className="doodle doodle7" />
       <img src="./doodle-8.svg" alt="Doodle 2" className="doodle doodle8" />
       <img src="./doodle-9.svg" alt="Doodle 2" className="doodle doodle9" />
       <img src="./doodle-10.svg" alt="Doodle 2" className="doodle doodle10" /> */}
      <SidebarNavigation activeSection={activeSection} />
      <BackToTop/>
      <section id="home" ref={(el) => sectionsRef.current[0] = el}>
        <Home />
      </section>
      <br></br>
      <section id="about" ref={(el) => sectionsRef.current[1] = el}>
        <AboutMe />
      </section>
      <br></br>
      <section id="cv" ref={(el) => sectionsRef.current[2] = el}>
        <CvSection />
      </section>
      <br></br>
      <section id="portfolio" ref={(el) => sectionsRef.current[3] = el}>
        <ProjectsSection/>
      </section>
      <br></br>
      <section id="contact" ref={(el) => sectionsRef.current[4] = el}>
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
