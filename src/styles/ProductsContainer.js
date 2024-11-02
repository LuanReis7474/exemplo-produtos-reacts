import styled from "styled-components";

export const ProductsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px; /* Largura máxima do card */
    margin: 20px auto; /* Centraliza o card horizontalmente */
    padding: 20px; /* Adiciona espaçamento interno */
    border: 1px solid #ccc; /* Borda leve */
    border-radius: 8px; /* Bordas arredondadas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra do card */
    background-color: #fff; /* Cor de fundo */
    transition: transform 0.2s; /* Transição suave para hover */

    &:hover {
        transform: translateY(-4px); /* Eleva o card ao passar o mouse */
    }

    h1 {
        font-size: 24px; /* Tamanho da fonte do título */
        margin: 0 0 10px; /* Margem inferior */
        text-align: center; /* Centraliza o título */
        color: #333; /* Cor do texto */
    }

    img {
        width: 100%; /* A imagem ocupa toda a largura do card */
        height: auto; /* Mantém a proporção da imagem */
        border-radius: 8px; /* Arredonda as bordas da imagem */
        margin-bottom: 15px; /* Margem inferior da imagem */
    }

    article {
        font-size: 16px; /* Tamanho da fonte da descrição */
        color: #666; /* Cor do texto da descrição */
        text-align: justify; /* Alinha o texto da descrição */
        margin-bottom: 15px; /* Margem inferior da descrição */
    }

    button {
        background-color: #007bff; /* Cor de fundo do botão */
        color: #fff; /* Cor do texto do botão */
        border: none; /* Remove bordas padrão */
        border-radius: 5px; /* Bordas arredondadas do botão */
        padding: 10px 15px; /* Espaçamento interno do botão */
        cursor: pointer; /* Muda o cursor ao passar sobre o botão */
        transition: background-color 0.2s; /* Transição suave para hover */

        &:hover {
            background-color: #0056b3; /* Cor do botão ao passar o mouse */
        }
    }
`