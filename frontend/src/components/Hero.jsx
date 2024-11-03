import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return ( 
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-gray-700"></span>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrival</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <span className="w-8 md:w-11 h-[2px] bg-gray-700"></span>
          </div>
        </div>
      </div>

      {/* Optional Image Section */}
      {/* Uncomment the line below to include hero image */}
      {/* <img src={assets.hero_img} className="w-full sm:w-1/2" alt="Hero Image" /> */}

      {/* Carousel Section */}
      <div className='w-full sm:w-1/2'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={assets.hero_img} className="d-block w-full sm:-w-1/2" alt="Slide 1" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={assets.hero1_img} className="d-block w-full sm:-w-1/2" alt="Slide 2" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={assets.hero2_img} className="d-block w-full sm:-w-1/2" alt="Slide 3" />
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
