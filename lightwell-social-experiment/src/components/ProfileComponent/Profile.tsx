import React from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import image from "../../app/images/corgi.jpg";
import "./profileStyle.css";
import profilePicDefault from "../../app/images/default-profile-pic.jpeg";

const FollowingButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	shape = RoundedCornerShape(
		50,50,50,50
	);
	
`;

function Profile() {
	return (
		<div className="component">
			{/* <div className="profile-container"> */}
			<div className="banner">
				<img src={image} className="profile-image" alt="banner-pic" />
			</div>

			<div className="notification-bar">
				<img
					src={profilePicDefault}
					className="profile-pic"
					alt="profile-pic"
				/>
				<PendingOutlinedIcon />
				<NotificationAddOutlinedIcon />
				<FollowingButton variant="contained">
					Follow ? Following
				</FollowingButton>
			</div>
			{/* </div> */}
		</div>
	);
}

export default Profile;
