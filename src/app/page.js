'use client';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Header />

 {/* Fullscreen Hero with Overlay */}
<div
  className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
  style={{
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url(/full-shot-travel-concept-with-landmarks.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', // dark transparent overlay
      zIndex: 1,
    }}
  />

  {/* Content */}
  <div style={{ zIndex: 2 }} className="container px-3">
    <p className="mt-5 fs-5">
      This site hosts our marketing landing pages. Each page is designed for a specific audience or campaign.
    </p>
    <p className="fs-6">
      If you’ve reached this page directly, you might want to check our main site or wait for a link from our team.
    </p>
    <p className="fw-semibold fs-5">-Team Sai Shishir Tours</p>
    <a href="https://saishishirtours.in" className="btn orange-brand-bg-color mt-3 px-4 py-2 fw-semibold">
      Visit Our Site
    </a>
  </div>
</div>



      <Footer />
    </>
  );
}
