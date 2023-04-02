import { findedDogs } from "../../Redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const dogs = useSelector(store=>store.findedDogs)
    
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
        }
    }
    
    useEffect(() => {
        dispatch(findedDogs(input))
    }, [input])
    

    return (
        <div>
        <input type="search" placeholder="escribe una raza" value={input} onChange={handleChange} onKeyDown={handleKeyDown}/>

        <button onClick={() => {setInput("")}}>TODOS</button>
    </div>
    )
}
export default SearchBar