import  {useState, useContext, useEffect, useRef} from "react";

import classes from "./ChooseScreen.module.css";
import Button from "../UI/Button";
import ButtonContext from "../../store/button-context";
import PlayAgainButton from "../PlayAgainButton/PlayAgainButton";

import "../Main/Main.module.css";

const ChooseScreen = (props) => {
	const [housePick, setHousePick] = useState(null);
	const housePickvalue = useRef(null);
	const ButtonCtx = useContext(ButtonContext);
		
		const filteredButton = ButtonCtx.items.filter(
			(item) => item.value === props.chosenButton
			);
			const playerChoice = useRef(filteredButton[0].value)
			useEffect(() => {
				if (housePick){
					return 	
				}
				const waitingForNPC = setTimeout(() => {
					
					const rndInt = Math.floor(Math.random() * 3);
							housePickvalue.current = ButtonCtx.items[rndInt].value
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
			

				const game = {
					playerChoice: playerChoice,
					houseChoice: housePickvalue
				}
				
				const gameResetHandler = () =>{
					setHousePick(null);
					props.onReset(null)
				}
const Addscore=(score)=>{
	props.onSetScore(score);
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
				</div>
				<p className={classes.text}>The House Picked</p>
			</div>
			
		</div>
		{housePick && <PlayAgainButton gameChoices={game} onClick={gameResetHandler} onScore={Addscore}/>}
		</div>
	);
};

export default ChooseScreen;
