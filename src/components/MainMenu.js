import { MainMenuContainer } from "../styles/MainMenuContainer"
import { Link } from 'react-router-dom';

export const MainMenu = () => {
    return (
        <MainMenuContainer>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>Sobre nós</Link></li>
                    <li><Link to='/products-liked'>Produtos Curtidos</Link></li>
                </ul>
            </nav>
        </MainMenuContainer>
    )
}