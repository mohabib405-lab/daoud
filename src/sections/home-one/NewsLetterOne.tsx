"use client"
import React, { useState, useEffect } from 'react'
import newsimg1 from "../../../public/assets/images/shapes/newsletter-one-shape-1.png"
import newsimg2 from "../../../public/assets/images/shapes/newsletter-one-shape-2.png"
import newsimg3 from "../../../public/assets/images/resources/newsletter-one-img-1-1.jpg"
import newsimg4 from "../../../public/assets/images/resources/newsletter-one-img-1-2.jpg"
import newsimg5 from "../../../public/assets/images/resources/newsletter-one-img-1-3.jpg"
import Image from 'next/image'
import Link from 'next/link'

interface NewsletterProps {
    img1?: string,
    img2?: string,
    img3?: string,
}

const NewsLetterOne: React.FC<NewsletterProps> = ({ img1 = newsimg3, img2 = newsimg4, img3 = newsimg5 }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const Email = formData.get("email") as string;
        const Swal = (await import("sweetalert2")).default;

        if (Email) {
            setTimeout(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Subscribed",
                    showConfirmButton: false,
                    timer: 1000
                });
                form.reset();
            }, 1000);
        } else {
            Swal.fire({
                title: "Oops...",
                text: "Enter your email",
                icon: "error"
            });
        }
    };

    return (
        <section className="newsletter-one">
            <div className="container">
                <div className="newsletter-one__inner">
                    <div className="newsletter-one__shape-bg"></div>
                    <div className="newsletter-one__shape-1 float-bob-x">
                        <Image src={newsimg1} alt="newsletter" />
                    </div>
                    <div className="newsletter-one__shape-2 float-bob-y">
                        <Image src={newsimg2} alt="newsletter" />
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="newsletter-one__title-box">
                                <h2 className="newsletter-one__title">Subscribe</h2>
                                <p className="newsletter-one__sub-title">Newsletter</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="newsletter-one__img-boxes">
                                <div className="newsletter-one__img-shape">
                                    <div className="newsletter-one__img-box-1">
                                        <div className="newsletter-one__img-1">
                                            <Image src={img1} alt="newsletter" />
                                        </div>
                                    </div>
                                    <div className="newsletter-one__img-box-2">
                                        <div className="newsletter-one__img-2">
                                            <Image src={img2} alt="newsletter" />
                                        </div>
                                    </div>
                                    <div className="newsletter-one__img-box-3">
                                        <div className="newsletter-one__img-3">
                                            <Image src={img3} alt="newsletter" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="newsletter-one__form-box">
                                {isMounted ? (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="newsletter-one__form"
                                        suppressHydrationWarning
                                    >
                                        <div className="newsletter-one__input" suppressHydrationWarning>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Email Address"
                                                autoComplete="email"
                                                data-lpignore="true"
                                                data-form-type="other"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="newsletter-one__btn">
                                            Subscribe Now <span className="icon-send"></span>
                                        </button>
                                    </form>
                                ) : (
                                    <div style={{ minHeight: '80px' }} />
                                )}
                                <p className="newsletter-one__form-text">
                                    By Subscribing you agree to the{' '}
                                    <Link href={"/about"}>Terms of use</Link>
                                    {' '}&{' '}
                                    <Link href={"/about"}>Privacy Policy</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-one__big-text">NEWSLETTER</div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterOne;