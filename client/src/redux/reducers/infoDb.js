import { GET_INFO, POST_PLAYERS, SET_STATUS_INFO } from '../constants';

const initialState = {
  info:[],  
  infoGame:[],
  stateI: false,
}

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
   case SET_STATUS_INFO:
     return{
       ...state,
       stateI: action.payload,
     }
    default: 
      return state;
  }
}

export default reducerInfo;