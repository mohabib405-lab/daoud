"use client"
import React from 'react';
import service1_shape_4 from "../../../public/assets/images/shapes/services-one-shape-4.png";
import service1_shape_3 from "../../../public/assets/images/shapes/services-one-shape-3.png";
import services1 from "../../../public/assets/images/services/services-one-img-1.jpg";
import services2 from "../../../public/assets/images/services/services-one-img-2.jpg";
import services11 from "../../../public/assets/images/services/services-1-1.jpg";
import services12 from "../../../public/assets/images/services/services-1-2.jpg";
import services13 from "../../../public/assets/images/services/services-1-3.jpg";
import services14 from "../../../public/assets/images/services/services-1-4.jpg";
import services15 from "../../../public/assets/images/services/services-1-5.jpg";
import Image from 'next/image';
import Link from 'next/link';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';

const ServicesOne: React.FC = () => {
    return (
        <section className="services-one">
            <div className="services-one__shape-bg"></div>
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2"></div>
            <div className="services-one__shape-3 float-bob-x">
                <Image src={service1_shape_3} alt="services" />
            </div>
            <div className="services-one__shape-4 float-bob-y">
                <Image src={service1_shape_4} alt="services" />
            </div>

            <div className="container">
                <div className="services-one__top">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="services-one__top-left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-box">
                                            <div className="section-title__tagline-shape"></div>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <span className="section-title__tagline">Services</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        <TextAnimation text='Sparkling Spaces, Happy Faces' textColor='black' />
                                        <TextAnimation text='Your Trusted Cleaning!' textColor='' />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="services-one__top-right">
                                <p className="services-one__top-text">
                                    We are passionate about delivering exceptional
                                    <br />
                                    cleaning services to create spotless, comfortable <br />
                                    spaces for homes and businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-one__bottom">
                    <div className="row">
                        <div className="col-xl-5">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="services-one__left"
                            >
                                <div className="services-one__img-box">
                                    <div className="services-one__img-shape-1"></div>
                                    <div className="services-one__img">
                                        <Image src={services1} alt="services" />
                                    </div>
                                    <div className="services-one__img-2">
                                        <Image src={services2} alt="services" />
                                    </div>
                                    <div className="services-one__experience-box">
                                        <div className="services-one__experience-icon">
                                            <span className="icon-trophy"></span>
                                        </div>
                                        <div className="services-one__experience-content">
                                            <p><AdvanceCountUp ending={25} />
                                                <span>+ Years</span>
                                                <br /> of Work Experience
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-xl-7">
                            <div className="services-one__right">
                                <ul className="services-one__services-list list-unstyled">
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <Link href={"/residential-cleaning"}>Residential Cleaning</Link>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Inviting with our expert commercial cleaning <br />
                                                        solutions tailored to offices, retail spaces
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href={"/residential-cleaning"}><span className="icon-diagonal-arrow"></span></Link>

                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={services11} alt="services" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <Link href={"/commercial-cleaning"}>Commercial Cleaning</Link>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Inviting with our expert commercial cleaning <br />
                                                        solutions tailored to offices, retail spaces
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href={"/commercial-cleaning"}><span className="icon-diagonal-arrow"></span></Link>

                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={services12} alt="services" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <Link href={"/deep-cleaning"}>Deep Cleaning</Link>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Inviting with our expert commercial cleaning <br />
                                                        solutions tailored to offices, retail spaces
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href={"/deep-cleaning"}><span className="icon-diagonal-arrow"></span></Link>

                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={services13} alt="services" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <Link href={"/office-cleaning"}>Office Cleaning</Link>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Inviting with our expert commercial cleaning <br />
                                                        solutions tailored to offices, retail spaces
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href={"/office-cleaning"}><span className="icon-diagonal-arrow"></span></Link>

                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={services14} alt="services" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <Link href={"/sanitizing-mopping"}>Sanitizing & Mopping</Link>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Inviting with our expert commercial cleaning <br />
                                                        solutions tailored to offices, retail spaces
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <Link href={"/sanitizing-mopping"}>
                                                    <span className="icon-diagonal-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="services-one__hover-img">
                                            <Image src={services15} alt="services" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOne;