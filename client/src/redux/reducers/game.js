import {
  SET_STATUS_TABLE,
  SET_TABLE_GAME,
  SET_DATA_DEFAULT,
  SET_DATA_TARGET,
} from "../constants";

const initialState = {
  statusTable: "loading",
  tableGame: null,
  view: {
    scale: 0.6,
    high: 70,
    angle: 0,
  },
  playerPosition: {
    target1: 1,
    target2: 1,
    target3: 1,
    target4: 1,
  },
};

const game = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_STATUS_TABLE:
      return {
        ...state,
        statusTable: payload,
      };
    case SET_TABLE_GAME:
      return {
        ...state,
        tableGame: payload,
      };
    case SET_DATA_DEFAULT:
      return {
        ...state,
        view: { ...state.view, [payload.type]: payload.value },
      };
    case SET_DATA_TARGET:
      return {
        ...state,
        playerPosition: { ...state.playerPosition, [payload.player]: payload.value },
      };
    default:
      return state;
  }
};

export default game;
