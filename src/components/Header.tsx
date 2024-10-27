import React, { useRef } from 'react';
import "./Header.css"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.add('aktiv');
    }
  }

  const closeMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.remove('aktiv');
    }
  }

  return (
    <>
      <div className="mobile-menu" ref={mobileMenuRef}>
        <IoCloseCircleOutline className='close-icon' onClick={closeMenu} />
        <Link to='/'><img src="/image/header/zenna-logo.png" alt="" className='zenna' /></Link>
        <div className="mobile-links">
          <Link to="/home">HOME</Link>
          <Link to="/pages">PAGES</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/elements">ELEMENTS</Link>
          <span> <Link to="#">My Account</Link></span>
          <Link to="/search"><FaSearch className='search' /></Link>
        </div>
      </div>

      <nav className='navbar-header'>
        <div className='header container py-4 d-flex justify-content-between align-items-center'>
          <Link to='/'><img src="/image/header/zenna-logo.png" alt="" className='zenna' /></Link>
          <div className="links">
            <Link to="/home">HOME</Link>
            <Link to="/pages">PAGES</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/elements">ELEMENTS</Link>
          </div>

          <div className="account">
            <span> <Link to="#">My Account</Link></span>
            <Link to="/search"><FaSearch className='search' /></Link>
            <Link to="/basket"><BsBagFill className='fill' /></Link>
            
          </div>
        </div>
        <FaBarsStaggered onClick={openMenu} className='bars-icon' />
      </nav>
    </>
  )
}

export default Header;
