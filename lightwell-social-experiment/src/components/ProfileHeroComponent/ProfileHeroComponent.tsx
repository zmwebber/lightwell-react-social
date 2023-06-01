import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import image from "../../app/images/banner-blur.jpg";
import "./profileHeroComponentStyle.css";
import profilePicDefault from "../../app/images/default-profile-pic.jpeg";
import { getMedia } from "../../api/MediaApi";

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
	const [preview, setPreview] = useState("");

	function loadPreview() {
		getMedia().then((res) => {
			let length = res.data.media.length - 1;
			let buf = res.data.media[length].data
			//need to replace the static image/png with the correct mime/type from the res.data.media[x].contentType
			let src = `data:image/png;base64,` + buf;

			console.log(src);
			setPreview(buf);
		});
	}

	useEffect(() => {
		loadPreview();
	}, []);

	return (
		<div className="profile-hero-div">
			<div className="banner">
				<img src={image} className="profile-image" alt="banner-pic" />
			</div>

			<div className="notification-bar">
				<img src={"data:image/png;base64," + preview} className="profile-pic" width="300px" height="auto" alt="preview" />
				<EditProfileButton className="edit-profile-button" variant="contained">
					Edit Profile
				</EditProfileButton>
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
