import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import AboutMain from '@/sections/about/AboutMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='About Us' secondTitle='ABOUT US' />
            <AboutMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;