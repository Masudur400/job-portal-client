import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from 'developer-icons';
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <p>
              <Twitter className='w-10'/>
            </p>
            <p>
              <YouTube className='w-10'/>
            </p>
            <p>
              <Facebook className='w-10'/>
            </p>
            <p> 
              <Instagram className='w-10'/>
            </p>
            <p>
              <LinkedIn className='w-10'/>
            </p>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;