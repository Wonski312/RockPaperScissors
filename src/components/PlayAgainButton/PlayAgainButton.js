import { useState } from 'react';
import classes from './PlayAgainButton.module.css';




const PlayAgainButton =(props) =>{

    const [gameResult, setGameResult]=useState(false)
const [result, setResult] =useState('')
    const playerChoice = props.gameChoices.playerChoice
    const houseChoice = props.gameChoices.houseChoice

    console.log(playerChoice);
    console.log(houseChoice);

   
    if(playerChoice === houseChoice){
        setGameResult(true) 
        setResult(<p>DRAW</p>) 
    }
    
    // if(playerChoice === houseChoice){
    //     setGameResult(true) 
    //     setResult(<p>DRAW</p>) 
    // }
    
 
    return <div>
{gameResult? result: ''}
        <button className={classes.button} onClick={props.onClick}>
Play Again
    </button>
        </div>

}

export default PlayAgainButton;