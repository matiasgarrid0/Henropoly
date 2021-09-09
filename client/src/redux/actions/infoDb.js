import axios from "axios";
import { GET_INFO, POST_PLAYERS,SET_STATUS_INFO } from '../constants'


export const getInfoDb = () => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`/cards`, {
      });
      dispatch(setStatusInfo());
      return dispatch ({type:GET_INFO, payload:response.data})
    } catch (error) {
      console.log(error)
    }
  }
};
export const setStatusInfo = () =>{
  return {type:SET_STATUS_INFO, payload:true}
}

export function postPlayer(payload) {
  return async function (dispatch) {
    const response = await axios.post("/game/RegisterGame", payload)
    console.log(response.data)
    return dispatch({ type: POST_PLAYERS, payload: response.data })
  }
}


