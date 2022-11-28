import React from "react";
import { Tweet } from "../../models/TweetModel";
import IndividualTweetDisplay from "./IndividualTweetDisplay/IndividualTweetDisplay";

let sampleTweet: Tweet = {
	id: "db31851a-8b13-1029-81b0-8a9557deb3a2",
	// type: "",
	textContent: "This is a sample Tweet!",
	isLiked: false,
	name: "My name",
	handle: "My handle",
	profilePicture: null,
	date: "01-01-2022",
	likedCount: 4,
	contentPicture: "",
};

function TweetFeed() {
	return (
		//<h1 style={{ color: "white" }}>TweetFeed Goes Here</h1>
		IndividualTweetDisplay(sampleTweet)
	);
}

export default TweetFeed;
