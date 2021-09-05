import axios from "axios";

export const getInfoDb = ( ) => {
  return async (dispatch) =>{
    try {
      const response = await axios.get(`http://localhost:3001/cards`, {
      });
      console.log(response.data)
    return dispatch({type: 'GET_INFO', payload:response.data});
    } catch (error) {
     console.log(error)
    }
  } 
};

