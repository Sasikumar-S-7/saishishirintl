'use client';
import React, { useState } from 'react';
import '../app/KailashBanner.css';
import Itinerary from '@/components/ItineraryAccordion';

export default function KailashBanner() {
  const [showItinerary, setShowItinerary] = useState(false);

  const toggleItinerary = () => {
    setShowItinerary(!showItinerary);
  };

  return (
    <div className="kailash-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10">
            <h2 className="fw-bold mb-3 text-center display-4 fw-bold mb-3 WhyChooseUs-module__AIl1iW__sectionTitle WhyChooseUs-module__AIl1iW__fadeInUp">Bhutan Holiday Packages From Bangalore</h2>
            <p className="lead text-muted mb-4 text-center">
              Sai Shishir Tours is thrilled to announce an exciting Bhutan tour package from Bangalore with a flight included. Join us to explore this small, landlocked country, rich in culture, brimming with uniqueness, filled with mountains and picturesque landscapes and one–of–a–kind cuisine all in a tour that is sure to satisfy. Our carefully crafted Bhutan trip package from Bangalore promises an unforgettable adventure with simplicity and joy. As a Bangalore-based company, we specialize in group and customized tour packages to renowned heritage sites in India and across the globe.
            </p>
            <div className="text-center">
              <button 
                onClick={toggleItinerary}
                className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
                style={{
                  backgroundColor: '#ff9f26',
                  border: 'none',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(255, 159, 38, 0.3)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 7px 20px rgba(255, 159, 38, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 159, 38, 0.3)';
                }}
              >
                Click for Itinerary
                <span 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    opacity: '0',
                    borderRadius: '100%',
                    transform: 'scale(1, 1) translate(-50%)',
                    transformOrigin: '50% 50%',
                    transition: 'all 0.3s ease'
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Modal/Popup */}
      {showItinerary && (
       <div style={{
                    // marginTop:'20px',
                  }} className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center z-3">
  <div className="bg-white rounded shadow w-100 w-md-75 w-lg-50 h-100 h-md-auto overflow-auto">
    
    <div className="d-flex justify-content-end border-bottom p-3">
      <button 
        className="btn-close" 
        aria-label="Close" 
        onClick={toggleItinerary}
      ></button>
    </div>
    
    <div className="p-3">
      <Itinerary />
    </div>
    
  </div>
</div>
      )}
    </div>
  );
}