import { findedDogs } from "../../Redux/actions"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    
    useEffect(() => {
        dispatch(findedDogs(input))
    }, [input])
    

    return (
        <div>
        <input type="search" placeholder="escribe una raza" value={input} onChange={handleChange}/>

        <button onClick={() => {setInput(""); console.log("boton!!");
        }}>TODOS</button>
    </div>
    )
}
export default SearchBar