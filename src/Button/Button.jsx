import { AppContext } from "../AppContext/AppContextProvider"
import {useContext} from "react"
import style from "./Button.module.css"
function Button({text}){
    const [theme]=useContext(AppContext)
    console.log(theme)
    return <button
    className={`${style.buttonBase} ${theme==="light"?style.buttonLight :style.buttonDark}`}
    >{text}</button>
}
export default Button