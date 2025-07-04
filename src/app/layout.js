'use client';

import React, { useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'antd/dist/reset.css'; // Optional
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag to true after hydration
    setIsClient(true);

    // Dynamically import Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Inject GTM Script using @next/third-parties */}
        <GoogleTagManager gtmId="GTM-W7KN8667" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        
      </body>
    </html>
  );
}
