
import { Blog } from "@/types/home-one"
import blogImg1 from "../../../public/assets/images/blog/blog-1-1.jpg"
import blogImg2 from "../../../public/assets/images/blog/blog-1-2.jpg"
import blogImg3 from "../../../public/assets/images/blog/blog-1-3.jpg"
import blogImg4 from "../../../public/assets/images/blog/blog-1-4.jpg"
import blogImg5 from "../../../public/assets/images/blog/blog-1-5.jpg"
import blogImg6 from "../../../public/assets/images/blog/blog-1-6.jpg"
import blogImg7 from "../../../public/assets/images/blog/blog-1-7.jpg"
import blogImg8 from "../../../public/assets/images/blog/blog-1-8.jpg"

import listimg1 from "../../../public/assets/images/blog/blog-list-1-1.jpg";
import listimg7 from "../../../public/assets/images/blog/blog-list-client-img-1.jpg";
import listimg2 from "../../../public/assets/images/blog/blog-list-1-2.jpg";
import listimg6 from "../../../public/assets/images/blog/blog-list-client-img-2.jpg";
import listimg4 from "../../../public/assets/images/blog/blog-list-1-3.jpg";
import listimg5 from "../../../public/assets/images/blog/blog-list-client-img-4.jpg";
import { BlogPost } from "@/types/blog-list"

export const Allblogs: Blog[] = [
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
    {
        id: 5,
        image: blogImg5,
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
        id: 6,
        image: blogImg6,
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
        id: 7,
        image: blogImg7,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Cleaning",
            link2: "Moping",
        },
        title: "How Our Cleaning Agency Makes a Difference",
        text: "A behind-the-scenes look at how cleaning team transforms messy spaces"
    },
    {
        id: 8,
        image: blogImg8,
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
    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
    {
        id: 13,
        image: blogImg2,
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
        id: 14,
        image: blogImg1,
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
]


//Blog List Page Content

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 2,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
    {
        id: 3,
        title: "Top 10 Common Cleaning Mistakes to Avoid for a Spotless Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Smith Jhon",
        image1: listimg4,
        image2: listimg5,
        hasImage: true
    },
    {
        id: 4,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 5,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
    {
        id: 6,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 7,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
];


