import Logo from './Logo';
import Nav from './Nav';
import Options from './Header_options';
import './style.scss';

function Header() {
    return(
        <>
            <header>
                <div className='header_content'>
                    <Logo/>
                    <Nav/>
                    <Options/>
                </div>
            </header>
        </>
    )
}

export default Header;