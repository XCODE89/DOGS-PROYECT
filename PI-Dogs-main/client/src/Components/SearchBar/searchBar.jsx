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

    function resetSelects() {
        let selectElements = document.querySelectorAll('select.reset');
        selectElements.forEach((selectElement) => {
            selectElement.selectedIndex = 0;
        });
    }
    

    return (
        <div>
        <input type="search" placeholder="Search by breed" value={input} onChange={handleChange}/>

        <button onClick={() => {
            setInput(""); 
            dispatch(findedDogs(input));
            resetSelects()
            
        }}>TODOS</button>
    </div>
    )
}
export default SearchBar