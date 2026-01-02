"use client"
import { useState, useMemo } from "react";
import type { ReactElement } from 'react';
import Image from "next/image";
import Link from "next/link";
import { defaultProducts, Product } from "../products-leftsidebar/ProductContent";


type SortOption = "Popular" | "Price" | "Ratings";

const ITEMS_PER_PAGE = 12;

const NosidebarMain: React.FC = () => {
    const [sortBy, setSortBy] = useState<SortOption>("Popular");
    const [isHorizontal, setIsHorizontal] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>(defaultProducts);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleProductAction = (productId: number, action: string): void => {
        if (productId && action) {
            // console.log('Action:', action, 'Product ID:', productId);
        }
    };

    const renderStars = (): ReactElement[] => {
        return Array.from({ length: 5 }, (_, index) => (
            <i key={index} className="icon-star"></i>
        ));
    };

    const renderPrice = (product: Product): ReactElement => {
        if (product.originalPrice) {
            return (
                <p>
                    <del>${product.originalPrice.toFixed(2)}</del> ${product.price.toFixed(2)}
                </p>
            );
        }
        return <p>${product.price.toFixed(2)}</p>;
    };

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const value = e.target.value as SortOption;
        setSortBy(value);
        setCurrentPage(1); // Reset to first page when sorting

        if (value === "Price") {
            const sorted = [...products].sort((a, b) => a.price - b.price);
            setProducts(sorted);
        } else if (value === "Ratings") {
            const sorted = [...products].sort((a, b) => b.rating - a.rating);
            setProducts(sorted);
        } else if (value === "Popular") {
            setProducts(defaultProducts);
        }
    };

    // Calculate pagination
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = useMemo(() =>
        products.slice(startIndex, endIndex),
        [products, startIndex, endIndex]
    );

    const handlePageChange = (page: number): void => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderPageNumbers = (): ReactElement[] => {
        const pages: ReactElement[] = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i} className={currentPage === i ? 'active' : ''}>
                    <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(i);
                        }}
                    >
                        {i}
                    </Link>
                </li>
            );
        }

        return pages;
    };

    const renderGridView = (): ReactElement => (
        <div className={`tab-content-box-item ${!isHorizontal ? 'tab-content-box-item-active' : ''}`} id="grid">
            <div className="product__all-tab-content-box-item">
                <div className="product__all-tab-single">
                    <div className="row">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
                                <Link href={"/product-details"}>
                                    <div className="single-product-style1">
                                        <div className="single-product-style1__img">
                                            <Image src={product.image} alt={product.name} width={308} height={421} />
                                            <Image src={product.image} alt={product.name} width={308} height={421} />

                                            {product.badges.length > 0 && (
                                                <ul className="single-product-style1__overlay">
                                                    {product.badges.map((badge, index) => (
                                                        <li key={index}>
                                                            <p>{badge}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <ul className="single-product-style1__info">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        title="Add to Wishlist"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleProductAction(product.id, 'Add to Wishlist');
                                                        }}
                                                    >
                                                        <i className="fa fa-regular fa-heart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        title="Add to cart"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleProductAction(product.id, 'Add to Cart');
                                                        }}
                                                    >
                                                        <i className="fa fa-solid fa-cart-plus"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        title="Quick View"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleProductAction(product.id, 'Quick View');
                                                        }}
                                                    >
                                                        <i className="fa fa-regular fa-eye"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        title="Compare"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleProductAction(product.id, 'Compare');
                                                        }}
                                                    >
                                                        <i className="fa fa-solid fa-repeat"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="single-product-style1__content">
                                            <div className="single-product-style1__content-left">
                                                <h4>
                                                    <Link href={product.link}>{product.name}</Link>
                                                </h4>
                                                {renderPrice(product)}
                                            </div>
                                            <div className="single-product-style1__content-right">
                                                <div className="single-product-style1__review">
                                                    <i className="icon-star"></i>
                                                    <p>{product.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderListView = (): ReactElement => (
        <div className={`tab-content-box-item ${isHorizontal ? 'tab-content-box-item-active' : ''}`} id="list">
            <div className="product__all-tab-content-box-item">
                <div className="product__all-tab-single">
                    <div className="row">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="col-xl-6 col-lg-6">
                                <Link href={"/product-details"}>
                                    <div className="single-product-style2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-product-style2__img">
                                                    <Image src={product.image} alt={product.name} width={314} height={327} />
                                                    <Image src={product.image} alt={product.name} width={314} height={327} />

                                                    {product.badges.length > 0 && (
                                                        <ul className="single-product-style1__overlay">
                                                            {product.badges.map((badge, index) => (
                                                                <li key={index}>
                                                                    <p>{badge}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-product-style2__content">
                                                    <div className="single-product-style2__review">
                                                        {renderStars()}
                                                    </div>

                                                    <div className="single-product-style2__text">
                                                        <h4>
                                                            <Link href={product.link}>{product.name}</Link>
                                                        </h4>
                                                        {renderPrice(product)}
                                                    </div>

                                                    <ul className="single-product-style2__info">
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                title="Add to Wishlist"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleProductAction(product.id, 'Add to Wishlist');
                                                                }}
                                                            >
                                                                <i className="fa fa-regular fa-heart"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                title="Add to cart"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleProductAction(product.id, 'Add to Cart');
                                                                }}
                                                            >
                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                title="Quick View"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleProductAction(product.id, 'Quick View');
                                                                }}
                                                            >
                                                                <i className="fa fa-regular fa-eye"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                title="Compare"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleProductAction(product.id, 'Compare');
                                                                }}
                                                            >
                                                                <i className="fa fa-solid fa-repeat"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="product__items">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product__showing-result">
                                        <div className="product__showing-text-box">
                                            <p className="product__showing-text">
                                                Showing {startIndex + 1}–{Math.min(endIndex, products.length)} of {products.length} results
                                            </p>
                                        </div>
                                        <div className="product__showing-sort">
                                            <select
                                                className="form-select form-select-lg py-3 select-box"
                                                aria-label="Sort Options"
                                                value={sortBy}
                                                onChange={handleSort}
                                            >
                                                <option value="Popular">Sort by popular</option>
                                                <option value="Price">Sort by Price</option>
                                                <option value="Ratings">Sort by Ratings</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__all">
                                <div className="product__all-tab">
                                    <div className="product__all-tab-button">
                                        <ul className="tabs-button-box clearfix">
                                            <li
                                                data-tab="#grid"
                                                onClick={() => setIsHorizontal(false)}
                                                className={`tab-btn-item ${!isHorizontal ? 'active-btn-item' : ''}`}
                                            >
                                                <div className="product__all-tab-button-icon one">
                                                    <i className="fa fa-solid fa-bars"></i>
                                                </div>
                                            </li>
                                            <li
                                                data-tab="#list"
                                                onClick={() => setIsHorizontal(true)}
                                                className={`tab-btn-item ${isHorizontal ? 'active-btn-item' : ''}`}
                                            >
                                                <div className="product__all-tab-button-icon">
                                                    <i className="fa fa-solid fa-list-ul"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tabs-content-box">
                                        {renderGridView()}
                                        {renderListView()}
                                    </div>
                                </div>

                                {totalPages > 1 && (
                                    <ul className="styled-pagination text-center clearfix">
                                        <li className={`arrow prev ${currentPage === 1 ? 'disabled' : 'active'}`}>
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(currentPage - 1);
                                                }}
                                            >
                                                <span className="fas fa-arrow-left"></span>
                                            </Link>
                                        </li>
                                        {renderPageNumbers()}
                                        <li className={`arrow next ${currentPage === totalPages ? 'disabled' : 'active'}`}>
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(currentPage + 1);
                                                }}
                                            >
                                                <span className="fas fa-arrow-right"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NosidebarMain;