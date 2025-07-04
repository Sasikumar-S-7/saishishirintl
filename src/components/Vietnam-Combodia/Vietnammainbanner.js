'use client';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const CustomCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Set initial value
      handleResize();
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const slides = [
    {
      id: 1,
      desktopImage: '/bhutan/bhutan-banner-2.webp',
      mobileImage: '/bhutan/bhutan-mb-banner-1.webp',
      title: 'Bhutan Cultural Tour',
    //   description: 'Experience the rich heritage of Bhutan with our exclusive packages from Bangalore'
    },
    {
      id: 2,
      desktopImage: '/bhutan/bhutan-banner-1.webp',
      mobileImage: '/bhutan/bhutan-mb-banner.webp',
      title: 'Himalayan Adventures',
    //   description: 'Trek through breathtaking landscapes with our expert guides'
    },
    {
      id: 3,
      desktopImage: '/bhutan/bhutan-banner-3.webp',
      mobileImage: '/bhutan/bhutan-mb-banner-3.webp',
      title: 'All-Inclusive Packages',
    //   description: 'Flights, accommodation, meals and sightseeing - we handle it all!'
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
        .carousel-caption {
          background: rgba(11, 72, 120, 0.7);
          border-radius: 15px;
          padding: 20px;
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          max-width: 800px;
        }
        .carousel-caption h2, 
        .carousel-caption h3 {
          color: #ff9f26;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .carousel-caption p {
          font-size: 1.1rem;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .carousel-caption {
            bottom: 20%;
            width: 90%;
            padding: 15px;
          }
          .carousel-caption h2,
          .carousel-caption h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          .carousel-caption p {
            font-size: 0.9rem;
          }
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            padding: 10px;
            width: 30px;
            height: 30px;
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
            <div className="d-block w-100" style={{ height: isMobile ? '650px' : '700px', position: 'relative' }}>
              <img
                src={isMobile ? slide.mobileImage : slide.desktopImage}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority={slide.id === 1} // Lazy load except first image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            {/* <Carousel.Caption>
              {slide.id === 1 ? (
                <h2>{slide.title}</h2>
              ) : (
                <h3>{slide.title}</h3>
              )}
              <p>{slide.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;