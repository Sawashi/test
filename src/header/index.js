import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import logo from "../assets/Source Images-Icons/Icons/logo.png";
import profilePic from "../assets/Source Images-Icons/Icons/profilePic.png";
const Headermain = () => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
		document.body.classList.toggle("ovhidden");
	};

	return (
		<>
			<header className="site__header header_bar">
				<div className="d-flex align-items-center justify-content-between ">
					<div>
						<img src={logo} alt="Logo" />
					</div>
					<div className="profile-container">
						<button className="btn btn-primary rounded-circle profile_btn">
							<img
								src={profilePic}
								alt="Profile"
								className="rounded-circle profile profile_special"
							/>
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Headermain;
