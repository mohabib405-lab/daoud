import React from 'react';
import aboutSec12 from "../../../public/assets/images/shapes/testimonial-two-shape-1.png"
import aboutSec13 from "../../../public/assets/images/shapes/testimonial-two-shape-2.png"
import Image from 'next/image';
import TestimonialSlider from '@/components/elements/TestimonialSlider';
import TextAnimation from '@/components/elements/TextAnimation';

const TestimonialOne: React.FC = () => {
    return (
        <section className="testimonial-two testimonial-two__home1">
            <div className="testimonial-two__shape-1">
                <Image src={aboutSec12} alt="team" />
            </div>
            <div className="testimonial-two__shape-2">
                <Image src={aboutSec13} alt="team" />
            </div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Hear from our satisfied' textColor='black' /> <br></br>
                        <TextAnimation text='clients who praise' />
                    </h2>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    );
};

export default TestimonialOne;