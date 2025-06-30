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
      name: "KANCHANAGARI CHANNAKRISHNA REDDY",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment: "Bhutan tour is very 📝 memorable and enjoyable trip All the journey is comfortable    All my friends enjoyed well. Tour guide Harish well co Operated and guided with his experience Bhutan tour is best and nice place to enjoy and relax …",
      fullComment: "Bhutan tour is very 📝 memorable and enjoyable trip. All the journey is comfortable and all my friends enjoyed well. Tour guide Harish well cooperated and guided with his experience. Bhutan tour is best and nice place to enjoy and relax. The landscapes were breathtaking, the people were incredibly welcoming, and the cultural experiences were truly enriching. I would definitely recommend this tour to anyone looking for a peaceful and spiritual journey. The accommodation was excellent and the food was delicious throughout the trip.",
      tourType: "Bhutan Cultural Tour",
      avatar: "KC",
      duration: "7 Days",
      groupSize: "12 People"
    },
    {
      id: 2,
      name: "Kiran Kumar Rotti",
      location: "Bangalore, Karnataka",
      rating: 4,
      comment: "Bhutan is a beautiful place to visit during winter season as we witness chilling weather here. Buddhist monasteries were so wonderful and the most amazing place was the Tigeres nest which took around 7 hours to reach the top of the hill. River rafting was also fentastic. Nice country to visit for those who are nature lovers..",
      fullComment: "Bhutan is a beautiful place to visit during winter season as we witness chilling weather here. Buddhist monasteries were so wonderful and the most amazing place was the Tiger's nest which took around 7 hours to reach the top of the hill. River rafting was also fantastic. Nice country to visit for those who are nature lovers. The trek to Tiger's Nest was challenging but incredibly rewarding. The views from the top were absolutely spectacular. The monasteries we visited were peaceful and the monks were very welcoming. The river rafting experience was thrilling and well-organized with experienced guides. Overall, it was an adventure of a lifetime.",
      tourType: "Bhutan Adventure Tour",
      avatar: "KK",
      duration: "6 Days",
      groupSize: "8 People"
    },
    {
      id: 3,
      name: "Shilpa V",
      location: "Ahmedabad, Gujarat",
      rating: 4,
      comment: "Had a wonderful time in Bhutan & thoroughly enjoyed the tour. Thanks to Viswanath Reddy , our guide who made the trip memorable 😍. It's not easy to handle a group with different expectations over food, bus, attractions etc. But kudos to Viswanath for handling tricky situations & the concern he showed especially for the people .",
      fullComment: "Had a wonderful time in Bhutan & thoroughly enjoyed the tour. Thanks to Viswanath Reddy, our guide who made the trip memorable 😍. It's not easy to handle a group with different expectations over food, bus, attractions etc. But kudos to Viswanath for handling tricky situations & the concern he showed especially for the elderly people in our group. His knowledge about Bhutanese culture and history was impressive. He made sure everyone was comfortable and safe throughout the journey. The itinerary was well-planned and we got to experience the authentic Bhutanese lifestyle. The dzongs and temples we visited were magnificent.",
      tourType: "Bhutan Heritage Tour",
      avatar: "SV",
      duration: "5 Days",
      groupSize: "15 People"
    },
    {
      id: 4,
      name: "Vasudevamurthy Sm",
      location: "Delhi, NCR",
      rating: 5,
      comment: "At the outset, I would like to thank  Saishishir tours team.They are receptive,communicable,considerate, cost effective, and have lots of patience.perhaps its because of these qualities they are able to do wonders.Our Bhutan tours is exceptionally good. Its pleasant and memorable. The tour managers,Harish and Kumar are soft and caring. They executed everything very neatly. Bhutan landscape is exceptionally pleasant ,and so also hotel rooms and the hospitality of theBhutanese people. The hotels were very good. Bhutanese cultural folk dance showcase their effort to preserve the folk culture, and we could able witness and enjoy the same.The campfire was nice. Its really worth for the money we paid. You kept your promise. We all are happy. thank you once again.",
      fullComment: "At the outset, I would like to thank Saishishir tours team. They are receptive, communicable, considerate, cost effective, and have lots of patience. Perhaps it's because of these qualities they are able to do wonders. Our Bhutan tour is exceptionally good. It's pleasant and memorable. The tour managers, Harish and Kumar are soft and caring. They executed everything very neatly. Bhutan landscape is exceptionally pleasant, and so also hotel rooms and the hospitality of the Bhutanese people. The hotels were very good with excellent amenities. Bhutanese cultural folk dance showcase their effort to preserve the folk culture, and we were able to witness and enjoy the same. The campfire was nice and created a wonderful bonding experience among all travelers. The food was authentic and delicious. It's really worth for the money we paid. You kept your promise. We all are happy. Thank you once again for this memorable experience.",
      tourType: "Bhutan Complete Package",
      avatar: "VS",
      duration: "8 Days",
      groupSize: "20 People"
    },
    {
      id: 5,
      name: "Anita shettikeri",
      location: "Hyderabad, Telangana",
      rating: 5,
      comment: "Overall, it was a good vacation. A little more concentration on good and knowledgeable local guides is very important specially in a place like Bhutan. Harish was very good as a team leader, excellent response and management.  Stays were very good, except Tashi Namgey at Pheuntsholing. I understand it was a huge rush but if a hospitality provider cannot manage that rush then why do they take so many bookings. No phone in the room, no connectivity. If I want something I need to come to the reception. I was given a room on the 4th floor. Every time had to climb up and down as there were no lifts in that building. I had to climb up and down with my luggage too during check in and check out.",
      fullComment: "Overall, it was a good vacation. A little more concentration on good and knowledgeable local guides is very important specially in a place like Bhutan. Harish was very good as a team leader, excellent response and management. Stays were very good, except Tashi Namgey at Pheuntsholing. I understand it was a huge rush but if a hospitality provider cannot manage that rush then why do they take so many bookings. No phone in the room, no connectivity. If I want something I need to come to the reception. I was given a room on the 4th floor. Every time had to climb up and down as there were no lifts in that building. I had to climb up and down with my luggage too during check in and check out. Despite this one issue, the rest of the accommodations were excellent. The tour was well-organized and the sightseeing was comprehensive. The local cuisine was a highlight of the trip. The weather was perfect during our visit.",
      tourType: "Bhutan Discovery Tour",
      avatar: "AS",
      duration: "6 Days",
      groupSize: "10 People"
    },
    {
      id: 6,
      name: "Srigowri C",
      location: "Pune, Maharashtra",
      rating: 5,
      comment: "We had a wonderful trip to Bhutan wherein we saw Thimphu-Paro-Punakha. Sai Shishir Tours with their manager and guide arranged it well for us with a nice group at a reasonable price.",
      fullComment: "We had a wonderful trip to Bhutan wherein we saw Thimphu-Paro-Punakha. Sai Shishir Tours with their manager and guide arranged it well for us with a nice group at a reasonable price. The three cities we visited each had their own unique charm. Thimphu, being the capital, was bustling with activity and modern amenities while still maintaining its traditional character. Paro was serene and beautiful with the iconic Tiger's Nest monastery. Punakha with its stunning dzong at the confluence of two rivers was absolutely magnificent. The tour was well-paced and we had enough time to explore each destination thoroughly.",
      tourType: "Bhutan Three Cities Tour",
      avatar: "SC",
      duration: "5 Days",
      groupSize: "14 People"
    },
    {
      id: 7,
      name: "Sindhu Sandeep",
      location: "Chennai, Tamil Nadu",
      rating: 4,
      comment: "Total Bhutan journey was excellent with good weather , trekking , guide ..Except the  food .Noon lunch which was arranged on the nearest hotels while in the travel . Special thanks for the guide Vishwanth was very friendly and helpful for all the needs . special care was taken by guide for my Six years son.",
      fullComment: "Total Bhutan journey was excellent with good weather, trekking, guide except the food. Noon lunch which was arranged on the nearest hotels while in the travel could have been better. Special thanks for the guide Vishwanth was very friendly and helpful for all the needs. Special care was taken by guide for my six years old son which I really appreciated. The trekking routes were well-chosen and suitable for families. The weather was perfect throughout our visit. Vishwanth's patience with children and elderly members of our group was commendable. He made sure everyone was comfortable and safe during the treks. The scenic beauty of Bhutan is unmatched.",
      tourType: "Bhutan Family Adventure",
      avatar: "SS",
      duration: "7 Days",
      groupSize: "6 People"
    },
    {
      id: 8,
      name: "Makam Balasubramanyam",
      location: "Visakhapatnam, Andhra Pradesh",
      rating: 5,
      comment: "Wonderful experience and good care taken by harisha and we enjoyed the  Bhutan trip very much",
      fullComment: "Wonderful experience and good care taken by Harish and we enjoyed the Bhutan trip very much. From the moment we started our journey, Harish ensured that every detail was taken care of. His knowledge about Bhutanese culture, history, and local customs enriched our experience significantly. The itinerary was perfectly balanced with sightseeing, cultural experiences, and relaxation time. The accommodations were comfortable and the food was delicious. Bhutan's natural beauty and the warmth of its people made this trip truly unforgettable. We would definitely choose Sai Shishir Tours again for our future travels.",
      tourType: "Bhutan Highlights Tour",
      avatar: "MB",
      duration: "6 Days",
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