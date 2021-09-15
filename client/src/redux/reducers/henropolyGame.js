import { SET_GAME, SET_TARGET_VALUE, SET_TURNS, KICK_PLAYER} from "../constants";

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
        playerPosition: {
          ...state.playerPosition,
          [payload.player]: {
            ...state.playerPosition[payload.player],
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
            [payload.player]:{...state.dataPlayers[payload.player], 
              status:false
            }
          }
        }
    default:
      return state;
  }
};

export default henropolyGame;
