import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner'; 
import ProjectCarouselMain from '@/sections/projects/ProjectCarouselMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Projects Carousel' secondTitle='Projects Carousel' />
            <ProjectCarouselMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;