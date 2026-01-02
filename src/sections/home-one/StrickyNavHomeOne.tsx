"use client"
import React, { useContext, useEffect, useState } from 'react';
import logo_1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from '../../../public/assets/images/home-showcase/home-showcase-1-1.jpg'
import Image from 'next/image';
import Link from 'next/link';
import FreshFlowContext from '@/components/context/FreshFlowContext';
const StrickyNavHomeOne: React.FC = () => {
    const context = useContext(FreshFlowContext);
    if (!context) {
        throw new Error("Context null")
    }
    const { setIsMobileOpen, setIsSearch } = context;
    const handleSearch = (): void => {
        setIsSearch((prev) => !prev);
    };
    const [isStick, setIsSticky] = useState<boolean>(false);
    const headerScrollPos: number = 130;
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > headerScrollPos) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href={"/"}>
                                        <Image className="" src={logo_1} alt="" />
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
                                {/* <ManuList /> */}
                                <ul className="main-menu__list">
                                    <li className="dropdown megamenu current">
                                        <Link href={"/"}>Home</Link>
                                        <ul>
                                            <li>
                                                <section className="home-showcase">
                                                    <div className="container">
                                                        <div className="home-showcase__inner">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <Image src={image2} alt="" />
                                                                            <div className="home-showcase__buttons">
                                                                                <Link href={"/"} className="thm-btn home-showcase__buttons__item">
                                                                                    View Page
                                                                                    <span className="icon-diagonal-arrow"></span>
                                                                                </Link>
                                                                            </div>
                                                                        </div >
                                                                        <h3 className="home-showcase__title">Home Page 01</h3>
                                                                    </div>
                                                                </div>
                                                            </div>{/* /.row */}
                                                        </div>
                                                    </div>{/* /.container */}
                                                </section>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href={"/about"}>
                                            About
                                        </Link>
                                    </li>
                                    {/* Hidden for now – Pages menu removed */}
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
                                    {/* Hidden for now – Shop menu removed */}
                                    {/* Hidden for now – Blog menu removed */}
                                    <li>
                                        <Link href={"/contact"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-cart-box">
                                    <div className="main-menu__search-box">
                                        {/* <Link href={"#"} className='main-menu__search searcher-toggler-box icon-search'></Link> */}
                                        <Link href="#"
                                            onClick={handleSearch}
                                            className="main-menu__search searcher-toggler-box icon-search"
                                        ></Link>
                                    </div>
                                    <div className="main-menu__cart">
                                        <Link href={"/cart"}>
                                            <span className="fas fa-shopping-cart"></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <div className="main-menu__btn">
                                        <Link href={"/contact"}>
                                            <span className="icon-customer-support"></span>
                                            Book Schedule
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyNavHomeOne;