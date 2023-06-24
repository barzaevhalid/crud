import { ProductModel } from "../product.model";

export interface ProductState {
    products: ProductModel[];
    viewProduct: ProductModel;
}
