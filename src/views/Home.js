import { useEffect, useState } from 'react';
import { ProductsContainer } from '../styles/ProductsContainer';
import { ProductsService } from '../api/ProductsService'
import { ProductsLists } from '../components/ProductsList';

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const data = await ProductsService.getProducts();
        setProducts(data.data);
    }

    console.log("PRODUCTS", products);

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <ProductsContainer>
            <ProductsLists products={products} />
        </ProductsContainer>
    );
}

export default Home;