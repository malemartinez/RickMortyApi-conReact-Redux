import React from 'react';

const CharacterCard = ({character}) => {
  return ( 
    <div className='col-md-4 mb-2' >
      <div className="card">
      <img src={character.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          {/* <i class="fa-solid fa-heart"></i> */}
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-bookmark"></i>
          {/* <i class="fa-solid fa-bookmark"></i> */}
          <h5 className="card-title">{character.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{character.gender}</h6>
          
        </div>
      </div>

      
    </div>
   );
}
 
export default CharacterCard;