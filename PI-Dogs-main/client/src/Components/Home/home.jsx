import {useSelector, useDispatch} from "react-redux"
import style from "./home.module.css"
import { findedDogs, getAllDogs } from "../../Redux/actions"
import DogList from "../DogList/dogList"
import { useEffect, useState } from "react"
import Filter from "../Filter/filter"

//?Esta componente muestra en pantalla todas las cards paginada en 8 elementos por pagina
const Home = () => {
  const change = useSelector(state => state.change)
  const allDogs = useSelector((state) => state.findedDogs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDogs());
  }, [change])
  console.log("alldogs", allDogs);
  const [currentPage, setcurrentPage] = useState(0);
    const perPage = 8;
    const totalPages = Math.ceil(allDogs.length/perPage);
    
    const handlePageClick = (pageNumber) => {
        setcurrentPage(pageNumber)
    }

    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    const currentPageDogs = allDogs.slice(startIndex, endIndex);
    
    // const handleOrder = (event) => {
    //   console.log("input",event.target.value);
      
    //   dispatch(filterBy(event.target.value))
    // }

    return (
    <div>
        <h1>esto es el Home</h1>
        <div>
        <Filter/>
        {/* <input onChange={handleOrder}/> 
          <select>
            <option value="Ascendente">Ascendente</option>
            <option>Descendente</option>
          </select> */}
        </div>
        <div className={style.cardContainer}>
            <DogList allDogs={currentPageDogs}/>
        </div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={index === currentPage ? style.active : ""}
            onClick={() => handlePageClick(index)}
          >
            {index + 1}
          </button>
        ))}
    </div>
    )
}
export default Home
