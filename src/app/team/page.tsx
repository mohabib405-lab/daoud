import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import TeamMenber from '@/sections/team/TeamMenber';
import TeamGallery from '@/sections/team/TeamGallery';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Team Member' secondTitle='Team Member' />
            <TeamMenber />
            <TeamGallery />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;