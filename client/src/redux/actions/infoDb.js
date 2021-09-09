import axios from "axios";
import { GET_INFO, POST_PLAYERS } from '../constants'

export const getInfoDb = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/cards`, {
      });
      return dispatch({ type: GET_INFO, payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }
};

export function postPlayer(payload) {
  return async function (dispatch) {
    const response = await axios.post("/game/RegisterGame", payload)
    console.log(response.data)
    return dispatch({ type: POST_PLAYERS, payload: response.data })
  }
}


