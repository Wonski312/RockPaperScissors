import { useState, useRef, useEffect} from 'react';
import classes from './PlayAgainButton.module.css';




const PlayAgainButton =(props) =>{

    const [gameResult, setGameResult]=useState(false)
// const [result, setResult] =useState('')
    const playerChoice = props.gameChoices.playerChoice
    const houseChoice = props.gameChoices.houseChoice

    const result = useRef();

    // const scoredArr = [];

// const [scored,setScored] = useState([])
    // console.log(playerChoice);
    // console.log(houseChoice);
    // console.log(scoredArr);
   useEffect(() =>{
    if(playerChoice.current === houseChoice.current){
        setGameResult(true) 
       result.current = <p>DRAW</p>
    //    scoredArr.push(0) 
       props.onScore(0)
    }else if (playerChoice.current === 'paper' && houseChoice.current === 'rock'){
        setGameResult(true)
        result.current = <p>YOU WIN</p>
        // scoredArr.push(1) 

        props.onScore(1)
    }else if (playerChoice.current === 'paper' && houseChoice.current === 'scisors'){
        setGameResult(true)
        result.current = <p>YOU LOSE</p>

        // scoredArr.push(-1)
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