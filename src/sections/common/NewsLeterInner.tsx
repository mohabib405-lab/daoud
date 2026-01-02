"use client"
import React from 'react';
import newsimg1 from '../../../public/assets/images/resources/newsletter-two-img-1.jpg';
import Image from 'next/image';
import Link from 'next/link';
const NewsLeterInner: React.FC = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
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
            }, 1000)

        } else {
            Swal.fire({
                title: "Oops...",
                text: "Enter your email",
                icon: "error"
            });
        }

    }
    return (
        <section className="newsletter-two">
            <div className="newsletter-two__big-text">NEWSLETTER</div>
            <div className="newsletter-two__img-box">
                <div className="newsletter-two__img">
                    <Image src={newsimg1} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="newsletter-two__inner">
                    <div className="newsletter-two__left">
                        <div className="newsletter-two__title-box">
                            <h2 className="newsletter-two__title">Subscribe <span>Newsletter</span></h2>
                            <p className="newsletter-two__text">
                                By Subscribing you agree to the
                                <Link href={"/about"}>
                                    Terms of use
                                </Link>

                                &
                                <Link href={"/about"}>
                                    Privacy Policy
                                </Link>

                            </p>
                        </div>
                    </div>
                    <div className="newsletter-two__form-box">
                        <form onSubmit={handleSubmit} className="newsletter-two__form">
                            <div className="newsletter-two__input">
                                <input name='email' type="email" placeholder="Email Address" />
                            </div>
                            <button type="submit" className="newsletter-two__btn">
                                Subscribe Now <span className="icon-send"></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLeterInner;