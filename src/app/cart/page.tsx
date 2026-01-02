import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';   
import CartMain from '@/sections/cart/CartMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Products Right' secondTitle='Products' />
            <CartMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;