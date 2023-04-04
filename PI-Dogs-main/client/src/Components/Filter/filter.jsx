import {useDispatch, useSelector} from "react-redux"
import { filterBySource, filterByTemperament, orderByName, orderByWeight } from "../../Redux/actions"
import { getAllTemperaments } from "../../Redux/actions"
import { useEffect } from "react"

const Filter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [])
    const allTemperaments = useSelector(state => state.allTemperaments)

    const handleFilterTemps = (event) => {
        dispatch(filterByTemperament(event.target.value))
    }
    
    const handleFilterSource = (event) => {
        dispatch(filterBySource(event.target.value))
    }

    const handleOrderName = (event) => {
        dispatch(orderByName(event.target.value))
    }

    const handleOrderWeight = (event) => {
        dispatch(orderByWeight(event.target.value))
    }

    return (
        <div>
            <h1>esto es el Filter</h1>
            <div>  
                <select onChange={handleFilterTemps} defaultValue="TEMPERAMENT">
                    <option value="TEMPERAMENT" disabled> TEMPERAMENTS</option>
                    {allTemperaments.map((temperament, index)=> {
                        return (
                            <option value={temperament.name} key={index}>{temperament.name}</option>
                        )
                    })
                    }
                </select>
                <select onChange={handleFilterSource} defaultValue="SOURCE">
                    <option value="SOURCE" disabled>SOURCE</option>
                    <option value={false}>API</option>
                    <option value={true}>DATABASE</option>
                </select>
                <select onChange={handleOrderName} defaultValue="ORDER BY NAME">
                    <option value="ORDER BY NAME" disabled>ORDER BY NAME</option>
                    <option value="ASCENDENT">ASCENDENT</option>
                    <option value="DESCENDENT">DESCENDENT</option>
                </select>
                <select onChange={handleOrderWeight} defaultValue="ORDER BY WEIGHT">
                    <option value="ORDER BY WEIGHT" disabled>ORDER BY WEIGHT</option>
                    <option value="ASCENDENT">ASCENDENT</option>
                    <option value="DESCENDENT">DESCENDENT</option>
                </select>
            </div>
        </div>
    )
}

export default Filter