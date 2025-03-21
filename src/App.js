import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./App.css";

function App() {
  return (
    <Router>  {/* Wrap your app with BrowserRouter */}
      <div className="App">
        <Header />
        <main>
          <About />
          <Skills />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
