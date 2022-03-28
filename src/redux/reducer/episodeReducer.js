import { ActionTypes } from "../actions/action-types";

const initialState = {
  episodes: [],
  searchedEpisodes: [],
  episode: [],
  likes: [],
  favourites: [],

};


export const episodeReducer = (state = initialState, {type , payload })=>{

  switch (type) {

    case ActionTypes.SET_EPISODES:
      if(state.episodes.length !== 0){
        return {...state}
      }
      const nuevosEpisodios = state.episodes.concat(payload)
      return {...state , episodes:nuevosEpisodios}

    case ActionTypes.SELECT_EPISODE:
      state.episode = payload
      return { ...state }

    case ActionTypes.ADD_FAVOURITE:
      return { ...state , favourites: [...state.favourites, payload] }

    case ActionTypes.DELETE_FAVOURITE:
        const favoritosFiltrado = state.favourites
        .filter((episode)=> episode.id !== payload.id)
      return { ...state , favourites: favoritosFiltrado}

    case ActionTypes.ADD_LIKE:
      return { ...state , likes: [...state.likes, payload] }

    case ActionTypes.DELETE_LIKE:
      const LikesFiltrado = state.likes
      .filter((episode)=> episode.id !== payload.id)
    return { ...state , likes: LikesFiltrado}
    
    case ActionTypes.SEARCH_EPISODE:

      if ( !payload.length >= 1){
        return {...state , searchedEpisodes:state.episodes}
      }
      else {
        state.searchedEpisodes = state.episodes.filter( (episode) =>{
          // primero vamos a normalizar los textos. Ponemos todo en miniscula
          const nameText = episode.name.toLowerCase();
          const searchText = payload.toLowerCase();
          // retornamos solo los que cumplen con la condicion
          return nameText.includes(searchText)
        } )
      }
      return {...state}
    
      case ActionTypes.DELETE_SEARCHEDLIST:
        return {...state, searchedEpisodes: []}

    default:
      return state

    
  }
}