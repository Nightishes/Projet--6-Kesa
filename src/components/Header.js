import logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom';

function Header() {
  const currentUrl = useLocation(); 
  const currentLocation= window.location.origin;
  const currentTotalUrl = currentLocation + currentUrl.pathname
  window.onload= function(){
    const homeNav = document.getElementById("home-nav")
    const aboutNav = document.getElementById("about-nav")
    if (homeNav.href === currentTotalUrl)
    {
      homeNav.className ='current-page'
    } else if (aboutNav.href  === currentTotalUrl)
    {
      aboutNav.className ='current-page'
    }
  }
  //router link active
  
   
    return (
      <header className="header-flex">
        <img src={logo} alt="Logo Kasea"></img>
        <ul className="header-list">
          <li><a  id='home-nav'  href='/'>Accueil</a></li> 
          <li><a  id='about-nav' href='/about' >A Propos</a></li>
        </ul>
      </header>
    );
  }
  
  export default Header;