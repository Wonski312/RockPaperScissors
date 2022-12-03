import { useRef,useCallback } from "react";

import classes from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
let score = useRef([]);


// const scoreArr = [];
// scoreArr.push(props.scoreProp);
// console.log(scoreArr);
score.current.push(props.scoreProp);


// useCallback(()=>{
// 	const scoreArr = [];
// scoreArr.push(props.scoreProp);
// console.log(scoreArr);
// score.current = scoreArr;
// },[props])
// score.current = props.scoreProp
	return (
		<header className={`${classes.box}`}>
			<div className={classes.title}>
				<h1>Rock <br/> Paper <br/>Scisors</h1>
			</div>
			<div className={classes.score} >
				<p className={classes.scoreText}>Score</p>
				<p className={classes.scoreNumber}>{score.current}</p>
			</div>
		</header>
	);
};
export default HeaderTitle;
