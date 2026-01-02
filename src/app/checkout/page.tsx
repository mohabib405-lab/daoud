import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';    
import CheckoutMain from '@/sections/checkout/CheckoutMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Checkout Page' secondTitle='Checkout Page' />
            <CheckoutMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;