"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Allblogs } from './blogContent';
import { Blog } from '@/types/home-one';
import Link from 'next/link';
import Image from 'next/image';

const BlogCarouselMain: React.FC = () => {
    return (
        <section className="blog-carousel-page">
            <div className="container">
                <div className="blog-one__bottom">
                    <div className="blog-carousel-style">
                        <Swiper
                            className='project-carousel'
                            modules={[Pagination, Autoplay]}
                            pagination={{
                                clickable: true,
                            }}
                            spaceBetween={10}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={1000}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {Allblogs.map((item: Blog) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div
                                            className="blog-one__single wow fadeInLeft"
                                            data-wow-delay="0ms"
                                            data-wow-duration="1500ms"
                                        >
                                            <div className="blog-one__img-box">
                                                <div className="blog-one__img">
                                                    <Image src={item.image} alt={item.title} width={300} height={300} />
                                                </div>
                                                <div className="blog-one__date">
                                                    <p>{item.date.day}</p>
                                                    <span>{item.date.month}</span>
                                                </div>
                                                <ul className="list-unstyled blog-one__tag">
                                                    <li>
                                                        <Link href={"/blog-details"}>{item.links.link1}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"/blog-details"}>{item.links.link2}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="blog-one__content">
                                                <h3 className="blog-one__title">
                                                    <Link href={"/blog-details"}>{item.title}</Link>
                                                </h3>
                                                <p className="blog-one__text">{item.text}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCarouselMain;