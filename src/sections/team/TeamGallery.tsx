"use client"
import React, { useState } from 'react';
import officimg1 from "../../../public/assets/images/resources/office-gallery-1-1.jpg"
import officimg2 from "../../../public/assets/images/resources/office-gallery-1-2.jpg"
import officimg3 from "../../../public/assets/images/resources/office-gallery-1-3.jpg"
import officimg4 from "../../../public/assets/images/resources/office-gallery-carousel-img-1-1.jpg"
import officimg5 from "../../../public/assets/images/resources/office-gallery-carousel-img-1-2.jpg"
import officimg6 from "../../../public/assets/images/resources/office-gallery-carousel-img-1-3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import VideoPopup from '@/components/elements/VideoPopup';
import TextAnimation from '@/components/elements/TextAnimation';

interface OfficeImage {
    src: string;
    alt?: string;
}

const officeCarouselImages: OfficeImage[] = [
    { src: officimg4.src, alt: 'Office Gallery 1' },
    { src: officimg5.src, alt: 'Office Gallery 2' },
    { src: officimg6.src, alt: 'Office Gallery 3' },
];
const TeamGallery: React.FC = () => {
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");

    // Handle video popup - now sets the URL dynamically
    const handleVideoClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    };

    // Close video popup
    const closeVideoPopup = (): void => {
        setShowVideoPopup(false);
        setCurrentVideoUrl(""); // Clear the URL when closing
    };

    return (
        <>

            <section className="office-gallery">
                <div className="office-gallery__shape-bg"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">OFFICE GALLERY</span>
                        </div>
                        <h2 className="section-title__title title-custom-animation">
                            <TextAnimation text='Discover Our Office and' textColor='black'/>
                            <TextAnimation text='Explore our Creativity'/> 
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="office-gallery__left">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="office-gallery__single">
                                            <div className="office-gallery__img">
                                                <Image src={officimg1} alt=""  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="office-gallery__single">
                                            <div className="office-gallery__img">
                                                <Image src={officimg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <div className="office-gallery__single">
                                            <div className="office-gallery__img">
                                                <Image src={officimg3} alt="" />
                                                <div className="office-gallery__video-link">
                                                    <a
                                                        href='#'
                                                        className="video-popup"
                                                        onClick={(e) =>
                                                            handleVideoClick(
                                                                e,
                                                                "https://www.youtube.com/watch?v=MLpWrANjFbI"
                                                            )
                                                        }
                                                    >
                                                        <div className="office-gallery__video-icon">
                                                            <span className="icon-play"></span>
                                                            <i className="ripple"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="office-gallery__right">
                                <div className="office-gallery__carousel">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 7000,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{
                                            nextEl: '.custom-arrow.next',
                                            prevEl: '.custom-arrow.prev',
                                        }}
                                        className="office-gallery-swiper"
                                    >
                                        {officeCarouselImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="office-gallery__carousel-single">
                                                    <div className="office-gallery__carousel-img">
                                                        <Image src={image.src} alt={image.alt || ''} width={410} height={580} loading="eager"/>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Custom Navigation Arrows */}
                                    <div className="custom-arrow next">
                                       <FaChevronRight />
                                    </div>
                                    <div className="custom-arrow prev">
                                       <FaChevronLeft />
                                    </div>
                                </div>
                                <div className="office-gallery__experience-box">
                                    <div className="office-gallery__experience-year">
                                        <h3><AdvanceCountUp ending={25} /></h3>
                                    </div>
                                    <h4 className="office-gallery__experience-text">years of <br />
                                        experience</h4>
                                </div>
                            </div>
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

export default TeamGallery;