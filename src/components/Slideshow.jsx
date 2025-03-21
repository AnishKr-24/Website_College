import React, { useState, useEffect } from "react";

const Slideshow = ({ images, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // To move to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // To move to the previous image
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide every `interval` milliseconds
  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [interval]);

  return (
    <div className="relative w-full overflow-hidden ">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="w-full h-auto object-cover transition-all duration-3000 ease-in-out"
      />

      {/* Optional: Display image index */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg flex gap-2">
        {/* {currentIndex + 1} / {images.length} */}
        <span
          className={`h-1 w-2 bg-white block ${currentIndex === 0 && "w-4"}`}
        ></span>
        <span
          className={`h-1 w-2 bg-white block ${currentIndex === 1 && "w-4"}`}
        ></span>
        <span
          className={`h-1 w-2 bg-white block ${currentIndex === 2 && "w-4"}`}
        ></span>
      </div>
    </div>
  );
};

export default Slideshow;
