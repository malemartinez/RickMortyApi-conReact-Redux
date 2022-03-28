import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { disLike , DeleteFavourite , addLike } from '../redux/actions/episodeActions';

const Favorites = () => {
  const favorites = useSelector(state => state.allEpisodes.favourites)
  const likes = useSelector(state => state.allEpisodes.likes)

  useEffect(()=>{

    MapeoFavoritos()

  }, [favorites])

  const dispatch = useDispatch();

  const disLikes = (item)=>{
    dispatch(disLike(item))
  }
  const deleteFavorite = (item)=>{
    dispatch(DeleteFavourite(item))
  }

  const addLikes = (episode)=>{
    dispatch(addLike(episode))
  
  }

  const MapeoFavoritos = ()=>{
    return(
      favorites.map(item =>{
        return(
          
          <div className='col-md-4 mb-2' key={item.id} >
            <div className="card shadow-sm p-3 rounded">
              <div className="card-body">
                <div className='iconsContainer'>

                  {
                    likes.includes(item)?(
                      <i className="fa-solid fa-heart heartIcon" onClick={ ()=>{ disLikes(item) }}></i>
                    ):(<i className="fa-regular fa-heart " onClick={ ()=>{ addLikes(item)}} ></i>)
                  }

                  <i class="fa-solid fa-bookmark favoriteIcon" onClick={ ()=>{ deleteFavorite(item) }} ></i>

                </div>
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.air_date}</h6>
                <Link to={`/episodios/${item.id}`}>ver info</Link>
              </div>
            </div>
          </div>
        )
      })
    )
        
  }

  return ( 
    <div className='container'>
      <div className='row'>
        <MapeoFavoritos />
      </div>
        
    </div>
  );
}
 
export default Favorites;