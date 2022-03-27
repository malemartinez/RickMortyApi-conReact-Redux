import { ActionTypes } from "../actions/action-types";

const initialState = {
  characters: [],
  likes: [],
  favourites: []
};


export const characterReducer = (state = initialState, {type , payload })=>{
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      const nuevosPersonajes = state.characters.concat(payload)
      return {...state , characters:nuevosPersonajes }
       
    default:
      return state

    
  }
}

