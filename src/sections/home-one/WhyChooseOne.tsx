"use client"
import React, { useState } from 'react';
import whych1 from "../../../public/assets/images/shapes/why-choose-one-shape-2.png";
import whych2 from "../../../public/assets/images/resources/why-choose-one-img-1.jpg";
import whych3 from "../../../public/assets/images/shapes/why-choose-one-shape-1.png";
import whych4 from "../../../public/assets/images/resources/why-choose-one-img-2.jpg";
import whych5 from "../../../public/assets/images/resources/why-choose-one-client-img-1.jpg";
import whych7 from "../../../public/assets/images/resources/why-choose-one-client-img-2.jpg";
import whych8 from "../../../public/assets/images/resources/why-choose-one-client-img-3.jpg";
import whych9 from "../../../public/assets/images/resources/why-choose-one-client-img-4.jpg";
import Image from 'next/image';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
import VideoPopup from '@/components/elements/VideoPopup';
import TextAnimation from '@/components/elements/TextAnimation';
import { motion } from "framer-motion"
const WhyChooseOne: React.FC = () => {
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const handleVideoClick = (
        e: React.MouseEvent<HTMLAnchorElement>, videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    };

    // Close video popup
    const closeVideoPopup = (): void => {
        setShowVideoPopup(false);
        setCurrentVideoUrl("");
    };
    const handlePhone = (): void => {
        alert("tel:120045678910")
    }
    return (
        <>
            <section className="why-choose-one">
                <div className="why-choose-one__bg-shape"></div>
                <div className="why-choose-one__shape-2 float-bob-x">
                    <Image src={whych1} alt="" />
                </div>
                <div className="why-choose-one__big-title">
                    <h3>100% SATISFACTION </h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="why-choose-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-box">
                                            <div className="section-title__tagline-shape"></div>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <span className="section-title__tagline">
                                            Why Choose Us
                                        </span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        <TextAnimation text='What Makes Us the Perfect' textColor='black' />
                                        <TextAnimation text='Cleaning Partner? Your Clean' textColor='black' />
                                        <TextAnimation text='Cleaning Partner?' />
                                        <TextAnimation text='Space, Our Commitment!' />
                                    </h2>
                                </div>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1.8,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="row">

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__img-box-1">
                                            <div className="why-choose-one__img-1">
                                                <Image src={whych2} alt="" />
                                            </div>
                                            <div className="why-choose-one__shape-1 rotate-me">
                                                <Image src={whych3} alt="" />
                                            </div>
                                            <div className="why-choose-one__round-text-box">
                                                <div className="why-choose-one__round-text-box-inner">
                                                    <div className="why-choose-one__curved-circle">
                                                        Cleaning * Moping * Dusting *
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__img-box-2">
                                            <div className="why-choose-one__curved-circle-2">
                                                Cleaning * Moping * Dusting *
                                            </div>
                                            <div className="why-choose-one__img-2">
                                                <Image src={whych4} alt="" />
                                            </div>
                                            <div className="why-choose-one__video-link">
                                                <Link
                                                    href='#'
                                                    onClick={(e) =>
                                                        handleVideoClick(
                                                            e,
                                                            "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
                                                        )
                                                    }
                                                    className="video-popup"
                                                >
                                                    <div className="why-choose-one__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="why-choose-one__right">
                                <div className="why-choose-one__client-box">
                                    <div className="why-choose-one__client-content">
                                        <div className="why-choose-one__client-inner">
                                            <h3 className="why-choose-one__client-title">
                                                Clut<span>c</span>h
                                            </h3>
                                            <ul className="why-choose-one__client-img-list list-unstyled">
                                                <li>
                                                    <div className="why-choose-one__client-img">
                                                        <Image src={whych5} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="why-choose-one__client-img">
                                                        <Image src={whych7} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="why-choose-one__client-img">
                                                        <Image src={whych8} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="why-choose-one__client-img">
                                                        <Image src={whych9} alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="why-choose-one__ratting-and-text">
                                            <div className="why-choose-one__ratting-box">
                                                <div className="why-choose-one__ratting">
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                </div>
                                                <p className="why-choose-one__ratting-text">
                                                    4.5 Rating
                                                </p>
                                            </div>
                                            <div className="why-choose-one__count-box-inner">
                                                <div className="why-choose-one__count-box">
                                                    <p> <AdvanceCountUp ending={120} /> </p>
                                                    <span>k</span>
                                                    <span>+</span>
                                                </div>
                                                <p className="why-choose-one__count-text">
                                                    Satisfied Review
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="why-choose-one__client-arrow">
                                        <Link href="#">
                                            <span className="icon-diagonal-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="why-choose-one__right-bottom">
                                    <ul className="row list-unstyled">
                                        {/*Why Choose One Single Start*/}
                                        <li
                                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                                            data-wow-delay="100ms"
                                        >
                                            <div className="why-choose-one__single">
                                                <div className="why-choose-one__icon">
                                                    <span className="icon-employee"></span>
                                                    <div className="why-choose-one__count"></div>
                                                </div>
                                                <h3 className="why-choose-one__title">
                                                    <Link href={"/team"}>Professional Team.</Link>

                                                </h3>
                                                <p className="why-choose-one__text">
                                                    Our experienced and trained cleaning experts ensure
                                                    high-quality results every time.
                                                </p>
                                            </div>
                                        </li>
                                        {/*Why Choose One Single End*/}
                                        {/*Why Choose One Single Start*/}
                                        <li
                                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                                            data-wow-delay="200ms"
                                        >
                                            <div className="why-choose-one__single">
                                                <div className="why-choose-one__icon">
                                                    <span className="icon-cleaning-2"></span>
                                                    <div className="why-choose-one__count"></div>
                                                </div>
                                                <h3 className="why-choose-one__title">
                                                    <Link href={"/about"}>Spotless Spaces</Link>

                                                </h3>
                                                <p className="why-choose-one__text">
                                                    Our experienced and trained cleaning experts ensure
                                                    high-quality results every time.
                                                </p>
                                            </div>
                                        </li>
                                        {/*Why Choose One Single End*/}
                                        {/*Why Choose One Single Start*/}
                                        <li
                                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                                            data-wow-delay="300ms"
                                        >
                                            <div className="why-choose-one__single">
                                                <div className="why-choose-one__icon">
                                                    <span className="icon-window-cleaning"></span>
                                                    <div className="why-choose-one__count"></div>
                                                </div>
                                                <h3 className="why-choose-one__title">
                                                    <Link href={"/about"}>Eco-Friendly Products</Link>

                                                </h3>
                                                <p className="why-choose-one__text">
                                                    Our experienced and trained cleaning experts ensure
                                                    high-quality results every time.
                                                </p>
                                            </div>
                                        </li>
                                        {/*Why Choose One Single End*/}
                                        {/*Why Choose One Single Start*/}
                                        <li
                                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                                            data-wow-delay="400ms"
                                        >
                                            <div className="why-choose-one__single">
                                                <div className="why-choose-one__icon">
                                                    <span className="icon-time"></span>
                                                    <div className="why-choose-one__count"></div>
                                                </div>
                                                <h3 className="why-choose-one__title">
                                                    <Link href={"/about"}>Flexible Scheduling</Link>

                                                </h3>
                                                <p className="why-choose-one__text">
                                                    Our experienced and trained cleaning experts ensure
                                                    high-quality results every time.
                                                </p>
                                            </div>
                                        </li>
                                        {/*Why Choose One Single End*/}
                                    </ul>
                                    <div className="why-choose-one__contact-box">
                                        <div className="why-choose-one__contact-icon">
                                            <span className="icon-support"></span>
                                        </div>
                                        <div className="why-choose-one__content">
                                            <p>Sun - Fri & 10:00 AM - 8:00 PM</p>
                                            <h4>
                                                <Link href="#" onClick={handlePhone}>12 (00) 456 78910</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {showVideoPopup && (
                <VideoPopup
                    url={currentVideoUrl}
                    isOpen={showVideoPopup}
                    onClose={closeVideoPopup}
                />
            )}
        </>
    );
};

export default WhyChooseOne;