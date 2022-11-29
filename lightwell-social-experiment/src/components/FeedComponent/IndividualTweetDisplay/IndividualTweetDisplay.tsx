// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import React from "react";
import { findByLabelText } from "@testing-library/react";

function checkProfilePicture(tweet: Tweet) {
	if (tweet.profilePicture == undefined || "") {
		tweet.profilePicture = defaultProfilePic;
	}
}

export default function IndividualTweetDisplay(tweet: Tweet) {
	checkProfilePicture(tweet);
	return (
		<>
			<div style={{ backgroundColor: "white" }}>
				<div className="picture">
					<img
						className="profile-picture"
						src={tweet.profilePicture}
						style={{ width: "5vw", height: "5vh" }}
					></img>
				</div>

				<div className="username-handle">
					{tweet.name} {tweet.handle} + time(19h)
				</div>

				<div className="tweet-text">{tweet.textContent}</div>
				<div className="tweet-likes">{tweet.likedCount}</div>
			</div>
		</>
	);
}
