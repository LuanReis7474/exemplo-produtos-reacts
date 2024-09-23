import { MainMenu } from "./MainMenu"
import { HeaderContainer } from '../styles/HeaderContainer';
const Header = () => {
    return (
        <div className="header">
            <HeaderContainer>

                <h1>Site</h1>

                <MainMenu></MainMenu>

            </HeaderContainer>
        </div>
    );
}

export default Header;