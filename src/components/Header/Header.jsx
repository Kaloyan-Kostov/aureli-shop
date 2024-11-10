import React, { useEffect, useState } from "react";
import { DeliveryIcon, ShirtIcon, StellarIcon } from "../../helpers/icons";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="carousel w-full mb-1 relative overflow-hidden">
        <div
          className={`carousel-item w-full flex items-center justify-center transition-opacity duration-500 py-0 ${
            currentSlide === 0 ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center text-black">
            <DeliveryIcon />
            <span className="italic">FREE DELIVERY over 80 BGN!</span>
          </div>
        </div>

        <div
          className={`carousel-item w-full flex items-center justify-center transition-opacity duration-500 py-0 ${
            currentSlide === 1 ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center text-black">
            <ShirtIcon />
            FALL'24 DROP 2 IS OUT!
          </div>
        </div>

        <div
          className={`carousel-item w-full flex items-center justify-center transition-opacity duration-500 py-0 ${
            currentSlide === 2 ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center text-black">
            <StellarIcon />
            Otherworldly SWEATERS!
          </div>
        </div>

        <div
          className={`carousel-item w-full flex items-center justify-center transition-opacity duration-500 py-0 ${
            currentSlide === 3 ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center text-black">
            <DeliveryIcon className="mb-2" />
            <span className="italic">SOMETHING something SoMeThInG!</span>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() =>
              goToSlide((currentSlide - 1 + slideCount) % slideCount)
            }
            className="new-btn transition-all hover:scale-125"
          >
            ❮
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slideCount)}
            className="new-btn transition-all hover:scale-125"
          >
            ❯
          </button>
        </div>
      </div>

      <hr className="mb-3" />
    </>
  );
};

export default Header;
