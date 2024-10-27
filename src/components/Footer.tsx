import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className='footer container py-5'>
      <div className="row">
        <div className="footer-zenna col-12 col-md-4">
          <Link to='/'><img src="/image/header/zenna-logo.png" alt="" className='zenna-img' /></Link>
          <p className='py-4'>Zenna Shop is a very slick and clean <br /> eCommerce template.</p>
          <span className='twitter'><FaTwitter /></span>
          <span className='facebook'><FaFacebookF /></span>
          <span className='google'><FaGooglePlusG /></span>
        </div>
        <div className="footer-information col-12 col-md-2">
          <h6>Information</h6>
          <a href="#">Our stores</a>
          <a href="#">About us</a>
          <a href="#">Business with us</a>
          <a href="#">Delivery information</a>

        </div>

        <div className="footer-account col-12 col-md-2">
          <h6>Account</h6>
          <a href="#">My account</a>
          <a href="#">Wishlist</a>
          <a href="#">Order history</a>
          <a href="#">Specials</a>
        </div>

        <div className="footer-useful col-12 col-md-2">
          <h6>Useful Links</h6>
          <a href="#">Shipping Policy</a>
          <a href="#">Stores</a>
          <a href="#">Returns</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-service col-12 col-md-2">
          <h6>Service</h6>
          <a href="#">Support</a>
          <a href="#">Warranty</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>

      </div>
      <hr />

      <div className="footer-card d-flex justify-content-between"> 
          <div className="zenna-2024">
            <span>2024 Zenna | Made by DeoThemes</span>
          </div>
          <div className="visa-card">
            <span><FaCcPaypal /></span>
            <span><FaCcVisa /></span>
            <span><FaCcMastercard /></span>
            <span><FaCcDiscover /></span>
            <span><SiAmericanexpress /></span>
          </div>
      </div>
    </div>
  )
}

export default Footer