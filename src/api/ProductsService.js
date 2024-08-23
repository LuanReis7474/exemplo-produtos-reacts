import { axios } from "axios";
const BASE_URL = 'https://fakestoreapi.com/products';
const withBaseUrl = path => `${BASE_URL}${path}`;

export class ProductsClass {
    static getProducts() {
        return axios(withBaseUrl('/products'));
    }
}