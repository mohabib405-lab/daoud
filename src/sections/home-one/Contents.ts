import { Blog, FilterConfig, Plan, Project, TestimonialCarouselitem } from "@/types/home-one";

import proj1 from "../../../public/assets/images/project/project-1-1.jpg";
import proj2 from "../../../public/assets/images/project/project-1-2.jpg";
import proj3 from "../../../public/assets/images/project/project-1-3.jpg";
import proj4 from "../../../public/assets/images/project/project-1-4.jpg";
import proj5 from "../../../public/assets/images/project/project-1-5.jpg";

import aboutSec8 from "../../../public/assets/images/testimonial/testimonial-client-1-1.jpg"
import aboutSec9 from "../../../public/assets/images/testimonial/testimonial-client-1-2.jpg"
import aboutSec10 from "../../../public/assets/images/testimonial/testimonial-client-1-3.jpg"
import aboutSec11 from "../../../public/assets/images/testimonial/testimonial-client-1-3.jpg"

import pricing5 from "../../../public/assets/images/resources/pricing-one-1-1.jpg"
import pricing8 from "../../../public/assets/images/resources/pricing-one-1-2.jpg"
import pricing11 from "../../../public/assets/images/resources/pricing-one-1-3.jpg"

//blog
import blogImg1 from "../../../public/assets/images/blog/blog-1-1.jpg"
import blogImg2 from "../../../public/assets/images/blog/blog-1-2.jpg"
import blogImg3 from "../../../public/assets/images/blog/blog-1-3.jpg"
import blogImg4 from "../../../public/assets/images/blog/blog-1-4.jpg"
import blogImg5 from "../../../public/assets/images/blog/blog-1-5.jpg"
import blogImg6 from "../../../public/assets/images/blog/blog-1-6.jpg"
import blogImg7 from "../../../public/assets/images/blog/blog-1-7.jpg"
import blogImg8 from "../../../public/assets/images/blog/blog-1-8.jpg"

export const PROJECTS_DATA: Project[] = [
    {
        id: "project-1",
        filterName: "Sparkle",
        tag1: "Residential",
        tag2: "November 24",
        title: "Sparkle & Shine Services",
        imgURL: proj1,
    },
    {
        id: "project-2",
        filterName: "Pure",
        tag1: "Commercial",
        tag2: "November 24",
        title: "Pure Clean Solutions",
        imgURL: proj2,
    },
    {
        id: "project-3",
        filterName: "Fresh",
        tag1: "Deep CLEAN",
        tag2: "November 24",
        title: "Fresh Space Experts",
        imgURL: proj3,
    },
    {
        id: "project-4",
        filterName: "Eco",
        tag1: "Moveout",
        tag2: "November 24",
        title: "Eco Gleam Crew",
        imgURL: proj4,
    },
    {
        id: "project-5",
        filterName: "Neat",
        tag1: "Specialized",
        tag2: "November 24",
        title: "Neat Nest Pros",
        imgURL: proj5,
    },
    {
        id: "project-6",
        filterName: "Pure",
        tag1: "Commercial",
        tag2: "November 24",
        title: "Pure Clean Solutions",
        imgURL: proj2,
    },
];



export const FILTER_CONFIGS: FilterConfig[] = [
    {
        id: "All",
        label: "All",
        icon: "icon-catagory",
        filterNames: [],
        showLastCard: true,
    },
    {
        id: "Corporate",
        label: "Corporate Office",
        icon: "icon-pen-ruler",
        filterNames: ["Pure", "Eco", "Neat"],
        showLastCard: false,
    },
    {
        id: "House",
        label: "House Cleaning",
        icon: "icon-computer",
        filterNames: ["Sparkle", "Fresh", "Neat"],
        showLastCard: true,
    },
    {
        id: "Car",
        label: "Car Garage",
        icon: "icon-bullhorn",
        filterNames: ["Fresh", "Eco"],
        showLastCard: false,
    },
    {
        id: "Bakery",
        label: "Bakery & Factory",
        icon: "icon-bullhorn",
        filterNames: ["Sparkle", "Pure", "Fresh", "Neat"],
        showLastCard: true,
    },
    {
        id: "Sparkly",
        label: "Sparkly Clean",
        icon: "icon-bullhorn",
        filterNames: ["Sparkle", "Eco"],
        showLastCard: true,
    },

];

