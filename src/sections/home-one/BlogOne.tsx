import Link from 'next/link';
import React from 'react';
import { blogs } from './Contents';
import { Blog } from '@/types/home-one';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';

const BlogOne: React.FC = () => {
    return (
        <section className="blog-one">
            <div className="container">
                <div className="blog-one__top">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">OUR INSIGHT</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            <TextAnimation text='Discover Insights and Tips' textColor='black' /><br></br>
                            <TextAnimation text='in Our Latest Articles' />
                        </h2>
                    </div>
                    <div className="blog-one__btn-box">
                        <Link href={"#"} className="thm-btn">
                            View All Blogs<span><i className="icon-diagonal-arrow"></i></span>
                        </Link>
                    </div>
                </div>
                <div className="blog-one__bottom">
                    <div className="row">
                        {
                            blogs.map((item: Blog, i) => {
                                return (
                                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                        data-wow-duration="1500ms">
                                        <div className="blog-one__single">
                                            <div className="blog-one__img-box">
                                                <div className="blog-one__img">
                                                    <Image src={item?.image} alt="blog" />
                                                </div>
                                                <div className="blog-one__date">
                                                    <p>{item?.date?.day}</p>
                                                    <span>{item?.date?.month}</span>
                                                </div>
                                                <ul className="list-unstyled blog-one__tag">
                                                    <li><Link href={"/blog-details"}>{item?.links?.link1}</Link></li>
                                                    <li><Link href={"/blog-details"}>{item?.links?.link2}</Link></li>
                                                </ul>
                                            </div>
                                            <div className="blog-one__content">
                                                <h3 className="blog-one__title">
                                                    <Link href={"/blog-details"}>{item?.title}</Link>
                                                </h3>
                                                <p className="blog-one__text">{item?.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogOne;