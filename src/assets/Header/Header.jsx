import React, { useRef, useState, useEffect } from 'react'
import "../Header/header.css"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import BasicMenu from '../Dropdown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerMidRef = useRef();


  const handleScroll = () => {
    const scrollY = window.scrollY; 
    if (scrollY > 250) {
      setIsScrolled(true); 
    } else {
      setIsScrolled(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate()

  return (
    <header>
      <div className="header-top">
        <div className="header-top-content">
          <div className="top-content">
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </div>
          <div className="content-right">
            <ul>
              <li onClick={() => navigate('/wishList')} ><a href="">My Wishlist</a></li>
              <li><a href="">Track Your Order</a></li>
            </ul>
            <div className="icons">
              <FaFacebook className='icon' />
              <FaInstagram className='icon' />
              <FaTwitter className='icon' />
              <FaLinkedinIn className='icon' />
              <FaYoutube className='icon' />
            </div>
          </div>
        </div>
      </div>

      <div className={`header-mid ${isScrolled ? 'scrolled' : ''}`} ref={headerMidRef}>
        <div className="mid-content">
          <div className="logo">
          <Link to="/"><img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="" /></Link> 
          </div>

          <nav>
            <ul>
              <li onClick={() =>navigate("/")} ><a href="">Home</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Women</a></li>
              <li><a href="">Baby Collection</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>

          <div className="mid-icons">
            <IoSearch className='icon' />
            <BasicMenu/>
            <Badge badgeContent={1} color="secondary">
            <HiOutlineShoppingCart onClick={() => navigate('/basketPage')}  className='icon' />
            </Badge>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer <a href="">Shop Now</a> </p>
      </div>
    </header>
  );
};

export default Header;
