"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import carouimg1 from "../../../public/assets/images/project/project-1-1.jpg";
import carouimg2 from "../../../public/assets/images/project/project-1-2.jpg";
import carouimg3 from "../../../public/assets/images/project/project-1-3.jpg";
import carouimg4 from "../../../public/assets/images/project/project-1-4.jpg";
import carouimg5 from "../../../public/assets/images/project/project-1-5.jpg";
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCarouselItem {
    image: string;
    tag: string;
    title: string;
}

const projectCarouselData: ProjectCarouselItem[] = [
    {
        image: carouimg1.src,
        tag: 'Residential',
        title: 'Sparkle & Shine Services',
    },
    {
        image: carouimg2.src,
        tag: 'Commercial',
        title: 'Pure Clean Solutions',
    },
    {
        image: carouimg3.src,
        tag: 'Deep CLEAN',
        title: 'Fresh Space Experts',
    },
    {
        image: carouimg4.src,
        tag: 'Moveout',
        title: 'Eco Gleam Crew',
    },
    {
        image: carouimg5.src,
        tag: 'Specialized',
        title: 'Neat Nest Pros',
    },
    {
        image: carouimg1.src,
        tag: 'Residential',
        title: 'Sparkle & Shine Services',
    },
    {
        image: carouimg5.src,
        tag: 'Specialized',
        title: 'Neat Nest Pros',
    },
    {
        image: carouimg2.src,
        tag: 'Commercial',
        title: 'Pure Clean Solutions',
    },
    {
        image: carouimg5.src,
        tag: 'Specialized',
        title: 'Neat Nest Pros',
    },
];

const ProjectCarouselMain: React.FC = () => {
    return (
        <section className="project-carousel-page">
            <div className="container">
                <div className="project-one__inner">
                    <div className="project-carousel-style">
                        <Swiper
                            className='project-carousel'
                            modules={[Pagination, Autoplay]}
                            pagination={{
                                clickable: true,
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
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
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {projectCarouselData.map((item, index) => (
                                <SwiperSlide key={`project-${index}`}>
                                    <div className="project-one__single">
                                        <div className="project-one__img-box">
                                            <div className="project-one__img">
                                                <Image src={item.image} alt={item.title} width={400} height={400} />
                                            </div>
                                            <div className="project-one__view-box">
                                                <Link className="project-one__view" href="/project-details">
                                                    <i className="icon-diagonal-arrow"></i>
                                                    <span>View More</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="project-one__content">
                                            <p className="project-one__tag">
                                                {item.tag}
                                                <span className="icon-right-arrow"></span>
                                                November 24
                                            </p>
                                            <h3 className="project-one__title">
                                                <Link href="/project-details">{item.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarouselMain;