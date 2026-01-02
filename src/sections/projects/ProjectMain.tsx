"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types/prijects";
import { fixProject } from "./ProjectContent";
import { motion } from "framer-motion"
const ProjectsMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(fixProject.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = fixProject.slice(startIndex, endIndex);

    const handlePageChange = (page: number, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <section className="project-one project-page">
            <div className="container">
                <div className="project-one__inner">
                    <div className="row">
                        {currentProjects.map((item: ProjectItem, index) => (
                            <div key={`proj-${index}`} className="col-xl-4 col-lg-4 col-md-6">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <Image
                                                src={item.imgURL}
                                                alt={item.title}
                                                width={400}
                                                height={400}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="project-one__view-box">
                                            <Link href="/project-details" className="project-one__view">
                                                <i className="icon-diagonal-arrow"></i>
                                                <span>View More</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="project-one__content">
                                        <p className="project-one__tag">
                                            {item.tag1}
                                            <span className="icon-right-arrow"></span>
                                            {item.tag2}
                                        </p>
                                        <h3 className="project-one__title">
                                            <Link href="/project-details">{item.title}</Link>
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>
                        ))}

                    </div>

                    {/* Pagination */}
                    <div className="project-page__pagination mt-10">
                        <div className="blog-list__pagination">
                            <ul className="pg-pagination list-unstyled flex justify-center items-center gap-3">
                                {/* Prev */}
                                <li className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button
                                        onClick={(e) => handlePageChange(currentPage - 1, e)}
                                        disabled={currentPage === 1} className="p-2" >
                                        <i className="fas fa-arrow-left"></i>
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i} className={`count ${currentPage === i + 1 ? "active" : ""}`} >
                                        <button onClick={(e) => handlePageChange(i + 1, e)} className="p-2" >
                                            {String(i + 1).padStart(2, "0")}
                                        </button>
                                    </li>
                                ))}

                                {/* Next */}
                                <li className={`next ${currentPage === totalPages ? "disabled" : ""}`} >
                                    <button
                                        onClick={(e) => handlePageChange(currentPage + 1, e)}
                                        disabled={currentPage === totalPages}
                                        className="p-2">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsMain;
