import axios from "axios";
import { GET_INFO, SET_STATUS_INFO } from "../constants";

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

