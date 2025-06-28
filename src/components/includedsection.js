'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import { ArrowRight } from 'lucide-react';
import BhutanForm from './Bhutanform';

const BhutanExperience = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
        if (modalRef.current) {
          modalInstance.current = new bootstrap.Modal(modalRef.current);
        }
      });
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      if (modalInstance.current) {
        modalInstance.current.show();
      }
    }, 100); // Give time for modal DOM to exist
  };

  return (
    <div className="container my-5">
      {/* Section 1: What's Included */}
      <section className="row justify-content-center my-5 py-4">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: '#0b4878' }}>
              Whats Included in Your Bhutan Experience?
            </h2>
            <div
              className="border-bottom mx-auto"
              style={{
                width: '100px',
                borderColor: '#ff9f26',
                borderWidth: '3px',
              }}
            ></div>
          </div>

          <div className="row g-4">
            {[
              '6-8 day guided cultural and spiritual journey',
              'Thimphu and Paro exploration with local expert guides',
              "Tiger's Nest Monastery trek and meditation experiences",
              'Traditional Bhutanese cultural programs and local interactions',
              'All permits, visas, and sustainable tourism fees managed for you',
              'Small group departures available throughout the year',
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                  <CheckCircle className="me-3 mt-1" color="#22c55e" size={24} />
                  <p className="mb-0" style={{ color: '#334155' }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Contact Specialist */}
      <section className="row justify-content-center my-5 py-5 bg-light rounded-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-4" style={{ color: '#0b4878' }}>
            Connect with a Bhutan Specialist
          </h2>
          <p className="lead mb-5" style={{ color: '#475569' }}>
            Curious about the Land of the Thunder Dragon?
            <br />
            Our Bhutan experts will guide you through permit requirements and craft your perfect Himalayan adventure.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button
              className="btn btn-lg px-4 py-3 rounded-pill fw-semibold d-flex align-items-center mx-auto"
              style={{
                backgroundColor: '#ff9f26',
                color: 'white',
                border: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 159, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={openModal}
            >
              Discuss Your Bhutan Trip
              <ArrowRight className="ms-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="bhutanFormModal"
        tabIndex="-1"
        aria-labelledby="bhutanFormModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-0">
              {/* <h5 className="modal-title text-center fw-bold" id="bhutanFormModalLabel">
                Plan Your Bhutan Trip
              </h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <BhutanForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhutanExperience;
