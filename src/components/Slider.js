import "./Slider.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import CarousalImage1 from "../assets/images/img2.png";
import CarousalImage2 from "../assets/images/img6.png";
import CarousalImage3 from "../assets/images/img8.png";
import CarousalImage4 from "../assets/images/img7.png";

function WelcomeSection() {
  const slides = [CarousalImage3, CarousalImage2, CarousalImage1];
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  return (
    <Container className="welcome-wrap px-0">
    
      <Row className="g-3">
        {/* Left Slider */}
        <Col lg={9} xs={12} className="order-2 order-lg-1">
          <div className="custom-carousel">
            <img
              src={slides[current]}
              alt={`slide-${current + 1}`}
              className="slider-img"
            />

            {/* Controls */}
            <div className="controls">
              <button className="arrow-btn" aria-label="Previous" onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <div className="dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${current === i ? "active" : ""}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
              <button className="arrow-btn" aria-label="Next" onClick={nextSlide}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </Col>

        {/* Right Side Image */}
        <Col
          lg={3}
          xs={12}
          className="order-1 order-lg-2 d-flex align-items-stretch"
        >
          <img src={CarousalImage4} alt="side" className="side-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeSection;
