
"use client";

import React, { useContext, useState } from 'react';
import logo from "../../../public/assets/images/resources/logo-2.png";
import home_showcase_1 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import Link from 'next/link';
import Image from 'next/image';
import FreshFlowContext from '../context/FreshFlowContext';

const MobileNav: React.FC = () => {
    const context = useContext(FreshFlowContext);
    if (!context) throw new Error('context is null!')
    const { setIsMobileOpen, isMobileOpen } = context;
    const [isHomeOpen, setIsHomeOpen] = useState<boolean>(false);
    const [isPageOpen, setIsPagesOpen] = useState<boolean>(false);
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
    const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
    const [isBlogOpen, setIsBlogOpen] = useState<boolean>(false);
    const [product, setProducts] = useState<boolean>(false);
    const handleLinkClick = (): void => {
        setIsHomeOpen(false);
        setIsPagesOpen(false);
        setIsServicesOpen(false);
        setIsShopOpen(false);
        setIsBlogOpen(false);
        setProducts(false);
        setIsMobileOpen(false)
    };

    return (
        <div className={`mobile-nav__wrapper ${isMobileOpen ? 'expanded' : ''}`}>
            <div onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__overlay mobile-nav__toggler"></div>
            <div className="mobile-nav__content">
                <span onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image" onClick={handleLinkClick}>
                        <Image src={logo} width="150" alt="" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li className="dropdown megamenu current">
                            <Link href="#" className={`${isHomeOpen ? 'expanded' : ''} `}>
                                Home
                                <button onClick={() => setIsHomeOpen(!isHomeOpen)} type="button" className={`${isHomeOpen ? 'expanded' : ''}  `}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${isHomeOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <section className="home-showcase">
                                        <div className="container">
                                            <div className="home-showcase__inner">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="home-showcase__item">
                                                            <div className="home-showcase__image">
                                                                <Image src={home_showcase_1} alt="home-one" />
                                                                <div className="home-showcase__buttons">
                                                                    <Link href="/" className='thm-btn home-showcase__buttons__item' onClick={handleLinkClick}>
                                                                        View Page
                                                                        <span className='icon-diagonal-arrow'></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <h3 className='home-showcase__title'>
                                                                Home Page 01
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about" onClick={handleLinkClick}>About</Link>
                        </li>
                        {/* Hidden for now – Pages menu removed */}
                        <li className='dropdown'>
                            <Link href="#" className={`${isServicesOpen ? 'expanded' : ''}`}>
                                Services
                                <button onClick={() => setIsServicesOpen(!isServicesOpen)} type="button" className={`${isServicesOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${isServicesOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <Link href="/services" onClick={handleLinkClick}>Services</Link>
                                </li>
                                <li>
                                    <Link href="/residential-cleaning" onClick={handleLinkClick}>Residential Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/commercial-cleaning" onClick={handleLinkClick}>Commercial Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/deep-cleaning" onClick={handleLinkClick}>Deep Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/office-cleaning" onClick={handleLinkClick}>Office Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/sanitizing-mopping" onClick={handleLinkClick}>Sanitizing & Mopping</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Hidden for now – Shop menu removed */}
                        {/* Hidden for now – Blog menu removed */}
                        <li>
                            <Link href="/contact" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:needhelp@Freshflow.com">
                            needhelp@Freshflow.com
                        </Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="tel:666-888-0000">666 888 0000</Link>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;