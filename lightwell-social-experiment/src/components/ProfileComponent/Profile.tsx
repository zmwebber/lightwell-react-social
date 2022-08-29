import React from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import image from "../../Images/corgi.jpg";

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
		<div>
			<div className="background">
				<img src={image} className="profile-image" alt="profile-pic" />
			</div>
			<div className="profile-container">
				<div className="profile" style={{ color: "white" }}>
					Profile
				</div>
				<div className="notification-bar">
					<PendingOutlinedIcon />
					<NotificationAddOutlinedIcon />
					<FollowingButton variant="contained">
						Follow ? Following
					</FollowingButton>
				</div>
			</div>
		</div>
	);
}

export default Profile;
