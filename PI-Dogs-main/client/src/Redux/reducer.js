// import { findedDogs } from "./actions"
import { GET_ALL_DOGS, FIND_DOGS, GET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_BY_SOURCE, ORDER_BY_NAME, ORDER_BY_WEIGHT} from "./typeActions"

const initialState = {
    allDogs : [],
    findedDogs : [],
    tempHelper : [],
    sourceHelper : [],
    nameHelper : [],
    weightHelper : [],
    allTemperaments : [],
    change : true
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_DOGS: return {
            ...state,
            allDogs : payload
        }
        case FIND_DOGS : return {
            ...state,
            findedDogs : payload,
            tempHelper : payload,
            sourceHelper : payload,
            nameHelper : payload,
            weightHelper : payload,
            change : !state.change
        }
        case GET_ALL_TEMPERAMENTS : return {
            ...state,
            allTemperaments : payload
        }
        case FILTER_BY_TEMPERAMENT : 
            const filteredTemps = state.tempHelper.filter((temp) => {
                if (temp.temperament) {
                    if(temp.temperament.includes(payload)) return temp
                } 
            })
            return {
                ...state,
                findedDogs : filteredTemps,
                sourceHelper : filteredTemps,
                nameHelper : filteredTemps,
                weightHelper : filteredTemps,
                change : !state.change
            }
        case FILTER_BY_SOURCE : 
            const filteredSource = state.sourceHelper.filter((source) => source.created.toString() === payload.toString());
            return {
                ...state,
                findedDogs : filteredSource,
                nameHelper : filteredSource,
                weight : filteredSource,
                change : !state.change
            }
        case ORDER_BY_NAME :
            console.log('nameHelper', state.nameHelper);
            
            let orderedDogs
            if (payload === "ASCENDENT"){
                orderedDogs = state.nameHelper.sort((a, b) => 
                // (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
                (a.name > b.name) ? 1 : -1)
            } else {
                orderedDogs = state.nameHelper.sort((a, b) => 
                // (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0)   
                (a.name < b.name) ? 1 : -1)   
            }
            console.log("ordenar name", orderedDogs);
            
            return {
                ...state,
                findedDogs : orderedDogs,
                weightHelper : orderedDogs,
                change : !state.change
            }

        case ORDER_BY_WEIGHT : 
        let orderedWeight;
            if (payload === "ASCENDENT"){
                orderedWeight = state.weightHelper.sort((a, b) => {
                    const weightA = parseInt(a.weight.split(" ")[0]);
                    const weightB = parseInt(b.weight.split(" ")[0]);
                    return weightA - weightB;
                }) 
                // (a.weight.split(" ")[0] > b.weight.split(" ")[0]) ? 1 : (a.weight.split(" ")[0] < b.weight.split(" ")[0]) ? -1 : 0)
            } else {
                orderedWeight = state.weightHelper.sort((a, b) => {
                    const weightA = parseInt(a.weight.split(" ")[0]);
                    const weightB = parseInt(b.weight.split(" ")[0]);
                    return weightB - weightA;
                })
                // (a.weight.split(" ")[0] < b.weight.split(" ")[0]) ? 1 : (a.weight.split(" ")[0] > b.weight.split(" ")[0]) ? -1 : 0)   
            }console.log("oredenar weight", orderedWeight);
            
            return {
                ...state,
                findedDogs : orderedWeight,
                change : !state.change
            }

        default : return {
            ...state
        }
    }
}

export default reducer;