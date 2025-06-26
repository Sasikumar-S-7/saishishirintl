'use client';

import React from 'react';
import Slider from "react-slick";
import { Star, Quote } from 'lucide-react';
import styles from '../app/Testimonials.module.css';

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment: "Absolutely amazing experience! The tour was well-organized, and every detail was taken care of. Our tour manager was fantastic and made sure we had the best time. Highly recommend Sai Shishir Tours!",
      tourType: "Europe Discovery",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bangalore, Karnataka",
      rating: 5,
      comment: "Best travel experience ever! From comfortable accommodation to delicious meals, everything was perfect. The itinerary was well-planned and we got to see so many beautiful places.",
      tourType: "Switzerland Delight",
      avatar: "RK"
    },
    {
      id: 3,
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      comment: "Outstanding service and attention to detail. The tour guides were knowledgeable and friendly. Every moment was memorable. Will definitely book again with Sai Shishir Tours!",
      tourType: "Dubai Extravaganza",
      avatar: "MP"
    },
    {
      id: 4,
      name: "Arjun Singh",
      location: "Delhi, NCR",
      rating: 5,
      comment: "Fantastic tour management and excellent value for money. The hotels were comfortable and the food was delicious. Our family had an unforgettable vacation!",
      tourType: "Singapore Malaysia",
      avatar: "AS"
    },
    {
      id: 5,
      name: "Sunita Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      comment: "Professional team, beautiful destinations, and seamless travel experience. Every aspect of the tour exceeded our expectations. Thank you for making our dream vacation come true!",
      tourType: "Bali Paradise",
      avatar: "SR"
    },
    {
      id: 6,
      name: "Vikram Gupta",
      location: "Pune, Maharashtra",
      rating: 5,
      comment: "Exceptional service from start to finish! The attention to detail and personalized care made our honeymoon trip absolutely perfect. Thank you Sai Shishir Tours!",
      tourType: "Romantic Maldives",
      avatar: "VG"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-warning" : "text-muted"}
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className={`display-4 fw-bold mb-3 ${styles.sectionTitle}`}>
              What Our Travelers Say
            </h2>
            <p className={`lead ${styles.sectionSubtitle}`}>
              Don't just take our word for it - hear from thousands of happy travelers who've experienced the magic of our tours
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={styles.sliderContainer}>
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="px-2">
                    <div className={`${styles.testimonialCard} shadow-lg p-4`}>
                      <div className={styles.quoteIcon}>
                        <Quote size={24} />
                      </div>
                      
                      <div className="pt-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className={`${styles.avatar} me-3`}>
                            {testimonial.avatar}
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="mb-1 fw-bold text-dark">
                              {testimonial.name}
                            </h5>
                            <p className="text-muted mb-0 small">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                          <div className="d-flex align-items-center mb-2 mb-sm-0">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className={styles.tourBadge}>
                            {testimonial.tourType}
                          </span>
                        </div>

                        <p className="text-muted mb-0 fst-italic">
                          "{testimonial.comment}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}