import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import BlogCarouselMain from '@/sections/blog/BlogCarouselMain';


const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Blog Carousel' secondTitle='Blog Carousel' />
            <BlogCarouselMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;