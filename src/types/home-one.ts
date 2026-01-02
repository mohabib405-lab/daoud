import { StaticImageData } from "next/image";

// sliding text
export type SlidingText = [
    "Hosen kürzen",
    "Chemische Reinigung",
    "Lederjacken reparieren",
    "Vorhänge reinigen",
    "Anzüge reinigen",
]

// projects
export interface Project {
    id: string;
    filterName: string;
    tag1: string;
    tag2: string;
    title: string;
    imgURL: string | StaticImageData;
}
export type FilterCategory = "All" | "Corporate" | "House" | "Car" | "Bakery" | "Sparkly";
export interface FilterConfig {
    id: FilterCategory;
    label: string;
    icon: string;
    filterNames: string[];
    showLastCard: boolean;
}

// testimonials
export interface TestimonialCarouselitem {
    id: number,
    topTitle: string,
    description: string,
    clientName: string,
    subTitle: string,
    image: string | StaticImageData,
}


export type Plan = {
    id: number,
    name: string,
    price: number,
    roomCount: string,
    description: string,
    image: string | StaticImageData,
    badge: { text: string, type: string } | null,
    features: string[],
}

export interface Blog {
    id: number,
    image: string | StaticImageData,
    date: { day: string, month: string },
    links: { link1: string, link2: string },
    title: string,
    text: string,
}
