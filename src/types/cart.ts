export interface CartProduct {
    id: number;
    image: string;
    productName: string;
    price?: number;
    quantity?: number;
}
export interface ShippingFormData {
    country: string;
    city: string;
    zip: string;
}