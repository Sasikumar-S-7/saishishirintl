'use client';
import React, { useState } from 'react';
import { MapPin, Plus, Minus, Hotel, Utensils, Coffee, Eye, CheckCircle } from 'lucide-react';

const Itinerary = () => {
  const [expandedDays, setExpandedDays] = useState([]); 
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleDay = (dayNumber) => {
    setExpandedDays(prev => 
      prev.includes(dayNumber) 
        ? prev.filter(day => day !== dayNumber)
        : [...prev, dayNumber]
    );
  };

  const toggleAllDays = () => {
    if (allExpanded) {
      setExpandedDays([]);
      setAllExpanded(false);
    } else {
      const allDayNumbers = itineraryData.map(day => day.day);
      setExpandedDays(allDayNumbers);
      setAllExpanded(true);
    }
  };

  const itineraryData = [
  {
    day: 1,
    date: 'Day 1',
    title: 'Arrival in Singapore',
    description: "Arrival at Changi International Airport Singapore. Transfer to hotel and check-in. Morning visit to the iconic Temple of Tooth Relic Singapore. Evening experience the exciting Night Safari followed by dinner at Ulu Ulu Safari Restaurant with Indian cuisine.",
    sightseeing: ['Temple of Tooth Relic Singapore', 'Night Safari'],
    accommodation: 'Night Stay in Singapore',
    meals: 'Indian Breakfast, Lunch & Dinner',
    extras: 'Airport transfer, Night Safari with Indian dinner at Ulu Ulu Safari Restaurant'
  },
  {
    day: 2,
    date: 'Day 2',
    title: 'Singapore City Tour & Sentosa Island',
    description: "Morning explore Singapore's major landmarks on a comprehensive city tour. Afternoon head to Sentosa Island for exciting attractions including SEA Aquarium, Wings of Time show, Madame Tussaud's and scenic Cable Car ride. Evening continue exploring Sentosa before returning to hotel.",
    sightseeing: ['Singapore City Tour', 'Sentosa Island', 'SEA Aquarium', 'Wings of Time', 'Madame Tussaud\'s', 'Cable Car'],
    accommodation: 'Night Stay in Singapore',
    meals: 'Indian Breakfast, Lunch & Dinner',
    extras: 'Sentosa Island attractions package'
  },
  {
    day: 3,
    date: 'Day 3',
    title: 'Universal Studios & Gardens by the Bay',
    description: "Full day at Universal Studios Singapore experiencing thrilling rides and attractions. Evening visit Gardens by the Bay, explore the iconic Supertree Grove and two climate-controlled conservatories. Conclude with the spectacular evening light show at Gardens by the Bay.",
    sightseeing: ['Universal Studios Singapore', 'Gardens by the Bay', 'Supertree Grove', 'Cloud Forest & Flower Dome', 'Gardens by the Bay Light Show'],
    accommodation: 'Night Stay in Singapore',
    meals: 'Indian Breakfast, Lunch & Dinner',
    extras: 'Universal Studios entry tickets, Gardens by the Bay conservatories'
  },
  {
    day: 4,
    date: 'Day 4',
    title: 'Shopping & Transfer to Kuala Lumpur',
    description: "Morning free time for shopping at Singapore's famous shopping districts. After lunch, check out from hotel and transfer to Kuala Lumpur by comfortable coach. Evening arrival in Kuala Lumpur, check-in to hotel followed by Indian dinner.",
    sightseeing: ['Singapore Shopping', 'Scenic drive to Kuala Lumpur'],
    accommodation: 'Night Stay in Kuala Lumpur',
    meals: 'Indian Breakfast, Lunch & Dinner',
    extras: 'Coach transfer Singapore to Kuala Lumpur'
  },
  {
    day: 5,
    date: 'Day 5',
    title: 'Kuala Lumpur City Tour',
    description: "Comprehensive city tour of Kuala Lumpur covering major landmarks. Visit the iconic KL Tower for panoramic city views and photo stop at the world-famous Petronas Twin Towers. Explore the city's colonial architecture, vibrant markets and modern developments.",
    sightseeing: ['KL Tower', 'Petronas Twin Towers', 'Independence Square', 'National Mosque (exterior)', 'Royal Palace (exterior)', 'Chinatown'],
    accommodation: 'Night Stay in Kuala Lumpur',
    meals: 'Indian Breakfast, Lunch & Dinner',
    extras: 'KL Tower observation deck entry'
  },
  {
    day: 6,
    date: 'Day 6',
    title: 'Batu Caves & Genting Highlands',
    description: "Morning visit to the sacred Batu Caves, climb the 272 colorful steps to the temple cave. Continue to Genting Highlands, Malaysia's premier hill resort. Visit a traditional watch factory and enjoy the cool mountain climate. Experience cable car ride and explore the highland attractions.",
    sightseeing: ['Batu Caves Temple Complex', 'Genting Highlands', 'Genting Skyway Cable Car', 'Watch Factory Visit'],
    accommodation: 'Night Stay in Kuala Lumpur',
    meals: 'Indian Breakfast, Lunch & Dinner',
    extras: 'Genting Highlands cable car, Watch factory tour'
  },
  {
    day: 7,
    date: 'Day 7',
    title: 'Putrajaya City Tour & Departure',
    description: "Morning check out from hotel. Visit Putrajaya, Malaysia's administrative capital, known for its modern architecture and beautiful landscapes. Explore the Putra Mosque, Prime Minister's Office, and scenic bridges. After lunch, transfer to Kuala Lumpur International Airport for departure flight, carrying wonderful memories of your Singapore-Malaysia adventure.",
    sightseeing: ['Putrajaya City Tour', 'Putra Mosque', 'Prime Minister\'s Office', 'Putrajaya Bridge'],
    accommodation: 'Departure',
    meals: 'Indian Breakfast & Lunch',
    extras: 'Airport transfer to KLIA'
  }
];

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1200px',
      margin: '0 auto', 
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        marginBottom: '32px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        '@media (min-width: 640px)': {
          flexDirection: 'row',
          alignItems: 'center',
          padding: '24px'
        }
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          color: '#1a1a1a',
          margin: 0,
          '@media (min-width: 640px)': {
            fontSize: '28px'
          }
        }}>
          Itinerary <span style={{ 
            fontSize: '16px', 
            fontWeight: '400', 
            color: '#6b7280',
            '@media (min-width: 640px)': {
              fontSize: '20px'
            }
          }}>(Day Wise)</span>
        </h1>
        <button 
          style={{
            color: allExpanded ? 'white' : '#2563eb',
            fontSize: '14px',
            fontWeight: '500',
            border: '2px solid #2563eb',
            backgroundColor: allExpanded ? '#2563eb' : 'transparent',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            alignSelf: 'flex-end',
            '@media (min-width: 640px)': {
              alignSelf: 'center'
            }
          }}
          onClick={toggleAllDays}
          onMouseOver={(e) => {
            if (!allExpanded) {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.color = 'white';
            }
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            if (!allExpanded) {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#2563eb';
            }
            e.target.style.transform = 'scale(1)';
          }}
        >
          {allExpanded ? 'Collapse all days' : 'View all days'}
        </button>
      </div>

      {/* Timeline Container */}
      <div style={{ position: 'relative' }}>
        {/* Vertical Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '16px',
          '@media (min-width: 640px)': {
            left: '24px'
          },
          top: '0',
          bottom: '0',
          width: '2px',
          '@media (min-width: 640px)': {
            width: '3px'
          },
          background: 'linear-gradient(to bottom, #2563eb, #60a5fa)',
          borderRadius: '2px'
        }}></div>
        
        {itineraryData.map((dayData, index) => {
          const isExpanded = expandedDays.includes(dayData.day);
          const hasContent = dayData.description || dayData.sightseeing.length > 0;
          
          return (
            <div key={dayData.day} style={{ 
              position: 'relative', 
              marginBottom: '20px',
              '@media (min-width: 640px)': {
                marginBottom: '24px'
              }
            }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '8px',
                '@media (min-width: 640px)': {
                  left: '12px'
                },
                top: '24px',
                width: '20px',
                height: '20px',
                '@media (min-width: 640px)': {
                  width: '24px',
                  height: '24px'
                },
                backgroundColor: isExpanded ? '#2563eb' : '#60a5fa',
                borderRadius: '50%',
                border: '3px solid white',
                '@media (min-width: 640px)': {
                  border: '4px solid white'
                },
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isExpanded ? 'scale(1.1)' : 'scale(1)'
              }}>
                <MapPin size={10} color="white" style={{ 
                  '@media (min-width: 640px)': {
                    size: '12px'
                  }
                }} />
              </div>
              
              {/* Day Card */}
              <div style={{
                marginLeft: '40px',
                '@media (min-width: 640px)': {
                  marginLeft: '64px'
                },
                backgroundColor: 'white',
                borderRadius: '12px',
                '@media (min-width: 640px)': {
                  borderRadius: '16px'
                },
                boxShadow: isExpanded ? '0 8px 25px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: isExpanded ? '2px solid #2563eb' : '1px solid #e5e7eb',
                transform: isExpanded ? 'translateY(-2px)' : 'translateY(0)'
              }}>
                {/* Day Header */}
                <div 
                  style={{
                    padding: '16px',
                    '@media (min-width: 640px)': {
                      padding: '24px'
                    },
                    cursor: hasContent ? 'pointer' : 'default',
                    backgroundColor: isExpanded ? '#eff6ff' : 'white',
                    borderBottom: isExpanded ? '1px solid #e0e7ff' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => hasContent && toggleDay(dayData.day)}
                  onMouseOver={(e) => {
                    if (hasContent && !isExpanded) {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (hasContent && !isExpanded) {
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    justifyContent: 'space-between' 
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '13px',
                        '@media (min-width: 640px)': {
                          fontSize: '14px'
                        },
                        color: '#2563eb',
                        fontWeight: '600',
                        marginBottom: '6px',
                        '@media (min-width: 640px)': {
                          marginBottom: '8px'
                        },
                        letterSpacing: '0.5px'
                      }}>
                        Day {dayData.day} 
                      </div>
                      <div style={{
                        color: '#1f2937',
                        fontWeight: '500',
                        fontSize: '16px',
                        '@media (min-width: 640px)': {
                          fontSize: '18px'
                        },
                        lineHeight: '1.4'
                      }}>
                        {dayData.title}
                      </div>
                    </div>
                    {hasContent && (
                      <div style={{
                        marginLeft: '12px',
                        '@media (min-width: 640px)': {
                          marginLeft: '16px'
                        },
                        padding: '6px',
                        '@media (min-width: 640px)': {
                          padding: '8px'
                        },
                        borderRadius: '6px',
                        '@media (min-width: 640px)': {
                          borderRadius: '8px'
                        },
                        backgroundColor: isExpanded ? '#2563eb' : '#f3f4f6',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        {isExpanded ? (
                          <Minus size={18} color="white" />
                        ) : (
                          <Plus size={18} color="#6b7280" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <div style={{
                  maxHeight: isExpanded ? '1000px' : '0',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)'
                }}>
                  {hasContent && (
                    <div style={{ padding: '16px', '@media (min-width: 640px)': { padding: '24px' } }}>
                      {/* Description */}
                      {dayData.description && (
                        <p style={{
                          color: '#4b5563',
                          fontSize: '14px',
                          '@media (min-width: 640px)': {
                            fontSize: '15px'
                          },
                          lineHeight: '1.6',
                          margin: '0 0 20px 0',
                          '@media (min-width: 640px)': {
                            margin: '0 0 24px 0'
                          },
                          opacity: isExpanded ? 1 : 0,
                          transition: 'opacity 0.6s ease 0.2s'
                        }}>
                          {dayData.description}
                        </p>
                      )}

                      {/* Sightseeing Section */}
                      {dayData.sightseeing.length > 0 && (
                        <div style={{
                          backgroundColor: '#f0fdf4',
                          borderRadius: '10px',
                          '@media (min-width: 640px)': {
                            borderRadius: '12px'
                          },
                          padding: '16px',
                          '@media (min-width: 640px)': {
                            padding: '20px'
                          },
                          marginBottom: '20px',
                          '@media (min-width: 640px)': {
                            marginBottom: '24px'
                          },
                          border: '1px solid #bbf7d0',
                          opacity: isExpanded ? 1 : 0,
                          transition: 'opacity 0.6s ease 0.3s',
                          transform: isExpanded ? 'translateY(0)' : 'translateY(10px)'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '12px',
                            '@media (min-width: 640px)': {
                              marginBottom: '16px'
                            }
                          }}>
                            <div style={{
                              backgroundColor: '#16a34a',
                              borderRadius: '6px',
                              '@media (min-width: 640px)': {
                                borderRadius: '8px'
                              },
                              padding: '6px',
                              '@media (min-width: 640px)': {
                                padding: '8px'
                              },
                              marginRight: '10px',
                              '@media (min-width: 640px)': {
                                marginRight: '12px'
                              },
                              transition: 'transform 0.3s ease'
                            }}>
                              <Eye size={14} color="white" style={{ 
                                '@media (min-width: 640px)': {
                                  size: '16px'
                                }
                              }} />
                            </div>
                            <h3 style={{
                              fontWeight: '600',
                              color: '#1f2937',
                              fontSize: '15px',
                              '@media (min-width: 640px)': {
                                fontSize: '16px'
                              },
                              margin: 0
                            }}>Todays Sightseeing</h3>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', '@media (min-width: 640px)': { gap: '12px' } }}>
                            {dayData.sightseeing.map((place, idx) => (
                              <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                opacity: isExpanded ? 1 : 0,
                                transition: `opacity 0.4s ease ${0.4 + idx * 0.1}s, transform 0.4s ease ${0.4 + idx * 0.1}s`,
                                transform: isExpanded ? 'translateX(0)' : 'translateX(-20px)'
                              }}>
                                <CheckCircle size={16} color="#16a34a" style={{ 
                                  marginRight: '10px',
                                  '@media (min-width: 640px)': {
                                    marginRight: '12px',
                                    size: '18px'
                                  },
                                  flexShrink: 0 
                                }} />
                                <span style={{
                                  fontSize: '13px',
                                  '@media (min-width: 640px)': {
                                    fontSize: '14px'
                                  },
                                  color: '#374151',
                                  fontWeight: '500'
                                }}>{place}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Activity Icons Section */}
                      {(dayData.accommodation || dayData.meals || dayData.extras) && (
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          '@media (min-width: 640px)': {
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
                          },
                          gap: '12px',
                          '@media (min-width: 640px)': {
                            gap: '16px'
                          },
                          opacity: isExpanded ? 1 : 0,
                          transition: 'opacity 0.6s ease 0.4s',
                          transform: isExpanded ? 'translateY(0)' : 'translateY(20px)'
                        }}>
                          {/* Night Stay */}
                          {dayData.accommodation && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              padding: '12px',
                              '@media (min-width: 640px)': {
                                padding: '16px'
                              },
                              backgroundColor: '#eff6ff',
                              borderRadius: '10px',
                              '@media (min-width: 640px)': {
                                borderRadius: '12px'
                              },
                              border: '1px solid #dbeafe',
                              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.15)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}>
                              <div style={{
                                backgroundColor: '#2563eb',
                                borderRadius: '6px',
                                '@media (min-width: 640px)': {
                                  borderRadius: '8px'
                                },
                                padding: '6px',
                                '@media (min-width: 640px)': {
                                  padding: '8px'
                                },
                                marginRight: '10px',
                                '@media (min-width: 640px)': {
                                  marginRight: '12px'
                                }
                              }}>
                                <Hotel size={14} color="white" style={{ 
                                  '@media (min-width: 640px)': {
                                    size: '16px'
                                  }
                                }} />
                              </div>
                              <div>
                                <div style={{
                                  fontSize: '13px',
                                  '@media (min-width: 640px)': {
                                    fontSize: '14px'
                                  },
                                  fontWeight: '600',
                                  color: '#1f2937',
                                  marginBottom: '4px'
                                }}>Night Stay</div>
                                <div style={{
                                  fontSize: '12px',
                                  color: '#6b7280'
                                }}>{dayData.accommodation}</div>
                              </div>
                            </div>
                          )}

                          {/* Meals */}
                          {dayData.meals && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              padding: '12px',
                              '@media (min-width: 640px)': {
                                padding: '16px'
                              },
                              backgroundColor: '#fff7ed',
                              borderRadius: '10px',
                              '@media (min-width: 640px)': {
                                borderRadius: '12px'
                              },
                              border: '1px solid #fed7aa',
                              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(234, 88, 12, 0.15)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}>
                              <div style={{
                                backgroundColor: '#ea580c',
                                borderRadius: '6px',
                                '@media (min-width: 640px)': {
                                  borderRadius: '8px'
                                },
                                padding: '6px',
                                '@media (min-width: 640px)': {
                                  padding: '8px'
                                },
                                marginRight: '10px',
                                '@media (min-width: 640px)': {
                                  marginRight: '12px'
                                }
                              }}>
                                <Utensils size={14} color="white" style={{ 
                                  '@media (min-width: 640px)': {
                                    size: '16px'
                                  }
                                }} />
                              </div>
                              <div>
                                <div style={{
                                  fontSize: '13px',
                                  '@media (min-width: 640px)': {
                                    fontSize: '14px'
                                  },
                                  fontWeight: '600',
                                  color: '#1f2937',
                                  marginBottom: '4px'
                                }}>Meals Included</div>
                                <div style={{
                                  fontSize: '12px',
                                  color: '#6b7280'
                                }}>{dayData.meals}</div>
                              </div>
                            </div>
                          )}

                          {/* Extras */}
                          {dayData.extras && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              padding: '12px',
                              '@media (min-width: 640px)': {
                                padding: '16px'
                              },
                              backgroundColor: '#f0fdf4',
                              borderRadius: '10px',
                              '@media (min-width: 640px)': {
                                borderRadius: '12px'
                              },
                              border: '1px solid #bbf7d0',
                              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(22, 163, 74, 0.15)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}>
                              <div style={{
                                backgroundColor: '#16a34a',
                                borderRadius: '6px',
                                '@media (min-width: 640px)': {
                                  borderRadius: '8px'
                                },
                                padding: '6px',
                                '@media (min-width: 640px)': {
                                  padding: '8px'
                                },
                                marginRight: '10px',
                                '@media (min-width: 640px)': {
                                  marginRight: '12px'
                                }
                              }}>
                                <Coffee size={14} color="white" style={{ 
                                  '@media (min-width: 640px)': {
                                    size: '16px'
                                  }
                                }} />
                              </div>
                              <div>
                                <div style={{
                                  fontSize: '13px',
                                  '@media (min-width: 640px)': {
                                    fontSize: '14px'
                                  },
                                  fontWeight: '600',
                                  color: '#1f2937',
                                  marginBottom: '4px'
                                }}>Experience</div>
                                <div style={{
                                  fontSize: '12px',
                                  color: '#6b7280'
                                }}>{dayData.extras}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Itinerary;