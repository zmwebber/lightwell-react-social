import React from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import image from "../../app/images/corgi.jpg";
import "./profileStyle.css";
import profilePicDefault from "../../app/images/default-profile-pic.jpeg";
import { useSelector } from "react-redux";
import { Profile } from "../../models/ProfileModel";
import { useAppSelector } from "../../app/hooks/hooks";
import { RootState } from "../../app/store";
import { selectUser } from "../../redux/ducks/user_duck/userSlice";

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

// const selectUser = useSelector((state: Profile) => state.name);

const ShowFollowButton = () => {
	const user = useAppSelector(selectUser);
	const name = user?.name;

	console.log(name);
	const url = window.location.href;
	const userUrl = url + name;
	if (url === userUrl) {
		return (
			<>
				<PendingOutlinedIcon style={{ color: "white" }} />
				<NotificationAddOutlinedIcon style={{ color: "white" }} />
				<FollowingButton variant="contained">
					Follow ? Following
				</FollowingButton>
			</>
		);
	}
	return null;
};

function ProfileView() {
	return (
		<div className="component">
			<div className="banner">
				<img src={image} className="profile-image" alt="banner-pic" />
			</div>

			<div className="notification-bar">
				<img
					src={profilePicDefault}
					className="profile-pic"
					alt="profile-pic"
				/>

				{/** @TODO: Following Button should be available only if user profile isn't current user.
				 * A user cannot follow themselves.
				 */}
				<div>{ShowFollowButton()}</div>
			</div>
		</div>
	);
}

export default ProfileView;
