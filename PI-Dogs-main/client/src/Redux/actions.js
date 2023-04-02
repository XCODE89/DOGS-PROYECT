import { GET_ALL_DOGS, FIND_DOGS, ERROR } from "./typeActions";
import axios from "axios"

export const getAllDogs = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/dogs")
                return dispatch({type: GET_ALL_DOGS, payload: response.data})
        } catch (error) {
            return dispatch({type : ERROR, payload : error})
        }
    }
}


export const findedDogs = (name) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/dogs/name?name=${name}`);
            if(typeof response.data === "object") {
                return dispatch({type : FIND_DOGS, payload : response.data})
            } else {
                return dispatch({type : FIND_DOGS, payload : []})
            }
        } catch (error) {
            return dispatch({type : ERROR, payload : error})
        }
        
    }
}