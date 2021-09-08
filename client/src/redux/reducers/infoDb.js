import { GET_INFO, GET_PLAYER } from '../constants';

const initialState = {
  info:[], 
  players: []
};

const reducerInfo = (state = initialState, action) => {

  switch(action.type) {
    case GET_INFO:
      return {
        ...state,
         info: action.payload
      }
      case GET_PLAYER:
        return {
          ...state,
          players: action.payload
        }
   
    default: 
      return state;
  }
}


export default reducerInfo;