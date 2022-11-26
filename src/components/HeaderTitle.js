import classes from "./HeaderTitle.module.css";

const HeaderTitle = () => {
	return (
		<header className={`${classes.box}`}>
			<div className={classes.title}>
				<h1>Rock <br/> Paper <br/>Scisors</h1>
			</div>
			<div className={classes.score} >
				<p className={classes.scoreText}>Score</p>
				<p className={classes.scoreNumber}>12</p>
			</div>
		</header>
	);
};
export default HeaderTitle;
