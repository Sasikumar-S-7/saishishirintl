'use client';
import React from 'react';

const FaqAccordion = ({ onContactSupport }) => {
  const faqItems = [
    {
      question: '1. What is the duration of the Singapore & Malaysia tour package?',
      answer: 'The standard itinerary is for 6 nights and 7 days, covering key attractions in both countries.',
    },
    {
      question: 'Is the Singapore trip package customizable?',
      answer: 'Absolutely! You can modify the Singapore travel package to suit your group size, travel dates, and interests.',
    },
    {
      question: 'What are the visa requirements?',
      answer: 'We provide visa assistance for both Singapore and Malaysia. Requirements include passport copies, photos, and travel details.',
    },
    {
      question: 'What does the Singapore & Malaysia tour package include?',
      answer: 'It includes flights, hotel stays with breakfast, airport transfers, sightseeing, and guide services.',
    },
    {
      question: 'Do you offer group tour to Singapore & Malaysia?',
      answer: 'Yes, we arrange group tours to Singapore and Malaysia with fixed departures and expert tour leaders. ',
    },
     {
      question: 'What are the top attractions included in the itinerary?',
      answer: 'The package covers Gardens by the Bay, Sentosa Island, Universal Studios, Petronas Towers, Batu Caves, and Genting Highlands. ',
    },
     {
      question: 'How do I book the package tour from Bangalore to Singapore & Malaysia?',
      answer: 'You can enquire online or call us directly to get a quote, itinerary, and payment options. ',
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