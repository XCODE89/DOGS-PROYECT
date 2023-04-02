import style from "./dogList.module.css"

//? Esta funcion renderiza la estructura de las cards recienbiendo como parametro al array de perros
const DogList = ({allDogs}) => {
    return (
        <div className={style.cardContainer}>
            {allDogs[0]? 
                allDogs.map((dog, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <img src={dog.image} alt={dog.name} className={style.image}/>
                            <p>{dog.name}</p>
                            <p>{dog.temperament}</p>
                            <p>{dog.weight}</p>
                        </div>
                    )
                })
            : <p>No hay coincidencias</p>
            }
        </div>
    )
}
export default DogList