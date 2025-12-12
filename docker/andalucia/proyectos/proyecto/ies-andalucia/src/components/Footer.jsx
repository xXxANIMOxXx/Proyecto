import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} IES Andalucía
        </div>
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-white me-3"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-white me-3"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
