import { PricingItem, Accordion } from '@/types/home-tow';
import service1 from '../../public/assets/images/resources/pricing-one-1-1.jpg';
import service2 from '../../public/assets/images/resources/pricing-one-1-2.jpg';
import service3 from '../../public/assets/images/resources/pricing-one-1-3.jpg';

export const pricingContent: PricingItem[] = [
    {
        image: service1,
        badge: 'Basic',
        packName: 'BASIC',
        price: '19',
        validity: '/mo',
        pricingText1: 'Starter cleaning',
        pricingText2: 'For small spaces',
        text1: 'Dusting',
        text2: 'Vacuuming',
        text3: 'Mopping',
        text4: 'Window cleaning',
        text5: 'Fridge cleaning',
    },
    {
        image: service2,
        badge: 'Standard',
        packName: 'STANDARD',
        price: '39',
        validity: '/mo',
        pricingText1: 'Regular cleaning',
        pricingText2: 'For medium spaces',
        text1: 'Dusting',
        text2: 'Vacuuming',
        text3: 'Mopping',
        text4: 'Window cleaning',
        text5: 'Oven cleaning',
    },
    {
        image: service3,
        badge: 'Premium',
        packName: 'PREMIUM',
        price: '69',
        validity: '/mo',
        pricingText1: 'Deep cleaning',
        pricingText2: 'For large spaces',
        text1: 'Dusting',
        text2: 'Vacuuming',
        text3: 'Mopping',
        text4: 'Window cleaning',
        text5: 'Carpet cleaning',
    },
];

export const pricingContentTow: PricingItem[] = pricingContent.map((item) => ({
    ...item,
    price: (Number(item.price) * 10).toString(),
    validity: '/yr'
}));

export const accordionItems1: Accordion[] = [
    { id: 1, title: 'How does the booking work?', description: 'You can book a schedule via our contact page or call the support number.' },
    { id: 2, title: 'Can I reschedule?', description: 'Yes, rescheduling is free up to 24 hours before the appointment.' },
    { id: 3, title: 'Do you provide supplies?', description: 'We provide standard cleaning supplies; you can request eco-friendly products.' },
];

export const accordionItems2: Accordion[] = [
    { id: 4, title: 'Are your cleaners vetted?', description: 'All cleaners are background checked and trained by our team.' },
    { id: 5, title: 'How do I pay?', description: 'We accept all major credit cards and payment via invoice.' },
    { id: 6, title: 'What is your cancellation policy?', description: 'Cancellations are accepted up to 24 hours before without charge.' },
];
