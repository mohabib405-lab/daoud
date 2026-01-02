import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import BlogListMain from '@/sections/blog/BlogListMain';


const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Blog List' secondTitle='Blog List' />
            <BlogListMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;