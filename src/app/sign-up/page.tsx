import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import SignupMain from '@/sections/authentication/SignupMain';


const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Sign Up' secondTitle='Sign Up' />
            <SignupMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;