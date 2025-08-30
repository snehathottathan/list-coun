import React, { useState } from "react";
import Slider from "../components/Slider";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const [region, setRegion] = useState("All");

  return (
    <div className="container py-4 countries-page">
      {/* Header with filters */}
      <Header region={region} setRegion={setRegion} />

      {/* Welcome heading */}
      <h2 className="fw-bold mb-4 text-uppercase d-flex align-items-center justify-content-center">
        <span className="flex-grow-1 border-top"></span>
        <span className="px-3">WELCOME</span>
        <span className="flex-grow-1 border-top"></span>
      </h2>

      {/* Slider + side image */}
      <Slider />

      {/* Countries grid */}
      <CountryList region={region} />
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
}
