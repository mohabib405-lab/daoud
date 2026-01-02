import React from 'react'
import officImg1 from "../../../public/assets/images/shapes/office-location-shape-1.png"
import officImg2 from "../../../public/assets/images/shapes/office-location-map.png"
import officImg3 from "../../../public/assets/images/resources/office-location-popup-img-1.jpg"
import officImg4 from "../../../public/assets/images/resources/office-location-popup-img-2.jpg"
import officImg5 from "../../../public/assets/images/resources/office-location-popup-img-3.jpg"
import officImg6 from "../../../public/assets/images/resources/office-location-popup-img-4.jpg"
import officImg7 from "../../../public/assets/images/resources/office-location-popup-img-5.jpg"
import Link from 'next/link'
import Image from 'next/image'
import TextAnimation from '@/components/elements/TextAnimation'

const OfficeLocation: React.FC = () => {
    return (
        <section className="office-location">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="office-location__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-box">
                                        <div className="section-title__tagline-shape"></div>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <span className="section-title__tagline">OUR Offices</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='Discover the Location of' textColor='black'/>
                                    <TextAnimation text='Office and Visit Us Today' /> 
                                </h2>
                            </div>
                            <p className="office-location__text">Find our office location and stop by today—we had love to see
                                you!</p>
                            <div className="office-location__btn-box">
                                <Link href="/about" className="thm-btn">
                                    Send Message
                                    <span><i className="icon-diagonal-arrow"></i></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="office-location__right">
                            <div className="office-location__shape-1 float-bob-x">
                                <Image src={officImg1} alt="" />
                            </div>
                            <div className="office-location__map-box">
                                <div className="office-location__map-img">
                                    <Image src={officImg2} alt="" />
                                </div>
                                <div className="office-location__point-1">
                                    <div className="office-location__markar">
                                        <i className="ripple"></i>
                                    </div>
                                    <div className="office-location__popup-box">
                                        <div className="office-location__popup">
                                            <div className="office-location__popup-inner">
                                                <div className="office-location__popup-img">
                                                    <Image src={officImg3} alt="" />
                                                </div>
                                                <div className="office-location__popup-content">
                                                    <p>Suite 567 <br /> Springfield, IL 62701</p>
                                                    <span>1234 Elm Street,</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="office-location__point-1 office-location__point-2">
                                    <div className="office-location__markar office-location__markar-2">
                                        <i className="ripple"></i>
                                    </div>
                                    <div className="office-location__popup-box">
                                        <div className="office-location__popup">
                                            <div className="office-location__popup-inner">
                                                <div className="office-location__popup-img">
                                                    <Image src={officImg4} alt="" />
                                                </div>
                                                <div className="office-location__popup-content">
                                                    <p>Suite 567 <br /> Springfield, IL 62701</p>
                                                    <span>1234 Elm Street,</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="office-location__point-1 office-location__point-3">
                                    <div className="office-location__markar office-location__markar-3">
                                        <i className="ripple"></i>
                                    </div>
                                    <div className="office-location__popup-box">
                                        <div className="office-location__popup">
                                            <div className="office-location__popup-inner">
                                                <div className="office-location__popup-img">
                                                    <Image src={officImg5} alt="" />
                                                </div>
                                                <div className="office-location__popup-content">
                                                    <p>Suite 567 <br /> Springfield, IL 62701</p>
                                                    <span>1234 Elm Street,</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="office-location__point-1 office-location__point-4">
                                    <div className="office-location__markar office-location__markar-4">
                                        <i className="ripple"></i>
                                    </div>
                                    <div className="office-location__popup-box">
                                        <div className="office-location__popup">
                                            <div className="office-location__popup-inner">
                                                <div className="office-location__popup-img">
                                                    <Image src={officImg6} alt="" />
                                                </div>
                                                <div className="office-location__popup-content">
                                                    <p>Suite 567 <br /> Springfield, IL 62701</p>
                                                    <span>1234 Elm Street,</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="office-location__point-1 office-location__point-5">
                                    <div className="office-location__markar office-location__markar-5">
                                        <i className="ripple"></i>
                                    </div>
                                    <div className="office-location__popup-box">
                                        <div className="office-location__popup">
                                            <div className="office-location__popup-inner">
                                                <div className="office-location__popup-img">
                                                    <Image src={officImg7} alt="" />
                                                </div>
                                                <div className="office-location__popup-content">
                                                    <p>Suite 567 <br /> Springfield, IL 62701</p>
                                                    <span>1234 Elm Street,</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocation;