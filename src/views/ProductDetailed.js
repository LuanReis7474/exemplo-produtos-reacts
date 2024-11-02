import { useParams } from "react-router-dom";
import { ProductsService } from '../api/ProductsService';
import { useEffect, useState } from 'react';
import { ProductsContainer } from '../styles/ProductsContainer';
import { useDispatch, useSelector } from "react-redux";
import { likeProduct, dislikeProduct } from '../store/likesSlice';

const ProductDetailed = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const likedProducts = useSelector((state) => state.likes?.likedProducts || []);
    const isLiked = likedProducts.length > 0 ? likedProducts.includes(id) : '';

    const handleLike = () => {
        console.log(likedProducts);
        if (isLiked) {
            dispatch(dislikeProduct(id));
        } else {
            dispatch(likeProduct(id));
        }
    };

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
            <ProductsContainer>
                <h1>{product.title}</h1>
                <button onClick={handleLike}>
                    {isLiked ? 'Não Gostar' : 'Gostar'}
                </button>
                <img src={`${product.image}`}></img>
                <article>{product.description}</article>
            </ProductsContainer>
        </>
    );
}

export default ProductDetailed;