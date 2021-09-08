import axios from "axios";
import { GET_INFO } from "../constants";

export const getInfoDb = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`/cards`, {
      });
      return dispatch({
        type: GET_INFO,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error)
  }

};

