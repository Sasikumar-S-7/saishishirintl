'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const BaliCarousel = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // ✅ Memoize settings to prevent unnecessary recalculations
  const settings = useMemo(() => ({
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
  }), []);

  // ✅ Memoize images array to prevent unnecessary recreations
  const images = useMemo(() => [
    '/srilanka/client-1.webp',
    '/srilanka/client-2.webp',
    '/srilanka/client-3.webp',
    '/srilanka/client-4.webp',
    '/srilanka/client-5.webp',
    '/srilanka/client-6.webp',
    '/srilanka/client-7.webp',
    
  ], []);

  // Function to get actual image dimensions
  const getImageDimensions = useCallback((imageSrc) => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.onerror = () => {
        resolve({ width: 800, height: 600 }); // fallback dimensions
      };
      img.src = imageSrc;
    });
  }, []);

  const openFullscreen = useCallback(async (imageSrc, index) => {
    setFullscreenImage(imageSrc);
    setCurrentImageIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
    
    // Get actual image dimensions
    const dimensions = await getImageDimensions(imageSrc);
    setImageDimensions(dimensions);
  }, [getImageDimensions]);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    setFullscreenImage('');
    setCurrentImageIndex(0);
    setImageDimensions({ width: 0, height: 0 });
    document.body.style.overflow = 'unset';
  }, []);

  // Navigation functions
  const goToNextImage = useCallback(async () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[nextIndex];
    setCurrentImageIndex(nextIndex);
    setFullscreenImage(nextImage);
    
    // Get dimensions for new image
    const dimensions = await getImageDimensions(nextImage);
    setImageDimensions(dimensions);
  }, [currentImageIndex, images, getImageDimensions]);

  const goToPreviousImage = useCallback(async () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    const prevImage = images[prevIndex];
    setCurrentImageIndex(prevIndex);
    setFullscreenImage(prevImage);
    
    // Get dimensions for new image
    const dimensions = await getImageDimensions(prevImage);
    setImageDimensions(dimensions);
  }, [currentImageIndex, images, getImageDimensions]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isFullscreen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPreviousImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNextImage();
          break;
        case 'Escape':
          e.preventDefault();
          closeFullscreen();
          break;
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isFullscreen, goToNextImage, goToPreviousImage, closeFullscreen]);

  // Calculate display dimensions (actual size but constrained to viewport)
  const getDisplayDimensions = useCallback(() => {
    if (!imageDimensions.width || !imageDimensions.height) return {};
    
    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.85;
    
    let { width, height } = imageDimensions;
    
    // If image is larger than viewport, scale it down while maintaining aspect ratio
    if (width > maxWidth || height > maxHeight) {
      const widthRatio = maxWidth / width;
      const heightRatio = maxHeight / height;
      const scale = Math.min(widthRatio, heightRatio);
      
      width = width * scale;
      height = height * scale;
    }
    
    return { width, height };
  }, [imageDimensions]);

  const displayDimensions = getDisplayDimensions();

  return (
    <div className="container py-4">
      <div className='container'>
        <h2 className='fw-bold my-4 text-center display-4 fw-bold mb-3 WhyChooseUs-module__AIl1iW__sectionTitle WhyChooseUs-module__AIl1iW__fadeInUp'>Our Travelled Customers</h2>
      </div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="carousel-image-wrapper py-5">
              <div 
                className="image-wrapper"
                onClick={() => openFullscreen(src, index)}
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
            {/* Close button */}
            <button className="close-button" onClick={closeFullscreen}>
              ✕
            </button>
            
            {/* Previous button */}
            <button 
              className="nav-button nav-button-prev" 
              onClick={goToPreviousImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            
            {/* Next button */}
            <button 
              className="nav-button nav-button-next" 
              onClick={goToNextImage}
              aria-label="Next image"
            >
              ›
            </button>
            
            <div className="fullscreen-image-wrapper" style={displayDimensions}>
              <Image
                src={fullscreenImage}
                alt="Fullscreen view"
                width={imageDimensions.width}
                height={imageDimensions.height}
                className="fullscreen-image"
                style={{
                  width: displayDimensions.width,
                  height: displayDimensions.height,
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
            
            {/* Image counter */}
            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
            
            {/* Keyboard hint */}
            <div className="keyboard-hint">
              Use ← → arrow keys or click buttons to navigate • ESC to close
            </div>
          </div>
        </div>
      )}

      {/* Scoped styles */}
      <style jsx>{`
        .image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 85%; /* 4:3 aspect ratio */
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
          height: auto;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 90vw;
          max-height: 90vh;
        }

        .fullscreen-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
          background: white;
        }

        .fullscreen-image {
          border-radius: 12px;
          max-width: 100%;
          max-height: 100%;
        }

        .close-button {
          position: absolute;
          top: -60px;
          right: 0;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 50%;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10001;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          color: #333;
        }

        .close-button:hover {
          background: white;
          transform: scale(1.1);
        }

        /* Navigation buttons */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 50%;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10001;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          color: #333;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .nav-button:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-button-prev {
          left: -80px;
        }

        .nav-button-next {
          right: -80px;
        }

        /* Image counter */
        .image-counter {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          background: rgba(0, 0, 0, 0.7);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        /* Keyboard hint */
        .keyboard-hint {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          text-align: center;
          white-space: nowrap;
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
            padding-top: 80%;
          }
          
          :global(.slick-prev) {
            left: -20px;
          }

          :global(.slick-next) {
            right: -20px;
          }

          .nav-button-prev {
            left: -70px;
          }

          .nav-button-next {
            right: -70px;
          }
        }

        @media (max-width: 768px) {
          .image-wrapper {
            padding-top: 85%;
            border-radius: 12px;
          }

          .close-button {
            top: -50px;
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .nav-button {
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          .nav-button-prev {
            left: -60px;
          }

          .nav-button-next {
            right: -60px;
          }

          .fullscreen-content {
            max-width: 95vw;
            max-height: 85vh;
          }

          .image-counter {
            bottom: -45px;
            font-size: 13px;
            padding: 6px 14px;
          }

          .keyboard-hint {
            bottom: -70px;
            font-size: 11px;
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
            top: -45px;
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .nav-button {
            width: 44px;
            height: 44px;
            font-size: 22px;
          }

          .nav-button-prev {
            left: -25px;
          }

          .nav-button-next {
            right: -25px;
          }

          .fullscreen-content {
            max-width: 98vw;
            max-height: 80vh;
          }

          .image-counter {
            bottom: -40px;
            font-size: 12px;
            padding: 5px 12px;
          }

          .keyboard-hint {
            display: none; /* Hide on small screens */
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .nav-button-prev {
            left: -15px;
          }

          .nav-button-next {
            right: -15px;
          }

          .nav-button {
            width: 40px;
            height: 40px;
            font-size: 20px;
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