import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Steps from "./components/Steps";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import CallToActionContact from "./components/CallToActionContact";
import BannerUpFooter from "./components/BannerUpFooter";
import Footer from "./components/Footer";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollY } = useScroll();
  const [positionY, setPositionY] = useState(0);

  React.useEffect(() => {
    return scrollY.onChange((latest) => {
      setPositionY(latest);
    });
  }, []);

  return (
    <div className="App">
      <motion.div></motion.div>
      <NavBar Y={positionY} />
      <Landing />
      <Steps />
      <Faq />
      <BannerUpFooter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
