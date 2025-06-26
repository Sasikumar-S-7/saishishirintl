import React from 'react';
import '../app/bhutanpackage.css';

const packages = [
  {
    title: 'Incredible Bhutan',
    nights: '4N | 5D',
    label: 'Customized Holidays',
    price: '₹ 32 800.00',
    image: "/bhutan-banner.jpg",
  },
  {
    title: 'Bhutan Escape',
    nights: '7N | 8D',
    label: 'Group Tour',
    price: '₹ 42 000.00',
    image: "/bhutan-banner.jpg",
  },
  {
    title: 'Elegant Bhutan',
    nights: '7N | 8D',
    label: 'Customized Holidays',
    price: '₹ 48 800.00',
    image: "/bhutan-banner.jpg",
  },
  {
    title: 'Glimpses Of Bhutan',
    nights: '6N | 7D',
    label: 'Ex Ahmedabad',
    price: '₹ 50 300.00',
    image: "/bhutan-banner.jpg",
  },
  
];

export default function BhutanPackages() {
  return (
    <div className="container py-5">
      <h4 className="text-center mb-4 blue-brand-color fw-bold">
        Our Customized Packages
      </h4>
      <div className="row g-4 justify-content-center">
        {packages.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="package-card">
              <img src={item.image} alt={item.title} className="card-img-top" />
              <div className="package-info">
                <h6 className="package-titles">{item.title}</h6>
                <p className="package-nights">{item.nights}</p>
              </div>
              <div className="label-strip">{item.label}</div>
              <div className="price-block">
                <p className="mb-0">starting at <strong>{item.price}</strong></p>
              </div>
              <div className="text-center pt-3 pb-3">
                <button className="btn btn-primary btn-sm px-4">BOOK NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
