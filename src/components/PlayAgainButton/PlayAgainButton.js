import { useState, useRef, useEffect } from 'react';
import classes from './PlayAgainButton.module.css';




const PlayAgainButton =(props) =>{

    const [gameResult, setGameResult]=useState(false)
// const [result, setResult] =useState('')
    const playerChoice = props.gameChoices.playerChoice
    const houseChoice = props.gameChoices.houseChoice

    const result = useRef()

    // console.log(playerChoice);
    // console.log(houseChoice);

   useEffect(() =>{
    if(playerChoice.current === houseChoice.current){
        setGameResult(true) 
       result.current = <p>DRAW</p> 
        // console.log(result);
    }else if (playerChoice.current === 'paper' && houseChoice.current === 'rock'){
        setGameResult(true)
        result.current = <p>YOU WIN</p>

        props.onScore(1)
    }
   },[houseChoice,playerChoice])
       
 
    return <div>

{gameResult && <div className={classes.result}>{result.current}</div>}
        <button className={classes.button} onClick={props.onClick}>
Play Again
    </button>
        </div>

}

export default PlayAgainButton;