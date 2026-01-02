"use client"
import React from 'react';
import servimg8 from "../../../public/assets/images/shapes/why-choose-three-shape-1.png";
import servimg9 from "../../../public/assets/images/shapes/why-choose-three-shape-2.png";
import Image from 'next/image';
import Link from 'next/link';
import TextAnimation from '@/components/elements/TextAnimation';
import { motion } from "framer-motion"
interface WhyChooseItem {
    id: number;
    icon: string;
    title: string;
    description: string;
    link: string;
    delay: number;
}

const whyChooseData: WhyChooseItem[] = [
    {
        id: 1,
        icon: "icon-time",
        title: "Booking Made Easy in Minutes",
        description: "Enjoy a hassle-free booking process with our user-friendly platform, and conveniently.",
        link: "/about",
        delay: 0.4,
    },
    {
        id: 2,
        icon: "icon-cleaning-2",
        title: "Thorough Cleaning Tailored for You",
        description: "We provide customized cleaning solutions that address your unique needs, ensuring every",
        link: "/about",
        delay: 0.6,
    },
    {
        id: 3,
        icon: "icon-window-cleaning",
        title: "Inspection & Satisfaction Guaranteed",
        description: "We ensure top-notch quality with detailed inspections and a commitment to your satisfaction",
        link: "/about",
        delay: 0.8,
    },
    {
        id: 4,
        icon: "icon-employee",
        title: "Experienced Professionals at Your Door",
        description: "Enjoy a hassle-free booking process with our user-friendly platform, and conveniently.",
        link: "/about",
        delay: 1,
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="why-choose-three">
            <div className="why-choose-three__shape-bg-1"></div>
            <div className="why-choose-three__shape-1">
                <Image src={servimg8} alt="Decorative shape" />
            </div>
            <div className="why-choose-three__shape-2">
                <Image src={servimg9} alt="Decorative shape" />
            </div>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">WHY CHOOSE US</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation">
                        <TextAnimation text='Our Seamless Cleaning Process' textColor='black' />
                        <TextAnimation text='From Start to Sparkle Service' />
                    </h2>
                </div>

                <div className="why-choose-three__inner">
                    <ul className="row list-unstyled">
                        {whyChooseData.map((item) => (
                            <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: item?.delay,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.1 }}
                                key={item.id}
                                className="col-xl-3 col-lg-6 col-md-6 "
                            >
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__icon">
                                        <span className={item.icon}></span>
                                        <div className="why-choose-three__count"></div>
                                    </div>
                                    <h3 className="why-choose-three__title">
                                        <Link href={item.link}>{item.title}</Link>
                                    </h3>
                                    <p className="why-choose-three__text">{item.description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;