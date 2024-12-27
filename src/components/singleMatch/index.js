import React from "react";
import "./style.css";
import teamMatch from "../../assets/Source Images-Icons/Icons/team.webp";
import backupSymbol from "../../assets/Source Images-Icons/Icons/backup.png";
const SingleMatch = ({
	dateTime,
	matchStatus,
	homeTeam,
	awayTeam,
	homeTeamScore,
	awayTeamScore,
}) => {
	const convertDate = (inputTimestamp) => {
		const timestamp = Number(inputTimestamp);
		if (isNaN(timestamp)) {
			throw new Error(
				"Invalid timestamp: Input must be a valid number or numeric string."
			);
		}
		const date = new Date(timestamp * 1000);
		const day = date.getUTCDate();
		const month = date.getUTCMonth() + 1;

		return day + "/" + month;
	};
	const mapStatus = new Map([
		["live", "Live"],
		["finished", "FT"],
		["not started", "NS"],
		["after extra time", "AET"],
	]);
	const mapTeamAndNation = new Map([
		["UD Las Palmas", "Spain"],
		["Girona FC", "Spain"],
		["Real Sociedad", "Spain"],
		["Real Betis", "Spain"],
		["Cadiz", "Spain"],
		["Deportivo Alavés", "Spain"],
		["Manchester City", "England"],
		["Chelsea", "England"],
		["Celtic FC", "Scotland"],
		["AC Milan", "Italy"],
		["Como", "Italy"],
		["Cagliari", "Italy"],
		["Udinese", "Italy"],
		["Bologna", "Italy"],
		["Atalanta", "Italy"],
		["Hellas Verona", "Italy"],
		["Napoli", "Italy"],
		["Parma", "Italy"],
		["Torino", "Italy"],
		["FC Barcelona", "Spain"],
	]);
	const timeToShow = convertDate(dateTime);
	const homeToShow = mapTeamAndNation.get(homeTeam);
	const awayToShow = mapTeamAndNation.get(awayTeam);
	console.log(matchStatus);
	return (
		<div className="matchInfo">
			<div className="d-flex align-items-center justify-content-between ">
				<div>
					<div className="row">
						<div className="col-4">
							<div>{timeToShow}</div>
							<div>{mapStatus.get(matchStatus)}</div>
						</div>
						<div className="col single_match_info">
							<div className="logo-info">
								<div className="info">
									<div>
										<span>
											<img
												src={teamMatch}
												alt="spain"
												className="rounded small_flag"
											/>
										</span>
										{homeToShow}
									</div>
									<div>
										<span>
											<img
												src={teamMatch}
												alt="spain"
												className="rounded small_flag"
											/>
										</span>
										{awayToShow}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rightSide">
					<div className="row">
						<div className="col single_match_info">
							<div className="logo-info">
								<div className="info_score">
									<div>
										<div
											className={
												"topScore " +
												(homeTeamScore > awayTeamScore
													? "winScore"
													: homeTeamScore < awayTeamScore
													? "topLose"
													: "drawScore")
											}
										>
											{homeTeamScore}
										</div>
										<div
											className={
												"bottomScore " +
												(homeTeamScore > awayTeamScore
													? "bottomLose"
													: homeTeamScore < awayTeamScore
													? "winScore"
													: "drawScore")
											}
										>
											{awayTeamScore}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<img
								src={backupSymbol}
								alt="spain"
								className="rounded small_flag"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleMatch;
