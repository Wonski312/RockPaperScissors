import { useState } from "react";
// import hand from "../../images/icon-paper.svg";
// import rock from "../../images/icon-rock.svg";
// import scissors from "../../images/icon-scissors.svg";
import classes from "./Main.module.css";
import Button from "../UI/Button";
import triangle from '../../images/bg-triangle.svg'
const Main = (props) => {
	 
	// const [value, setValue] = useState();
	// const [icon, setIcon] = useState('');
	// const [color, setColor] = useState('');
	
	// const chosenButton = {
		// 	value: value,
		// 	icon: icon,
		// 	color: color
		// }
		const yourChoiceHandler =(button) =>{
			// setValue(button.value)
			// console.log(button.value);
			// setIcon(button.src)
		// setColor(button.color)
		
		props.onChoice(button.value);
		// console.log(button.value);
		// setChoice(button.value);
		// props.onChoice(button);
	}
	const buttonObj = [...props.buttonArr];
	
	
	return (
		<section className={classes.buttons}>
			{/* <button className='button'>
            <img src={hand} alt='nuifwea'></img>
        </button> */}
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
			{/* <Button>
				<div className={classes.paperBgc}>
                    <div className={classes.buttonInside}>
					<img src={hand}  />
                    </div>
				</div>
			</Button>
			<Button>
				<div className={classes.scisorsBgc}>
                    <div className={classes.buttonInside}>
					<img src={scissors}  />
                    </div>
				</div>
			</Button>
			 */}
			
		</section>
	);
};

export default Main;
