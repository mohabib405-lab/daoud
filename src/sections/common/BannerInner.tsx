'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import image1 from '../../../public/assets/images/resources/logo-1.png';
import image2 from '../../../public/assets/images/home-showcase/home-showcase-1-1.jpg';
import headimg from '../../../public/assets/images/resources/page-header-img-1.jpg';
import { PagePath } from '@/types/about';
import FreshFlowContext from '@/components/context/FreshFlowContext';

interface BannerOneProps {
    title?: string;
    secondTitle?: string;
    secondTitleLink?: string;
    thirdTitle?: string;
}
interface FreshFlowContextType {
    setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const BannerInner: React.FC<BannerOneProps> = ({
    title = '',
    secondTitle = '',
    secondTitleLink = '',
    thirdTitle = '',
}) => {
    const context = useContext(FreshFlowContext) as FreshFlowContextType | null;

    if (!context) {
        throw new Error('BannerOne must be used within a ContextProvider');
    }

    const { setIsMobileOpen, setSideBar } = context;
    const pathName = usePathname();

    const isCurrent = (pathArray: PagePath[]): boolean => {
        return pathArray.includes(pathName as PagePath);
    };

    const handleMobileToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsMobileOpen((prev) => !prev);
    };

    const handleSidebarToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSideBar((prev) => !prev);
    };

    return (
        <>
            <header className="main-header-three">
                <div className="main-menu-three__top">
                    <div className="container">
                        <div className="main-menu-three__top-inner">
                            <ul className="list-unstyled main-menu-three__contact-list">
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
                            <div className="main-menu-three__top-social-box">
                                <h4 className="main-menu-three__top-social-title">Follow Us</h4>
                                <div className="main-menu-three__top-social">
                                    <Link href="#" aria-label="Facebook">
                                        <span className="icon-facebook-app-symbol"></span>
                                    </Link>
                                    <Link href="#" aria-label="Pinterest">
                                        <span className="icon-pinterest"></span>
                                    </Link>
                                    <Link href="#" aria-label="LinkedIn">
                                        <span className="icon-linkedin-big-logo"></span>
                                    </Link>
                                    <Link href="#" aria-label="Instagram">
                                        <span className="icon-instagram"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/">
                                            <Image src={image1} alt="Logo" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="main-menu-three__main-menu-box">
                                    <Link
                                        href="#"
                                        onClick={handleMobileToggle}
                                        className="mobile-nav__toggler"
                                        aria-label="Toggle mobile menu"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </Link>

                                    <ul className="main-menu__list">
                                        <li className="dropdown megamenu">
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
                                                                                <Image src={image2} alt="Home Page 01" />
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

                                        <li className={pathName === '/about' ? 'current' : ''}>
                                            <Link href="/about">About</Link>
                                        </li>

                                        <li className={`dropdown ${isCurrent(['/team', '/team-details', '/projects', '/projects-carousel', '/project-details', '/testimonials', '/pricing', '/testimonials-carousel', '/pricing-carousel', '/gallery', '/faq']) ? 'current' : ''}`}>
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

                                        <li className={`dropdown ${isCurrent(['/services', '/residential-cleaning', '/commercial-cleaning', '/deep-cleaning', '/office-cleaning', '/sanitizing-mopping']) ? 'current' : ''}`}>
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

                                        <li className={`dropdown ${isCurrent(['/products-left', '/products-right', '/products', '/product-details', '/cart', '/checkout', '/wishlist', '/sign-up', '/login']) ? 'current' : ''}`}>
                                            <Link href="#">Shop</Link>
                                            <ul className="shadow-box">
                                                <li className="dropdown">
                                                    <Link href="#">Products</Link>
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
                                                <li><Link href="/sign-up">Sign Up</Link></li>
                                                <li><Link href="/login">Login</Link></li>
                                            </ul>
                                        </li>

                                        <li className={`dropdown ${isCurrent(['/blog', '/blog-carousel', '/blog-list', '/blog-details']) ? 'current' : ''}`}>
                                            <Link href="/blog">Blog</Link>
                                            <ul className="shadow-box">
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/blog-carousel">Blog Carousel</Link></li>
                                                <li><Link href="/blog-list">Blog List</Link></li>
                                                <li><Link href="/blog-details">Blog Details</Link></li>
                                            </ul>
                                        </li>

                                        <li className={pathName === '/contact' ? 'current' : ''}>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__btn-box">
                                        <Link href="/contact" className="thm-btn">
                                            Get Started
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </Link>
                                    </div>
                                    <div className="main-menu-three__nav-sidebar-icon">
                                        <Link onClick={handleSidebarToggle} className="navSidebar-button" href="#" aria-label="Toggle sidebar">
                                            <span className="icon-app"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="page-header__social">
                    <Link href="#">LinkedIn</Link>
                    <Link href="#">Pinterest</Link>
                    <Link href="#">twitter-x</Link>
                    <Link href="#">facebook</Link>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <div className="page-header__img-1">
                            <Image src={headimg} alt="Page header" />
                        </div>
                        <h2>{title}</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <span className="icon-arrow-right"></span>
                                </li>
                                {secondTitleLink ? (
                                    <li>
                                        <Link href={secondTitleLink}>{secondTitle}</Link>
                                    </li>
                                ) : (
                                    <li>{secondTitle}</li>
                                )}
                                {thirdTitle && (
                                    <>
                                        <li>
                                            <span className="icon-arrow-right"></span>
                                        </li>
                                        <li>{thirdTitle}</li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerInner;