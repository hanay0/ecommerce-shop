export interface Review {
    rate: number;
    reviewerName: string;
    reviewDescription: string
}

export interface HomeReviews {
    sectionTitle: string;
    reviews: Review[];
}
