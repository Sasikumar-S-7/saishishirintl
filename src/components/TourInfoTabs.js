"use client";
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function TourInfoTabs() {
  const [activeTab, setActiveTab] = useState('inclusions');

  const tabContent = {
    inclusions: [
      'To and fro economy class air travel for Mumbai to Mumbai Tour guests as mentioned in the itinerary',
      'Airfare, Airport taxes and Visa Fees',
      'Baggage Allowance as per the airline policy',
      'Tour Manager Services throughout the tour',
      'Travel by comfortable A/C coach as per the tour itinerary',
      'Entrance fees of all sightseeing places to be visited from inside',
      'Accommodation in comfortable and convenient hotels on twin sharing basis',
      'All Meals – Breakfast, Lunch, Dinner (set menu) as mentioned in the itinerary',
      'All Tips – Guide, Driver & Restaurants',
      'Cost of internal airfare as mentioned in the itinerary',
      'Complimentary insurance up to 59 years of age',
    ],
    exclusions: [
      'Any personal expenses like shopping, laundry, mini bar etc.',
      'TCS (Tax Collected at Source)',
      'Travel insurance for age above 59 years',
      'Optional sightseeing or activities',
      'Cost of RT-PCR tests (if required)',
    ],
    cancellationPolicy: [
      {
        type: 'table',
        content: {
          headers: ['Cancellation received number of days before departure', 'Cancellation fee applicable on Net tour price'],
          rows: [
            ['0 – 30 Days', '100%'],
            ['30 – Above Days', '50%']
          ]
        }
      },
      {
        type: 'text',
        content: 'In some cases if Air tickets are blocked / issued on special fare then cancellation charges levied by the airline, over and above the charges as mentioned in the table hereinabove shall be borne by the guest.'
      },
      {
        type: 'text',
        content: 'Payments can be made by Netbanking for Online Booking and Cheque, Demand Draft, NEFT, RTGS or IMPS for Offline Bookings.'
      },
      {
        type: 'text',
        content: 'Cheque/Demand Draft should be in favour of \'Sai Shishir Tours\''
      },
      {
        type: 'note',
        content: 'Note : Tour Manager will be offered from Bangalore upon minimum 16 pax being confirmed on the group. Else destination english speaking tour guides will be provided'
      }
    ],
    paymentPolicy: [
      {
        type: 'table',
        content: {
          headers: ['Sector', 'Package Price (Per Person)', 'Payment Policy'],
          rows: [
            ['International', 'Less than INR 25,000', 'Full Payment'],
            ['International', 'Less than INR 50,000', 'INR 25,000 (Registration Amount per person)'],
            ['International', 'More than INR 50,000', 'INR 50,000 (Registration Amount per person)'],
            ['International', '45 Days Prior to Departure', 'Full Payment'],
            ['International', 'Last Minute Booking (Received within 45 days)', 'Registration Amount Equal to Package Price']
          ]
        }
      }
    ]
  };

  const getTabLabel = (tabName) => {
    switch(tabName) {
      case 'inclusions': return 'Inclusions';
      case 'exclusions': return 'Exclusions';
      case 'cancellationPolicy': return 'Cancellation Policy';
      case 'paymentPolicy': return 'Payment Policy';
      default: return '';
    }
  };

  const renderTabContent = () => {
    if (activeTab === 'inclusions' || activeTab === 'exclusions') {
      return (
        <div className="list-group list-group-flush">
          {tabContent[activeTab].map((item, index) => (
            <div key={index} className="list-group-item border-0 py-2 px-0">
              <div className="d-flex align-items-start">
                <div 
                  className={`d-flex align-items-center justify-content-center rounded-circle me-3 ${
                    activeTab === 'inclusions' ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'
                  }`}
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    minWidth: '32px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
                  }}
                >
                  {activeTab === 'inclusions' ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <X size={16} className="text-danger" />
                  )}
                </div>
                <span className="text-muted">{item}</span>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="py-3">
          {tabContent[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              {item.type === 'table' && (
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-light">
                      <tr>
                        {item.content.headers.map((header, headerIndex) => (
                          <th key={headerIndex} className="fw-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.content.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {item.type === 'text' && (
                
                <p className="text-muted mb-2">{item.content}</p>
              )}
              {item.type === 'note' && (
                <div className="alert alert-info" role="alert">
                  <strong>Note:</strong> {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {/* Bootstrap 5 CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="card-title mb-1">Tour Information</h4>
            <p className="card-text mb-0 opacity-75">
              Read this to prepare for your tour in the best way!
            </p>
          </div>

          <div className="card-body p-0">
            {/* Custom Tab Navigation */}
            <div className="border-bottom">
              <nav className="nav nav-tabs border-0" role="tablist">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    className={`nav-link border-0 px-4 py-3 position-relative ${
                      activeTab === tab 
                        ? 'active text-primary fw-semibold' 
                        : 'text-muted'
                    }`}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      backgroundColor: activeTab === tab ? 'transparent' : 'transparent',
                      borderBottom: activeTab === tab ? '3px solid #0d6efd' : '3px solid transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {getTabLabel(tab)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="px-4 py-3">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}