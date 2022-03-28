import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavourite , DeleteFavourite } from '../redux/actions/episodeActions';
import { addLike , disLike } from '../redux/actions/episodeActions';




const EpisodeCard = ({episode}) => {

  const favorites = useSelector(state => state.allEpisodes.favourites)
  const likes = useSelector(state => state.allEpisodes.likes)

  const dispatch = useDispatch();

  const addFavorite = (episode)=>{
    dispatch(addFavourite(episode))

  }
  const addLikes = (episode)=>{
    dispatch(addLike(episode))
    console.log(likes)
  
  }

  const disLikes = (item)=>{
    dispatch(disLike(item))
  }

  const deleteFavorite = (item)=>{
    dispatch(DeleteFavourite(item))
  }

  console.log(episode)
  console.log(likes.includes(episode))
  console.log(favorites.includes(episode))


  const SetIcon = ()=>{
    return(
      <div className='iconsContainer'>
            {
              likes.includes(episode)?
              (<i className="fa-solid fa-heart heartIcon" onClick={ ()=>{ disLikes(episode) }}></i>): 
              (<i className="fa-regular fa-heart " onClick={ ()=>{ addLikes(episode)}} ></i>)
            }
            {
              favorites.includes(episode)?
              (<i className="fa-solid fa-bookmark  favoriteIcon" onClick={ ()=>{ deleteFavorite(episode) }} ></i> ):
              (<i className="fa-regular fa-bookmark" onClick={ ()=>{ addFavorite(episode)  }} ></i>)
            }            

          </div>
    )
  }
 
  return ( 
    <div className='col-md-4 mb-2' >
      <div className="card shadow-sm p-3 rounded " >
        <div className="card-body">
          <SetIcon />
          <h5 className="card-title">{episode.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{episode.air_date}</h6>
          <Link to={`/episodios/${episode.id}`}>ver info</Link>
        </div>
      </div>

    </div>
   );
}
 
export default EpisodeCard;