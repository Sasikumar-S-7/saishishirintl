'use client';

import React from 'react';
// import '../../app/bhutanpackage.css';
import Image from "next/image";

const packages = [
  {
    title: 'Sri Lanka ',
    nights: '4D | 3N',
    label: 'Without Flight',
    price: '₹ 29,000',
    image: "/srilanka/Srilanka-SQ-1.webp",
  },
  {
    title: 'Sri Lanka ',
    nights: '5D | 4N',
    label: 'Without Flight',
    price: '₹ 39,000',
    image: "/srilanka/Srilanka-SQ-2.webp",
  },
  {
    title: 'Sri Lanka ',
    nights: '6D | 5N',
    label: 'Without Flight',
    price: '₹ 49,000',
    image: "/srilanka/Srilanka-SQ-3.webp",
  },
  {
    title: 'Complete Sri Lanka',
    nights: '7D | 6N',
    label: 'With Flight',
    price: '₹ 85,000',
    image: "/srilanka/Srilanka-SQ-4.webp",
  },
];

export default function SriLankaPackages() {
  const handleScroll = () => {
    const section = document.getElementById('hero-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 blue-brand-color fw-bold">
        Our Customized Packages
      </h2>
      <div className="row g-4 justify-content-center">
        {packages.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="package-card">
              <img src={item.image} alt={item.title} className="card-img-top" width={500} height={400} />
              <div className="package-info">
                <h6 className="package-titles">{item.title}</h6>
                <p className="package-nights fw-bold ">{item.nights}</p>
              </div>
              <div className="label-strip">{item.label}</div>
              <div className="price-block">
                <p className="mb-0 text-center">starting at <strong>{item.price}</strong></p>
              </div>
              <div className="text-center pt-3 pb-3">
                <button
                  className="btn blue-brand-bg-color text-white fw-bold btn-sm px-4"
                  onClick={handleScroll}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
