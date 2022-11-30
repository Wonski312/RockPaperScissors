import { useState, useRef } from 'react';
import classes from './PlayAgainButton.module.css';




const PlayAgainButton =(props) =>{

    const [gameResult, setGameResult]=useState(false)
// const [result, setResult] =useState('')
    const playerChoice = props.gameChoices.playerChoice
    const houseChoice = props.gameChoices.houseChoice

    const result = useRef()

    console.log(playerChoice);
    console.log(houseChoice);

   
    //    if(playerChoice.current == houseChoice.current){
    //        setGameResult(true) 
    //       result.current = <p>DRAW</p> 
    //        console.log(result);
    //    }
 
    return <div>

{gameResult&& result}
        <button className={classes.button} onClick={props.onClick}>
Play Again
    </button>
        </div>

}

export default PlayAgainButton;