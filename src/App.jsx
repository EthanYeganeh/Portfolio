import "./App.scss"
import Test from "./Test";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>  
      <Hero />  
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact"><Contact/></section>
    {/* <Test />
    <Test /> */}

  </div>;
};

export default App;
