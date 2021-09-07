import axios from "axios";
import { GET_INFO, GET_PLAYER } from '../constants'

export const getInfoDb = ( ) => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`http://localhost:3001/cards`, {
      });
      return dispatch({type: GET_INFO, payload:response.data});
    } catch (error) {
     console.log(error)
    }
  } 
};

export const getPlayerDb = () => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`http://localhost:3001/players`, {
      });
      console.log('player-actions',response.data.player)
      return dispatch({type: GET_PLAYER, payload:response.data.player});
    } catch (error) {
     console.log(error)
    }
  } 
};


 export const postPlayer = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3001/players`, data)
      return response;
    } catch (error) {
     console.log(error)
    }
  } 
};

