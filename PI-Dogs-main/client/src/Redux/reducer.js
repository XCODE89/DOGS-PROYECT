import { GET_ALL_DOGS, FIND_DOGS } from "./typeActions"

const initialState = {
   allDogs : [],
   findedDogs : []

}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_DOGS: return {
            ...state,
            allDogs : payload
        }
        case FIND_DOGS : return {
            ...state,
            findedDogs : payload
        }
        default : return {
            ...state
        }
    }
}

export default reducer;