import { ProductItem } from './ProductItem';

export const ProductsLists = ({ products }) => {

    return (
        <section>
            <ul>
                {products.map(p => <ProductItem id={p.id} title={p.title}></ProductItem>)}
            </ul>
        </section>
    )
}