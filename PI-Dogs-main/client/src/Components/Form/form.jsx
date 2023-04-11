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
    <div className={style.general}>
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.itemContainer}>
                    <div className={style.info}>
                        <label htmlFor="name" className={style.label}>Name :</label>
                        <div className={style.inputContainer}>
                            <input type="text" name="name" value={userData.name} className={style.input} onChange={handleOnChange}></input>
                        </div>
                    </div>
                    <div className={style.errorContainer}>
                        {errors.name && <p className={style.error}>{errors.name}</p>}
                    </div>
                </div>
                <div className={style.itemContainer}>
                    <div className={style.info}>
                        <label className={style.label}>Height :</label>
                        <div className={style.inputContainer}>
                            <label htmlFor="minHeight" ></label>
                            <input type="number" name="minHeight" value={userData.minHeight} className={style.minMax} onChange={handleOnChange} placeholder="Min."></input>
                            <label htmlFor="maxHeight"></label>
                            <input type="number" name="maxHeight" value={userData.maxHeight} className={style.minMax} onChange={handleOnChange} placeholder="Max."></input>
                        </div>
                    </div>
                    <div className={style.errorContainer}>
                        {errors.height && <p className={style.error}>{errors.height}</p>}
                    </div>
                </div>
                <div className={style.itemContainer}>
                    <div className={style.info}>
                        <label className={style.label}>Weight :</label>
                        <div className={style.inputContainer}>
                            <label htmlFor="minWeight"></label>
                            <input type="number" name="minWeight" value={userData.minWeight} className={style.minMax} onChange={handleOnChange} placeholder="Min."></input>
                            <label htmlFor="maxWeight"></label>
                            <input type="number" name="maxWeight" value={userData.maxWeight} className={style.minMax} onChange={handleOnChange} placeholder="Max."></input>
                        </div>
                    </div>
                    <div className={style.errorContainer}>
                        {errors.weight && <p className={style.error}>{errors.weight}</p>}
                    </div>
                </div>
                <div className={style.itemContainer}>
                    <div className={style.info}>
                        <label className={style.label}>Life span :</label>
                        <div className={style.inputContainer}>
                            <label htmlFor="minLife" ></label>
                            <input type="number" name="minLife" value={userData.minLife} className={style.minMax} onChange={handleOnChange} placeholder="Min."></input>
                            <label htmlFor="maxLife"placeholder="max"></label>
                            <input type="number" name="maxLife" value={userData.maxLife} className={style.minMax} onChange={handleOnChange}  placeholder="Max."></input> 
                        </div>
                    </div>
                    <div className={style.errorContainer}>
                        {errors.lifeSpan && <p className={style.error}>{errors.lifeSpan}</p>}
                    </div>
                </div>
                <div className={style.itemContainer}>
                    <div className={style.info}>
                        <label htmlFor="temperaments" className={style.label}>Temperament: </label>
                        <select type="text" name="temperaments" onChange={handleOnChange} className={`${style.select} ${style.inputContainer}`} multiple>
                            <option value="temperaments">Select one or more</option>
                        {allTemperaments.map((temperament, index)=> {
                            return (
                                <option value={temperament.id} key={index}>{temperament.name}</option>
                            )
                        })
                        }
                        </select>
                    </div>
                    <div className={style.errorContainer}>
                        {errors.temperaments && <p className={style.error}>{errors.temperaments}</p>}
                    </div>
                </div>
                <div className={style.itemContainer}>
                    <div className={style.info}>
                        <label htmlFor="image" className={style.label}>Image: </label>
                        <div className={style.inputContainer}>
                            <input type="text" id="image" name="image" value={userData.image} onChange={handleOnChange} className={style.input}></input>
                        </div>
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button>CREATE</button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Form