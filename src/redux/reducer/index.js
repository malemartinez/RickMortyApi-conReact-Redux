import { combineReducers } from "redux";
import { episodeReducer } from "./episodeReducer";
import { characterReducer } from "./characterReducer";

 export const reducers = combineReducers({
  allEpisodes: episodeReducer,
  allCharacters: characterReducer
})