import React, { useState } from "react";
import Slider from "react-slick";

function ProjectsSlider() {
  const [display, setDisplay] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <div
        style={{
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
        </Slider>
      </div>
    </div>
  );
}

export default ProjectsSlider;