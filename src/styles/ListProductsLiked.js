
import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* Distribui o espaço entre os cards */
    padding: 20px;
    gap: 20px; /* Espaçamento entre os cards */

    h1{
        width:100%;
    }
`;

export const ProductCard = styled.div`
    border: 1px solid #ccc; /* Borda do card */
    border-radius: 8px; /* Bordas arredondadas */
    width: 200px; /* Largura do card */
    padding: 10px; /* Espaçamento interno */
    text-align: center; /* Centraliza o texto */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra do card */
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05); /* Aumenta o tamanho do card ao passar o mouse */
    }
    
    img {
        max-width: 100%; /* Imagem ocupa toda a largura do card */
        height: auto; /* Mantém a proporção da imagem */
    }
`;
