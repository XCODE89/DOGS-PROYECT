import axios from "axios"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css"

const Detail = () => {
    const [dog, setDog] = useState({});
    const {idRaza} = useParams();
    console.log("idRaza", idRaza);
    
    const data = async () => {
        const dogId = await axios.get(`http://localhost:3001/dogs/${idRaza}`)
        console.log("dogIdData", dogId.data);
            if (dogId.data.name) {
                setDog(dogId.data);
            } else {
                window.alert("There are no dogs with that ID.");
            }
        }
        console.log("dog", dog);
        
    useEffect(() => {
            try {
                data()
            } catch (error) {
                window.alert("There are no dogs with that ID.");
            }
        return setDog({});
    }, [idRaza]);
    
    return (
    <div className={style.general}>
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={dog.image} className={style.image}></img>
            </div>
            <div className={style.infoContainer}>
                    <p className={style.info}>Name: {dog.name}</p>
                    <p className={style.info}>Height: {dog.height}</p>
                    <p className={style.info}>Weight: {dog.weight}</p>
                    <p className={style.info}>Life span: {dog.life_span}</p>
                <div className={style.temperaments}>Temperaments:<br></br>
                    {dog.temperament?.map(temp => {
                        return (<span className={style.temp}>{temp}</span>)
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}
export default Detail