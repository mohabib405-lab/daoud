import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import FaqMain from '@/sections/faq/FaqMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Faq' secondTitle='Faq' />
            <FaqMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;