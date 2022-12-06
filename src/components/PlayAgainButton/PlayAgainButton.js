import { useState, useRef, useEffect} from 'react';
import classes from './PlayAgainButton.module.css';




const PlayAgainButton =(props) =>{

    const [gameResult, setGameResult]=useState(false)
    const playerChoice = props.gameChoices.playerChoice
    const houseChoice = props.gameChoices.houseChoice

    const result = useRef();
   useEffect(() =>{
    if(playerChoice.current === houseChoice.current){
        setGameResult(true) 
       result.current = <p>DRAW</p>
       props.onScore(0);
    }else if (playerChoice.current === 'paper' && houseChoice.current === 'rock'){
        setGameResult(true)
        result.current = <p>YOU WIN</p>
        props.onScore(1)
    }else if (playerChoice.current === 'paper' && houseChoice.current === 'scisors'){
        setGameResult(true)
        result.current = <p>YOU LOSE</p>
        props.onScore(-1)
    }
    else if (playerChoice.current === 'scisors' && houseChoice.current === 'paper'){
        setGameResult(true)
        result.current = <p>YOU WIN</p>
        props.onScore(1)
    }
    else if (playerChoice.current === 'scisors' && houseChoice.current === 'rock'){
        setGameResult(true)
        result.current = <p>YOU LOSE</p>
        props.onScore(-1)
    }
    else if (playerChoice.current === 'rock' && houseChoice.current === 'scisors'){
        setGameResult(true)
        result.current = <p>YOU WIN</p>
        props.onScore(1)
    }
    else if (playerChoice.current === 'rock' && houseChoice.current === 'paper'){
        setGameResult(true)
        result.current = <p>YOU LOSE</p>
        props.onScore(-1)
    }
   },[houseChoice,playerChoice,props])
       
 
    return <div>

{gameResult && <div className={classes.result}>{result.current}</div>}
        <button className={classes.button} onClick={props.onClick}>
Play Again
    </button>
        </div>

}

export default PlayAgainButton;