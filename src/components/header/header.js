'use client';
import React from 'react';
import Image from "next/image";
const Header = () => {
  return (
    <header className="header-container border-bottom bg-white py-2">
      <div className="container d-flex justify-content-between align-items-center px-3">
        {/* Logo */}
        <div className="logo-wrapper">
          <Image
  src="/Saishishir-logo.webp"
  alt="Sai Shishir Tours Logo"
  width={150}   // adjust as per your layout
  height={60}
/>
        </div>
        {/* Call Button */}
        <div>
          <a href="tel:+918951062993" className="call-button d-flex align-items-center">
            <i className="bi bi-telephone-fill me-2"></i>
            <span className="fw-bold">+91 89510 62993</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
