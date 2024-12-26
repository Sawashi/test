import React from "react";
import "./style.css";
import playerAvatar from "../../../assets/Source Images-Icons/Icons/player_avatar.png";
import clubAvatar from "../../../assets/Source Images-Icons/Icons/Atletico_Madrid.svg";
import nationality from "../../../assets/Source Images-Icons/Icons/Spain.svg";
import dob from "../../../assets/Source Images-Icons/Icons/age.svg";
import heightPlayer from "../../../assets/Source Images-Icons/Icons/Height.svg";
import footLogo from "../../../assets/Source Images-Icons/Icons/Foot.svg";
import jerseyNumber from "../../../assets/Source Images-Icons/Icons/Jersey.svg";
import positionLogo from "../../../assets/Source Images-Icons/Icons/Football.svg";
const PlayerInfo = () => {
	return (
		<div className="cardInfo">
			<div className="parent">
				<div className="child">
					<div class="card text-center">
						<div class="card-header">
							<i class="bi bi-star"></i>
						</div>
						<div class="card-body">
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
										<b>AIvaro Morata</b>
									</h2>
									<div className="logo-info">
										<div className="logo">
											<img src={clubAvatar} alt="Club" />
										</div>
										<div className="info">
											<div>Atletico Madrid</div>
											<div className="dimText">Contract until 30 Jun 2026</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-footer">footer</div>
					</div>
				</div>
				<div className="child row">
					<div className="row">
						<div className="col align-items-start col_border">
							<div className="name dimText">Nationality</div>
							<div className="logo-info">
								<div className="logo">
									<img src={nationality} alt="Nationality" />
								</div>
								<div className="info">SPAIN</div>
							</div>
						</div>

						<div className="col align-items-start col_border">
							<div className="name dimText">Date of birth</div>
							<div className="logo-info">
								<div className="logo">
									<img src={dob} alt="Dob" />
								</div>
								<div className="info">
									<div>24 OCT 1996</div>
									<div className="dimText">27 years old &nbsp;</div>
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
								<div className="info">189 cm</div>
							</div>
						</div>
						<div className="col align-items-start col_border">
							<div className="name dimText">Preferred foot</div>
							<div className="logo-info">
								<div className="logo">
									<img src={footLogo} alt="Foot" />
								</div>
								<div className="info">Right</div>
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
								<div className="info">19</div>
							</div>
						</div>
						<div className="col align-items-start col_border">
							<div className="name dimText">Position</div>
							<div className="logo-info">
								<div className="logo">
									<img src={positionLogo} alt="Position" />
								</div>
								<div className="info">FW</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerInfo;
