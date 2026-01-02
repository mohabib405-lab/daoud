import { StaticImageData } from "next/image";

export interface BlogPost {
    id: number;
    title: string;
    description: string;
    date: string;
    comments: string;
    tags: string[];
    author: string;
    image1: string | null | StaticImageData;
    image2: string | StaticImageData;
    hasImage: boolean;
}



