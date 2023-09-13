import LogoSvg from '../../assets/logo.svg';
function Logo() {
    return <>
        <a className='logo-v1' href="index.html">
            <img src={LogoSvg} alt="Logo" />
        </a>
    </>
}

export default Logo;