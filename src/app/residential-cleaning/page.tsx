import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import ResidentialMain from '@/sections/residential-cleaning/ResidentialMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Residential Cleaning' secondTitle='services' secondTitleLink='/services' thirdTitle='Residential Cleaning' />
            <ResidentialMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;