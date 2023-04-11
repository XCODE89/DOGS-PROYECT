import {useSelector, useDispatch} from "react-redux"
import style from "./home.module.css"
import { getAllDogs } from "../../Redux/actions"
import DogList from "../DogList/dogList"
import { useEffect, useState } from "react"
import Filter from "../Filter/filter"
import SearchBar from "../SearchBar/searchBar"

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

    return (
    <div className={style.general}>
        <h1 className={style.title}>THE DOGS PROYECT</h1>
        <div className={style.searchBarContainer}>
          <SearchBar/>
        </div>
        <div>
        <Filter/>
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
