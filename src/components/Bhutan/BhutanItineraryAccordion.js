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
    date: '15 Dec',
    title: 'Day 1 | Bagdogra – Phuentsholing',
    description: "Arrival at Bagdogra International Airport and transfer to Phuentsholing (The Gateway of Bhutan by road from India). Phuentsholing is a thriving commercial center on the northern edge of the Indian Plains. Check-in to the hotel, dinner and overnight stay at Phuentsholing.",
    sightseeing: [],
    accommodation: 'Night Stay in Phuentsholing',
    meals: 'Lunch & Dinner',
    extras: 'Airport transfer'
  },
  {
    day: 2,
    date: '16 Dec',
    title: 'Day 2 | Phuentsholing – Thimphu (170 kms / 6 hr)',
    description: "Complete immigration formalities and transfer to Thimphu (capital city of Bhutan). Check-in at the hotel, dinner and overnight stay at Thimphu.",
    sightseeing: ['Kharbhandi Gompa Mandir', 'Waterfall', 'Chuzhom - the confluence of 2 rivers of Paro & Thimphu'],
    accommodation: 'Night Stay in Thimphu',
    meals: 'Breakfast, Lunch & Dinner',
    extras: 'Immigration formalities'
  },
  {
    day: 3,
    date: '17 Dec',
    title: 'Day 3 | Thimphu – Punakha – Night Stay Thimphu',
    description: "After breakfast, drive to Punakha/Wangdue. Stop at Dochu-La-Pass (3150 mts.) for Himalayan views. Afternoon outside photo shoot at Punakha Dzong, built in 1637, named Druk Pungthang Dechen Phodrang (Palace of Great Happiness), winter residence of Je-Khenpo. River rafting at Punakha and visit the Hanging Bridge. Return to Thimphu hotel for dinner and overnight stay.",
    sightseeing: ['Dochu-La-Pass (3150 mts.)', 'Punakha Dzong', 'Hanging Bridge at Punakha'],
    accommodation: 'Night Stay in Thimphu',
    meals: 'Breakfast, Lunch & Dinner',
    extras: 'River Rafting at Punakha (Additional charges ₹2000/- PP)'
  },
  {
    day: 4,
    date: '18 Dec',
    title: 'Day 4 | Thimphu Local Sightseeing – Night Stay at Paro',
    description: "After breakfast, explore Thimphu, the capital of Bhutan. Visit Kuensel Phodrang for the Buddha Statue, explore National Memorial Chorten (view from outside only). Afternoon visit Sangaygang ViewPoint and Changangkha Monastery. Enjoy tribal dance (bonfire) at Paro Hotel. Dinner and overnight stay at Paro.",
    sightseeing: ['Kuensel Phodrang (Buddha Statue)', 'Hindu Temple Below Buddha Point', 'Thimphu View Point', 'Art & Craft Market', 'National Memorial Chorten', 'Sangaygang ViewPoint', 'Changangkha Monastery'],
    accommodation: 'Night Stay in Paro',
    meals: 'Breakfast, Lunch & Dinner',
    extras: 'Tribal dance (bonfire) at Paro Hotel'
  },
  {
    day: 5,
    date: '19 Dec',
    title: 'Day 5 | Paro Local Sightseeing',
    description: "After breakfast visit hiking the Tiger's Nest (those who will not be going to Tiger's Nest can do Paro Shopping – entry free). Lunch followed by local Paro shopping. Overnight stay at Paro.",
    sightseeing: ['Tiger\'s Nest (Hiking)', 'Paro Local Shopping'],
    accommodation: 'Night Stay in Paro',
    meals: 'Breakfast, Lunch & Dinner',
    extras: 'Local Shopping - 3 Hours'
  },
  {
    day: 6,
    date: '20 Dec',
    title: 'Day 6 | Paro – Che Le La Pass – Phuentsholing (180 kms / 7 hr)',
    description: "Early morning visit Che Le La Pass, highest motorable peak in Bhutan which mostly will have snow. Breakfast & lunch at Paro. Transfer from Paro to Phuentsholing - a drive of nearly 160 km. Evening proceed to Phuentsholing shopping and return back to the hotel. Dinner and overnight stay at Phuentsholing.",
    sightseeing: ['Che Le La Pass (Highest Motorable Peak)', 'Phuentsholing Shopping'],
    accommodation: 'Night Stay in Phuentsholing',
    meals: 'Breakfast, Lunch & Dinner',
    extras: 'Evening shopping at Phuentsholing'
  },
  {
    day: 7,
    date: '21 Dec',
    title: 'Day 7 | Phuentsholing – Departure',
    description: "After breakfast, complete immigration formalities, check out from the hotel, and transfer to Bagdogra International Airport, cherishing the sweet memories of the tour as you bid farewell.",
    sightseeing: [],
    accommodation: 'Departure',
    meals: 'Breakfast & Lunch',
    extras: 'Immigration formalities & Airport transfer'
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