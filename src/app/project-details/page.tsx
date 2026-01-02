import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import ProjectDetailsMain from '@/sections/projects/ProjectDetailsMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Projects Details' secondTitle='Projects Details' />
            <ProjectDetailsMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;