'use client';

import React, { useEffect } from 'react';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'antd/dist/reset.css'; // Optional
import './globals.css';



export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
