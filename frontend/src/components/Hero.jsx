import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return ( 
    <div className="flex flex-col sm:flex-row items-center border border-gray-400 mx-2 my-4 sm:mx-6 sm:my-8 lg:mx-10 lg:my-12 shadow-lg rounded-lg overflow-hidden min-h-[50vh] sm:min-h-[70vh]">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-4 py-6 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="text-gray-700 max-w-xs sm:max-w-md space-y-4 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-6 sm:w-8 md:w-10 h-[2px] bg-gray-700"></span>
            <p className="font-medium text-xs sm:text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-tight">Latest Arrival</h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="font-semibold text-xs sm:text-sm md:text-base">SHOP NOW</p>
            <span className="w-6 sm:w-8 md:w-10 h-[2px] bg-gray-700"></span>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-2 sm:p-4 lg:p-6">
        <div id="carouselExampleInterval" className="carousel slide w-full max-w-sm sm:max-w-md lg:max-w-lg" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner rounded-lg overflow-hidden shadow-md">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={assets.hero_img} className="d-block w-full h-48 sm:h-64 md:h-80 object-cover" alt="Slide 1" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={assets.hero1_img} className="d-block w-full h-48 sm:h-64 md:h-80 object-cover" alt="Slide 2" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={assets.hero2_img} className="d-block w-full h-48 sm:h-64 md:h-80 object-cover" alt="Slide 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;