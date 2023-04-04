import React from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import image from "../../app/images/banner-blur.jpg";
import profilePicDefault from "../../app/images/default-profile-pic.jpeg";
import ProfileHeroComponentStyle from "./profileHeroComponentStyle.module.scss";

// Outline: Profile Page should filter out tweets by user.
// if navigating to a user's profile, all tweets in the tweet feed should be of that user or retweeted by that user.
// Clicking a user's name should direct you to their profile page
// user's name should be passed as props and filter DB of tweets to show only the respective users tweets.
// profile page should include banner & user info

function ProfileHeroComponent() {
	return (
		<div className={ProfileHeroComponentStyle.profileHeroContainer}>
			<div className={ProfileHeroComponentStyle.banner}>
				<img src={image} className={ProfileHeroComponentStyle.bannerImage} alt="banner-pic" />
			</div>

			<div className={ProfileHeroComponentStyle.notificationBar}>
				<img
					src={profilePicDefault}
					className={ProfileHeroComponentStyle.profilePicture}
					alt="profile-pic"
				/>
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
