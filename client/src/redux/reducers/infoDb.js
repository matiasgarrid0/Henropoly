import { GET_INFO, POST_PLAYERS } from '../constants';

const initialState = {
  info:[],  
  infoGame:[]
};

const reducerInfo = (state = initialState, action) => {

  switch(action.type) {
    case GET_INFO:
      return {
        ...state,
         info: action.payload
      }
    case POST_PLAYERS:
      return {
        ...state,
        infoGame: [...state.infoGame, action.payload]
      }
    default: 
      return state;
  }
}

export default reducerInfo;