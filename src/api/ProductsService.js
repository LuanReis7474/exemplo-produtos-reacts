import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com';
const withBaseUrl = path => `${BASE_URL}${path}`;

export class ProductsService {
    static getProducts() {
        return axios(withBaseUrl('/products'));
    }

    static getProductById(id) {
        return axios(withBaseUrl(`/products/${id}`));
    }
}