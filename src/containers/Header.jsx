import React from 'react'
import {
  Link
} from "react-router-dom";

const Header = () => {
  return ( 
    <div className='d-flex justify-content-between'>
      <h1>Rick and Morty</h1>
      <div className="btn-group">
              <Link to="/episodios" className="btn btn-dark">Episodios</Link>
              <Link to="/personajes" className="btn btn-dark">Personajes</Link>
              <Link to="/favoritos" className="btn btn-dark">Favoritos</Link>
              {/* <NavLink to="/users" className="btn btn-dark" activeClassName="active">Users</NavLink> */}
          </div>
    </div>
   );
}
 
export default Header;