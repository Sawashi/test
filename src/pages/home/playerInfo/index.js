import React from "react";
import "./style.css";

const PlayerInfo = () => {
	return (
		<div className="cardInfo">
			<div className="parent">
				<div className="child">
					<div class="card text-center">
						<div class="card-header">Featured</div>
						<div class="card-body">
							<div className="col align-items-start">
								<div className="name">name</div>
								<div className="logo-info">
									<div className="logo">logo</div>
									<div className="info">info</div>
								</div>
							</div>
						</div>
						<div class="card-footer">footer</div>
					</div>
				</div>
				<div className="child row">
					<div className="row">
						<div className="col align-items-start">
							<div className="name">name</div>
							<div className="logo-info">
								<div className="logo">logo</div>
								<div className="info">info</div>
							</div>
						</div>

						<div className="col align-items-start">
							<div className="name">name</div>
							<div className="logo-info">
								<div className="logo">logo</div>
								<div className="info">
									<div>a</div>
									<div>b</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col align-items-start">
							<div className="name">name</div>
							<div className="logo-info">
								<div className="logo">logo</div>
								<div className="info">info</div>
							</div>
						</div>
						<div className="col align-items-start">
							<div className="name">name</div>
							<div className="logo-info">
								<div className="logo">logo</div>
								<div className="info">info</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col align-items-start">
							<div className="name">name</div>
							<div className="logo-info">
								<div className="logo">logo</div>
								<div className="info">info</div>
							</div>
						</div>
						<div className="col align-items-start">
							<div className="name">name</div>
							<div className="logo-info">
								<div className="logo">logo</div>
								<div className="info">info</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerInfo;
