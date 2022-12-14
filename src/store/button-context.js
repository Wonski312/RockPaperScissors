import React from "react";
import hand from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import classes from "../components/Main/Main.module.css";


const ButtonContext = React.createContext({
   items: [
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
	]
})

export default ButtonContext;