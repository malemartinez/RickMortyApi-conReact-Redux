import { ActionTypes } from "./action-types"

export const addFavourite = (episode) =>{
  
  return {
    type: ActionTypes.ADD_FAVOURITE,
    payload: episode,
  }
}
export const DeleteFavourite = (episode) =>{
  
  return {
    type: ActionTypes.DELETE_FAVOURITE,
    payload: episode,
  }
}

export const addLike = (episode) =>{
  
  return {
    type: ActionTypes.ADD_LIKE,
    payload: episode,
  }
}
export const disLike = (episode) =>{
  
  return {
    type: ActionTypes.DELETE_LIKE,
    payload: episode,
  }
}

export const setEpisodes = (episodes) =>{
  return {
    type: ActionTypes.SET_EPISODES,
    payload: episodes,
  }
}

export const selectEpisode = (episode)=>{
  return {
    type: ActionTypes.SELECT_EPISODE,
    payload: episode,
  }
}

export const searchEpisode = (ValueInput)=>{
  return {
    type: ActionTypes.SEARCH_EPISODE,
    payload: ValueInput,
  }
}

export const deleteSearchedEpisode = ()=>{
  return {
    type: ActionTypes.DELETE_SEARCHEDLIST,
  }
}

