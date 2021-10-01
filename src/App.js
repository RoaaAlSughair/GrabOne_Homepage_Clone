import React from "react";
import { location, category, merchandise } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import DoubleNavbar from "./DoubleNavBar/DoubleNavbar";
import HeroBanner from "./Hero Section/HeroSection";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <DoubleNavbar />
      <HeroBanner />
      <Main categories={category} items={merchandise} />
      <Footer />
    </div>
  );
}

export default App;
