import { NavLink } from "react-router-dom"
import style from "./navBar.module.css"

const NavBar = () => {
    return (
    <div className={style.container}>
        <div className={style.buttons}>
            <NavLink to="/home" className={style.button}>HOME</NavLink>
            <NavLink to="/form" className={style.button}>CREATE</NavLink>
            <NavLink to="/" className={style.button}>EXIT</NavLink>
        </div>
    </div>
    )
}
export default NavBar