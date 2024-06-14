//Sections
import Header from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";
import Mission from "../components/mission";
import AboutUs from "../components/aboutUs";
import Testimonials from "../components/testimonials";
import Portfolio from "../components/portfolio"
import Contact from "../components/contact";
import Footer from "../components/footer";


function Home() {

    return (
      <>
      <Header/>
      <Hero />
      <Services />
      <Mission />
      <AboutUs />
      <Testimonials />
      <Portfolio/>
      <Contact />
      <Footer />
      </>
    );
  }
  
  export default Home;