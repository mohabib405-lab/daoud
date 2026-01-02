import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import ContactMain from '@/sections/contact/ContactMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Contact' secondTitle='Contact' />
            <ContactMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;