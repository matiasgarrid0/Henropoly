import { combineReducers } from "redux";
import reducer1 from "./reducer";
import reducerUser from "./reducerUser";


const rootReducer = combineReducers(reducer1, reducerUser);

export default rootReducer;