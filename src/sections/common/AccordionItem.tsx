import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/types/faq";

interface AccordionItemProps {
    handleToggle: (id: number) => void;
    faq: FAQ;
    active?: number | null;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    handleToggle,
    faq,
    active = 2,
}) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("0px");

    const { title, image, contentTitle, text, calender, id } = faq;
    const isActive = active === id;

    useEffect(() => {
        if (isActive && contentEl.current) {
            setHeight(`${contentEl.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isActive]);

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div
                    className={`rc-accordion-toggle p-3 ${isActive ? "isActive" : ""}`}
                    onClick={() => handleToggle(id)}
                    role="button"
                    aria-expanded={isActive}
                    aria-controls={`accordion-content-${id}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleToggle(id);
                        }
                    }}
                >
                    <h5 className="rc-accordion-title">{title}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>

            <div
                ref={contentEl}
                id={`accordion-content-${id}`}
                className={`rc-collapse ${isActive ? "show" : ""}`}
                style={{ height }}
                aria-hidden={!isActive}
            >
                <div className="accrodion-content">
                    <div className="inner">
                        <div className="img-box">
                            <Image src={image} alt={title} width={160} height={141} />
                        </div>
                        <div className="content-box">
                            <h4 className="content-box-title">{contentTitle}</h4>
                            <p className="content-box-text">{text}</p>
                            <div className="date-and-btn">
                                <div className="date-box">
                                    <p>
                                        <span className="icon-calendar"></span> {calender}
                                    </p>
                                </div>
                                <div className="btn-box">
                                    <Link href="#">
                                        View Now <span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
