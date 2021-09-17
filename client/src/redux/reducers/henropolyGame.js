import { SET_GAME, SET_TARGET_VALUE, SET_TURNS, KICK_PLAYER, SET_GAME_STATUS, SET_GAME_ROLL, BUY_PROPERTY_ACTION, BUY_RAILWAY_ACTION, BUY_SERVICE_ACTION } from "../constants";

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
       case BUY_PROPERTY_ACTION:
         let newTable= state.table 
         console.log( "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", payload)
         newTable[payload.box].owner = state.dataPlayers[payload.newProperty].username //propiedad dentro del payload
        return { 
          ...state,
         table: newTable,
         dataPlayers:{...state.dataPlayers, [payload.newProperty]:{...state.dataPlayers[payload.newProperty], henryCoin: payload.newbalase }}
        };
        // case BUY_SERVICE_ACTION:
        //   let newTableOne= state.table
        //   newTableOne[payload.box].owner = state.dataPlayers[payload.newService].username
        //  return {
        //    ...state,
        //   table: newTableOne,
        //   dataPlayers:{...state.dataPlayers, [payload.newService]:{...state.dataPlayers[payload.newService], henryCoin: payload.newbalase }}
        //  };
        // case BUY_RAILWAY_ACTION:
        //   let newTable2= state.table
        //   newTable2[payload.box].owner = state.dataPlayers[payload.newRailway].username
        //  return { 
        //    ...state,
        //   table: newTable2,
        //   dataPlayers:{...state.dataPlayers, [payload.newRailway]:{...state.dataPlayers[payload.newRailway], henryCoin: payload.newbalase }}
        //  };
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