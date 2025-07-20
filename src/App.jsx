import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-32">
        <Hero className="" />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
