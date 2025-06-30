"use client";
import React, { useEffect } from 'react';
import { CheckCircle, Heart, Star } from 'lucide-react';

export default function ThankYouPage() {
  useEffect(() => {
    // Load Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N458CF63');`;
    document.head.appendChild(gtmScript);

    // Load Bootstrap 5 CSS
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    // Load the confetti library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js';
    script.onload = () => {
      // Start confetti animation once library is loaded
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        
        // Left side confetti
        window.confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        
        // Right side confetti
        window.confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);
    };
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(gtmScript)) {
        document.head.removeChild(gtmScript);
      }
      if (document.head.contains(bootstrapCSS)) {
        document.head.removeChild(bootstrapCSS);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-N458CF63"
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      
      <div 
        className="min-vh-100 d-flex align-items-center justify-content-center px-4"
        style={{
          background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #ef4444 100%)'
        }}
      >
        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5 text-center">
              
              {/* Success Icon */}
              <div className="mb-4">
                <div 
                  className="mx-auto rounded-circle d-flex align-items-center justify-content-center bg-success bg-opacity-10"
                  style={{ width: '80px', height: '80px' }}
                >
                  <CheckCircle className="text-success" size={48} />
                </div>
              </div>

              {/* Main Message */}
              <h1 className="display-5 fw-bold text-dark mb-4">
                Thank You! 🎉
              </h1>
              
              <p className="text-muted mb-4 fs-5">
                Your submission has been received successfully. We appreciate your time and will get back to you soon!
              </p>

              {/* Decorative Elements */}
              <div className="d-flex justify-content-center mb-4">
                <div className="d-flex align-items-center gap-1 text-warning">
                  <Star className="fill-current" size={20} fill="currentColor" />
                  <Star className="fill-current" size={20} fill="currentColor" />
                  <Star className="fill-current" size={20} fill="currentColor" />
                  <Star className="fill-current" size={20} fill="currentColor" />
                  <Star className="fill-current" size={20} fill="currentColor" />
                </div>
              </div>

              {/* Heart Icon */}
              <div className="mb-4">
                <Heart 
                  className="text-danger mx-auto" 
                  size={32}
                  style={{ 
                    animation: 'bounce 2s infinite',
                    animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }} 
                />
              </div>

              {/* Action Button */}
              <button 
                onClick={() => window.location.href = 'https://saishishirtours.in/'}
                className="btn btn-lg rounded-pill fw-semibold mb-4 px-5 py-3"
                style={{
                  background: 'linear-gradient(135deg, #9333ea, #ec4899)',
                  border: 'none',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 6px 20px rgba(147, 51, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(147, 51, 234, 0.3)';
                }}
              >
                Visit Our Website
              </button>

              {/* Additional Info */}
              <div className="border-top pt-4 mt-4">
                <p className="text-muted small mb-0">
                  Need help? Contact us at{' '}
                  <a 
                    href="mailto: info@saishishirtours.in" 
                    className="text-decoration-none"
                    style={{ color: '#9333ea' }}
                  >
                    info@saishishirtours.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </div>
    </>
  );
}