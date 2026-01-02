"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import workerImg1 from "../../../public/assets/images/team/team-1-1.jpg"
import workerImg2 from "../../../public/assets/images/team/team-1-2.jpg"
import workerImg3 from "../../../public/assets/images/team/team-1-3.jpg"
import workerImg4 from "../../../public/assets/images/team/team-1-4.jpg"
import workerImg5 from "../../../public/assets/images/team/team-1-5.jpg"
import workerImg6 from "../../../public/assets/images/team/team-1-6.jpg"
import workerImg7 from "../../../public/assets/images/team/team-1-7.jpg"
import workerImg8 from "../../../public/assets/images/team/team-1-8.jpg"
import team1 from "../../../public/assets/images/shapes/team-one-shape-1.png"
import team2 from "../../../public/assets/images/shapes/team-one-shape-2.png"
import { motion } from "framer-motion"
interface TeamWorker {
    image: string;
    teamTitle: string;
    teamSubTitle: string;
}

interface OfficeImage {
    src: string;
    alt?: string;
}

const teamWorker: TeamWorker[] = [
    {
        image: workerImg1.src,
        teamTitle: `Emily Carter`,
        teamSubTitle: `Operations Manager`
    },
    {
        image: workerImg2.src,
        teamTitle: `Michael Bennett`,
        teamSubTitle: `Team Leader`
    },
    {
        image: workerImg3.src,
        teamTitle: `Sophia Ramirez`,
        teamSubTitle: `Quality Control Supervisor`
    },
    {
        image: workerImg4.src,
        teamTitle: `Ethan Collins`,
        teamSubTitle: `Customer Service Coordinator`
    },
    {
        image: workerImg5.src,
        teamTitle: `Tim M. Battler`,
        teamSubTitle: `Customer Service Coordinator`
    },
    {
        image: workerImg6.src,
        teamTitle: `Jecia D. Singha`,
        teamSubTitle: `Team Leader`
    },
    {
        image: workerImg7.src,
        teamTitle: `Ivor Herbertson`,
        teamSubTitle: `Operations Manager`
    },
    {
        image: workerImg8.src,
        teamTitle: `Smaira Warnore`,
        teamSubTitle: `Quality Control Supervisor`
    },
];

const TeamMenber: React.FC = () => {
    return (
        <section className="team-one team-page">
            <div className="team-one__shape-1 float-bob-y">
                <Image src={team1} alt="" />
            </div>
            <div className="team-one__shape-2 float-bob-x">
                <Image src={team2} alt="" />
            </div>
            <div className="team-one__shape-3"></div>
            <div className="team-one__shape-4"></div>
            <div className="container">
                <div className="row">
                    {
                        teamWorker.map((item: TeamWorker, index) => (
                            <div key={index} className="col-xl-3 col-lg-6 col-md-6">
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={item.image} alt="" width={300} height={400} />
                                        </div>
                                        <div className="team-one__share-and-social">
                                            <div className="team-one__share">
                                                <span className="icon-share"></span>
                                            </div>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="#"><span className="icon-pinterest"></span></Link>
                                                <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <div className="team-one__title-box">
                                            <h3 className="team-one__title">
                                                <Link href={"/team-details"}>
                                                    {item.teamTitle}
                                                </Link>
                                            </h3>
                                            <p className="team-one__sub-title">{item.teamSubTitle}</p>
                                        </div>
                                        <div className="team-one__arrow">
                                            <Link href={"/team-details"}><span className="icon-diagonal-arrow"></span></Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamMenber;