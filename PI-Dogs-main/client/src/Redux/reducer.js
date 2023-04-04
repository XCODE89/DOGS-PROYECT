import { GET_ALL_DOGS, FIND_DOGS, GET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_BY_SOURCE, ORDER_BY_NAME, ORDER_BY_WEIGHT } from "./typeActions"

const initialState = {
   allDogs : [],
   findedDogs : [],
   allTemperaments : []

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
        case GET_ALL_TEMPERAMENTS : return {
            ...state,
            allTemperaments : payload
        }
        case FILTER_BY_TEMPERAMENT : 
            const filteredTemps = state.allDogs.filter((temp) => {
                if (temp.temperament) {
                    if(temp.temperament.includes(payload)) return temp
                } 
            })
            return {
                ...state,
                findedDogs : filteredTemps
            }
        case FILTER_BY_SOURCE : 
            const filteredSource = state.allDogs.filter((source) => source.created.toString() === payload.toString());
            return {
                ...state,
                findedDogs : filteredSource
            }
        case ORDER_BY_NAME :
            let orderedDogs
            if (payload === "ASCENDENT"){
                console.log("alldogs estado", state.allDogs);
                
                orderedDogs = state.allDogs.sort((a, b) => 
                // (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
                (a.name > b.name) ? 1 : -1)

            } else {
                orderedDogs = state.allDogs.sort((a, b) => 
                // (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0)   
                (a.name < b.name) ? 1 : -1)   
            }
            return {
                ...state,
                findedDogs : orderedDogs
            }
        case ORDER_BY_WEIGHT : 
        let orderedWeight;
            if (payload === "ASCENDENT"){
                orderedWeight = state.allDogs.sort((a, b) => {
                    const weightA = parseInt(a.weight.split(" ")[0]);
                    const weightB = parseInt(b.weight.split(" ")[0]);
                    return weightA - weightB;
                }) 
                // (a.weight.split(" ")[0] > b.weight.split(" ")[0]) ? 1 : (a.weight.split(" ")[0] < b.weight.split(" ")[0]) ? -1 : 0)
            } else {
                orderedWeight = state.allDogs.sort((a, b) => {
                    const weightA = parseInt(a.weight.split(" ")[0]);
                    const weightB = parseInt(b.weight.split(" ")[0]);
                    return weightB - weightA;
                })
                // (a.weight.split(" ")[0] < b.weight.split(" ")[0]) ? 1 : (a.weight.split(" ")[0] > b.weight.split(" ")[0]) ? -1 : 0)   
            }console.log("oredenar weight", orderedWeight);
            
            return {
                ...state,
                findedDogs : orderedWeight
            }
        default : return {
            ...state
        }
    }
}

export default reducer;