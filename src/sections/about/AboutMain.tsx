import React from 'react';
import SectionOne from './SectionOne';
import Counter from './Counter';
import Team from './Team';
import Testimonial from './Testimonial';
import FaqSection from './FaqSection';

const AboutMain: React.FC = () => {
    return (
        <>
            <SectionOne />
            <Counter />
            <Team />
            <Testimonial />
            <FaqSection />
        </>
    );
};

export default AboutMain;