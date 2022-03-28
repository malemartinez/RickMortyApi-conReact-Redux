import React from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectEpisode } from '../redux/actions/episodeActions';
import Character from './Character';

const Episodio = () => {

  const episodeState = useSelector( state => state.allEpisodes.episode )
  const dispatch = useDispatch();
  const {episodeId} = useParams();

  const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      const response = await data.json()
      console.log(response)
      dispatch(selectEpisode(response))
  }

  useEffect(()=>{
    if(episodeId && episodeId !== "")fetchData()
  },[episodeId])

  console.log(episodeState)

  const {name , air_date , episode ,characters }= episodeState;
 
  return ( 
    <div>

      {
        Object.keys(episodeState).length === 0? (
          <div>...Cargando</div>
        ):
        (
          <div>
            <h3> {name} </h3>
            <hr />
            <p>fecha de Emisión: {air_date}</p>
            <p> Temporada: { 
              episode.split("").slice(0,3)
            }</p>
            <p> Episodio: { 
              episode.split("").slice(3, 6)
            }
            </p>
            <p>Personajes:</p>
            <div className='container'>
              <div className='row'>
                {
                  characters.map((person)=>{
                    return (
                      <div  className='col-md-4 mb-2'>
                        <Character url = {person} />
                      </div>
                    )
                    
                  })
                }

              </div>
            </div>
  
          </div>
        )
      }
    </div>
   );
}
 
export default Episodio;