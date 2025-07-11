'use client';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const CustomCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const slides = [
    {
      id: 1,
      desktopImage: '/SM/Singapore-&-Malaysia-1.webp',
      mobileImage: '/SM/Singapore-&-Malaysia-mobile-1.webp',
      title: 'SM Cultural Tour',
    },
    {
      id: 2,
      desktopImage: '/SM/Singapore-&-Malaysia-2.webp',
      mobileImage: '/SM/Singapore-&-Malaysia-mobile-2.webp',
      title: 'Adventures',
    },
    {
      id: 3,
      desktopImage: '/SM/Singapore-&-Malaysia-3.webp',
      mobileImage: '/SM/Singapore-&-Malaysia-mobile-3.webp',
      title: 'All-Inclusive Packages',
    },
    {
      id: 4,
      desktopImage: '/SM/Singapore-&-Malaysia-4.webp',
      mobileImage: '/SM/Singapore-&-Malaysia-mobile-4.webp',
      title: 'All-Inclusive Packages',
    }
  ];

  return (
    <div className="responsive-carousel">
      <style jsx>{`
        .carousel-indicators button {
          background-color: #0b4878 !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          margin: 0 5px !important;
        }
        .carousel-indicators .active {
          background-color: #ff9f26 !important;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: #ff9f26;
          border-radius: 50%;
          padding: 15px;
          background-size: 60%;
          width: 40px;
          height: 40px;
        }
        
        /* Full image display styles */
        .carousel-item {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
        }
        
        .image-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-container img {
        margin-top:40px;
          
          width: auto;
          height: auto;
          object-fit: cover;
        }
        
        @media (max-width: 768px) {
          .carousel-item {
            height: 700px;
          }
          
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            padding: 10px;
            width: 30px;
            height: 30px;
          }
        }
        
        @media (min-width: 769px) {
          .carousel-item {
            height: 700px;
          }
        }
      `}</style>

      <Carousel 
        fade 
        indicators 
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} interval={3000}>
            <div className="image-container">
              <img
                src={isMobile ? slide.mobileImage : slide.desktopImage}
                alt={slide.title}
                style={{ 
                  
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading={slide.id === 1 ? 'eager' : 'lazy'}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;