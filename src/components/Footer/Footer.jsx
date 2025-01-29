import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

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
      <p className='text-sky-500'>
         <FaTwitter></FaTwitter>
      </p>
      <p className='text-red-500'>
         <FaYoutube></FaYoutube>
      </p>
      <p className='text-sky-500'>
         <FaFacebookF></FaFacebookF>
      </p>
      <p className='text-pink-500'>
           <FaInstagramSquare></FaInstagramSquare>
      </p>
      <p className='text-sky-500'>
          <FaLinkedin></FaLinkedin>
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