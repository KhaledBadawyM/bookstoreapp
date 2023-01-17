export interface ProductInterface {
    id: number;
    title: string;
    image: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}