import { combineReducers } from "redux";
import auth from './auth'
import reducerInfo from "./infoDb";
import game from "./game";
import henropolyGame from "./henropolyGame";
import view from "./view";
import henryTrading from "./henryTrading";
export default combineReducers({
  auth,
  reducerInfo,
  game,
  henropolyGame,
  view,
  henryTrading
});