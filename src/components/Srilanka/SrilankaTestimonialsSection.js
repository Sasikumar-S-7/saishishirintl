"use client";
import React, { useState, useEffect } from 'react';
import { Star, Quote, X, Eye } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
  {
    id: 1,
    name: "Naren Chintada",
    location: "Unknown",
    rating: 5,
    comment: "Our Sri Lanka trip was joyful and happy. Tour conductor Harisha is very friendly and entertaining and very concerned and considerate. Thank you for excellent food and hotel arrangements, everything is high class. Very memorable experience.",
    fullComment: "Our Sri Lanka trip was joyful and happy. Tour conductor Harisha is very friendly, entertaining, and very concerned and considerate. Thank you for excellent food and hotel arrangements, everything is high class. Very memorable experience. Looking forward for more..",
    tourType: "Sri Lanka Delight Tour",
    avatar: "NC",
    duration: "6 Days",
    groupSize: "Unknown"
  },
  {
    id: 2,
    name: "Srinivasa Murthy",
    location: "Unknown",
    rating: 5,
    comment: "Me & my wife were a part of the Sri Lanka tour conducted by Sai Shishir Tours for 7 days from 16th July. The trip was organised in a very systematic way. The hotels were clean with tasty food. Mr. Harish guided us throughout the tour.",
    fullComment: "Me & my wife were a part of the Sri Lanka tour conducted by Sai Shishir Tours for 7 days from 16th July 24. The trip was organised in a very systematic way right from the airport till the end of the tour. The hotels were clean with tasty & hygienic food. Mr. Harish, tour manager guided us all through the tour, explained each place thoroughly & looked after us courteously. He has a vast knowledge about tourism. Totally it was memorable. Thanks to Sai Shishir Tours & special thanks to Mr. Harish.",
    tourType: "Sri Lanka Couple Special",
    avatar: "SM",
    duration: "7 Days",
    groupSize: "2 People"
  },
  {
    id: 3,
    name: "Akshay R.",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "Loved every moment of the trip! The flight from Bangalore was smooth and the entire package was hassle-free. Bentota beach and the Ella train ride were unforgettable!",
    fullComment: "Loved every moment of the trip! The flight from Bangalore was smooth and the entire package was hassle-free. Bentota beach and the Ella train ride were unforgettable!",
    tourType: "Sri Lanka Explorer",
    avatar: "AR",
    duration: "6 Days",
    groupSize: "Unknown"
  },
  {
    id: 4,
    name: "Anusha M.",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "Perfectly planned tour from start to finish. The weather in Nuwara Eliya was amazing, and we really enjoyed the guided sightseeing. Worth every penny!",
    fullComment: "Perfectly planned tour from start to finish. The weather in Nuwara Eliya was amazing, and we really enjoyed the guided sightseeing. Worth every penny!",
    tourType: "Sri Lanka Highlights Tour",
    avatar: "AM",
    duration: "6 Days",
    groupSize: "Unknown"
  },
  {
    id: 5,
    name: "Nitin K.",
    location: "Bangalore, Karnataka",
    rating: 4,
    comment: "This was our first international trip from Bangalore and Sri Lanka was a great choice. Beautiful views, warm people, and tasty food. Great job by the tour team.",
    fullComment: "This was our first international trip from Bangalore and Sri Lanka was a great choice. Beautiful views, warm people, and tasty food. Great job by the tour team.",
    tourType: "Sri Lanka Starter Tour",
    avatar: "NK",
    duration: "6 Days",
    groupSize: "Unknown"
  },
  {
    id: 6,
    name: "Divya S.",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "We booked our honeymoon from Bangalore and it couldn’t have been better! The mix of beaches, hills, and culture made it super romantic and peaceful.",
    fullComment: "We booked our honeymoon from Bangalore and it couldn’t have been better! The mix of beaches, hills, and culture made it super romantic and peaceful.",
    tourType: "Sri Lanka Honeymoon Special",
    avatar: "DS",
    duration: "6 Days",
    groupSize: "2 People"
  },
  {
    id: 7,
    name: "Ramesh B.",
    location: "Bangalore, Karnataka",
    rating: 4,
    comment: "Well-coordinated trip with excellent hotels and transport. It felt like a quick international escape just a few hours from Bangalore!",
    fullComment: "Well-coordinated trip with excellent hotels and transport. It felt like a quick international escape just a few hours from Bangalore!",
    tourType: "Sri Lanka Quick Getaway",
    avatar: "RB",
    duration: "5 Days",
    groupSize: "Unknown"
  },
  {
    id: 8,
    name: "Kavya T.",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "Thank you Sai Shishir Tours for a great family holiday! Our kids loved the wildlife safari and we had a very relaxed experience overall.",
    fullComment: "Thank you Sai Shishir Tours for a great family holiday! Our kids loved the wildlife safari and we had a very relaxed experience overall.",
    tourType: "Sri Lanka Family Tour",
    avatar: "KT",
    duration: "6 Days",
    groupSize: "4 People"
  }
];


  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: isAutoPlaying,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-background">
      <section 
        className="position-relative overflow-hidden  p-4 p-md-5 fadeInUp py-5"
        style={{
             borderadius: '0px !important',
          padding: '80px 0 120px 0'
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Pattern */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>')`,
            pointerEvents: 'none'
          }}
        />

        <div className="container py-5 position-relative">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-3 text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                What Our Travelers Say
              </h2>
              <p className="lead text-white" style={{opacity: 0.9}}>
                Dont just take our word for it - hear from thousands of happy travelers whove experienced the magic of our tours
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="position-relative" style={{margin: '0 0px'}}>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-md-2">
                  <div 
                    className="card shadow-lg border-0 h-100 position-relative" 
                    style={{
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      minHeight: '300px',
                      margin: '10px 0',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {/* Quote Icon */}
                    <div 
                      className="position-absolute d-flex align-items-center justify-content-center text-white" 
                      style={{
                        top: '-10px',
                        right: '20px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      <Quote size={24} />
                    </div>
                    
                    <div className="card-body p-4 d-flex flex-column" style={{paddingTop: '2.5rem'}}>
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0 me-3" 
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            fontSize: '1.2rem',
                            border: '4px solid white',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                          }}
                        >
                          {testimonial.avatar}
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1 fw-bold text-dark" style={{fontSize: '1rem', lineHeight: '1.3'}}>
                            {testimonial.name}
                          </h5>
                          {/* <p className="text-muted mb-0 small">
                            {testimonial.location}
                          </p> */}
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                        <div className="d-flex align-items-center mb-2 mb-sm-0">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span 
                          className="badge text-white px-3 py-2 rounded-pill" 
                          style={{
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            fontSize: '0.75rem'
                          }}
                        >
                          {testimonial.tourType}
                        </span>
                      </div>

                      <p className="text-muted mb-3 fst-italic flex-grow-1" style={{fontSize: '0.9rem', lineHeight: '1.5'}}>
                        {`'${truncateText(testimonial.comment)}'`}
                      </p>

                      {/* Show More Button */}
                      <button 
                        className="btn w-100 text-white d-flex align-items-center justify-content-center gap-2 mt-auto"
                        style={{
                          background: 'linear-gradient(135deg, #667eea, #764ba2)',
                          border: 'none',
                          borderRadius: '25px',
                          padding: '10px 20px',
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event bubbling
                          openModal(testimonial);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #5a6fd8, #6a4190)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                        }}
                      >
                        <Eye size={16} />
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTestimonial && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)', 
            zIndex: 9999,
            overflowY: 'auto',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-4 shadow-lg position-relative mx-3"
            style={{
              maxWidth: '800px', 
              width: '100%', 
              maxHeight: '90vh',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="p-4 text-white position-relative" 
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)'
              }}
            >
              <button 
                onClick={closeModal}
                className="position-absolute top-0 end-0 mt-3 me-3 btn btn-link text-white p-0"
                style={{fontSize: '1.5rem', textDecoration: 'none'}}
              >
                <X size={24} />
              </button>
              
              <div className="d-flex align-items-center">
                <div 
                  className="d-flex align-items-center justify-content-center text-white fw-bold me-3 flex-shrink-0" 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    fontSize: '1.5rem'
                  }}
                >
                  {selectedTestimonial.avatar}
                </div>
                <div className="flex-grow-1">
                  <h4 className="mb-1">{selectedTestimonial.name}</h4>
                  {/* <p className="mb-0 opacity-75">{selectedTestimonial.location}</p> */}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4" style={{maxHeight: 'calc(90vh - 120px)', overflowY: 'auto'}}>
              {/* Tour Details */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="card text-center border-0" style={{background: '#e3f2fd'}}>
                    <div className="card-body p-3">
                      <h6 className="card-title mb-1 text-primary">Tour Type</h6>
                      <p className="card-text mb-0 fw-medium small">{selectedTestimonial.tourType}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center border-0" style={{background: '#f3e5f5'}}>
                    <div className="card-body p-3">
                      <h6 className="card-title mb-1 text-primary">Duration</h6>
                      <p className="card-text mb-0 fw-medium">{selectedTestimonial.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center border-0" style={{background: '#e8f5e8'}}>
                    <div className="card-body p-3">
                      <h6 className="card-title mb-1 text-primary">Group Size</h6>
                      <p className="card-text mb-0 fw-medium">{selectedTestimonial.groupSize}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="text-center mb-4">
                <div className="d-inline-flex align-items-center px-3 py-2 rounded-pill" style={{background: '#fff3cd'}}>
                  {renderStars(selectedTestimonial.rating)}
                  <span className="ms-2 fw-bold text-dark">
                    {selectedTestimonial.rating}/5
                  </span>
                </div>
              </div>

              {/* Full Comment */}
              <div className="card border-0" style={{background: '#f8f9fa'}}>
                <div className="card-body p-4">
                  <h5 className="card-title d-flex align-items-center mb-3">
                    <Quote size={20} className="me-2 text-primary flex-shrink-0" />
                    Complete Review
                  </h5>
                  <p className="card-text fst-italic text-dark" style={{lineHeight: '1.7', fontSize: '0.95rem'}}>
                  {selectedTestimonial.fullComment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}