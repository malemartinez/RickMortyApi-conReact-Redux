import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavourite } from '../redux/actions/episodeActions';
import { addLike } from '../redux/actions/episodeActions';




const EpisodeCard = ({episode}) => {
  const favorites = useSelector(state => state.allEpisodes.favourites)
  const likes = useSelector(state => state.allEpisodes.likes)
  const dispatch = useDispatch();


  const [like , setLike]= useState(false);
  const [favorite , setFavorite]= useState(false);

  const addFavorite = (episode)=>{
    console.log("le di click")
    dispatch(addFavourite(episode))
    setFavorite(true)
    console.log(favorites)
  }
  const addLikes = (episode)=>{
    dispatch(addLike(episode))
    setLike(true)
    console.log(likes)
  
  }
 
  return ( 
    <div className='col-md-4 mb-2' >
      <div className="card">
        <div className="card-body">
            {
              like ? (<i className="fa-solid fa-heart heartIcon"></i>) : 
              (<i className="fa-regular fa-heart " onClick={ ()=>{ addLikes(episode)}} ></i>)
            }
            {
              favorite? ( <i className="fa-solid fa-bookmark"></i> ) :
              (<i className="fa-regular fa-bookmark" onClick={ ()=>{ addFavorite(episode)  }} ></i>)
            }            
          
          
          
          <h5 className="card-title">{episode.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{episode.air_date}</h6>
          <Link to={`/episodios/${episode.id}`}>ver info</Link>
        </div>
      </div>

    </div>
   );
}
 
export default EpisodeCard;