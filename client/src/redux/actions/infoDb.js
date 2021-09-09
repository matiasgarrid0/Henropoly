import axios from "axios";
import { GET_INFO } from "../constants";

export const getInfoDb = () => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`/cards`, {
      });
      console.log(response.data)
      return dispatch ({type:GET_INFO, payload:response.data})
    } catch (error) {
     console.log(error)
    }
  } 
};

