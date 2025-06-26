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
              Experience the difference with India's most trusted travel partner. 
              Here's what makes us stand out from the rest.
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
        <div className="row g-4">
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
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className={`${styles.ctaSection} p-4 p-md-5 ${isVisible ? styles.fadeInUp : ''}`}>
              <h3 className={`${styles.ctaTitle} mb-3`}>
                Ready for Your Next Adventure?
              </h3>
              <p className="text-muted mb-4">
                Join thousands of satisfied travelers who have made unforgettable memories with us.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button 
                  className={`btn btn-lg px-5 py-3 rounded-pill fw-semibold ${styles.primaryButton}`}
                  onClick={() => {
                    // Add your navigation logic here
                    console.log('Navigate to tours page');
                  }}
                >
                  Explore Our Tours
                </button>
                <button 
                  className={`btn btn-outline-primary btn-lg px-5 py-3 rounded-pill fw-semibold ${styles.secondaryButton}`}
                  onClick={() => {
                    // Add your contact logic here
                    console.log('Navigate to contact page');
                  }}
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}