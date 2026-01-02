"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import logo2 from "../../../public/assets/images/resources/logo-2.png";
import Link from 'next/link';
import FreshFlowContext from '../context/FreshFlowContext';

const SideBar: React.FC = () => {
    const context = useContext(FreshFlowContext);

    if (!context) {
        throw new Error("App must be used within a ContextProvider");
    }
    const { isSideBar, setSideBar } = context;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const Name = formData.get("name") as string;
        const Email = formData.get("email") as string;
        const Message = formData.get("message") as string;
        const Swal = (await import("sweetalert2")).default;

        if (Name && Email && Message) {
            setTimeout(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message sent successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }, 2000);

            setSideBar(false);
        }
    };

    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSideBar ? 'isActive' : ''}`}>
            <div className="xs-overlay xs-bg-black" onClick={() => setSideBar(prev => !prev)}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div onClick={() => setSideBar(prev => !prev)} className="widget-heading">
                        <Link href="#" className="close-side-widget">X</Link>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link href={"/"}>
                                        {/* <Image src={"../../../public/assets/images/resources/logo-2.png"} alt="" /> */}
                                        <Image src={logo2} alt="logo" />
                                    </Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                                        labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                                </div>
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form onSubmit={handleSubmit} className="contact-form-validated" >
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button type="submit" className="thm-btn form-inner__btn">Submit Now</button>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;