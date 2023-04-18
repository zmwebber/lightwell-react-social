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

const EditProfileButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	shape = RoundedCornerShape(
		50,50,50,50
	);
	background-color: white;
	outline: auto;
	outline-style: solid;
	outline-width: 2px;
    border-color: #555;
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

				<EditProfileButton className="edit-profile-button" variant="contained">
					Edit Profile
				</EditProfileButton>
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
