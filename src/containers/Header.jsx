import React from 'react'
import {
  Link
} from "react-router-dom";

const Header = () => {
  return ( 

    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Rick and Morty
        </a>
        <Link  className="navbar-brand " to="/episodios">Episodios</Link>
        <Link to="/personajes" className="navbar-brand " >Personajes</Link>
        <Link className="navbar-brand " to="/favoritos" >Favoritos</Link>
      </div>
    </nav>

   );
}
 
export default Header;