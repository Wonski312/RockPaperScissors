
import classes from "./Main.module.css";
import Button from "../UI/Button";
import triangle from '../../images/bg-triangle.svg'
const Main = (props) => {
		const yourChoiceHandler =(button) =>{
		props.onChoice(button.value);
	}
	const buttonObj = [...props.buttonArr];
	
	
	return (
		<section className={classes.buttons}>
<img src={triangle} className={classes.triangle} alt='triangle'></img>

			{buttonObj.map((button) => {
				

				return (
					<Button
					key={button.id}
					color={button.color}
					src={button.src}
					grid={button.grid}
					value={button.value}
					onClick={yourChoiceHandler.bind(null, button)}></Button>
					);
				})}
			
		</section>
	);
};

export default Main;
