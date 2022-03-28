import React from 'react'
import {
  Routes,
  Route,

} from "react-router-dom";
import EpisodeListing from './EpisodesList';
import Episodio from './Episodio';
import CharacterList from './CharacterList';
import Favorites from './Favorites';

const RoutesPages = () => {
  return ( 
    <Routes>
            <Route path= "/episodios/:episodeId/" element = { <Episodio />} />
            <Route path= "/personajes" element = {<CharacterList /> } />
            <Route path= "/episodios" element = { <EpisodeListing />}/>
            <Route path='/favoritos' element = {<Favorites/> }/>
            <Route path='/' element = {"Elije un link del menú"}/>
            <Route path="*" element={"No encontrada"} />
    </Routes>
   );
}
 
export default RoutesPages;