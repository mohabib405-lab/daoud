"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Allblogs } from './blogContent';
import { Blog } from '@/types/home-one';
import TextAnimation from '@/components/elements/TextAnimation';
import { motion } from "framer-motion"
const BlogMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(Allblogs.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogs = Allblogs.slice(startIndex, endIndex);

    const handlePageChange = (page: number, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <section className="blog-one">
            <div className="blog-one__shape-bg"></div>
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
                        <h2 className="section-title__title ">
                            <TextAnimation text='Discover Insights and Tips' textColor='black' /> <br></br>
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
                        {currentBlogs.map((item: Blog, i) => {
                            return (
                                <motion.div
                                    initial={{ x: (i + 1) % 2 === 0 ? 10 : -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    key={i} className="col-xl-3 col-lg-6 col-md-6 " >
                                    <div className="blog-one__single">
                                        <div className="blog-one__img-box">
                                            <div className="blog-one__img">
                                                <Image src={item?.image} alt="" width={300} height={300} />
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
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination */}
                <div className="blog-page__pagination">
                    <div className="blog-list__pagination">
                        <ul className="pg-pagination list-unstyled">
                            {/* Prev */}
                            <li className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
                                <button
                                    type="button"
                                    onClick={(e) => handlePageChange(currentPage - 1, e)}
                                    disabled={currentPage === 1}
                                    aria-label="prev">
                                    <i className="fas fa-arrow-left"></i>
                                </button>
                            </li>

                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i} className={`count ${currentPage === i + 1 ? "active" : ""}`}>
                                    <button
                                        type="button"
                                        onClick={(e) => handlePageChange(i + 1, e)}>
                                        {String(i + 1).padStart(2, "0")}
                                    </button>
                                </li>
                            ))}

                            {/* Next */}
                            <li className={`next ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button
                                    type="button"
                                    onClick={(e) => handlePageChange(currentPage + 1, e)}
                                    disabled={currentPage === totalPages}
                                    aria-label="Next">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogMain;