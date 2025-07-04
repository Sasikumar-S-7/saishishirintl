'use client';
import React from 'react';
import { CheckCircle, ArrowRight } from 'react-bootstrap-icons';

const BhutanExperience = ({ onDiscussTripClick }) => {
  const handleDiscussTripClick = () => {
    if (onDiscussTripClick) {
      onDiscussTripClick();
    } else {
      // Fallback: scroll to element with id 'hero-section'
      const heroElement = document.getElementById('hero-section');
      if (heroElement) {
        heroElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div className="container my-5">
      {/* Section 2: What's Included */}
      <section className="row justify-content-center my-5 py-4">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: '#0b4878' }}>
Whats Included in This Bhutan Package?

            </h2>
            <div className="border-bottom mx-auto" style={{ width: '100px', borderColor: '#ff9f26', borderWidth: '3px' }}></div>
          </div>

          <div className="row g-4">
            {[
              "6-7 day guided cultural and spiritual journey",
              "Thimphu and Paro exploration with local expert guides",
              "Tiger's Nest Monastery trek and meditation experiences",
              "Traditional Bhutanese cultural programs and local interactions",
              "All permits, visas, and sustainable tourism fees managed for you",
              "Small group departures available throughout the year"
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                  <CheckCircle className="me-3 mt-1" color="#22c55e" size={24} />
                  <p className="mb-0" style={{ color: '#334155' }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* Section 3: Customizable Packages */}
      <section className="row justify-content-center my-5 py-5">
        <div className="col-lg-10 text-center">
          <h2 className="fw-bold mb-4" style={{ color: '#0b4878' }}>
We offer customizable Bhutan travel packages for families, couples, and groups          </h2>
          <div className="row g-4 mt-4">
            {[
            "Family-friendly Bhutan holiday packages",
"Romantic Bhutan trip packages for couples",
"Budget Bhutan travel packages",
"Group tour to Bhutan",
"Custom trip to Bhutan packages",
"Package tours from Bangalore to Bhutan"
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="p-4 h-100 rounded-4" style={{ 
                  backgroundColor: '#f8fafc',
                  borderLeft: '4px solid #ff9f26'
                }}>
                  <p className="mb-0 fw-semibold" style={{ color: '#0b4878' }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Connect with Specialist */}
      <section className="row justify-content-center my-5 py-5 bg-light rounded-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-4" style={{ color: '#0b4878' }}>
Connect with a Bhutan Specialist
          </h2>
          <p className="lead mb-5" style={{ color: '#475569' }}>
           Curious about the Land of the Thunder Dragon?<br />
            Our Bhutan experts will guide you through permit requirements and craft your perfect Himalayan adventure.

          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button
              onClick={handleDiscussTripClick}
              className="btn btn-lg px-4 py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: '#ff9f26',
                color: 'white',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 159, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
             Discuss Your Bhutan Trip
              <ArrowRight className="ms-2" size={20} />
            </button>
            
            {/* <button 
              className="btn btn-lg px-4 py-3 rounded-pill fw-semibold d-flex align-items-center"
              style={{
                backgroundColor: 'white',
                color: '#0b4878',
                border: '2px solid #0b4878',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0b4878';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#0b4878';
              }}
            >
              Get Permit Information
              <ArrowRight className="ms-2" size={20} />
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BhutanExperience;