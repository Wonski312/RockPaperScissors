import { useState, useContext, useEffect } from "react";

import classes from "./ChooseScreen.module.css";
import Button from "../UI/Button";
// import hand from "./images/icon-paper.svg";
// import rock from "./images/icon-rock.svg";
// import scissors from "./images/icon-scissors.svg";
import ButtonContext from "../../store/button-context";

import "../Main/Main.module.css";

const ChooseScreen = (props) => {
	const [housePick, setHousePick] = useState();

	const ButtonCtx = useContext(ButtonContext);
	console.log(ButtonCtx);
	// const buttons = {
	// 	...props.buttonArr
	// }

	const filteredButton = ButtonCtx.items.filter(
		(item) => item.value === props.chosenButton
	);

	console.log(filteredButton);

	// const renderHouseButton = () =>{
	// 	const rndInt = Math.floor(Math.random() * 3)
	// 	console.log(rndInt);
	// 	setHousePick(<Button
	// 		key={ ButtonCtx.items[rndInt].id}
	// 		color={ ButtonCtx.items[rndInt].color}
	// 		src={ ButtonCtx.items[rndInt].src}
	// 		grid={ ButtonCtx.items[rndInt].grid}
	// 		value={ ButtonCtx.items[rndInt].value}
	// 		/>)

	// 			return
	// }
	// setTimeout(renderHouseButton,2000)

	useEffect(() => {
	const waitingForNPC = setTimeout(() => {
			const rndInt = Math.floor(Math.random() * 3);
			console.log(rndInt);
			setHousePick(
				<Button
					key={ButtonCtx.items[rndInt].id}
					color={ButtonCtx.items[rndInt].color}
					src={ButtonCtx.items[rndInt].src}
					grid={ButtonCtx.items[rndInt].grid}
					value={ButtonCtx.items[rndInt].value}
				/>
			);
		}, 2000);

	
		return () => {
			clearTimeout(waitingForNPC);
		};
	}, [housePick, ButtonCtx.items]);

	return (
		<div className={classes.chooseScreen}>
			<div className={classes.option}>
				<div className={classes.circle}>
					<Button
						key={filteredButton[0].id}
						color={filteredButton[0].color}
						src={filteredButton[0].src}
						grid={filteredButton[0].grid}
						value={filteredButton[0].value}
					/>
				</div>
				<p className={classes.text}>You Picked</p>
			</div>
			<div className={classes.option}>
				<div className={classes.circle}>
					{housePick}
					{/* <Button 
					key={ ButtonCtx.items[rndInt].id}
					color={ ButtonCtx.items[rndInt].color}
					src={ ButtonCtx.items[rndInt].src}
					grid={ ButtonCtx.items[rndInt].grid}
					value={ ButtonCtx.items[rndInt].value}
					/> */}
				</div>
				<p className={classes.text}>The House Picked</p>
			</div>
		</div>
	);
};

export default ChooseScreen;
