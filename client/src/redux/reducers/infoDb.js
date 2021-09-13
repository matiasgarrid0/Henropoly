import { GET_INFO, POST_PLAYERS, SET_STATUS_INFO, FILTER_LUCKY_RANDOM,FILTER_COMUNAL_RANDOM } from '../constants';

const initialState = {
  info:[],  
  infoGame:[],
  stateI: false,
  luckyCard: [],
  comunalCard:[]
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
    case FILTER_LUCKY_RANDOM: 
     const randomLucky = (arr) =>{
      const number = Math.floor((Math.random() * 12) + 1)
       const luckyCard = arr.filter((e) => e.ID === number)
      return luckyCard
    }
    return { 
    ...state,
     luckyCard: randomLucky(state.info.fortune)
    }
    case FILTER_COMUNAL_RANDOM: 
    const randomComnual = (arr) =>{
     const number = Math.floor((Math.random() * 7) + 1)
      const comunalCard = arr.filter((e) => e.ID === number)
     return comunalCard
   }
   return { 
   ...state,
   comunalCard: randomComnual(state.info.comunal)
   }
    default: 
      return state;
  }
}

export default reducerInfo;