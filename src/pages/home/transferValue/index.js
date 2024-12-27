import React from "react";
import "./style.css";
import chelseaLogo from "../../../assets/Source Images-Icons/Icons/chelsea_logo.png";
import PlayerChart from "../../../components/chart";
import BlueString from "../../../assets/Source Images-Icons/Icons/blue_string.png";
import RedString from "../../../assets/Source Images-Icons/Icons/red_string.png";
const TransferValue = () => {
	return (
		<div className="cardInfo">
			<div className="parent">
				<div className="child">
					<div className="card text-center">
						<div className="card-header">
							<div className="section_header">Transfer value</div>
						</div>
						<div className="card-body">
							<div className="row">
								<PlayerChart></PlayerChart>
								<div className="d-flex align-items-center justify-content-between">
									<div className="dimText">
										<span>
											<img
												src={BlueString}
												alt="chelsea"
												className="string currentValue"
											/>
										</span>
										Current player value
									</div>
									<div className="rightSide dimText">11.6M $</div>
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<div className="dimText">
										<span>
											<img
												src={RedString}
												alt="chelsea"
												className="string currentValue"
											/>
										</span>
										Transfer fee
									</div>
									<div className="rightSide dimText">(Highest) 66M</div>
								</div>
							</div>
						</div>
						<div className="card-footer">footer</div>
					</div>
				</div>
				<div className="child row">
					<div className="d-flex align-items-center justify-content-between twoSide">
						<div>
							<div className="col align-items-start">
								<div className="logo-info">
									<div className="logo">
										<img
											src={chelseaLogo}
											alt="chelsea"
											className="logo_mini"
										/>
									</div>
									<div className="info">
										<div>Chelsea</div>
										<div className="dimText">30 Jun 2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="rightSide greenNeonText">
							<div>-</div>
							<div>End of loan</div>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-between twoSide">
						<div>
							<div className="col align-items-start">
								<div className="logo-info">
									<div className="logo">
										<img
											src={chelseaLogo}
											alt="chelsea"
											className="logo_mini"
										/>
									</div>
									<div className="info">
										<div>Chelsea</div>
										<div className="dimText">30 Jun 2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="rightSide greenNeonText">
							<div>-</div>
							<div>End of loan</div>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-between twoSide">
						<div>
							<div className="col align-items-start">
								<div className="logo-info">
									<div className="logo">
										<img
											src={chelseaLogo}
											alt="chelsea"
											className="logo_mini"
										/>
									</div>
									<div className="info">
										<div>Chelsea</div>
										<div className="dimText">30 Jun 2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="rightSide greenNeonText">
							<div>-</div>
							<div>End of loan</div>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-between twoSide">
						<div>
							<div className="col align-items-start">
								<div className="logo-info">
									<div className="logo">
										<img
											src={chelseaLogo}
											alt="chelsea"
											className="logo_mini"
										/>
									</div>
									<div className="info">
										<div>Chelsea</div>
										<div className="dimText">30 Jun 2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="rightSide greenNeonText">
							<div>-</div>
							<div>End of loan</div>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-between twoSide">
						<div>
							<div className="col align-items-start">
								<div className="logo-info">
									<div className="logo">
										<img
											src={chelseaLogo}
											alt="chelsea"
											className="logo_mini"
										/>
									</div>
									<div className="info">
										<div>Chelsea</div>
										<div className="dimText">30 Jun 2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="rightSide greenNeonText">
							<div>-</div>
							<div>End of loan</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransferValue;
