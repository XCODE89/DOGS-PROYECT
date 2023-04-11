import {NavLink} from "react-router-dom"
import style from "./dogList.module.css"

//? Esta funcion renderiza la estructura de las cards recienbiendo como parametro al array de perros
const DogList = ({allDogs}) => {
    return (
        <div className={style.cardContainer}>
            {allDogs[0]? 
                allDogs.map((dog, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <NavLink to={`/detail/${dog.id}`} className={style.imageContainer}>
                                <img src={dog.image} alt={dog.name} className={style.image}/>
                            </NavLink>
                            <div className={style.infoContainer}>
                                <p className={style.info1}>{dog.name}</p>
                                <p className={style.info1}>{dog.id}</p>
                                <p className={style.info2}>{dog.temperament}</p>
                                <p className={style.info3}>Weight: {dog.weight}</p>
                            </div>
                        </div>
                    )
                })
            : <p>No hay coincidencias</p>
            }
        </div>
    )
}
export default DogList