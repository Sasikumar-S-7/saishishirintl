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
      name: "Thejaswini T",
      location: "Bangalore, Karnataka",
      rating: 5,
      comment: "I have been to Singapore and Malaysia trip with my Family, we had an amazing time, awesome memories and great food, stay. I highly recommend Sai Shishir Tours. Thank you - Yogesh and team for such a great experience.",
      fullComment: "I have been to Singapore and Malaysia trip with my Family, we had an amazing time, awesome memories and great food, stay. I highly recommend Sai Shishir Tours. Thank you - Yogesh and team for such a great experience.",
      tourType: "Singapore Malaysia Family Package",
      avatar: "TT",
      duration: "7 Days",
      groupSize: "4 People"
    },
    {
      id: 2,
      name: "Jahnavi Ramamurthy",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      comment: "Had a best experience in Singapore and Malaysia. Mr. Yogesh has been the best, he has managed everything well, fully satisfied with the service. Thank you Yogesh and team :)",
      fullComment: "Had a best experience in Singapore and Malaysia. Mr. Yogesh has been the best, he has managed everything well, fully satisfied with the service. Thank you Yogesh and team :)",
      tourType: "Singapore Malaysia Highlights Tour",
      avatar: "JR",
      duration: "6 Days",
      groupSize: "8 People"
    },
    {
      id: 3,
      name: "Koushik M S",
      location: "Hyderabad, Telangana",
      rating: 5,
      comment: "One of the best travels I’ve ever seen, my Singapore trip was very well organized and was scheduled perfectly, they deliver service as promised, I will always choose Sai Shishir for all my travels.",
      fullComment: "One of the best travels I’ve ever seen, my Singapore trip was very well organized and was scheduled perfectly, they deliver service as promised, I will always choose Sai Shishir for all my travels.",
      tourType: "Singapore Malaysia Express Tour",
      avatar: "KM",
      duration: "5 Days",
      groupSize: "12 People"
    },
    {
      id: 4,
      name: "Jyothi Pola",
      location: "Pune, Maharashtra",
      rating: 5,
      comment: "This was our first international trip to Singapore and Malaysia, and it was an unforgettable experience. Our guide was extremely helpful, explaining everything patiently and clearly, which made the entire journey smooth and hassle-free. We thoroughly enjoyed every moment. We highly recommend Sai Shishir Travels for both domestic and international tours.",
      fullComment: "This was our first international trip to Singapore and Malaysia, and it was an unforgettable experience. Our guide was extremely helpful, explaining everything patiently and clearly, which made the entire journey smooth and hassle-free. We thoroughly enjoyed every moment. We highly recommend Sai Shishir Travels for both domestic and international tours.",
      tourType: "Singapore Malaysia First Time International",
      avatar: "JP",
      duration: "7 Days",
      groupSize: "6 People"
    },
    {
      id: 5,
      name: "Suresh Gundegowda",
      location: "Mysore, Karnataka",
      rating: 4,
      comment: "Sai Shishir tours is well organised and professional trip organisers. We had a very good experience with customised trip to Singapore and Malaysia.Their services throughout the trip ( Day-1 to Day-7 ) were excellent. Overall experience was very good. I would recomend for others.",
      fullComment: "Sai Shishir tours is well organised and professional trip organisers. We had a very good experience with customised trip to Singapore and Malaysia.Their services throughout the trip ( Day-1 to Day-7 ) were excellent. Overall experience was very good. I would recomend for others.",
      tourType: "Singapore Malaysia Customized Package",
      avatar: "SG",
      duration: "7 Days",
      groupSize: "10 People"
    },
    {
      id: 6,
      name: "Indramma Annadanappa",
      location: "Hubli, Karnataka",
      rating: 5,
      comment: "Really loved experience with Sai Shishir tours in Singapore and Malaysia tour package. Awesome hotels, great food and it was really lovely exploring both Singapore and Malaysia with our tour manager Harish!",
      fullComment: "Really loved experience with Sai Shishir tours in Singapore and Malaysia tour package. Awesome hotels, great food and it was really lovely exploring both Singapore and Malaysia with our tour manager Harish!",
      tourType: "Singapore Malaysia Deluxe Package",
      avatar: "IA",
      duration: "6 Days",
      groupSize: "14 People"
    },
    {
      id: 7,
      name: "Ashwath Narayana Gupta",
      location: "Bangalore, Karnataka",
      rating: 4,
      comment: "It's very nice arrenged trip. Yogi performance is very good . We liked his obedient with everyone.  Singapore Malaysia. Was   without you would have been incomplete with you thank you for good guidance.",
      fullComment: "It's very nice arrenged trip. Yogi performance is very good . We liked his obedient with everyone.  Singapore Malaysia. Was   without you would have been incomplete with you thank you for good guidance .",
      tourType: "Singapore Malaysia Group Tour",
      avatar: "AG",
      duration: "6 Days",
      groupSize: "18 People"
    },
    {
      id: 8,
      name: "Rekha S R",
      location: "Mangalore, Karnataka",
      rating: 5,
      comment: "We travelled Singapore and Malaysia. We had wonderful experience, organiser made our hotel in the city centre place, good  area and our guide Mr. Harish is organised well mainly he is cool and calm,very cooperative.",
      fullComment: "We travelled Singapore and Malaysia. We had wonderful experience, organiser made our hotel in the city centre place, good  area and our guide Mr. Harish is organised well mainly he is cool and calm,very cooperative.",
      tourType: "Singapore Malaysia Classic Tour",
      avatar: "RS",
      duration: "7 Days",
      groupSize: "16 People"
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