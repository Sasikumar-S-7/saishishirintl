'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Load WhatsApp widget script
    const url = 'https://whatsapp-chat-widget.web.app/whatsapp-chat-widget.js';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    const chatOptions = {
      "buttonSetting": {
        "ctaText": "Chat With Us",
        "positionIsBottomRight": true,
        "backgroundColor": "#37c968",
        "borderRadius": 40,
      },
      "widgetSetting": {
        "companyName": "Sai Shishir Tours",
        "companySubTitle": "Travel Planning Made Easy",
        "companyImg": "https://saishishirtours.in/wp-content/uploads/2018/12/Sai-Shishir-Tours-Logo-3.png",
        "phoneNumber": "918951062993",
        "welcomeText": "Hi there!\nHow can I help you?",
        "userSentText": "Hello, I have a question about {{page_title}}",
        "showByDefault": false,
        "ctaText": "Start chat",
        "headerBackgroundColor": "#2ac6b1",
        "borderRadius": 30,
      }
    };

    script.onload = function() {
      // @ts-ignore
      if (window.createWhatsappChatWidget) {
        // @ts-ignore
        window.createWhatsappChatWidget(chatOptions);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header className="fixed-top bg-white border-bottom shadow-sm py-2 z-3">
        <div className="container d-flex justify-content-between align-items-center px-3">
          {/* Logo */}
          <div className="logo-wrapper">
            <img
              src="/Saishishir-logo.webp"
              alt="Sai Shishir Tours Logo"
              width={150}
              height={60}
              priority
            />
          </div>

          {/* Call Button */}
          <div className='calldiv'>
            <a href="tel:+918951062993" className="call-button d-flex align-items-center text-dark text-decoration-none">
              <i className="bi bi-telephone-fill me-2"></i>
              <span className="fw-bold">+91 89510 62993</span>
            </a>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button - Simple Link (fallback) */}
      {/* <a 
        href="https://wa.me/918951062993" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`position-fixed animate__animated ${isMounted ? 'animate__bounceInDown' : 'opacity-0'} animate__delay-1s`}
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          right: '25px',
          bottom: '35px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '30px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
          animation: isMounted ? 'heartBeat 2s infinite 2s' : 'none'
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a> */}
    </>
  );
};

export default Header;