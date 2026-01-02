"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import React, { useState } from 'react';
import aboutSec3 from '../../../public/assets/images/team/team-1-1.jpg';
import aboutSec4 from '../../../public/assets/images/team/team-1-2.jpg';
import aboutSec5 from '../../../public/assets/images/team/team-1-3.jpg';
import aboutSec6 from '../../../public/assets/images/team/team-1-4.jpg';
import aboutSec7 from '../../../public/assets/images/team/team-1-2.jpg';
interface TeamMember {
    imgURL: string;
    title: string;
    subTitle: string;
}

const carouselItems: TeamMember[] = [
    {
        imgURL: aboutSec3.src,
        title: 'Emily Carter',
        subTitle: 'Operations Manager',
    },
    {
        imgURL: aboutSec4.src,
        title: 'Michael Bennett',
        subTitle: 'Team Leader',
    },
    {
        imgURL: aboutSec5.src,
        title: 'Sophia Ramirez',
        subTitle: 'Quality Control Supervisor',
    },
    {
        imgURL: aboutSec6.src,
        title: 'Ethan Collins',
        subTitle: 'Customer Service Coordinator',
    },
    {
        imgURL: aboutSec7.src,
        title: 'Ethan Collins',
        subTitle: 'Customer Service Coordinator',
    },
];


const TeamSlider: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <div className="team-one__carousel owl-theme owl-carousel">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                onSwiper={setSwiperInstance}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {carouselItems.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="item">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <Image src={item.imgURL} alt={item.title} width={300} height={400} />
                                    </div>
                                    <div className="team-one__share-and-social">
                                        <div className="team-one__share">
                                            <span className="icon-share"></span>
                                        </div>
                                        <div className="team-one__social">
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
                                <div className="team-one__content">
                                    <div className="team-one__title-box">
                                        <h3 className="team-one__title">
                                            <Link href="/team-details">{item.title}</Link>
                                        </h3>
                                        <p className="team-one__sub-title">{item.subTitle}</p>
                                    </div>
                                    <div className="team-one__arrow">
                                        <Link href="/team-details">
                                            <span className="icon-diagonal-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="owl-nav">
                <button
                    onClick={() => swiperInstance?.slideNext()}
                    className="owl-prev"
                    aria-label="Previous Slide"
                    type="button"
                >
                    <span className="icon-diagonal-arrow"></span>
                </button>
                <button
                    onClick={() => swiperInstance?.slidePrev()}
                    className="owl-next"
                    aria-label="Next Slide"
                    type="button"
                >
                    <span className="icon-diagonal-arrow"></span>
                </button>
            </div>
        </div>
    );
};

export default TeamSlider;