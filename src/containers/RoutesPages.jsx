import React from 'react'
import {
  Routes,
  Route,

} from "react-router-dom";
import EpisodeListing from './EpisodesList';
import Episodio from './Episodio';
import CharacterList from './CharacterList';

const RoutesPages = () => {
  return ( 
    <Routes>
            <Route path= "/episodios/:episodeId/" element = { <Episodio />} />
            <Route path= "/personajes" element = {<CharacterList /> } />
            <Route path= "/episodios" element = { <EpisodeListing />}/>
            <Route path="*" element={"No en contrada"} />
            {/* <Route path= "/" element = { }/> */}
    </Routes>
   );
}
 
export default RoutesPages;