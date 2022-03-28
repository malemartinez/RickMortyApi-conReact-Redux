import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favorites = () => {

  const favorites = useSelector(state => state.allEpisodes.favourites)

  return ( 
    <div className='container'>
      <div className='row'>
      {
        favorites.map(item =>{
          return(
            
            <div className='col-md-4 mb-2' >
              <div className="card">
                <div className="card-body">
                  {/* <i class="fa-solid fa-heart" onClick={ ()=>{ disLikes(item) }}></i> */}
                  {/* <i className="fa-regular fa-heart" onClick={ ()=>{ addLikes(item) }} ></i>
                  <i className="fa-regular fa-bookmark" onClick={ ()=>{ addFavorite(item) }} ></i> */}
                  {/* <i class="fa-solid fa-bookmark" onClick={ ()=>{ deleteFavorite(item) }} ></i> */}
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.air_date}</h6>
                  <Link to={`/episodios/${item.id}`}>ver info</Link>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
        
    </div>
  );
}
 
export default Favorites;