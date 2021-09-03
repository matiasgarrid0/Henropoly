import { combineReducers } from "redux";
import auth from './auth'
import reducerInfo from "./infoDb";

export default combineReducers({
  auth,
  reducerInfo
});