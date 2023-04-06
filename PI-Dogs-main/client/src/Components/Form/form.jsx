import { useState, useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import validation from "./validations"
import axios from "axios"
import { getAllTemperaments } from "../../Redux/actions"

import style from "./form.module.css"

const Form = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [])
    const allTemperaments = useSelector(state => state.allTemperaments)
    
    const [userData, setUserData] = useState({
        name : "",
        minHeight : "",
        maxHeight : "",
        minWeight : "",
        maxWeight : "",
        minLife : "",
        maxLife : "",
        temperaments: [],
        image: ""
    })
    
    const [errors, setErrors] = useState({
        name : "",
        height : "",
        weight : "",
        lifeSpan : "",
        temperaments : []
    })

    const handleOnChange = (event) => {
        if (event.target.name === "temperaments") {
            const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
            setUserData({
                ...userData,
                temperaments: selectedOptions
            });
            setErrors (validation({
                ...userData,
                [event.target.name] : event.target.selectedOptions
            }))
        } else {
            setUserData({
            ...userData,
            [event.target.name]: event.target.value
            });
            setErrors (validation({
            ...userData,
            [event.target.name] : event.target.value
            }))
        };
    }

    let lifeSpan = "";
    if (userData.minLife && userData.maxLife) {
        lifeSpan = `${userData.minLife} - ${userData.maxLife}`
    } else {
        lifeSpan = userData.minLife
    }

    const dataPost = {
        name : userData.name,
        image : userData.image,
        height : `${userData.minHeight} - ${userData.maxHeight}`,
        weight : `${userData.minWeight} - ${userData.maxWeight}`,
        temperament : userData.temperaments,
        life_span : lifeSpan
    }

    const allFieldsEmpty = () => {
        return Object.values(errors).every((value) => value === "");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(allFieldsEmpty(userData)) {
            axios.post("http://localhost:3001/dogs",dataPost)
            .then(res=>alert(res))
            .catch(error => error)
        } else {
            alert("completar los datos")
        }
    }

    return (
    <div>
        <h1>esto es el Form</h1>
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" value={userData.name} className={style.input} onChange={handleOnChange}></input>
                {errors.name && <p>{errors.name}</p>}
                </div>
                <div className={style.minMax}>
                    <label>Height :</label>
                        <label htmlFor="minHeight" >min</label>
                        <input type="number" name="minHeight" value={userData.minHeight} className={style.input} onChange={handleOnChange}></input>
                        <label htmlFor="maxHeight">max</label>
                        <input type="number" name="maxHeight" value={userData.maxHeight} className={style.input} onChange={handleOnChange}></input>
                {errors.height && <p>{errors.height}</p>}

                </div>
                <div className={style.minMax}>
                    <label>Weight :</label>
                        <label htmlFor="minWeight">min</label>
                        <input type="number" name="minWeight" value={userData.minWeight} className={style.input} onChange={handleOnChange}></input>
                        <label htmlFor="maxWeight">max</label>
                        <input type="number" name="maxWeight" value={userData.maxWeight} className={style.input} onChange={handleOnChange}></input>
                {errors.weight && <p>{errors.weight}</p>}

                </div>
                <div className={style.minMax}>
                    <label>Life span :</label>
                        <label htmlFor="minLife" placeholder="min" ></label>
                        <input type="number" name="minLife" value={userData.minLife} className={style.input} onChange={handleOnChange}></input>
                        <label htmlFor="maxLife"placeholder="max"></label>
                        <input type="number" name="maxLife" value={userData.maxLife} className={style.input} onChange={handleOnChange}></input> 
                {errors.lifeSpan && <p>{errors.lifeSpan}</p>}   
                </div>
                <div>
                    <label htmlFor="temperaments">Temperament: </label>
                    <select type="text" name="temperaments" onChange={handleOnChange} className={style.input} multiple>
                    {allTemperaments.map((temperament, index)=> {
                        return (
                            <option value={temperament.id} key={index}>{temperament.name}</option>
                        )
                    })
                    }
                    </select>
                {errors.temperaments && <p>{errors.temperaments}</p>}
                </div>
                <div>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id="image" name="image" value={userData.image} onChange={handleOnChange}></input>
                </div>
                <button>CREATE</button>
            </form>
        </div>
    </div>
    )
}
export default Form