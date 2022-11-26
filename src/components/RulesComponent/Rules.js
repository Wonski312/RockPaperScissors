
import classes from './Rules.module.css';




const Rules =(props) =>{
    
    return <button className={classes.button} onClick={props.onClick}>
Rules
    </button>

}

export default Rules;