import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPhone, FaMapMarker,FaEnvelope } from "react-icons/fa";

function Layout() {

    return(
        <div className="layout">
            <div className="container-fluid">
                <div className="navbar navbar-expand-lg">
                        <Link to="/" className='navbar-brand col-2'>Home Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav w-100 justify-content-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BULLETINS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Articles</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Resources</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MINISTRY
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">WAN</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">SOS</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Lifegroup</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/ministry" className='nav-link'>MINISTRY</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/outreach" className='nav-link'>OUTREACH</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/network" className='nav-link'>NETWORK</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/church" className='nav-link'>CHURCH</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='nav-link'>CONTACT US</Link>
                            </li>
                        </ul>
                        <div className='social-icons col-2'>
                            <a href="" className="social-link mx-3"><FaFacebook/></a>
                            <a href="" className="social-link"><FaInstagram/></a>
                            <a href="" className="social-link mx-3"><FaTwitter/></a>
                            <a href="" className="social-link"><FaYoutube/></a>
                        </div>
                    </div>
                </div>

                < Outlet />

                <footer>
                    <div className="text-center mb-5">
                        <h3><strong>CONNECT WITH US</strong></h3>
                    </div>
                    <div className="footer-content d-flex justify-content-around">
                        <div className="footer-contact d-flex text-center">
                            <div className='mx-3'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaPhone/></span>
                                </div>
                                <p className='mt-3'><strong>Phone Hotline</strong></p>
                            </div>
                            <div className='mx-5'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaMapMarker/></span>
                                </div>
                                <p className='mt-3'><strong>Address</strong></p>
                            </div>
                            <div className='mx-5'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaEnvelope/></span>
                                </div>
                                <p className='mt-3'><strong>Email</strong></p>
                            </div>
                        </div>
                        <div className="footer-socials d-flex text-center">
                            <div className='mx-3'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaFacebook/></span>
                                </div>
                                <p className='mt-3'><strong>UserName</strong></p>
                            </div>
                            <div className='mx-3'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaInstagram/></span>
                                </div>
                                <p className='mt-3'><strong>UserName</strong></p>
                            </div>
                            <div className='mx-3'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaTwitter/></span>
                                </div>
                                <p className='mt-3'><strong>UserName</strong></p>
                            </div>
                            <div className='mx-3'>
                                <div>
                                    <span className='rounded p-2 pt-1 bg-primary text-white'><FaYoutube/></span>
                                </div>
                                <p className='mt-3'><strong>UserName</strong></p>
                            </div>
                        </div>
                    </div>
                    <p className='text-center'>Privacy Policy | Copyright © 2023 Jesus Is Lord Church. All rights Reserved</p>
                </footer>
            </div>
        </div>
    )
}

export default Layout;