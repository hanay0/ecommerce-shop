export interface HomeProducts {
    id: number;
    title: string;
    rating: number;
    price: number;
    old_price: number | null;
    discountPercentage: number;
    thumbnail: string;
}
