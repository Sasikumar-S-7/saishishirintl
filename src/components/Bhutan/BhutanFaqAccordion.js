'use client';
import React from 'react';

const FaqAccordion = ({ onContactSupport }) => {
  const faqItems = [
    {
      question: 'Do Indians require a visa to visit Bhutan from Bangalore?',
      answer: 'No, Indians dont need a visa for a Bhutan package from Bangalore. A Voter ID is sufficient, and a passport is not mandatory.',
    },
    {
      question: 'Which major attractions in Bhutan does this tour package include?',
      answer: 'Our Bhutan tour package from Bangalore covers Tigers Nest, DochuLa Pass, Punakha Dzong, Thimphu City, Buddha Point, Gelephu, Gedu, the Hanging Bridge in Punakha, river rafting, the National Museum in Paro, and shopping in Phuentsholing.',
    },
    {
      question: 'Are there any events to attend during the Bhutan tour from Bangalore?',
      answer: 'Yes, there is the River Rafting event on the Punakha river during the Bhutan tour from Bangalore.',
    },
    {
      question: 'Can I participate in traditional Bhutanese activities in this tour package?',
      answer: 'Yes, you can participate in traditional Bhutanese activities with this tour package from Bangalore, including Bhutanese dance programs, bonfires, and folk dances.',
    },
    {
      question: 'What is the best time to visit Bhutan?',
      answer: 'The best time to visit Bhutan is during the spring (March to May) or autumn (September to November). Spring offers lush greenery and vibrant flowers, while autumn is known for the Thimphu festival and clear mountain views. However, each season has its own charm, so it depends on your preferences. ',
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