import React from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import image from "../../app/images/banner-blur.jpg";
import "./profileHeroComponentStyle.css";
import profilePicDefault from "../../app/images/default-profile-pic.jpeg";

// Outline: Profile Page should filter out tweets by user.
// if navigating to a user's profile, all tweets in the tweet feed should be of that user or retweeted by that user.
// Clicking a user's name should direct you to their profile page
// user's name should be passed as props and filter DB of tweets to show only the respective users tweets.
// profile page should include banner & user info

const FollowingButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	shape = RoundedCornerShape(
		50,50,50,50
	);
	
`;

function ProfileHeroComponent() {
	return (
		<div className="profile-hero-div">
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

				{/** @TODO: Following Button should be available only if user profile isn't current user.
				 * A user cannot follow themselves.
				 */}
				<FollowingButton variant="contained">
					Follow ? Following
				</FollowingButton>
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
