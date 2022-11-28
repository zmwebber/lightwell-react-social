// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../Images/default-profile-pic.jpeg";
import React from "react";

function checkProfilePicture(tweet: Tweet) {
	if (tweet.profilePicture == undefined || "") {
		tweet.profilePicture = defaultProfilePic;
	}
}

export default function IndividualTweetDisplay(tweet: Tweet) {
	checkProfilePicture(tweet);
	return (
		<>
			<h1 style={{ backgroundColor: "white" }}>
				<img className="profile-picture" src={tweet.profilePicture}></img>
				{tweet.name} {tweet.handle} + time(19h)
				{tweet.textContent}
			</h1>
		</>
	);
}
