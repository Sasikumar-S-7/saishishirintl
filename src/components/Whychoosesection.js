'use client';

import React, { useEffect, useState } from 'react';
import { 
  Shield, 
  Users, 
  MapPin, 
  Clock, 
  Award, 
  Headphones, 
  DollarSign, 
  Star 
} from 'lucide-react';
import styles from '../app/WhyChooseUs.module.css';

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: 1,
      icon: Shield,
      title: "Safe & Secure Travel",
      description: "Your safety is our priority. We ensure secure accommodations, reliable transport, and comprehensive travel insurance coverage.",
      color: "#22c55e"
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Tour Managers",
      description: "350+ experienced tour managers specializing in India and international destinations to make your journey memorable.",
      color: "#3b82f6"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Handpicked Destinations",
      description: "Carefully curated itineraries featuring the most beautiful and culturally rich destinations around the world.",
      color: "#f59e0b"
    },
    {
      id: 4,
      icon: Clock,
      title: "15+ Years Experience",
      description: "Over a decade of excellence in travel services with thousands of satisfied customers and unforgettable memories.",
      color: "#8b5cf6"
    },
    {
      id: 5,
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized for outstanding service quality and customer satisfaction in the travel and tourism industry.",
      color: "#ef4444"
    },
    {
      id: 6,
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your travel needs, from booking to your safe return home.",
      color: "#06b6d4"
    },
    {
      id: 7,
      icon: DollarSign,
      title: "Best Value Guarantee",
      description: "Competitive pricing with no hidden costs. Get the best value for your money with all-inclusive packages.",
      color: "#10b981"
    },
    {
      id: 8,
      icon: Star,
      title: "5-Star Rated Experience",
      description: "Consistently high ratings from travelers worldwide for exceptional service and unforgettable experiences.",
      color: "#f97316"
    }
  ];

  const statistics = [
    { number: "50K+", label: "Happy Travelers" },
    { number: "350+", label: "Tour Managers" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Destinations" }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className={`display-4 fw-bold mb-3 ${styles.sectionTitle} ${isVisible ? styles.fadeInUp : ''}`}>
              Why Choose Sai Shishir Tours?
            </h2>
            <p className={`lead ${styles.sectionSubtitle} ${isVisible ? styles.fadeInUp : ''}`}>
              Experience the difference with Indias most trusted travel partner. 
              Heres what makes us stand out from the rest.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={`${styles.statsWrapper} p-4 p-md-5 ${isVisible ? styles.fadeInUp : ''}`}>
              <div className="row text-center">
                {statistics.map((stat, index) => (
                  <div key={index} className="col-6 col-md-3 mb-3 mb-md-0">
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        {/* <div className="row g-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="col-md-6 col-lg-3">
                <div 
                  className={`${styles.featureCard} card shadow-sm p-4 text-center h-100 ${
                    isVisible ? styles.fadeInUp : ''
                  } ${styles[`staggered${index + 1}`]}`}
                  style={{'--card-color': feature.color}}
                >
                  <div className="card-body d-flex flex-column">
                    <div className={styles.iconWrapper + ' mb-4'}>
                      <IconComponent 
                        size={40} 
                        style={{ color: feature.color, zIndex: 2, position: 'relative' }}
                      />
                    </div>
                    
                    <h4 className={`${styles.featureTitle} mb-3`}>
                      {feature.title}
                    </h4>
                    
                    <p className={`${styles.featureDescription} mb-0 flex-grow-1`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Call to Action */}
       <div className="row justify-content-center align-items-center mt-5">
  {/* LEFT COLUMN - Why Choose Bhutan */}
  <div className="col-12 col-md-6 text-start">
    <div className={`${styles.ctaSection} p-4 p-md-5 ${isVisible ? styles.fadeInUp : ''}`}>
      <h3 className={`${styles.ctaTitle} mb-4`} style={{ color: '#0b4878' }}>
        Why Choose Bhutan?
      </h3>
      <div className="text-start">
        {[
          "The world's only carbon-negative country with pristine Himalayan landscapes",
          "Ancient monasteries and spiritual heritage preserved for centuries",
          "Full permit and visa assistance with expert local guidance throughout",
          "Unique Gross National Happiness philosophy experienced firsthand",
          "Exclusive small-group experiences in an untouched kingdom",
           "The world's only carbon-negative country with pristine Himalayan landscapes",
           "Ancient monasteries and spiritual heritage preserved for centuries",
          "Full permit and visa assistance with expert local guidance throughout"
        ].map((point, index) => (
          <div key={index} className="d-flex align-items-start mb-3">
            <div className="me-3 mt-1">
              <div style={{
                backgroundColor: '#22c55e',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <p className="mb-0" style={{ color: '#334155' }}>{point}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* RIGHT COLUMN - Image */}
  <div className="col-12 col-md-6">
    <div className="p-3">
      <img
        src="/bhutan-creative.jpg" // Replace with your actual image path
        alt="Why Choose Bhutan"
        className="img-fluid rounded shadow"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}