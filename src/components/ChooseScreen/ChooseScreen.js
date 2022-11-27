import  {useState, useContext, useEffect} from "react";

import classes from "./ChooseScreen.module.css";
import Button from "../UI/Button";
// import hand from "./images/icon-paper.svg";
// import rock from "./images/icon-rock.svg";
// import scissors from "./images/icon-scissors.svg";
import ButtonContext from "../../store/button-context";
import PlayAgainButton from "../PlayAgainButton/PlayAgainButton";

import "../Main/Main.module.css";

const ChooseScreen = (props) => {
	const [housePick, setHousePick] = useState(null);
	
	const [housePickvalue, setHousePickValue] = useState(null);
	const [playAgain, setPlayAgain]=useState(false);
	
	
	const ButtonCtx = useContext(ButtonContext);
	// const buttons = {
		// 	...props.buttonArr
		// }
		
		const filteredButton = ButtonCtx.items.filter(
			(item) => item.value === props.chosenButton
			);
			// setPlayerPickValue(filteredButton[0].value);
		
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
				if (housePick){
					
					return 
					
				}
				const waitingForNPC = setTimeout(() => {
					
					const rndInt = Math.floor(Math.random() * 3);
							setHousePickValue(ButtonCtx.items[rndInt].value)
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
				
				
				const sendValues = () =>{

				}

				const game = {
					playerChoice: filteredButton[0].value,
					houseChoice: housePickvalue
				}
				
				return (
					<div className={classes.box}>
		
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
		{housePickvalue ? <PlayAgainButton gameChoices={game}/>:''}
		</div>
	);
};

export default ChooseScreen;
