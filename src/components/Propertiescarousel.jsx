import React, { useState, useEffect } from "react";
import { propertySample } from "../db";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Layout.css";

const Propertiescarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numSlides = Math.ceil(propertySample.length / 3);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % numSlides);
    }, 5000); // swipe every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, numSlides]);
  return (
    <>
      <main className="row mt-5">
        <div className="container">
          <h1 className="text-center">Discover Our Popular Properties</h1>

          <Carousel
            showArrows={true}
            showStatus={true}
            showIndicators={true}
            className="container custom-carousel "
            selectedItem={currentIndex}
          >
            {Array(numSlides)
              .fill(0)
              .map((_, index) => {
                const startIndex = index * 3;
                const endIndex = startIndex + 3;
                const images = propertySample.slice(startIndex, endIndex);
                return (
                  <div key={index}>
                    <div className="row">
                      {images.map((image, idx) => (
                        <div className="col-4" key={idx}>
                          <img src={image.image} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </main>
    </>
  );
};

export default Propertiescarousel;
