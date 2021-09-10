import { GET_INFO, SET_STATUS_INFO } from '../constants';

const initialState = {
  info:[],
  stateI: false,
};

const reducerInfo = (state = initialState, action) => {

  switch(action.type) {
    case GET_INFO:
      return {
        ...state,
         info: action.payload
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