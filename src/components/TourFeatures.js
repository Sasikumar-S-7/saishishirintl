import React from 'react';
import { 
  Hotel, 
  UserCheck, 
  Utensils, 
  DollarSign, 
  Bus, 
  Plane 
} from 'lucide-react';

const TourFeatures = () => {
  const features = [
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Comfortable & convenient hotels cherry picked by our hotel management team'
    },
    {
      icon: UserCheck,
      title: 'Tour managers',
      description: 'We have an exclusive team of 350 tour managers specialising in India and World tours'
    },
    {
      icon: Utensils,
      title: 'All meals',
      description: 'Eat to your heart\'s content Breakfast, Lunch, Dinner'
    },
    {
      icon: DollarSign,
      title: 'Best value itinerary',
      description: 'Our dedicated product & destination research team spends hours curating the best value for money itineraries'
    },
    {
      icon: Bus,
      title: 'On-tour transport',
      description: 'Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free travel'
    },
    {
      icon: Plane,
      title: 'To and fro airfare',
      description: 'Versex World tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option'
    }
  ];

  return (
    <div>
      {/* Bootstrap 5 CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h1 className="display-5 fw-bold mb-3">All inclusive tours, Chalo Bag Bharo Nikal Pado</h1>
            </div>
          </div>
          
          <div className="row">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" 
                           style={{ width: '64px', height: '64px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
                        <IconComponent 
                          size={32} 
                          className="text-primary"
                        />
                      </div>
                      <h3 className="h5 mb-0">{feature.title}</h3>
                    </div>
                    <p className="mb-0 text-muted">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourFeatures;