"use client";
import React, { useState, useEffect, useMemo } from 'react';
import BhutanForm from './SMform';
import MonthDateTags from './smavailabledates ';

export default function Herosection() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Move words array to useMemo to prevent recreation on every render
  const words = useMemo(() => ['Singapore', 'Malaysia'], []);
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeoutId;
    
    if (isTyping) {
      // Typing animation
      if (displayText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 120); // Smoother typing speed
      } else {
        // Finished typing, wait 2 seconds then start removing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Removing animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 80); // Smoother removing speed
      } else {
        // Finished removing, switch to next word and start typing
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentWordIndex, words]);

  return (
    <>
      <div className='container-fluid blue-brand-bg-color p-3 d-flex flex-wrap justify-content-center' >
        <h1 className='keyword-title text-center text-white m-0'>Singapore & Malaysia Tour Package from Bangalore
</h1>
      </div>
      <div className='container'>
        <div className=''>
          <div className='row align-items-center'>
            <div className='col-12 col-md-7 px-md-5 py-3'>
              <div className="m-0">
                <h6 className='amazing-title orange-brand-color m-0'>Amazing</h6>
                <h2 className='package-title blue-brand-color m-0' style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'nowrap' }}>
                  <span style={{ 
                    transition: 'all 0.3s ease-in-out',
                    display: 'inline-block',
                    whiteSpace: 'nowrap'
                  }}>
                    {displayText}
                  </span>
                  <span className="typing-cursor">|</span>
                </h2>
              </div>

              <div className='row g-0 p-3 px-md-5'>
                <div className='col-12 col-sm-5 blue-brand-bg-color text-white p-3'>
                  <h6 className='m-0 fw-bold text-center'>7 Days | 6 Nights </h6>
                </div>
                <div className='col-12 col-sm-7 orange-brand-bg-color border border-dark text-white p-3'>
                  <h6 className='m-0 text-center'>
                    <span className='price-font'>Starting From </span><strong>INR 1,24,999*</strong> <span className='price-font'> Per Person</span>
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-airplane d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3 border-end">Flights</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-building d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3 border-end">Hotels</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-car-front d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3 border-end">Cabs</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-cup-hot d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3">Meals</span>
                </div>
              </div>

              <MonthDateTags/>
            </div>

            <div className='col-12 col-md-5' id="hero-section">
              <BhutanForm />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: inherit;
          margin-left: 2px;
          display: inline-block;
          vertical-align: baseline;
          line-height: 1;
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        .package-title span:first-child {
          letter-spacing: 1px;
          transform: translateX(0);
        }
        
        .package-title {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}