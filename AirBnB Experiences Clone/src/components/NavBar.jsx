import airBnBLogo from '../assets/airbnb-logo.png'


function NavBar(){
    return(
        <nav className='nav-bar'>
            <img className='airbnb-logo' src={airBnBLogo} alt="" />
        </nav>
    )
}

export default NavBar