'use client';

import React, { useContext } from 'react';
import FreshFlowContext from '../../components/context/FreshFlowContext';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logo_1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg"; 

const Header: React.FC = () => {
    const pathname = usePathname();
    const context = useContext(FreshFlowContext);

    if (!context) {
        throw new Error("FreshFlowContext is null");
    }

    const { setIsMobileOpen, setIsSearch } = context;

    const handleSearch = (): void => {
        setIsSearch((prev) => !prev);
    };
    const isActive = (path: string) => pathname === path;

    return (
        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-mail"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <Link href="mailto:support@example.com">support@example.com</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <Link href="tel:+121234567890">+12 (123) 456 78900</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-pin-1"></i>
                                </div>
                                <div className="text">
                                    <p>684 West College St. Sun City, USA</p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu__top-social-box">
                            <h4 className="main-menu__top-social-title">Follow Us</h4>
                            <div className="main-menu__top-social">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-facebook-app-symbol"></span>
                                </Link>
                                <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-pinterest"></span>
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-linkedin-big-logo"></span>
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-instagram"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <Image
                                            src={logo_1}
                                            alt="FreshFlow Logo"
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <button
                                    className="mobile-nav__toggler"
                                    onClick={() => setIsMobileOpen((pre) => !pre)}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="main-menu__list">
                                    <li className={`dropdown megamenu ${isActive('/') ? 'current' : ''}`}>
                                        <Link href="/">Home</Link>
                                        <ul>
                                            <li>
                                                <section className="home-showcase">
                                                    <div className="container">
                                                        <div className="home-showcase__inner">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <Image
                                                                                src={image2}
                                                                                alt="Home Page 01"
                                                                                width={270}
                                                                                height={330}
                                                                            />
                                                                            <div className="home-showcase__buttons">
                                                                                <Link href="/" className="thm-btn home-showcase__buttons__item">
                                                                                    View Page
                                                                                    <span className="icon-diagonal-arrow"></span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="home-showcase__title">Home Page 01</h3>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={isActive('/ueber-uns') ? 'current' : ''}>
                                        <Link href="/ueber-uns">Über Uns</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#">Pages</Link>
                                        <ul className="shadow-box">
                                            <li><Link href="/team">Team</Link></li>
                                            <li><Link href="/team-details">Team Details</Link></li>
                                            <li><Link href="/projects">Projects</Link></li>
                                            <li><Link href="/projects-carousel">Projects Carousel</Link></li>
                                            <li><Link href="/project-details">Project Details</Link></li>
                                            <li><Link href="/testimonials">Testimonials</Link></li>
                                            <li><Link href="/testimonials-carousel">Testimonial Carousel</Link></li>
                                            <li><Link href="/pricing">Pricing</Link></li>
                                            <li><Link href="/pricing-carousel">Pricing Carousel</Link></li>
                                            <li><Link href="/gallery">Gallery</Link></li>
                                            <li><Link href="/faq">FAQs</Link></li>
                                            <li><Link href="/error-404">404 Error</Link></li>
                                            <li><Link href="/coming-soon">Coming Soon</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#">Services</Link>
                                        <ul className="shadow-box">
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/residential-cleaning">Residential Cleaning</Link></li>
                                            <li><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                            <li><Link href="/deep-cleaning">Deep Cleaning</Link></li>
                                            <li><Link href="/office-cleaning">Office Cleaning</Link></li>
                                            <li><Link href="/sanitizing-mopping">Sanitizing & Mopping</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#">Shop</Link>
                                        <ul className="shadow-box">
                                            <li className="dropdown">
                                                <Link href="/products">Products</Link>
                                                <ul>
                                                    <li><Link href="/products-left">Left Sidebar</Link></li>
                                                    <li><Link href="/products-right">Right Sidebar</Link></li>
                                                    <li><Link href="/products">No Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/product-details">Product Details</Link></li>
                                            <li><Link href="/cart">Cart</Link></li>
                                            <li><Link href="/checkout">Checkout</Link></li>
                                            <li><Link href="/wishlist">Wishlist</Link></li>
                                            <li><Link href="/signup">Sign Up</Link></li>
                                            <li><Link href="/login">Login</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="#">Blog</Link>
                                        <ul className="shadow-box">
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li><Link href="/blog-carousel">Blog Carousel</Link></li>
                                            <li><Link href="/blog-list">Blog List</Link></li>
                                            <li><Link href="/blog-details">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className={isActive('/contact') ? 'current' : ''}>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-cart-box">
                                    <div className="main-menu__search-box">
                                        <button
                                            onClick={handleSearch}
                                            className="main-menu__search searcher-toggler-box icon-search"
                                            aria-label="Toggle search"
                                        />
                                    </div>
                                    <div className="main-menu__cart">
                                        <Link href="/cart">
                                            <span className="fas fa-shopping-cart"></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <div className="main-menu__btn">
                                        <Link href="/contact">
                                            <span className="icon-customer-support"></span>
                                            Book Schedule
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;