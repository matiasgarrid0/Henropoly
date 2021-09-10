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
  henryBank:{
    properties:[],
  },
  playerPosition: {
    target1: { box: 0, x: 120, y: 120, henrycoins:1500, cards:[], properties:[], username: null, ID: null},
    target2: { box: 0, x: 40, y: 120, henrycoins:1500, cards:[], properties:[], username: null, ID: null },
    target3: { box: 0, x: 120, y: 40, henrycoins:1500, cards:[], properties:[], username: null, ID: null },
    target4: { box: 0, x: 40, y: 40, henrycoins:1500, cards:[], properties:[], username: null, ID: null},
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
        playerPosition: {
          ...state.playerPosition,
          [payload.player]: {...state.playerPosition[payload.player], [payload.data]: payload.value}
        },
      };
    default:
      return state;
  }
};

export default game;
