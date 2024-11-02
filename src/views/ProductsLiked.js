import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ProductsService } from '../api/ProductsService';
import { ProductsContainer, ProductCard } from '../styles/ListProductsLiked'

const ProductsLiked = () => {
    const likedProducts = useSelector((state) => state.likes?.likedProducts || []);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await Promise.all(
                likedProducts.map(idProduct =>
                    ProductsService.getProductById(idProduct).then(response => response.data)
                )
            );
            setProducts(fetchedProducts);
        };

        if (likedProducts.length > 0) {
            fetchProducts();
        }
    }, [likedProducts]);

    return (
        <ProductsContainer>
            <h1>Produtos Gostados</h1>
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />

                    </ProductCard>
                ))
            ) : (
                <p>Você não tem produtos gostados.</p>
            )}
        </ProductsContainer>
    );
}

export default ProductsLiked;
