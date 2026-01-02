
'use client';
import BannerInner from '@/sections/common/BannerInner';
import FooterInner from '@/sections/common/FooterInner';
import NewsLeterInner from '@/sections/common/NewsLeterInner';
import StickyNavInner from '@/sections/common/StickyNavInner';
import Link from 'next/link';
import React from 'react';
const handleSunmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}
const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <BannerInner title='404 Error' secondTitle='404 Error' />
            <section className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner">
                                <div className="error-page__title-box">
                                    <h2 className="error-page__title">404</h2>
                                </div>
                                <h3 className="error-page__tagline">Sorry we {`can't`} find that page!</h3>
                                <p className="error-page__text">The page you are looking for was never existed.</p>
                                <form onSubmit={handleSunmit} className="error-page__form" >
                                    <div className="error-page__form-input">
                                        <input name='search' type="search" placeholder="Search here" />
                                        <button type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                                <Link href={"/"} className="thm-btn error-page__btn">
                                    Back to home
                                    <span><i className="icon-diagonal-arrow"></i></span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLeterInner />
            <FooterInner />
            <StickyNavInner />
        </div>
    );
};

export default page;
