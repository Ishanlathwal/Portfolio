import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import PersonalProject from "./components/PersonalProject";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-max">
          <Navbar />
          <Hero />
        </div>
        <About />
        <PersonalProject />
        <Tech />
        <Certificates />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
