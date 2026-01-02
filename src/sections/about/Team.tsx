import Image from 'next/image';
import aboutSec1 from '../../../public/assets/images/shapes/team-one-shape-1.png';
import aboutSec2 from '../../../public/assets/images/shapes/team-one-shape-2.png';
import React from 'react';
import TeamSlider from '@/components/elements/TeamSlider';
import TextAnimation from '@/components/elements/TextAnimation';

const Team = () => {
    return (
        <section className="team-one">
            <div className="team-one__shape-1 float-bob-y">
                <Image src={aboutSec1} alt="Team shape decoration" />
            </div>
            <div className="team-one__shape-2 float-bob-x">
                <Image src={aboutSec2} alt="Team shape decoration" />
            </div>
            <div className="team-one__shape-3"></div>
            <div className="team-one__shape-4"></div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">OUR Team Member</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Meet the Experts Behind Our Success.' textColor='black' /><br></br>
                        <TextAnimation text='Our Dedicated Team at Your Service' />
                    </h2>
                </div>
                <TeamSlider />
            </div>
        </section>
    );
};

export default Team;