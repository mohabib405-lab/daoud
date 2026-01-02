import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import ServicesMain from '@/sections/services/ServicesMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Our Projects' secondTitle='Projects' />
            <ServicesMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;