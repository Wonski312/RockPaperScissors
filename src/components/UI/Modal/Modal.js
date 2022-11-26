import classes from "./Modal.module.css";
import imgSrc from "../../../images/image-rules.svg";
import iconClose from "../../../images/icon-close.svg";

const Modal = (props) => {
	return (
		<div className={classes.modal}>
			<p className={classes.rulesTitle}>RULES</p>
			<img src={imgSrc} alt='rules for game'></img>
			<button className={classes.bgc} onClick={props.onClose}>
				<img src={iconClose} alt='close'></img>
			</button>
		</div>
	);
};

export default Modal;
