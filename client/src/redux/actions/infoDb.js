import axios from "axios";

export const getInfoDb = ( ) => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`/cards`, {
      });
      console.log(response.data)
    } catch (error) {
     console.log(error)
    }
  } 
};

