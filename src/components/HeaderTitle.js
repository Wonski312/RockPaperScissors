import { useRef } from "react";

import classes from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
let score = useRef(0);
score.current = score.current +  props.scoreProp;
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
