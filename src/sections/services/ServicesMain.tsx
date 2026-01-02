import React from 'react';
import OurServices from './OurService';
import ServiceSlidingText from './ServiceSlidingText';
import WhyChooseUs from './WhyChooseUs';
import PlansAndPricing from './PlansAndPricing';
import ServiceFaq from './ServiceFaq';

const ServicesMain: React.FC = () => {
    return (
        <>
            <OurServices />
            <ServiceSlidingText />
            <WhyChooseUs />
            <PlansAndPricing />
            <ServiceFaq />
        </>
    );
};

export default ServicesMain;