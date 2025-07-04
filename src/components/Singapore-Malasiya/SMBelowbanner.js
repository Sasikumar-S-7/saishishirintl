'use client';
import React, { useState } from 'react';
import '../../app/KailashBanner.css';
// import Itinerary from './SMItineraryAccordion';
// import Itinerary from '@/components/ItineraryAccordion';

export default function SMBelowBanner() {
    const [showItinerary, setShowItinerary] = useState(false);

    const toggleItinerary = () => {
        setShowItinerary(!showItinerary);
    };

    return (
        <div className="kailash-banner">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10">
                        <h2 className="fw-bold mb-3 text-center display-4 fw-bold mb-3 sectionTitle fadeInUp blue-brand-color">Looking to book Singapore Malaysia tour package with ease?

                        </h2>
                        <p className="lead text-muted mb-4 text-center">
                            Explore our Singapore Malaysia trip with flights, crafted specially for travelers seeking comfort and value. Whether its a Singapore Malaysia tour from India for families, couples, or groups, we offer the most affordable Singapore Malaysia tour options. Choose the best Singapore Malaysia holiday package with flights, 3/4-star hotels, and sightseeing included. Enjoy an all-inclusive Singapore Malaysia trip with zero hassle. From a dreamy Singapore Malaysia honeymoon package to a fun-filled Singapore Malaysia family tour, and exciting Singapore Malaysia group travel deal, we have it all. Our budget Singapore Malaysia tour package comes with flexible dates and easy booking. So if youre ready to book Singapore Malaysia package, grab our cheap Singapore Malaysia tour with hotel, or go for a complete flight + hotel Singapore Malaysia trip. Dont miss our Singapore Malaysia 6 nights 7 days package and last-minute Singapore Malaysia tour deals designed just for you!
                        </p>
                        <div className="text-center">
                            {/* <button 
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
               Singapore & Malaysia Trip Itinerary
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
              </button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Itinerary Modal/Popup */}
            {/* {showItinerary && (
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

      )} */}
        </div>
    );
}