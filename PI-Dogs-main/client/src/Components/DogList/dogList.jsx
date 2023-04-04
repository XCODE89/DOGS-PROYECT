import style from "./dogList.module.css"

//? Esta funcion renderiza la estructura de las cards recienbiendo como parametro al array de perros
const DogList = ({allDogs}) => {
    return (
        <div className={style.cardContainer}>
            {allDogs[0]? 
                allDogs.map((dog, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <div className={style.imageContainer}>
                                <img src={dog.image} alt={dog.name} className={style.image}/>
                            </div>
                            <div className={style.infoContainer}>
                                <p className={style.info}>{dog.name}</p>
                                <p className={style.info}>{dog.temperament}</p>
                                <p className={style.info}>{dog.weight}</p>
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