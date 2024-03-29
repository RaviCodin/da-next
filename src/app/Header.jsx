'use client'


import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import "./globals.css";
import Logo from './imgs/logo_new.png'
import Image from 'next/image';


const Header = () => {
    console.log(Logo)
    return (

        <div>

            <nav className="fixed-top p-2 navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.php">
                        {/* <img src={Logo} className="brand-logo" alt="logo" /> */}
                        <Image
                            src={Logo}
                            width={50}
                            // height={0}
                            alt="Logo"
                        />
                        <span className="brand-name">Design Avenue</span>
                    </a>

                    <button className="btn off-btn bg-transparent text-center HeaderBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list text-center justify-content-center mLeft"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>

                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-body">
                            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="./index.php">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./about.php">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Consultations
                                    </a>
                                    <ul className="dropdown-menu border-0 bgHeader" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" id="dropdown-item-effect" href="./technology.php">Technology</a></li>
                                        <li><a className="dropdown-item" id="dropdown-item-effect" href="./marketing.php">Marketing Gimmicks</a></li>
                                        <li><a className="dropdown-item" id="dropdown-item-effect" href="./brand.php">Brand Strategy and Design</a>
                                        </li>
                                        <li><a className="dropdown-item" id="dropdown-item-effect" href="./optimization.php">Optimization</a></li>
                                        <li><a className="dropdown-item" id="dropdown-item-effect" href="./startup_advisory.php">Startup Advisory</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./business_hub.php">Business Hub</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="./contact.php">Contact Us</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header