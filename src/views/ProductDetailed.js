import { useParams } from "react-router-dom";
import { ProductsService } from '../api/ProductsService';
import { useEffect, useState } from 'react';

const ProductDetailed = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const data = await ProductsService.getProductById(id);
        setProduct(data?.data);
        console.log(data);
    }

    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <>
            <h1>{product.title}</h1>
            <img src={`${product.image}`}></img>
            <article>{product.description}</article>
        </>
    );
}

export default ProductDetailed;