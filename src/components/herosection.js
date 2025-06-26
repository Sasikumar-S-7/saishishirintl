import React from 'react';

export default function BhutanTourBanner() {
  return (
    <>
    <div className='container-fluid blue-brand-bg-color p-3 d-flex flex-wrap justify-content-center'>
            <h1 className='keyword-title text-white m-0'>Best Bhutan Packages From Bangalore</h1>
    </div>
    <div className='container-fluid bg-light'>
      <div className=''>
        <div className='row align-items-center'>
         <div className='col-12 col-md-6 px-md-5 py-3'>
            <div className="m-0">
              <h6 className='amazing-title orange-brand-color m-0'>Amazing</h6>
              <h2 className='package-title blue-brand-color m-0'>Bhutan</h2>
              {/* <h2 className='tour-type m-0 text-dark float-end pe-5'>Group Tour</h2> */}
            </div>

            <div className='row g-0 p-3 px-md-5'>
              <div className='col-12 col-sm-5 blue-brand-bg-color text-white p-3'>
                <h6 className='m-0 fw-bold text-center'>6 Nights | 7 Days</h6>
              </div>
              <div className='col-12 col-sm-7 orange-brand-bg-color border border-dark text-white p-3'>
                <h6 className='m-0 text-center'>
                  <span className='price-font'>Starting From </span><strong>INR 35,999*</strong> <span className='price-font'> Per Person</span>
                </h6>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-building orange-brand-color fs-4 me-2"></i>
                <span className="fw-bold blue-brand-color pe-3 border-end">Hotels</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-car-front orange-brand-color fs-4 me-2"></i>
                <span className="fw-bold blue-brand-color pe-3 border-end">Cabs</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-cup-hot orange-brand-color fs-4 me-2"></i>
                <span className="fw-bold blue-brand-color pe-3 border-end">Meals</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-binoculars orange-brand-color fs-4 me-2"></i>
                <span className="fw-bold blue-brand-color">Sightseeing</span>
              </div>
            </div>

            <div className='d-flex flex-wrap justify-content-center text-md-start'>
              <button className='px-4 blue-brand-bg-color text-white fw-bold py-2'>
                Get Expert Advice + Itinerary 
              </button>
            </div>
          </div>

          <div className='col-12 col-md-6 main-banner'>
            {/* You can place an image or banner here */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
