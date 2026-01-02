import { CartProduct } from "@/types/cart";
import cartimg1 from "../../../public/assets/images/shop/cart-page-img-1.jpg";
import cartimg2 from "../../../public/assets/images/shop/cart-page-img-2.jpg";
import cartimg3 from "../../../public/assets/images/shop/cart-page-img-3.jpg";
import cartimg4 from "../../../public/assets/images/shop/cart-page-img-4.jpg";
import cartimg5 from "../../../public/assets/images/shop/cart-page-img-5.jpg";


export const cartProductsData: CartProduct[] = [
    {
        id: 1,
        image: cartimg1.src,
        productName: "bucket cleaning",
        price: 10.99,
        quantity: 1
    },
    {
        id: 2,
        image: cartimg2.src,
        productName: "Dalli Activ Cleaner",
        price: 10.99,
        quantity: 1
    },
    {
        id: 3,
        image: cartimg3.src,
        productName: "White Detergent",
        price: 10.99,
        quantity: 1
    },
    {
        id: 4,
        image: cartimg4.src,
        productName: "washing machine",
        price: 10.99,
        quantity: 1
    },
    {
        id: 5,
        image: cartimg5.src,
        productName: "Clin Kitchen Cleaner",
        price: 10.99,
        quantity: 1
    },
];