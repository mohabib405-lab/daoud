import { StaticImageData } from "next/image";

export interface PricingItem {
    image: string | StaticImageData;
    badge: string;
    packName: string;
    price: string;
    validity: string;
    pricingText1: string;
    pricingText2: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}
export interface Accordion {
    id: number,
    title: string,
    description: string
}

interface linText {
    lin: string,
    text: string
}

export interface BlogHomeTow {
    id: number,
    blogLink: linText[],
    image: string | StaticImageData;
    titleLink: string,
    title: string,
    date: string,
    comment: string,
    username: string,
    subtitle: string,

}


