import "./nav.css"
import { NavLink } from 'react-router-dom'

function Nav() {

    return (
      <>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <NavLink to="/"><a href="#"><li>Accueil</li></a> </NavLink>
              <NavLink to="/Recolte"><a href="#"><li>Récolte</li></a></NavLink>
              <NavLink to="/Forgemagie"><a href="#"><li>Forgemagie</li></a></NavLink>
              <NavLink to="/Contact"><a href="#"><li>Contact</li></a></NavLink>
            </ul>
          </div>
        </nav>
      </>
    )
  }
  
  export default Nav;
  