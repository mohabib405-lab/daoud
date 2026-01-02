"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { testimonialCarosel } from '@/sections/home-one/Contents';
import { TestimonialCarouselitem } from '@/types/home-one';
import Link from 'next/link';
import Image from 'next/image';

const TestimonialSlider: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <div className="testimonial-two__carousel  owl-theme owl-carousel">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                onSwiper={setSwiperInstance}
                className="main-slider-swiper"
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
                }}
            >
                {
                    testimonialCarosel.map((item: TestimonialCarouselitem) => {
                        return <SwiperSlide key={item?.id}>
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__top">
                                        <div className="testimonial-two__top-title">
                                            <h4>{item?.topTitle}</h4>
                                        </div>
                                        <div className="testimonial-two__top-quote">
                                            <span className="icon-left"></span>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">{item?.description}</p>
                                    <div className="testimonial-two__bottom">
                                        <div className="testimonial-two__star">
                                            <span className="icon-star"></span>
                                            <span className="icon-star"></span>
                                            <span className="icon-star"></span>
                                            <span className="icon-favorite"></span>
                                            <span className="icon-favorite"></span>
                                        </div>
                                        <div className="testimonial-two__client-info">
                                            <div className="testimonial-two__client-img-box">
                                                <div className="testimonial-two__client-img">
                                                    <Image src={item?.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-two__client-content">
                                                <h3 className="testimonial-two__client-name">
                                                    <Link href={"/testimonials"}>{item?.clientName}</Link>
                                                </h3>
                                                <p className="testimonial-two__client-sub-title">{item?.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div className="owl-nav" style={{ zIndex: "111" }}>
                <button onClick={() => swiperInstance?.slideNext()}
                    className="owl-prev"
                    aria-label="Previous Slide"
                    type="button">
                    <span className="icon-diagonal-arrow"></span>
                </button>
                <button onClick={() => swiperInstance?.slidePrev()}
                    className="owl-next"
                    aria-label="Next Slide"
                    type="button">
                    <span className="icon-diagonal-arrow"></span>
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;