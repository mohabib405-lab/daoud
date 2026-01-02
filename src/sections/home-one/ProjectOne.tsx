"use client"
import React, { useState, useMemo, useCallback } from "react";
import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FilterCategory, FilterConfig, Project } from "@/types/home-one";
import { FILTER_CONFIGS, PROJECTS_DATA } from "./Contents";
import TextAnimation from "@/components/elements/TextAnimation";
import { motion } from "framer-motion"

const ProjectOne: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

    const filteredProjects = useMemo(() => {
        const currentConfig = FILTER_CONFIGS.find((config: FilterConfig) => config.id === activeFilter);

        if (!currentConfig || currentConfig.id === "All") {
            return PROJECTS_DATA;
        }

        return PROJECTS_DATA.filter((project: Project) =>
            currentConfig.filterNames.includes(project.filterName)
        );
    }, [activeFilter]);

    const handleFilterChange = useCallback((filterId: FilterCategory) => {
        setActiveFilter(filterId);
    }, []);

    return (
        <section className="project-one">
            <div className="project-one__bg-shape"></div>
            <div className="project-one__bg-shape-2"></div>
            <div className="project-one__shape-1"></div>
            <div className="project-one__shape-2"></div>

            <div className="container">
                <SectionTitle />

                <div className="project-one__inner">
                    <FilterTabs
                        filters={FILTER_CONFIGS}
                        activeFilter={activeFilter}
                        onFilterChange={handleFilterChange}
                    />

                    <div className="row filter-layout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))} 
                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-components
const SectionTitle: FC = () => (
    <div className="section-title text-center sec-title-animation animation-style1">
        <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-box">
                <div className="section-title__tagline-shape"></div>
                <div className="section-title__tagline-shape-2"></div>
            </div>
            <span className="section-title__tagline">Our Projects</span>
        </div>
        <h2 className="section-title__title" style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <TextAnimation text="A showcase of projects that" textColor="black" /> <br />
        </h2>
        <h2 className="section-title__title" style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>

            <TextAnimation text="define excellence" />
        </h2>
    </div>
);

interface FilterTabsProps {
    filters: FilterConfig[];
    activeFilter: FilterCategory;
    onFilterChange: (filterId: FilterCategory) => void;
}

const FilterTabs: FC<FilterTabsProps> = ({ filters, activeFilter, onFilterChange }) => (
    <ul className="project-one__filter style1 post-filter list-unstyled clearfix">
        {filters.map((filter) => (
            <li
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={activeFilter === filter.id ? "active" : ""}
            >
                <p>
                    <span className={filter.icon}></span>
                    {filter.label}
                </p>
            </li>
        ))}
    </ul>
);

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <div className="col-xl-4 col-lg-4 col-md-6">
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="project-one__single"
        >
            <div className="project-one__img-box">
                <div className="project-one__img">
                    <Image src={project.imgURL} alt={project.title} />
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
                    {project.tag1}
                    <span className="icon-right-arrow"></span>
                    {project.tag2}
                </p>
                <h3 className="project-one__title">
                    <Link href="/project-details">{project.title}</Link>
                </h3>
            </div>
        </motion.div>
    </div>
);
 

export default ProjectOne;