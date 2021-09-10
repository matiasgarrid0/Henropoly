import { combineReducers } from "redux";
import auth from './auth'
import reducerInfo from "./infoDb";
import game from "./game";
export default combineReducers({
  auth,
  reducerInfo,
  game,
});