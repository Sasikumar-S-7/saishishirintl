'use client';
import React from 'react';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container bg-light text-center text-md-start py-4 border-top">
      <div className="container px-4">
        <div className="row align-items-center">

          {/* Logo & Description */}
          <div className="col-md-6 mb-3 mb-md-0 text-md-start text-center">
            <img
              src="/Saishishir-logo.webp"
              alt="Sai Shishir Tours"
              className="footer-logo mb-2"
            />
            <p className="text-muted small mb-0">
              Sai Shishir Tours – Creating soulful travel experiences with love and care 💙
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 text-md-end text-center">
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              <a href="tel:+918951062993" className="text-decoration-none text-dark fw-semibold">
                +91 89510 62993
              </a>
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              <a href="mailto:info@saishishirtours.in" className="text-decoration-none text-dark fw-semibold">
                info@saishishirtours.in
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-4 pt-3 border-top text-muted small">
          &copy; {year} Sai Shishir Tours. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
