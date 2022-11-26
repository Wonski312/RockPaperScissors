import classes from "./ChooseScreen.module.css";
import Button from "../UI/Button";

const ChooseScreen = () => {
	return (
		<div className={classes.chooseScreen}>
			<div className={classes.option}>
				<div className={classes.circle}></div>
				<p className={classes.text}></p>
			</div>
			<div className={classes.option}>
				<div className={classes.circle}></div>
				<p className={classes.text}>The House Picked</p>
			</div>
		</div>
	);
};

export default ChooseScreen;
