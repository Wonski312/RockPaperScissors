import classes from "./Button.module.css";
import "../Main/Main.module.css";

const Button = (props) => {
	const buttonClasses = `${classes.buttonBgc} ${props.color}`;
	const btngrid = `${classes.button} ${props.grid}`;
	return (
		<div className={btngrid} onClick={props.onClick} value={props.value}>
			<div className={buttonClasses}>
				<div className={classes.buttonInside}>
					<img src={props.src} />
				</div>
			</div>

			{/* <img src={props.src}></img> */}
		</div>
	);
};

export default Button;
