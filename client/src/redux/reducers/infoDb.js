import { GET_INFO, GET_PLAYER, CHANGE_PLAYER } from "../constants";
import gameActionsBoard from "../../logic.js/logic";

const initialState = {
  info: [],
  players: [],
};

const reducerInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        info: action.payload,
      };
    case GET_PLAYER:
      return {
        ...state,
        players: action.payload,
      };
    case CHANGE_PLAYER:
      let player = action.payload === "se movio"? {
        henrycoin: 1500,
        position: 6,
        properties:'css'
      } : state.players
      return {
        ...state,
        players: player
          
      };
    default:
      return state;
  }
};

export default reducerInfo;
