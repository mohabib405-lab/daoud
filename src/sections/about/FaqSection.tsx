"use client"
import React, { useState } from 'react';
import awardShapeOne from '../../../public/assets/images/shapes/award-one-shape-1.png';
import awardShapeTwo from '../../../public/assets/images/shapes/award-one-shape-2.png';
import Accordion from '../common/Accordion';
import Image from 'next/image';
import { accordion1, accordion2 } from './FaqContent';
import TextAnimation from '@/components/elements/TextAnimation';


export interface FAQ {
    id: number;
    title: string;
    image: string;
    contentTitle: string;
    text: string;
    calender: string;
}

const FaqSection: React.FC = () => {
    const [active, setActive] = useState<number | null>(2)
    return (
        <section className="awards-one">
            <div className="awards-one__sahpe-1 img-bounce">
                <Image src={awardShapeOne} alt="" />
            </div>
            <div className="awards-one__sahpe-2 float-bob-y">
                <Image src={awardShapeTwo} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">AWARDS</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation">
                        <TextAnimation text='Celebrating Excellence Our Award' textColor='black' />
                        <TextAnimation text='Winning Achievements!' /> 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="awards-one__single">
                            <div className="accrodion-grp faq-one-accrodion"  >
                                <Accordion active={active} setActive={setActive} data={accordion1} />

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="awards-one__single">
                            <div className="accrodion-grp faq-one-accrodion" >
                                <Accordion active={active} setActive={setActive} data={accordion2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;