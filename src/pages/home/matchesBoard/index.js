import React from "react";
import "./style.css";
import SingleMatch from "../../../components/singleMatch";
import matchData from "../../../assets/Source Images-Icons/matchList.json";
const MatchesBoard = () => {
	const matchDetails = {
		dateTime: "1714219200",
		matchStatus: "finished",
		homeTeam: "UD Las Palmas",
		awayTeam: "Girona FC",
		homeTeamScore: 1,
		awayTeamScore: 2,
	};
	const convertedMatchDetails = JSON.stringify(matchData.data.events);
	const matchesToShow = JSON.parse(convertedMatchDetails);
	console.log(matchesToShow);
	return (
		<div className="cardInfo">
			<div className="section_header matches_header">Matches</div>
			{/* <SingleMatch
				dateTime={matchDetails.dateTime}
				matchStatus={matchDetails.matchStatus}
				homeTeam={matchDetails.homeTeam}
				awayTeam={matchDetails.awayTeam}
				homeTeamScore={matchDetails.homeTeamScore}
				awayTeamScore={matchDetails.awayTeamScore}
				balancer={matchDetails.balancer}
			/> */}
			<div>
				{matchesToShow.map((match, index) => (
					<SingleMatch
						key={match.id} // Use a unique key for each component, e.g., match.id
						dateTime={match.startTimestamp}
						matchStatus={match.status.type}
						homeTeam={match.homeTeam.name}
						awayTeam={match.awayTeam.name}
						homeTeamScore={match.homeScore.current}
						awayTeamScore={match.awayScore.current}
					/>
				))}
			</div>
		</div>
	);
};

export default MatchesBoard;