//testimonials
export const testimonialCarosel: TestimonialCarouselitem[] = [
    {
        id: 1,
        topTitle: "Awesome Services",
        description: `The cleaning team has been an absolute lifesaver! They go 
            above and beyond to make sure my home looks immaculate. Every surface sparkles, and they
            even take care of the small details that most services overlook. I can’t recommend them enough!`,
        clientName: `– David R.`,
        subTitle: `Founder & CEO`,
        image: aboutSec8
    },
    {
        id: 2,
        topTitle: "Excellent Convesation",
        description: `I’ve been using their services for over a year, and they’ve
            never let me down. The cleaners are punctual, friendly, and incredibly professional.
            It’s such a relief knowing I can rely on them to take care of my home while I focus on
            my busy sheduls.`,
        clientName: `– James T.`,
        subTitle: `Ui/Ux Designer`,
        image: aboutSec9
    },
    {
        id: 3,
        topTitle: "Awesome Services",
        description: `I needed a deep cleaning before hosting a big family event,
            and they delivered beyond my expectations! The team asked about my specific needs and
            ensured every corner of my home was spotless. They truly care about their customers and
            it shows`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        image: aboutSec10
    },
    {
        id: 4,
        topTitle: "Awesome Services",
        description: `The cleaning team has been an absolute lifesaver! They go 
            above and beyond to make sure my home looks immaculate. Every surface sparkles, and they
            even take care of the small details that most services overlook. I can’t recommend them enough!`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        image: aboutSec11
    },
    {
        id: 5,
        topTitle: "Awesome Services",
        description: `I needed a deep cleaning before hosting a big family event,
            and they delivered beyond my expectations! The team asked about my specific needs and
            ensured every corner of my home was spotless. They truly care about their customers and
            it shows`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        image: aboutSec10
    },

]

// pricing 

export const plans: Plan[] = [
    {
        id: 1,
        name: "Standard",
        price: 320,
        roomCount: "02 Room",
        description: "Pristine Office Spaces in Under 4 Hours!",
        image: pricing5,
        badge: null,
        features: [
            "Eco-Friendly Cleaning Products",
            "Flexible Scheduling",
            "Highly Trained Professionals",
            "Customized Cleaning Plans",
            "Flexible Scheduling"
        ]
    },
    {
        id: 2,
        name: "Premium",
        price: 440,
        roomCount: "08 Room",
        description: "Freshen Up Your Home in 2 Hours Flat!",
        image: pricing8,
        badge: {
            text: "Recommended",
            type: "recommended"
        },
        features: [
            "Customizable Packages",
            "Dusting and vacuuming",
            "Mopping floors",
            "Cleaning kitchen surfaces",
            "Appliances (exteriors)"
        ]
    },
    {
        id: 3,
        name: "Business",
        price: 580,
        roomCount: "45 Room",
        description: "Spotless Interiors Delivered in Just 3 Hours!",
        image: pricing11,
        badge: {
            text: "20% Discount",
            type: "discount"
        },
        features: [
            "All Standard Cleaning tasks",
            "Carpet and upholstery cleaning",
            "Highly Trained Professionals",
            "Deep scrubbing of bathrooms",
            "Flexible Scheduling"
        ]
    },
    {
        id: 4,
        name: "Business",
        price: 980,
        roomCount: "45 Room",
        description: "Spotless Interiors Delivered in Just 3 Hours!",
        image: pricing11,
        badge: {
            text: "20% Discount",
            type: "discount"
        },
        features: [
            "All Standard Cleaning tasks",
            "Carpet and upholstery cleaning",
            "Highly Trained Professionals",
            "Deep scrubbing of bathrooms",
            "Flexible Scheduling"
        ]
    }
];


export const blogs: Blog[] = [
    {
        id: 1,
        image: blogImg1,
        date: {
            day: "05",
            month: "NOV"
        },
        links: {
            link1: "Cleaning",
            link2: "Sparkling",
        },
        title: "10 Simple Cleaning Hacks for a Spotless Home",
        text: "Discover quick and effective cleaning tips to keep your home sparkling"
    },
    {
        id: 2,
        image: blogImg2,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Moping",
            link2: "Sparkling",
        },
        title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
        text: "Explore how a clean workplace boosts productivity, impresses clients"
    },
    {
        id: 3,
        image: blogImg3,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Cleaning",
            link2: "Moping",
        },
        title: "How Our Cleaning Agency Makes a Difference",
        text: "A behind-the-scenes look at how a professional transforms messy spaces"
    },
    {
        id: 4,
        image: blogImg4,
        date: {
            day: "30",
            month: "DEC"
        },
        links: {
            link1: "Sparkling",
            link2: "Moping",
        },
        title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
        text: "Learn when DIY cleaning falls short and why professional services"
    },
]
