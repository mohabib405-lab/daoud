
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerImg1 from "../../../public/assets/images/shapes/site-footer-two-shape-1.png";
import footerImg2 from "../../../public/assets/images/resources/site-footer-logo-1.png";
import { motion } from "framer-motion"
const FooterInner: React.FC = () => {
    return (
        <footer className="site-footer-two">
            <div className="container">
                <div className="site-footer-two__inner">
                    <div className="site-footer-two__shape-1 img-bounce">
                        <Image src={footerImg1} alt="" />
                    </div>
                    <div className="site-footer-two__top">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="site-footer-two__top-left">
                                    <div className="site-footer-two__logo-box">
                                        <div className="site-footer-two__logo">
                                            <Link href="/">
                                                <Image src={footerImg2} alt="" />
                                            </Link>
                                        </div>
                                        <p className="site-footer-two__text-1">
                                            We are passionate about delivering exceptional
                                            cleaning <br /> services to create spotless, comfortable spaces for homes <br />
                                            and businesses.
                                        </p>
                                    </div>
                                    <div className="site-footer-two__social-box">
                                        <h4 className="site-footer-two__social-title">Follow Us</h4>
                                        <div className="site-footer-two__social">
                                            <Link href="#">
                                                <span className="icon-facebook-app-symbol"></span>
                                            </Link>
                                            <Link href="#">
                                                <span className="icon-pinterest"></span>
                                            </Link>
                                            <Link href="#">
                                                <span className="icon-linkedin-big-logo"></span>
                                            </Link>
                                            <Link href="#">
                                                <span className="icon-instagram"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="site-footer-two__copyright-text">
                                        Copyright © 2024 by{' '}
                                        <Link href="https://themeforest.net/user/codearchives">
                                            Freshflow.
                                        </Link>{' '}
                                        All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="site-footer-two__top-right">
                                    <div className="site-footer-two__widget-box">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                <motion.div
                                                    initial={{ y: 50, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                    className="footer-widget-two__quick-links">
                                                    <h4 className="footer-widget-two__title">Quick Links</h4>
                                                    <ul

                                                        className="footer-widget-two__quick-links-list list-unstyled">
                                                        <li>
                                                            <Link href="/">
                                                                <span className="icon-next"></span> Home
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/about">
                                                                <span className="icon-next"></span> About Us
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/contact">
                                                                <span className="icon-next"></span> Contact
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/faq">
                                                                <span className="icon-next"></span> FAQs Page
                                                            </Link>
                                                        </li>
                                                        {/* Hidden for now – Our Blogs link removed */}
                                                    </ul>
                                                </motion.div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="200ms">
                                                <motion.div
                                                    initial={{ y: 50, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                    className="footer-widget-two__essential-links">
                                                    <h4 className="footer-widget-two__title">Essential</h4>
                                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                        <li>
                                                            <Link href="/about">
                                                                <span className="icon-next"></span> Our Company
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/terms">
                                                                <span className="icon-next"></span> Terms & Condition
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/privacy">
                                                                <span className="icon-next"></span> Privacy Policy
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/contact">
                                                                <span className="icon-next"></span> Contact Us
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/about">
                                                                <span className="icon-next"></span> About US
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </motion.div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="300ms">
                                                <motion.div
                                                    initial={{ y: 50, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                    className="footer-widget-two__services-links">
                                                    <h4 className="footer-widget-two__title">Our Services</h4>
                                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                        <li>
                                                            <Link href="/office-cleaning">
                                                                <span className="icon-next"></span> Office Cleaning
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/commercial-cleaning">
                                                                <span className="icon-next"></span> House Cleanings
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/sanitizing-mopping">
                                                                <span className="icon-next"></span> Store Moping
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/residential-cleaning">
                                                                <span className="icon-next"></span> Organization
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/deep-cleaning">
                                                                <span className="icon-next"></span> Room Sparkling
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-two__bottom">
                <div className="container">
                    <ul className="list-unstyled site-footer-two__contact-info">
                        <li>
                            <div className="site-footer__contact-info-icon">
                                <span className="icon-envelope"></span>
                            </div>
                            <div className="site-footer__contact-info-content">
                                <p>Email Address:</p>
                                <h5>
                                    <Link href="mailto:info@domain.com">info@domain.com</Link>
                                </h5>
                            </div>
                        </li>
                        <li>
                            <div className="site-footer__contact-info-icon">
                                <span className="icon-phone-call"></span>
                            </div>
                            <div className="site-footer__contact-info-content">
                                <p>Phone Number:</p>
                                <h5>
                                    <Link href="tel:9288006780">+92 ( 8800 ) - 6780</Link>
                                </h5>
                            </div>
                        </li>
                        <li>
                            <div className="site-footer__contact-info-icon">
                                <span className="icon-calendar"></span>
                            </div>
                            <div className="site-footer__contact-info-content">
                                <p>Working Time</p>
                                <h5>Mon - Fri 10:00 - 20:00</h5>
                            </div>
                        </li>
                        <li>
                            <div className="site-footer__contact-info-icon">
                                <span className="icon-pin"></span>
                            </div>
                            <div className="site-footer__contact-info-content">
                                <p>Address:</p>
                                <h5>123 Maplewood Lane, YZ 56789. USA</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterInner;