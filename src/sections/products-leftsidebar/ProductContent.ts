
import products1img1 from '../../../public/assets/images/shop/shop-product-1-1.jpg';
import products1img2 from '../../../public/assets/images/shop/shop-product-1-2.jpg';
import products1img3 from '../../../public/assets/images/shop/shop-product-1-3.jpg';
import products1img4 from '../../../public/assets/images/shop/shop-product-1-4.jpg';
import products1img5 from '../../../public/assets/images/shop/shop-product-1-6.jpg';
import products1img6 from '../../../public/assets/images/shop/shop-product-1-7.jpg';
import products1img7 from '../../../public/assets/images/shop/shop-product-1-8.jpg';
import products1img8 from '../../../public/assets/images/shop/shop-product-1-9.jpg';


export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number | null;
    image: string;
    rating: number;
    badges: string[];
    link: string;
}



export const defaultProducts: Product[] = [
    {
        id: 1,
        name: 'bucket cleaning',
        price: 33.00,
        originalPrice: null,
        image: products1img1.src,
        rating: 4.9,
        badges: ['New'],
        link: '/product-details'
    },
    {
        id: 2,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 3,
        name: 'White Detergent',
        price: 28.00,
        originalPrice: 33.00,
        image: products1img3.src,
        rating: 4.5,
        badges: ['5% Off'],
        link: '/product-details'
    },
    {
        id: 4,
        name: 'washing machine',
        price: 40.00,
        originalPrice: null,
        image: products1img4.src,
        rating: 4.8,
        badges: [],
        link: '/product-details'
    },
    {
        id: 5,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5.src,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 6,
        name: 'xtra Window Cleaner',
        price: 27.00,
        originalPrice: null,
        image: products1img6.src,
        rating: 4.6,
        badges: ['New'],
        link: '/product-details'
    },
    {
        id: 7,
        name: 'bucket cleaning',
        price: 44.00,
        originalPrice: null,
        image: products1img7.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 8,
        name: 'Vacuum cleaner',
        price: 52.00,
        originalPrice: 56.0,
        image: products1img8.src,
        rating: 4.9,
        badges: ['3% Off'],
        link: '/product-details'
    },
    {
        id: 9,
        name: 'Clin Kitchen Cleaner',
        price: 43.00,
        originalPrice: 50.0,
        image: products1img5.src,
        rating: 4.9,
        badges: ['New', '7% Off'],
        link: '/product-details'
    },
    {
        id: 10,
        name: 'bucket cleaning',
        price: 44.00,
        originalPrice: null,
        image: products1img7.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 11,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5.src,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 12,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 13,
        name: 'bucket cleaning',
        price: 44.00,
        originalPrice: null,
        image: products1img7.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 14,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5.src,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 15,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 16,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5.src,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 17,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 18,
        name: 'bucket cleaning',
        price: 44.00,
        originalPrice: null,
        image: products1img7.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 19,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5.src,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 20,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2.src,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
];
