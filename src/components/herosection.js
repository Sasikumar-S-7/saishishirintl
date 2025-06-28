import React from 'react';
import BhutanForm from './Bhutanform';
import DepartureDates from './availabledates';

export default function Herosection() {
  return (
    <>
      <div className='container-fluid blue-brand-bg-color p-3 d-flex flex-wrap justify-content-center' >
        <h1 className='keyword-title text-white m-0'>Best Bhutan Packages From Bangalore</h1>
      </div>
      <div  className='container'>
        <div className=''>
          <div className='row align-items-center'>
            <div className='col-12 col-md-7 px-md-5 py-3'>
              <div className="m-0">
                <h6 className='amazing-title orange-brand-color m-0'>Amazing</h6>
                <h2 className='package-title blue-brand-color m-0'>Bhutan</h2>
                {/* <h2 className='tour-type m-0 text-dark float-end pe-5'>Group Tour</h2> */}
              </div>

              <div className='row g-0 p-3 px-md-5'>
                <div className='col-12 col-sm-5 blue-brand-bg-color text-white p-3'>
                  <h6 className='m-0 fw-bold text-center'>7 Days | 6 Nights </h6>
                </div>
                <div className='col-12 col-sm-7 orange-brand-bg-color border border-dark text-white p-3'>
                  <h6 className='m-0 text-center'>
                    <span className='price-font'>Starting From </span><strong>INR 65,999*</strong> <span className='price-font'> Per Person</span>
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-airplane d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3 border-end">Flights</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-building d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3 border-end">Hotels</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-car-front d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3 border-end">Cabs</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-cup-hot d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color pe-3">Meals</span>
                </div>
                {/* <div className="d-flex align-items-center">
                  <i className="bi bi-binoculars d-flex align-items-center justify-content-center orange-brand-color bg-blue-brand rounded-circle fs-4 me-2" style={{ width: '45px', height: '45px', flexShrink: 0 }}></i>
                  <span className="fw-bold blue-brand-color">Sightseeing</span>
                </div> */}
              </div>

              <DepartureDates/>
            </div>

            <div className='col-12 col-md-5'>
              <BhutanForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
