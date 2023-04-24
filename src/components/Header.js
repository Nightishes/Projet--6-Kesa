import logo from '../assets/logo.png'

function Header() {
    return (
      <header className="header-flex">
        <h1><img src={logo} alt="Logo Kasea"></img></h1>
        <ul className="header-list">
          <li><a href='/'>Accueil</a></li> 
          <li><a href='/about'>A Propos</a></li>
        </ul>
      </header>
    );
  }
  
  export default Header;