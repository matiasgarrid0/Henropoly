import { combineReducers } from "redux";
import auth from './auth'
import reducerInfo from "./infoDb";
import game from "./game";
import socketIO from "./socket.io";

export default combineReducers({
  auth,
  reducerInfo,
  game,
  socketIO
});