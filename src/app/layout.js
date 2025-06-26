'use client';

import { useEffect } from 'react';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'antd/dist/reset.css'; // optional


export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically load Bootstrap JS only in client
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('✅ Bootstrap JS loaded');
      })
      .catch((err) => {
        console.error('❌ Failed to load Bootstrap JS:', err);
      });
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
