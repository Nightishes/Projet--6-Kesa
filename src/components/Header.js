import logo from '../assets/logo.png'

function Header() {
    return (
      <header className="header-flex">
        <h1><img src={logo} alt="Logo Kasea"></img></h1>
        <ul className="header-list">
          <li>Accueil</li> 
          <li>A Propos</li>
        </ul>
      </header>
    );
  }
  
  export default Header;