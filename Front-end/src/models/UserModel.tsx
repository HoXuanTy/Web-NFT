import { Product } from "./ProductModel";

export interface UserModel {
    id: number;
    nameUser: string;
    avartar: string;
    products: Product[]
}