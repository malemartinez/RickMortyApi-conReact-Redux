import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'


const Character = ({url}) => {


  const [state , setState] = useState();
  const { loading, setLoading} = useState(true)
  // const { error, setError} = useState(false)


  const fetchData = async () => {
    const data = await fetch(`${url}`)
    const response = await data.json()
    console.log(response)
    setState(response)
    // setLoading(false)
    
  }

  useEffect(()=>{
    fetchData()
  },[url])



  return ( 
    <div>

      {
        !state ? (
           <p>...Estamos cargando la info</p>
        ):
        (
          
          <div class="card">
              <img src={state.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{state.name}</h5>
                <p class="card-text"></p>
                {/* <a href= {state.image} class="btn btn-primary">Go somewhere</a> */}
              </div>
          </div>

          
        )
      }
      
    </div>
  );
}
 
export default Character;