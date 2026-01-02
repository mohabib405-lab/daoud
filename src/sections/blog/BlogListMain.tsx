"use client";
import React, { useState, type ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogListRight from './BlogListRight';
import { BlogPost } from '@/types/blog-list';
import { blogPosts } from './blogContent';

export interface PaginationItem {
    type: 'prev' | 'next' | 'page';
    label: string;
    page?: number;
    isActive?: boolean;
    ariaLabel?: string;
}

const BlogListMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

    // Calculate current blogs to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogs = blogPosts.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page: number) => {

        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Scroll to top of blog section
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Generate pagination items dynamically
    const paginationItems: PaginationItem[] = [
        { type: 'prev', label: 'prev', ariaLabel: 'Previous page' },
        ...Array.from({ length: totalPages }, (_, i) => ({
            type: 'page' as const,
            label: String(i + 1).padStart(2, '0'),
            page: i + 1,
            isActive: currentPage === i + 1,
        })),
        { type: 'next', label: 'next', ariaLabel: 'Next page' },
    ];

    const renderBlogPost = (item: BlogPost): ReactElement => {
        return (
            <div key={item.id} className="blog-list__single">
                <div className="blog-list__img-box">
                    <div className="blog-list__img">
                        <Image src={item?.image1 as string} alt={item.title} width={692} height={361} />
                    </div>
                    <div className="blog-list__meta-and-tag">
                        <ul className="blog-list__meta list-unstyled">
                            <li>
                                <div className="icon">
                                    <span className="icon-calendar"></span>
                                </div>
                                <p>{item.date}</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-bubble-chat"></span>
                                </div>
                                <p>{item.comments}</p>
                            </li>
                        </ul>
                        <div className="blog-list__tag">
                            {item.tags.map((tag, index) => (
                                <Link key={index} href="#">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="blog-list__content">
                    <h3 className="blog-list__title">
                        <Link href={"/blog-details"}>{item.title}</Link>
                    </h3>
                    <p className="blog-list__text">{item.description}</p>
                    <div className="blog-list__btn-and-client-info">
                        <div className="blog-list__btn-box">
                            <Link className="thm-btn" href={"/blog-details"}>
                                Learn More
                                <span><i className="icon-diagonal-arrow"></i></span>
                            </Link>
                        </div>
                        <div className="blog-list__client-info">
                            <div className="blog-list__client-img">
                                <Image src={item.image2} alt={item.author} width={100} height={38} />
                            </div>
                            <div className="blog-list__client-content">
                                <span>Post By</span>
                                <p>{item.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {currentBlogs.map((item: BlogPost) => renderBlogPost(item))}

                            <div className="blog-list__pagination">
                                <ul className="pg-pagination list-unstyled">
                                    {paginationItems.map((item, index) => {
                                        if (item.type === 'prev') {
                                            return (
                                                <li key={index} className="prev">
                                                    <button
                                                        aria-label={item.ariaLabel}
                                                        onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault(); }}
                                                        disabled={currentPage === 1}
                                                    >
                                                        <i className="fas fa-arrow-left"></i>
                                                    </button>
                                                </li>
                                            );
                                        }
                                        if (item.type === 'next') {
                                            return (
                                                <li key={index} className="next">
                                                    <button
                                                        aria-label={item.ariaLabel}
                                                        onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault(); }}
                                                        disabled={currentPage === totalPages}
                                                    >
                                                        <i className="fas fa-arrow-right"></i>
                                                    </button>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li
                                                key={index}
                                                className={`count ${item.isActive ? 'active' : ''}`}
                                            >
                                                <button onClick={(e) => { handlePageChange(item.page!); e.preventDefault(); }}>
                                                    {item.label}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <BlogListRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogListMain;   