import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisodes } from '../redux/actions/episodeActions';
import { deleteSearchedEpisode } from '../redux/actions/episodeActions';
import EpisodeCard from './episodeCard';
import Searcher from './Searcher';

const EpisodeListing = () => {

  const episodes = useSelector( state => state.allEpisodes.episodes )
  const searchedEpisodes = useSelector( state => state.allEpisodes.searchedEpisodes )
  const dispatch = useDispatch();

  const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/episode')
      const response = await data.json()
      dispatch(setEpisodes(response.results))

      // const respondenext = await fetch(response.info.next)
      // const response2 = await respondenext.json()

      // dispatch(setEpisodes(response2.results))
  }

  useEffect(()=>{
    if(searchedEpisodes.length > 0) dispatch(deleteSearchedEpisode())
    fetchData()
  },[])



  return ( 
    <div className="container">
          
      <div className="row">
        <h5>Episodios</h5>
        <Searcher/>

        { searchedEpisodes.length === 0 ?(
            episodes.map(item => (
            <EpisodeCard key={item.id} episode = {item}  />
              
          ))
        ):(
          searchedEpisodes.map(item => (
            <EpisodeCard key={item.id} episode = {item}/>
              
          ))
        )

          
        }
      
      </div>

    </div>
    
   );
}
 
export default EpisodeListing;
