import React, { useState } from "react";
import hand from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import HeaderTitle from "./components/HeaderTitle";
import Main from "./components/Main/Main";
import Rules from "./components/RulesComponent/Rules";
import "./App.css";
import Modal from "./components/UI/Modal/Modal";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import classes from "./components/Main/Main.module.css";

function App(props) {
	const buttonObj = [
		{
			id: "1",
			color: classes.paperBgc,
			src: hand,
			grid: "item1",
			value: "paper",
		},
		{
			id: "2",
			color: classes.scisorsBgc,
			src: scissors,
			grid: "item2",
			value: "scisors",
		},
		{
			id: "3",
			color: classes.rockBgc,
			src: rock,
			grid: "item3",
			value: "rock",
		},
	];

	const [modalState, setModalState] = useState(false);
	const [showGamePage, setShowGamePage] = useState(false);
	const [choice, setChoice] = useState(null);

	const choiceHandler = (item) => {
		
		setChoice(item)
		setShowGamePage(true);
	};

	const hideModal = () => {
		setModalState(false);
		console.log("click");
	};

	const showModal = () => {
		setModalState(true);
	};

	return (
		<div className='wrapper'>
			<header className='header'>
				<HeaderTitle />
			</header>
			<section className='mainSection'>
				{!showGamePage && <Main buttonArr={buttonObj} onChoice={choiceHandler} />}
				{showGamePage && <ChooseScreen buttonArr={buttonObj} chosenButton={choice}/>}
				{modalState && <Modal onClose={hideModal}></Modal>}
			</section>
			<section className='footer'>
				<Rules onClick={showModal} />
			</section>
		</div>
	);
}

export default App;
