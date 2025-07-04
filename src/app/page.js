'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function HomePage() {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W7KN8667');
          `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W7KN8667"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <Header />

      {/* Fullscreen Hero with Overlay */}
      <div
      className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(/full-shot-travel-concept-with-landmarks.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ zIndex: 2 }} className="container px-3">
        {/* Logo */}
        {/* <div className="mb-4">
          <img
            src="/Saishishir-logo.webp"
            alt="Sai Shishir Tours Logo"
            width={200}
            height={60}
            priority
          />
        </div> */}

        {/* Headings */}
        <h3 className="mt-3 fs-3 fw-semibold">
          This site hosts our marketing landing pages.
        </h3>
        <h4 className="fs-5 fw-normal">
          Each page is designed for a specific audience or campaign.
        </h4>
        <p className="fw-semibold fs-5 mt-3">
          If you’ve reached this page directly, you might want to check our main site or wait for a link from our team.
        </p>

        {/* Signature */}
        <p className="fw-bold fs-5 mb-4">– Team Sai Shishir Tours</p>

        {/* CTA Button */}
        <a
          href="https://saishishirtours.in"
          className="btn mt-2 px-4 py-2 fw-semibold rounded-pill"
          style={{
            backgroundColor: '#ff9f26',
            color: '#0b4878',
            border: 'none',
            fontSize: '1rem',
          }}
        >
          Visit Our Site
        </a>
      </div>
    </div>

      <Footer />
    </>
  );
}