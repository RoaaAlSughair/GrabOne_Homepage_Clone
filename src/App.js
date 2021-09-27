import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from "./Hero Section/HeroSection";
import DoubleNavbar from "./DoubleNavBar/DoubleNavbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <DoubleNavbar />
      <HeroBanner />
      <Footer />
    </div>
  );
}

export default App;
