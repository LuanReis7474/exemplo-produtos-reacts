import { ProductItem } from './ProductItem';

export const ProductsLists = ({ products }) => {
    return (
        <section>
            <ul>
                {products.map(m => <ProductItem title={m.title}></ProductItem>)}
            </ul>
        </section>
    )
}