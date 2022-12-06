// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import React from "react";
//import "./individualTweetDisplayStyle.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

function checkProfilePicture(tweet: Tweet) {
	if (tweet.profilePicture === "") {
		tweet.profilePicture = defaultProfilePic;
	}
}

export default function IndividualTweetDisplay(tweet: Tweet) {
	checkProfilePicture(tweet);
	return (
		<>
			<div className="tweet-card">
				<div className="picture">
					{/* <img
						className="profile-picture"
						src={tweet.profilePicture}
						style={{ width: "5vw", height: "5vh" }}
					></img> */}
				</div>

				<div className="username-handle" style={{ color: "white" }}>
					{tweet.name} {tweet.handle} + time(19h)
				</div>

				<div className="tweet-text" style={{ color: "white" }}>
					{tweet.textContent}
				</div>
				<div className="tweet-likes" style={{ color: "white" }}>
					<IconButton>
						<FavoriteBorderIcon style={{ color: "white" }} />
					</IconButton>
					{tweet.likedCount}
				</div>
			</div>
		</>
	);
}
