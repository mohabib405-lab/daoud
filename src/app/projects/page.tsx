import React from 'react';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import ProjectsMain from '@/sections/projects/ProjectMain';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='Our Projects' secondTitle='Projects' />
            <ProjectsMain />
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;