'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bannerShapeBg1 from '../../../public/assets/images/shapes/banner-one-shape-bg-1.png';
import bannerShape4 from '../../../public/assets/images/shapes/banner-one-shape-4.png';
import bannerShape5 from '../../../public/assets/images/shapes/banner-one-shape-5.png';
import bannerImg1 from '../../../public/assets/images/resources/banner-one-img-1.png';
import satisfiedPartner1 from '../../../public/assets/images/resources/banner-one-satisfied-partner-1-1.jpg';
import satisfiedPartner2 from '../../../public/assets/images/resources/banner-one-satisfied-partner-1-2.jpg';
import satisfiedPartner3 from '../../../public/assets/images/resources/banner-one-satisfied-partner-1-3.jpg';
import googleRatingImg from '../../../public/assets/images/resources/banner-one-google-rating-img.png';
import { motion } from "framer-motion"
const Banner: React.FC = () => {
    const [typedText, setTypedText] = useState<string>('');
    const [currentStringIndex, setCurrentStringIndex] = useState<number>(0);
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [satisfiedCount, setSatisfiedCount] = useState<number>(0);
    const [ratingCount, setRatingCount] = useState<number>(0);
    // Typing effect
    useEffect(() => {
        const typedStrings: string[] = [
            'Reliable Cleaning Services!',
            'Making Every Space Shine'
        ];
        const typeSpeed: number = 100;
        const deleteSpeed: number = 50;
        const pauseDuration: number = 2000;

        const timer = setTimeout(() => {
            const currentString = typedStrings[currentStringIndex];

            if (!isDeleting) {
                if (currentCharIndex < currentString.length) {
                    setTypedText(currentString.substring(0, currentCharIndex + 1));
                    setCurrentCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (currentCharIndex > 0) {
                    setTypedText(currentString.substring(0, currentCharIndex - 1));
                    setCurrentCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % typedStrings.length);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [currentCharIndex, currentStringIndex, isDeleting]);

    // Counter animations
    useEffect(() => {
        const satisfiedTimer = setInterval(() => {
            setSatisfiedCount(prev => {
                if (prev < 200) {
                    return prev + 2;
                } else {
                    return prev;
                }
            });
        }, 30);

        const ratingTimer = setInterval(() => {
            setRatingCount(prev => {
                if (prev < 12) {
                    return prev + 1;
                } else {
                    return prev;
                }
            });
        }, 250);

        return () => {
            clearInterval(satisfiedTimer);
            clearInterval(ratingTimer);
        };
    }, []);

    return (
        <section className="banner-one">
            <div
                className="banner-one__shape-bg-1"
                style={{
                    backgroundImage: `url(${bannerShapeBg1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            <div className="banner-one__shape-1"></div>
            <div className="banner-one__shape-2"></div>
            <div className="banner-one__shape-3"></div>
            <div className="banner-one__shape-4 float-bob-x">
                <Image
                    src={bannerShape4}
                    alt="Decorative shape"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>
            <div className="banner-one__shape-5 float-bob-y">
                <Image
                    src={bannerShape5}
                    alt="Decorative shape"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="banner-one__left">
                            <div className="banner-one__title-box">
                                <h2 className="banner-one__title">
                                    Making Your Space Shine Easy and <br />
                                    <span className="typed-effect banner-one__title-color">
                                        {typedText}
                                        <span className="cursor" style={{
                                            animation: 'blink 1s infinite',
                                            marginLeft: '2px'
                                        }}>|</span>
                                    </span>
                                </h2>
                            </div>
                            <p className="banner-one__text">
                                Experience hassle-free, top-quality cleaning services designed
                                to keep <br /> your home or office spotless and stress-free.
                            </p>
                            <div className="banner-one__btn-box">
                                <Link href="/contact" className='thm-btn'>
                                    Get Started
                                    <span>
                                        <i className="icon-diagonal-arrow"></i>
                                    </span>
                                </Link>
                            </div>
                            <div className="banner-one__satisfied-partner">
                                <ul className="list-unstyled banner-one__satisfied-partner-list">
                                    <li>
                                        <div className="banner-one__satisfied-partner-img">
                                            <Image
                                                src={satisfiedPartner1}
                                                alt="Satisfied partner"
                                                width={60}
                                                height={60}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '50%'
                                                }}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-one__satisfied-partner-img">
                                            <Image
                                                src={satisfiedPartner2}
                                                alt="Satisfied partner"
                                                width={60}
                                                height={60}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '50%'
                                                }}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-one__satisfied-partner-img">
                                            <Image
                                                src={satisfiedPartner3}
                                                alt="Satisfied partner"
                                                width={60}
                                                height={60}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '50%'
                                                }}
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <div className="banner-one__satisfied-partner-content">
                                    <div className="banner-one__satisfied-partner-count-box">
                                        <p className="odometer">{satisfiedCount}</p>
                                        <span>K+</span>
                                    </div>
                                    <p className="banner-one__satisfied-partner-text">Satisfied Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="banner-one__right">
                            <div className="banner-one__img-box">
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1.8,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.01 }}
                                    className="banner-one__img wow slideInRight"
                                >
                                    <Image
                                        src={bannerImg1}
                                        alt="Cleaning service professional"
                                        priority
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }}
                                    />
                                </motion.div>
                                <div className="banner-one__google-rating">
                                    <div className="banner-one__google-rating-img">
                                        <Image
                                            src={googleRatingImg}
                                            alt="Google rating"
                                            width={50}
                                            height={50}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                    <div className="banner-one__google-rating-box">
                                        <div className="banner-one__google-rating-star">
                                            <span className="icon-star"></span>
                                            <span className="icon-star"></span>
                                        </div>
                                        <div className="banner-one__google-rating-count count-box">
                                            <p className="count-text">{ratingCount}</p>
                                            <span>k Ratings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;