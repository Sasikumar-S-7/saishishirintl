// app/not-found.js
'use client';
// import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center px-3"
      style={{ backgroundColor: '#f8f9fa' }} // light background
    >
      {/* Logo */}
      <div className="mb-4">
        <img
          src="/Saishishir-logo.webp"
          alt="Sai Shishir Tours Logo"
          width={200}
          height={80}
          priority
        />
      </div>

      {/* 404 Message */}
      <h1 className="display-4 fw-bold mb-3" style={{ color: '#ff9f26' }}>
        404 – Page Not Found
      </h1>

      <p className="fs-5 mb-4" style={{ color: '#0b4878' }}>
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="btn px-4 py-2 rounded-pill shadow"
        style={{
          backgroundColor: '#ff9f26',
          color: '#fff',
          border: 'none',
        }}
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
