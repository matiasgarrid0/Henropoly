import { GET_INFO } from '../constants';

const initialState = {
  info:[]
};

const reducerInfo = (state = initialState, action) => {

  switch(action.type) {
    case GET_INFO:
      return {
        ...state,
         info: action.payload
      }
   
    default: 
      return state;
  }
}

export default reducerInfo;