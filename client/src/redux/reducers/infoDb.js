import { GET_INFO, POST_PLAYERS, SET_STATUS_INFO, FILTER_RANDOM } from '../constants';

const initialState = {
  info:[],  
  infoGame:[],
  stateI: false,
  cardFilter: []
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
    case FILTER_RANDOM: 
     const randomLucky = (arr) =>{
      const number = Math.floor((Math.random() * 12) + 1)
       const luckyCard = arr.filter((e) => e.ID === number)
      console.log('luckyCard-infoDb',luckyCard)
      return luckyCard
    }
    return { 
    ...state,
     cardFilter: action.payload =='Suerte' ? randomLucky(state.info.fortune): randomLucky(state.info.comunal)
    }
    default: 
      return state;
  }
}

export default reducerInfo;