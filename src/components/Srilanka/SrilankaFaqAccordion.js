'use client';
import React from 'react';

const FaqAccordion = ({ onContactSupport }) => {
  const faqItems = [
    {
      question: 'What is the duration of the Sri Lanka tour package from Bangalore?',
      answer: 'The standard package is for 5 nights and 6 days, covering top destinations like Colombo, Kandy, Nuwara Eliya, and Bentota.',
    },
    {
      question: 'What is included in the Sri Lanka travel package?',
      answer: 'The package includes flights from Bangalore, hotel stays, daily breakfast, transfers, sightseeing, entry tickets, and a local English-speaking guide.',
    },
    {
      question: 'Can the Sri Lanka trip itinerary be customised?',
      answer: 'Yes, the itinerary is fully customizable based on your preferences, group size, or travel purpose (family, couple, group tour, etc.).',
    },
    {
      question: 'Is travel insurance provided?',
      answer: 'Yes, basic travel insurance is included for your safety and peace of mind.',
    },
    {
      question: 'How do I book this Sri Lanka package?',
      answer: 'Click the "Plan My Sri Lanka Trip" button or call us to get started with a free quote. ',
    },
  ];

  const handleContactSupport = () => {
    if (onContactSupport) {
      onContactSupport();
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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 blue-brand-color">Frequently Asked Questions</h2>
            <p className="lead text-muted">Everything you need to know about our travel packages</p>
          </div>

          <div className="accordion accordion-flush" id="faqAccordion">
            {faqItems.map((item, index) => (
              <div className="accordion-item border-0 border-bottom" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed bg-transparent fw-semibold py-4 d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    <span className="blue-brand-color fw-bold me-2">{String(index + 1).padStart(2, '0')}.</span>
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body pt-0 pb-4 ps-5 text-muted fade-in">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <p className="text-muted mb-3">Still have questions?</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button 
                onClick={handleContactSupport}
                className="btn blue-brand-bg-color text-white fw-bold"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Animation Style */}
      <style jsx>{`
        .fade-in {
          transition: all 0.4s ease-in-out;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default FaqAccordion;