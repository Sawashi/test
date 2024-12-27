import React from "react";
import "./style.css";
import playerAvatar from "../../../assets/Source Images-Icons/Icons/player_avatar.webp";
import clubAvatar from "../../../assets/Source Images-Icons/Icons/club.webp";
import nationality from "../../../assets/Source Images-Icons/Icons/Spain.svg";
import dob from "../../../assets/Source Images-Icons/Icons/age.svg";
import heightPlayer from "../../../assets/Source Images-Icons/Icons/Height.svg";
import footLogo from "../../../assets/Source Images-Icons/Icons/Foot.svg";
import jerseyNumber from "../../../assets/Source Images-Icons/Icons/Jersey.svg";
import positionLogo from "../../../assets/Source Images-Icons/Icons/Football.svg";
import playerData from "../../../assets/Source Images-Icons/playerInfo.json";
const PlayerInfo = () => {
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
		//get year
		const year = date.getUTCFullYear();

		return day + "/" + month + "/" + year;
	};
	const contractDate = convertDate(
		playerData.data.player.contractUntilTimestamp
	);
	const dateOfBirth = convertDate(playerData.data.player.dateOfBirthTimestamp);
	//calculate age
	const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
	return (
		<div className="cardInfo">
			<div className="parent">
				<div className="child">
					<div className="card text-center">
						<div className="card-header">
							<i className="bi bi-star save_icon"></i>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-3">
									<img
										src={playerAvatar}
										alt="Profile"
										className="rounded-circle profile"
									/>
								</div>
								<div className="col align-items-start">
									<h2 className="name">
										<b>{playerData.data.player.name}</b>
									</h2>
									<div className="logo-info">
										<div className="logo">
											<img src={clubAvatar} alt="Club" />
										</div>
										<div className="info">
											<div>{playerData.data.player.team.name}</div>
											<div className="dimText">
												Contract until {contractDate}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-footer">footer</div>
					</div>
				</div>
				<div className="child row">
					<div className="row">
						<div className="col align-items-start col_border">
							<div className="name dimText">Nationality</div>
							<div className="logo-info">
								<div className="logo">
									<img src={clubAvatar} alt="Nationality" />
								</div>
								<div className="info">
									{playerData.data.player.team.country.name}
								</div>
							</div>
						</div>

						<div className="col align-items-start col_border">
							<div className="name dimText">Date of birth</div>
							<div className="logo-info">
								<div className="logo">
									<img src={dob} alt="Dob" />
								</div>
								<div className="info">
									<div>{dateOfBirth}</div>
									<div className="dimText">{age} years old &nbsp;</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col align-items-start col_border">
							<div className="name dimText">Height</div>
							<div className="logo-info">
								<div className="logo">
									<img src={heightPlayer} alt="Height" />
								</div>
								<div className="info">{playerData.data.player.height} cm</div>
							</div>
						</div>
						<div className="col align-items-start col_border">
							<div className="name dimText">Preferred foot</div>
							<div className="logo-info">
								<div className="logo">
									<img src={footLogo} alt="Foot" />
								</div>
								<div className="info">
									{playerData.data.player?.preferredFoot || "None"}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col align-items-start col_border">
							<div className="name dimText">Jersey number</div>
							<div className="logo-info">
								<div className="logo">
									<img src={jerseyNumber} alt="Number" />
								</div>
								<div className="info">23</div>
							</div>
						</div>
						<div className="col align-items-start col_border">
							<div className="name dimText">Position</div>
							<div className="logo-info">
								<div className="logo">
									<img src={positionLogo} alt="Position" />
								</div>
								<div className="info">{playerData.data.player.position}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerInfo;
