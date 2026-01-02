"use client"
import React from 'react'
import footerimg1 from "../../../public/assets/images/shapes/site-footer-shape-2.png"
import footerimg2 from "../../../public/assets/images/resources/site-footer-logo-1.png"
import footerimg3 from "../../../public/assets/images/shapes/site-footer-shape-1.png"
import footerimg4 from "../../../public/assets/images/resources/site-footer-top-right-heading-img.png"
import Image from 'next/image'
import Link from 'next/link'
const FooterOne: React.FC = () => {

    const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        alert("tel:+9288006780")

    };
    const handleinfoDom = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        alert("mailto:info@domain.com")
    }

    const handleForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const Email = formData.get("footerEmail") as string;
        const Swal = (await import("sweetalert2")).default;

        if (Email) {
            setTimeout(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Subscribed",
                    showConfirmButton: false,
                    timer: 1000
                });
            }, 1000)
        } else {
            Swal.fire({
                title: "Oops...",
                text: "Enter your email",
                icon: "error"
            });
        }
    }

    return (
        <footer className="site-footer">
            <div className="site-footer__shape-bg float-bob-y"
            ></div>
            <div className="site-footer__shape-2 img-bounce">
                <Image src={footerimg1} alt="" />
            </div>
            <div className="container">
                <div className="site-footer__inner">
                    <div className="site-footer__top">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="site-footer__top-left">
                                    <div className="site-footer__logo-box">
                                        <div className="site-footer__logo">
                                            <Link href={"/"}><Image src={footerimg2} alt="" /></Link>
                                        </div>
                                        <p className="site-footer__text-1">We are passionate about delivering exceptional
                                            cleaning services to create spotless, comfortable spaces for homes and
                                            businesses.</p>
                                    </div>
                                    <div className="site-footer__contact-info-box">
                                        <ul className="list-unstyled site-footer__contact-info">
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
                                        <ul className="list-unstyled site-footer__contact-info site-footer__contact-info--two">
                                            <li>
                                                <div className="site-footer__contact-info-icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <div className="site-footer__contact-info-content">
                                                    <p>Email Address:</p>
                                                    <h5><Link href="#" onClick={handleinfoDom}>info@domain.com</Link></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="site-footer__contact-info-icon">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <div className="site-footer__contact-info-content">
                                                    <p>Phone Number:</p>
                                                    <h5>
                                                        <Link href="#" onClick={handlePhoneClick}>
                                                            +92 ( 8800 ) - 6780
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="site-footer__social-box">
                                        <h4 className="site-footer__social-title">Follow Us</h4>
                                        <div className="site-footer__social">
                                            <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                            <Link href="#"><span className="icon-pinterest"></span></Link>
                                            <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="site-footer__top-right">
                                    <div className="site-footer__top-right-heading-box">
                                        <div className="site-footer__shape-1 float-bob-x">
                                            <Image src={footerimg3} alt="" />
                                        </div>
                                        <h3 className="site-footer__top-right-heading-title">Collaborated with you to <br />
                                            find your valuable idea.</h3>
                                        <div className="site-footer__top-right-heading-img">
                                            <Image src={footerimg4} alt="" />
                                        </div>
                                    </div>
                                    <div className="site-footer__widget-box">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                <div className="footer-widget__quick-links">
                                                    <h4 className="footer-widget__title">Quick Links</h4>
                                                    <ul className="footer-widget__quick-links-list list-unstyled">
                                                        <li> <Link href={"/"}><span className="icon-next"></span> Home</Link> </li>
                                                        <li> <Link href={"/about"}><span className="icon-next"></span> About Us</Link> </li>
                                                        <li> <Link href={"/contact"}><span className="icon-next"></span> Contact</Link> </li>
                                                        <li> <Link href={"/faq"}><span className="icon-next"></span> FAQs Page</Link></li>
                                                        <li> <Link href={"/blog"}><span className="icon-next"></span>Our Blogs</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                <div className="footer-widget__essential-links">
                                                    <h4 className="footer-widget__title">Essential</h4>
                                                    <ul className="footer-widget__quick-links-list list-unstyled">
                                                        <li> <Link href={"/about"}><span className="icon-next"></span> Our Company</Link>  </li>
                                                        <li> <Link href={"/about"}><span className="icon-next"></span> Terms & Condition</Link> </li>
                                                        <li> <Link href={"/about"}><span className="icon-next"></span> Privacy Policy</Link> </li>
                                                        <li> <Link href={"/contact"}><span className="icon-next"></span> Contact Us</Link> </li>
                                                        <li> <Link href={"/about"}> <span className="icon-next"></span> About US</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                <div className="footer-widget__services-links">
                                                    <h4 className="footer-widget__title">Our Services</h4>
                                                    <ul className="footer-widget__quick-links-list list-unstyled">
                                                        <li> <Link href={"/office-cleaning"}><span className="icon-next"></span> Office Cleaning</Link> </li>
                                                        <li> <Link href={"/commercial-cleaning"}><span className="icon-next"></span> House Cleanings</Link> </li>
                                                        <li> <Link href={"/sanitizing-mopping"}><span className="icon-next"></span> Store Moping</Link> </li>
                                                        <li> <Link href={"/deep-cleaning"}><span className="icon-next"></span> Organization</Link> </li>
                                                        <li> <Link href={"/residential-cleaning"}><span className="icon-next"></span> Room Sparkling</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="site-footer__tearms-and-condition">
                                        <ul className="list-unstyled site-footer__tearms-and-condition-list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-file"></span>
                                                </div>
                                                <div className="content">
                                                    <h4> <Link href={"/about"}>Here review our terms and <br /> conditions document</Link></h4>
                                                    <p>Download Now</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-medal"></span>
                                                </div>
                                                <div className="content">
                                                    <h4><Link href={"/about"}>We are Chartered certified <br /> agency. you can trust</Link></h4>
                                                    <div className="site-footer__tearms-and-condition-star">
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-favorite"></span>
                                                        <span className="icon-favorite"></span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="site-footer__subscribe-form-box">
                                    <form onSubmit={handleForm} className="site-footer__subscribe-form">
                                        <div className="site-footer__subscribe-input">
                                            <input name="footerEmail" type="email" placeholder="Email Address" />
                                        </div>
                                        <button type="submit" className="site-footer__subscribe-btn"> <span
                                            className="icon-send"></span>
                                            Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="site-footer__bottom-text-box">
                                    <p className="site-footer__bottom-text">Copyright © 2025 by <Link href="https://themeforest.net/user/codearchives">Freshflow.</Link> All
                                        rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;