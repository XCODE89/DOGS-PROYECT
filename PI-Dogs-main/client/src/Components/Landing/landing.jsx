import { Link, NavLink } from "react-router-dom"
import style from "./landing.module.css"

const Landing = () => {
    return (
    <div className={style.container}>
        <h1>esto es el Landing</h1>
        <NavLink to="/home">
            <button>HOME</button>
        </NavLink>
    </div>
    )
}
export default Landing