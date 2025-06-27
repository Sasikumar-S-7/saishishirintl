'use client';
import React from 'react';


// Array of month-date data
const tagData = [
  { month: 'Aug', date: '28', extra: '31' },
  { month: 'Sep', date: '11' },
  { month: 'Oct', date: '09' },
  { month: 'Dec', date: '11' },
];

const MonthDateTags = () => {
  return (
    <div className="text-center">
        <h4 className='py-2 fw-bold'>Available Departure Dates</h4>
        <div className='d-flex flex-wrap justify-content-center gap-2'>
      {tagData.map((item, index) => (
        <div
          key={index}
          className="month-date-tag d-inline-flex overflow-hidden border-orange"
        >
          <span className="px-3 py-1 fw-bold text-orange bg-white month">{item.month.toUpperCase()}</span>
          <span className="px-3 py-1 fw-bold text-white bg-orange date">{item.date}</span>
          {item.extra && (
            <span className="px-3 py-1 fw-bold text-orange bg-light date border-start">
              {item.extra}
            </span>
          )}
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default MonthDateTags;
