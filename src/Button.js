import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { useState } from "react";
function Button(){
    const [text,setText]=useState("a yo");
    const onClick= ()=>setText((text)=>text + "aa")
    console.log(text);
    return (
        <button 
            className={styles.btn}
            onClick={onClick}
        > 
        {text}
        </button>
    )
}

// Button.propTypes={
//     text:PropTypes.string.isRequired,
// }
export default Button;