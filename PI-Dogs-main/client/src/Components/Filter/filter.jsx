import {useDispatch, useSelector} from "react-redux"
import { filterBySource, filterByTemperament, orderByName, orderByWeight } from "../../Redux/actions"
import { getAllTemperaments } from "../../Redux/actions"
import { useEffect } from "react"
import style from "./filter.module.css"

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
        console.log();
        
        dispatch(orderByName(event.target.value))
    }   

    const handleOrderWeight = (event) => {
        dispatch(orderByWeight(event.target.value))
    }

    return (
        <div className={style.container}>  
                <select onChange={handleFilterTemps} defaultValue="TEMPERAMENT" className="reset">
                    <option value="TEMPERAMENT" disabled> TEMPERAMENTS</option>
                    {allTemperaments.map((temperament, index)=> {
                        return (
                            <option value={temperament.name} key={index}>{temperament.name}</option>
                        )
                    })
                    }
                </select>
                <select onChange={handleFilterSource} defaultValue="SOURCE" className="reset">
                    <option value="SOURCE" disabled>SOURCE</option>
                    <option value={false}>API</option>
                    <option value={true}>DATABASE</option>
                </select>
                <select onChange={handleOrderName} defaultValue="ORDER BY NAME" className="reset">
                    <option value="ORDER BY NAME" disabled>ORDER BY NAME</option>
                    <option value="ASCENDENT">ASCENDENT</option>
                    <option value="DESCENDENT">DESCENDENT</option>
                </select>
                <select onChange={handleOrderWeight} defaultValue="ORDER BY WEIGHT" className="reset">
                    <option value="ORDER BY WEIGHT" disabled>ORDER BY WEIGHT</option>
                    <option value="ASCENDENT">ASCENDENT</option>
                    <option value="DESCENDENT">DESCENDENT</option>
                </select>
        </div>
    )
}

export default Filter