import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import TestimonialCarouselMain from '@/sections/testimonials/TestimonialCarouselMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Testimonials Carousel' secondTitle='Testimonials Carousel' />
            <TestimonialCarouselMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;