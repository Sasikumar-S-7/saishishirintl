'use client';
import React from 'react';

const FaqAccordion = () => {
  const faqItems = [
    {
      question: 'What is included in the tour package?',
      answer: 'Our comprehensive packages include round-trip flights, premium accommodation, daily meals, sightseeing, transfers, and more.',
    },
    {
      question: 'How can I book a package?',
      answer: 'You can book directly on our website, via WhatsApp, or call our travel experts for assistance.',
    },
    {
      question: 'Are the packages customizable?',
      answer: 'Yes! Most of our packages can be fully tailored to your preferences.',
    },
    {
      question: 'Do you provide visa assistance?',
      answer: 'Absolutely! We help with documentation, appointments, and end-to-end visa processing.',
    },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-primary mb-3">Frequently Asked Questions</h2>
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
                    <span className="text-primary fw-bold me-2">{String(index + 1).padStart(2, '0')}.</span>
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
              <a href="#" className="btn btn-primary">Contact Support</a>
              <a href="#" className="btn btn-outline-warning text-dark">Live Chat</a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Animation Style */}
      <style jsx>{`
        .fade-in {
          transition: all 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FaqAccordion;
