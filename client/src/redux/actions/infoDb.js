import axios from "axios";
import { GET_INFO, GET_PLAYER, CHANGE_PLAYER } from '../constants'

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
      console.log('player-actions jdfjkdfjkfdkjfdhjdfkhdfhhfdkhfdhkfd',response.data)
      return dispatch({type: GET_PLAYER, payload:response.data});
    } catch (error) {
     console.log(error)
    }
  } 
};


 export const changePlayer = (data) => {
   console.log(data)
 return {type: CHANGE_PLAYER, payload:data}

};

