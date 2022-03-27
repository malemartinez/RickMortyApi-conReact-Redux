import { ActionTypes } from "./action-types"

export const addFavouriteCharacter = (character) =>{
  
  return {
    type: ActionTypes.ADD_FAVOURITE,
    payload: character,
  }
}

export const addLikeCharacter = (character) =>{
  
  return {
    type: ActionTypes.ADD_LIKE,
    payload: character,
  }
}

export const setCharacters = (characters) =>{
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  }
}

