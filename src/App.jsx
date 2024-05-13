import "./App.scss"
import Test from "./Test";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>  
      <Hero />  
    </section>
    <section id="Services">Parallex</section>
    <section>Services</section>
    <section id="Portfolio">Parallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test />
    <Test /> */}

  </div>;
};

export default App;
