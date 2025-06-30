import React from 'react';

const TourFeatures = () => {
  const features = [
    {
      icon: 'bi-airplane',
      title: 'Air fare',
      description: 'Round-trip flights included from major Indian cities for hassle-free travel'
    },
    {
      icon: 'bi-building',
      title: 'Hotels',
      description: 'Comfortable 3-4 star accommodations in prime locations for your convenience'
    },
    {
      icon: 'bi-egg-fried',
      title: 'Meals',
      description: 'Daily breakfast, lunch, and dinner featuring local and international cuisines'
    },
    {
      icon: 'bi-binoculars',
      title: 'Site-seeing',
      description: 'Guided visits to all major attractions and hidden gems at each destination'
    },
    {
      icon: 'bi-person-badge',
      title: 'Tour Guide',
      description: 'Experienced multilingual guides to enhance your travel experience'
    },
    {
      icon: 'bi-bus-front',
      title: 'Transportation',
      description: 'Comfortable private coaches and transfers between all locations'
    }
  ];

  return (
    <div>
      
      
      {/* Custom Brand Colors */}
      <style>
        {`
          .blue-brand-color {
            color: #0b4878;
          }
          .orange-brand-color {
            color: #ff9f26;
          }
          .bg-blue-brand {
            background-color: rgba(11, 72, 120, 0.1);
          }
        `}
      </style>
      
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h1 className="display-5 fw-bold mb-3 blue-brand-color">All Inclusive Tours</h1>
              <p className="lead orange-brand-color">Your Worry-Free Bhutan Trip!</p>
            </div>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm d-flex align-items-start">
                  <div className="d-flex align-items-center justify-content-center bg-blue-brand rounded-circle me-3" 
                       style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                    <i className={`bi ${feature.icon} fs-3 orange-brand-color`}></i>
                  </div>
                  <div>
                    <h3 className="h5 mb-2 blue-brand-color">{feature.title}</h3>
                    <p className="mb-0 text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourFeatures;