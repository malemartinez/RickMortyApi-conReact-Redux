import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCharacters } from '../redux/actions/characterActions';
import CharacterCard from './CharacterCard';


const CharacterList = () => {

  const characters = useSelector( state => state.allCharacters.characters )
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character')
    const response = await data.json()
    dispatch(setCharacters(response.results))
    console.log(response)
    const respondenext = await fetch(response.info.next)
    const response2 = await respondenext.json()
    console.log(response2)
    dispatch(setCharacters(response2.results))
}

useEffect(()=>{
  fetchData()
},[])

  return ( 
    <div className="container">
              
              <div className="row">

                <h3>Personajes</h3>
        
              {
                characters.map(item => (
                  <CharacterCard key={item.id} character = {item}/>
                ))
              }
              
              </div>
        
            </div>
  );
}
 
export default CharacterList;