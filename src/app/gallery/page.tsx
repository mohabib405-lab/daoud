import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import GalleryMain from '@/sections/gallery/GalleryMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Gallery' secondTitle='Gallery' />
            <GalleryMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;