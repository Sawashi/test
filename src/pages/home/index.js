import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import PlayerInfo from "./playerInfo";
import TransferValue from "./transferValue";
import MatchesBoard from "./matchesBoard";

export const Home = () => {
	return (
		<div className="body_content">
			<PlayerInfo></PlayerInfo>
			<TransferValue></TransferValue>
			<MatchesBoard></MatchesBoard>
		</div>
	);
};
