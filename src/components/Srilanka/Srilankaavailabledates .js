'use client';
import React from 'react';


// Array of month-date data
const tagData = [
  // { month: 'Sep', date: '11', extra: '31' },
   { month: 'July', date: '10' },
  { month: 'Sep', date: '09' },
 
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
          <span className="px-3 py-1 fw-bold text-orange month">{item.month.toUpperCase()}</span>
          <span className="px-3 py-1 fw-bold  bg-orange date">{item.date}</span>
          {item.extra && (
            <span className="px-3 py-1 fw-bold  bg-light date border-start">
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
