"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import detailsimg1 from "../../../public/assets/images/shop/product-details-img-1.jpg";
import detailsimg2 from "../../../public/assets/images/shop/product-details-img-2.jpg";
import detailsimg3 from "../../../public/assets/images/shop/product-details-img-3.jpg";
import thimbimg1 from "../../../public/assets/images/shop/product-details-thumb-img-1.jpg";
import thimbimg2 from "../../../public/assets/images/shop/product-details-thumb-img-2.jpg";
import thimbimg3 from "../../../public/assets/images/shop/product-details-thumb-img-3.jpg";
import Image from "next/image";

interface ProductImage {
    id: number;
    src: string;
    alt: string;
}

const NavForSlider: React.FC = () => {

    const mainImages: ProductImage[] = [
        { id: 1, src: detailsimg1.src, alt: "Product 1" },
        { id: 2, src: detailsimg2.src, alt: "Product 2" },
        { id: 3, src: detailsimg3.src, alt: "Product 3" },
        { id: 4, src: detailsimg3.src, alt: "Product 4" },
    ];

    const thumbnailImages: ProductImage[] = [
        { id: 4, src: thimbimg1.src, alt: "Thumb 2" },
        { id: 3, src: thimbimg2.src, alt: "Thumb 2" },
        { id: 2, src: thimbimg1.src, alt: "Thumb 1" },
        { id: 1, src: thimbimg3.src, alt: "Thumb 3" },
        { id: 5, src: thimbimg2.src, alt: "Thumb 5" },
    ];

    return (
        <div className="slider-container" >
            <Swiper
                modules={[Navigation, Thumbs, Autoplay]}
                navigation={{
                    prevEl: ".custom-arrow.prev",
                    nextEl: ".custom-arrow.next",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={600}
                loop={true}
                spaceBetween={10}
                className="main-swiper"
            >
                {mainImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="product-details__img">
                            <Image src={image.src} alt={image.alt} width={548} height={635} style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </SwiperSlide>
                ))}

                <button
                    className="custom-arrow prev"
                    aria-label="Previous Slide"
                >
                    <FaArrowLeft />
                </button>
                <button
                    className="custom-arrow next"
                    aria-label="Next Slide"
                >
                    <FaArrowRight />
                </button>
            </Swiper>


            <div className="thumnal-slide-container" >
                <Swiper
                    modules={[Thumbs, Autoplay,]}
                    // onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    // spaceBetween={10}
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={600}
                    loop={true}
                    className="thumb-swiper"
                    breakpoints={{
                        280: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 3,
                        },
                        1080: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {thumbnailImages.map((image) => (
                        <SwiperSlide key={image.id} className="thumnal-slide">
                            <div className="product-details__thumb-img">
                                <Image src={image.src} alt={image.alt} width={125} height={125} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default NavForSlider;