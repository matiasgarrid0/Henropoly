import { SET_GAME, SET_TARGET_VALUE, SET_TURNS, KICK_PLAYER, SET_GAME_STATUS, SET_GAME_ROLL} from "../constants";

const initialState = {
  status: "free",
  host: null,
  order: [],
  actualTurn: null,
  dataPlayers: {},
};
const henropolyGame = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GAME:
      return payload;
    case SET_TARGET_VALUE:
      return {
        ...state,
        dataPlayers: {
          ...state.dataPlayers,
          [payload.player]: {
            ...state.dataPlayers[payload.player],
            [payload.data]: payload.value,
          },
        },
      };
      case SET_TURNS:
      return {
        ...state,
        order: payload.order ,actualTurn: payload.actualTurn
      };
      case KICK_PLAYER:
        return {
          ...state,
          dataPlayers: {
            ...state.dataPlayers,
            [payload]: {
              ...state.dataPlayers[payload],
              [payload]: false,
            },
          },
        };
      case SET_GAME_STATUS:
       return { 
         ...state,
        status:payload   
       };
       case SET_GAME_ROLL: {
        return { 
          ...state,
         dataPlayers:{
           ...state.dataPlayers,
         [payload.target]:{...state.dataPlayers[payload.target], box: payload.move}}
        } 
      }
    default:
      return state;
  }
};

export default henropolyGame;
