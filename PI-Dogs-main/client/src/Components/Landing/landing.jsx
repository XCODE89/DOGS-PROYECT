import { Link, NavLink } from "react-router-dom"

const Landing = () => {
    return (
    <div>
        <h1>esto es el Landing</h1>
        <NavLink to="/home">
            <button>HOME</button>
        </NavLink>
    </div>
    )
}
export default Landing