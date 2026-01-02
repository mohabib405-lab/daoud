import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import SanitizingMain from '@/sections/sanitizing-mopping/SanitizingMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Sanitizing & Mopping' secondTitle='services' secondTitleLink='/services' thirdTitle='Commercial Cleaning' />
            <SanitizingMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;