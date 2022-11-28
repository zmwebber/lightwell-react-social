// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../Images/default-profile-pic.jpeg";
import React from "react";

function checkProfilePicture(tweet: Tweet) {
	if (tweet.profilePicture == null || "") {
		tweet.profilePicture = defaultProfilePic;
	}
}

export default function IndividualTweetDisplay(tweet: Tweet) {
	checkProfilePicture(tweet);
	return (
		<>
			<h1 style={{ backgroundColor: "white" }}>
				{tweet.name} {tweet.handle} + time(19h)
			</h1>
		</>
	);
}
