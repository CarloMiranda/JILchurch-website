import React, { useState } from 'react';
import '../css/Index.css';
import { Outlet, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import ScrollToTopButton from "./ScrollToTopButton";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPhone, FaMapMarker,FaEnvelope } from "react-icons/fa";

function Layout() {

    return(
        <div className="layout">
            <div className="navbar navbar-expand-lg">
                    <Link to="/" className='navbar-brand col-1 justify-content-end d-flex ms-5'><img src={logo} alt="Church logo" /></Link>
                    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav w-100 justify-content-center fs-5 fw-bold">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                BULLETINS
                            </a>
                            <ul className="dropdown-menu fs-4">
                                <li><a className="dropdown-item top" href="#">Articles</a></li>
                                <li><a className="dropdown-item" href="#">Resources</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MINISTRIES
                            </a>
                            <ul className="dropdown-menu fs-4">
                                <li><a className="dropdown-item top" href="#">WAN</a></li>
                                <li><a className="dropdown-item" href="#">SOS</a></li>
                                <li><a className="dropdown-item" href="#">Lifegroup</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                OUTREACH
                            </a>
                            <ul className="dropdown-menu fs-4">
                                <li><a className="dropdown-item top" href="#">JIL San Jose Patag</a></li>
                                <li><a className="dropdown-item" href="#">JIL Bulac</a></li>
                                <li><a className="dropdown-item" href="#">JIL Catmon</a></li>
                                <li><a className="dropdown-item" href="#">JIL Caysio</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/ministry" className='nav-link'>MINISTRY</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/network" className='nav-link text-white'>NETWORK</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/church" className='nav-link text-white'>CHURCH</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='nav-link text-white'>CONTACT US</Link>
                        </li>
                    </ul>
                    <div className='social-icons col-2 fs-4'>
                        <a href="" className="social-link text-white mx-3"><FaFacebook/></a>
                        <a href="" className="social-link text-white"><FaInstagram/></a>
                        <a href="" className="social-link text-white mx-3"><FaTwitter/></a>
                        <a href="" className="social-link text-white"><FaYoutube/></a>
                    </div>
                </div>
            </div>

            < Outlet />

            <footer className='text-white'>
                <div className="text-center mb-5">
                    <h3><strong>CONNECT WITH US</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex text-center justify-content-center">
                        <div className='mx-3'>
                            <div>
                                <span className='rounded p-2 pt-1 bg-white text-primary'><FaPhone/></span>
                            </div>
                            <p className='mt-3'><strong>Phone Hotline</strong></p>
                        </div>
                        <div className='mx-5'>
                            <div>
                                <span className='rounded p-2 pt-1 bg-white text-primary'><FaMapMarker/></span>
                            </div>
                            <p className='mt-3'><strong>Address</strong></p>
                        </div>
                        <div className='mx-5'>
                            <div>
                                <span className='rounded p-2 pt-1 bg-white text-primary'><FaEnvelope/></span>
                            </div>
                            <p className='mt-3'><strong>Email</strong></p>
                        </div>
                    </div>
                    <div className="footer-socials col-md-6 d-flex justify-content-center">
                        <div className='mx-3'>
                            <span className='rounded p-2 pt-1 bg-white text-primary'><FaFacebook/></span>
                        </div>
                        <div className='mx-3'>
                            <span className='rounded p-2 pt-1 bg-white text-primary'><FaInstagram/></span>
                        </div>
                        <div className='mx-3'>
                            <span className='rounded p-2 pt-1 bg-white text-primary'><FaTwitter/></span>
                        </div>
                        <div className='mx-3'>
                            <span className='rounded p-2 pt-1 bg-white text-primary'><FaYoutube/></span>
                        </div>
                    </div>
                </div>
                <p className='text-center'>Privacy Policy | Copyright © 2023 Jesus Is Lord Church. All rights Reserved</p>
                <ScrollToTopButton />
            </footer>
        </div>
    )
}

export default Layout;