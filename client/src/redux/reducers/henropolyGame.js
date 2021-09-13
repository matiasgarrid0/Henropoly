import { SET_GAME, SET_TARGET_VALUE, SET_TURNS } from "../constants";

const initialState = {
  status: "free",
  view: {
    scale: 0.6,
    high: 70,
    angle: 0,
  },
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
    default:
      return state;
  }
};

export default henropolyGame;
