import { useState } from "react";
;import "./App.css";

//Sections
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Mission from "./components/mission";
import AboutUs from "./components/aboutUs";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Mission />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
