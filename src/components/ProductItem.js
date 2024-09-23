import { Link } from 'react-router-dom';

export const ProductItem = ({ title, id }) => {
    return (
        <li>
            <Link to={`/product/${id}`}>{title}</Link>
        </li>
    )
}