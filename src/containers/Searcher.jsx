import React from 'react'
import { useDispatch} from 'react-redux'
import { searchEpisode } from '../redux/actions/episodeActions'

const Searcher = () => {

  const dispatch = useDispatch();
  
  const [searchValue, setSearchValue]= React.useState('')

  // funcion que me va a cambiar el valor de un atributo
  const onSearchValueChange = (event)=>{
    console.log(event.target.value)
    dispatch(searchEpisode(event.target.value))
    setSearchValue(event.target.value)
  }

  return ( 
    <div>
      <input 
        value= {searchValue}
        className='searchBox' type = 'text' placeholder='Nombre Episodio' 
        onChange ={onSearchValueChange}
      />
    </div>
   );
}
 
export default Searcher;