import { NavLink } from "react-router-dom"
import style from "./landing.module.css"
import icon1 from "../../Images/icon1.jpg"
import icon2 from "../../Images/icon2.jpg"
import icon7 from "../../Images/icon7.jpg"
import icon5 from "../../Images/icon5.jpg"
import icon6 from "../../Images/icon6.jpg"
import icon8 from "../../Images/icon8.jpg"

const Landing = () => {
    return (
    <div className={style.general}>
        <div className={style.container}>
            <h1 className={style.welcome}>WELCOME TO THE DOGS PROJECT</h1>
            <p className={style.slogan}>Explore dog breeds and find your perfect companion.</p>
            <NavLink to="/home" className={style.home}>
                <button className={style.button}>HOME</button>
            </NavLink>
        </div>
        <div className={style.presentation}>
            <p className={style.text}>"My project is a dynamic and scalable web page developed using JavaScript, Node.js, Express, Postgre, React, and Redux. With the skills and knowledge gained from the Henry Bootcamp, I have created a unique user experience and included important features such as search functionality. I look forward to sharing my project with you."</p>
            <div className={style.iconContainer}>
                <img src={icon1} alt="react" className={style.icon}/>
                <img src={icon7} alt="redux" className={style.icon}/>
                <img src={icon2} alt="nodejs" className={style.icon}/>
                <img src={icon5} alt="expressjs" className={style.icon}/>
                <img src={icon6} alt="postgre" className={style.icon}/>
            </div>
        </div>
        <footer className={style.footer}>
            <p>MORE</p>
            <NavLink to="https://github.com/XCODE89">
                <img src={icon8} alt="github" className={style.contact}/>
            </NavLink>
        </footer>
    </div>
    )
}
export default Landing