'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const BaliCarousel = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  const images = [
    '/portrait-young-woman-taking-pictures-holiday.jpg',
    '/portrait-young-woman-taking-pictures-holiday.jpg',
    '/portrait-young-woman-taking-pictures-holiday.jpg',
    '/portrait-young-woman-taking-pictures-holiday.jpg',
    '/portrait-young-woman-taking-pictures-holiday.jpg',
    '/full-shot-travel-concept-with-landmarks.jpg',
  ];

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage('');
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="container py-4">
        <div className='container'>
            <h2 className='m-0 blue-brand-color fw-bold py-4 text-center'>Our Travelled Customers</h2>
        </div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="carousel-image-wrapper">
              <div 
                className="image-wrapper"
                onClick={() => openFullscreen(src)}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="carousel-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="hover-overlay">
                  <div className="zoom-icon">🔍</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeFullscreen}>
              ✕
            </button>
            <div className="fullscreen-image-wrapper">
              <Image
                src={fullscreenImage}
                alt="Fullscreen view"
                fill
                className="fullscreen-image"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Scoped styles */}
      <style jsx>{`
        .image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 75%; /* 4:3 aspect ratio */
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .image-wrapper:hover {
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.2);
          transform: translateY(-4px);
        }

        .carousel-img {
          object-fit: cover;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 16px;
          height:auto;
        }

        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px;
          backdrop-filter: blur(2px);
        }

        .image-wrapper:hover .hover-overlay {
          opacity: 1;
        }

        .zoom-icon {
          font-size: 2rem;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover .zoom-icon {
          transform: scale(1);
        }

        .slick-center .carousel-img {
          transform: scale(1.08);
        }

        .slick-slide:not(.slick-center) .carousel-img {
          transform: scale(0.92);
          filter: brightness(0.85);
        }

        .slick-center .image-wrapper {
          z-index: 2;
        }

        /* Fullscreen Modal Styles */
        .fullscreen-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease;
        }

        .fullscreen-content {
          position: relative;
          width: 90vw;
          height: 90vh;
          max-width: 1200px;
          max-height: 800px;
        }

        .fullscreen-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
        }

        .fullscreen-image {
          object-fit: contain;
        }

        .close-button {
          position: absolute;
          top: -50px;
          right: 0;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10001;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .close-button:hover {
          background: white;
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Custom Slick Arrows */
        :global(.slick-prev),
        :global(.slick-next) {
          width: 50px;
          height: 50px;
          z-index: 10;
        }

        :global(.slick-prev:before),
        :global(.slick-next:before) {
          font-size: 30px;
          color: #667eea;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        :global(.slick-prev) {
          left: -30px;
        }

        :global(.slick-next) {
          right: -30px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .image-wrapper {
            padding-top: 80%; /* Slightly taller for tablets */
          }
          
          :global(.slick-prev) {
            left: -20px;
          }

          :global(.slick-next) {
            right: -20px;
          }
        }

        @media (max-width: 768px) {
          .image-wrapper {
            padding-top: 85%; /* More square for mobile */
            border-radius: 12px;
          }

          .close-button {
            top: -40px;
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .fullscreen-content {
            width: 95vw;
            height: 85vh;
          }

          :global(.slick-prev),
          :global(.slick-next) {
            width: 40px;
            height: 40px;
          }

          :global(.slick-prev:before),
          :global(.slick-next:before) {
            font-size: 24px;
          }

          :global(.slick-prev) {
            left: -10px;
          }

          :global(.slick-next) {
            right: -10px;
          }
        }

        @media (max-width: 480px) {
          .image-wrapper {
            padding-top: 90%;
            border-radius: 10px;
          }

          .zoom-icon {
            font-size: 1.5rem;
          }

          .close-button {
            top: -35px;
            width: 32px;
            height: 32px;
            font-size: 16px;
          }

          .fullscreen-content {
            width: 98vw;
            height: 80vh;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .image-wrapper {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }
        }
      `}</style>
    </div>
  );
};

export default BaliCarousel;