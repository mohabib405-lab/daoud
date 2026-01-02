"use client"
import React, { useState } from 'react';
import { plans } from './Contents';
import { Plan } from '@/types/home-one';
import Image from 'next/image';
import pricing1 from "../../../public/assets/images/shapes/pricing-one-shape-1.png"
import pricing2 from "../../../public/assets/images/shapes/pricing-one-discount--shape-1.png"
import pricing3 from "../../../public/assets/images/shapes/pricing-one-tab-content-shape-1.png"
import pricing4 from "../../../public/assets/images/shapes/pricing-one-tab-content-shape-2.png"
import bgImg from '../../../public/assets/images/shapes/pricing-one-shape-bg-2.png'
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';

type Package = 'weekly' | 'monthly' | 'yearly'

const PricingOne: React.FC = () => {
    const [pricingPlans, setPricingPlans] = useState<Plan[]>(plans.filter(i => i?.id !== 3))
    const [isAct, setIsAct] = useState<Package>('weekly')
    const handleWeekly = (): void => {
        setPricingPlans(plans.filter(i => i?.id !== 4))
        setIsAct('weekly')
    }
    const handleMonthly = (): void => {
        setPricingPlans(plans.filter(i => i?.id !== 1))
        setIsAct('monthly')
    }
    const handleYearly = (): void => {
        setPricingPlans(plans.filter(i => i?.id !== 2))
        setIsAct('yearly')
    }
    return (
        <section className="pricing-one">
            <div className="pricing-one__shape-bg-2" style={{ backgroundImage: `url(${bgImg})` }}> </div>
            <div className="pricing-one__shape-1">
                <Image src={pricing1} alt="price" />
            </div>
            <div className="pricing-one__shape-bg-1"
            ></div>
            <div className="pricing-one__shape-bg-2"
            ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Plans & Pricing</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation" >
                        <TextAnimation text='Explore Our Affordable and' textColor='black' />
                        <TextAnimation text='Flexible Pricing Options' />
                    </h2>
                </div>
                <div className="pricing-one__inner">
                    <div className="pricing-one__main-tab-box tabs-box">
                        <div className="pricing-one__tab-buttons-box">
                            <div className="pricing-one__discount-box">
                                <p>-10% Off</p>
                            </div>
                            <div className="pricing-one__discount-shape-1">
                                <Image src={pricing2} alt="price" />
                            </div>
                            <ul className="tab-buttons list-unstyled">
                                <li onClick={handleWeekly} className={`tab-btn ${isAct === 'weekly' ? 'active-btn' : ''} `}><span>Weekly</span> </li>
                                <li onClick={handleMonthly} className={`tab-btn ${isAct === 'monthly' ? 'active-btn' : ''} `}><span>Monthly</span></li>
                                <li onClick={handleYearly} className={`tab-btn ${isAct === 'yearly' ? 'active-btn' : ''} `}><span>Yearly</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            {pricingPlans.map((plan) => (
                                <div key={plan.id} className="pricing-one__tab-content-box">
                                    {/* Badge */}
                                    {plan.badge && (
                                        <div className={`pricing-one__badge ${plan.badge.type === 'discount' ? 'pricing-one__badge--two' : ''}`}>
                                            <p>{plan.badge.text}</p>
                                        </div>
                                    )}

                                    {/* Decorative shapes */}
                                    <div className="pricing-one__tab-content-shape-1">
                                        <Image src={pricing3} alt="" />
                                    </div>
                                    <div className="pricing-one__tab-content-shape-2">
                                        <Image src={pricing4} alt="" />
                                    </div>

                                    {/* Left content */}
                                    <div className="pricing-one__tab-content-left">
                                        <div className="pricing-one__img">
                                            <Image src={plan.image} alt={plan.name} />
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-pack">{plan.name}</p>
                                            <h2 className="pricing-one__price">
                                                <span className="dolar">$</span> {plan.price}{' '}
                                                <span className="clean-count">/{plan.roomCount}</span>
                                            </h2>
                                            <p className="pricing-one__text">
                                                {plan.description.includes('Under 4 Hours!') ? (
                                                    <>Pristine Office Spaces in <br /> Under 4 Hours!</>
                                                ) : plan.description.includes('2 Hours Flat!') ? (
                                                    <>Freshen Up Your Home in 2 <br /> Hours Flat!</>
                                                ) : (
                                                    <>Spotless Interiors Delivered <br /> in Just 3 Hours!</>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right content */}
                                    <div className="pricing-one__tab-content-right">
                                        <ul className="list-unstyled pricing-one__points">
                                            {plan.features.map((feature, index) => (
                                                <li key={index}>
                                                    <div className="icon">
                                                        <span className="icon-check"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>{feature}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="/pricing">
                                                <span className="icon-plus-1"></span> Choose Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Single Item */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingOne;