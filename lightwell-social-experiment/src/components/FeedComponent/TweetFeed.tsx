import React from "react";
import { Tweet } from "../../models/TweetModel";
import IndividualTweetDisplay from "./IndividualTweetDisplay/IndividualTweetDisplay";

let sampleTweets: Tweet[] = [
	{
		id: "db31851a-8b13-1029-81b0-8a9557deb3a2",
		// type: "",
		textContent: "This is a sample Tweet 1!",
		isLiked: false,
		name: "My name",
		handle: "My handle",
		profilePicture: undefined,
		date: "01-01-2022",
		likedCount: 4,
		contentPicture: "",
	},

	{
		id: "db31851a-8b13-1029-81b0-8a9557deb3a2",
		// type: "",
		textContent: "This is a sample Tweet 2!",
		isLiked: false,
		name: "My name",
		handle: "My handle",
		profilePicture: undefined,
		date: "01-01-2022",
		likedCount: 4,
		contentPicture: "",
	},
	{
		id: "db31851a-8b13-1029-81b0-8a9557deb3a2",
		// type: "",
		textContent: "This is a sample Tweet 3!",
		isLiked: false,
		name: "My name",
		handle: "My handle",
		profilePicture: undefined,
		date: "01-01-2022",
		likedCount: 4,
		contentPicture: "",
	},
];

function TweetFeed(): any {
	return (
		//<h1 style={{ color: "white" }}>TweetFeed Goes Here</h1>
		sampleTweets.map((sampleTweet) => {
			return IndividualTweetDisplay(sampleTweet);
		})
	);
}

export default TweetFeed;
