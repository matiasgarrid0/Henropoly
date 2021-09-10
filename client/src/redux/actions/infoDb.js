import axios from "axios";
import { GET_INFO, POST_PLAYERS,SET_STATUS_INFO, FILTER_RANDOM } from '../constants'


export const getInfoDb = () => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`/cards`, {
      });
      dispatch(setStatusInfo());
      return dispatch ({type:GET_INFO, payload:response.data})
    } catch (error) {
    }
  }
};
export const setStatusInfo = () =>{
  return {type:SET_STATUS_INFO, payload:true}
}

export function postPlayer(payload) {
  return async function (dispatch) {
    const response = await axios.post("/game/RegisterGame", payload)
    return dispatch({ type: POST_PLAYERS, payload: response.data })
  }
}

export const filterCardsRandom = (type) =>{
  console.log('PAYLOAD SDKJDJDSKJDSJ,', type)
  return {type:FILTER_RANDOM, payload:type }
}
