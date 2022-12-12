import React from "react";
import { Tweet } from "../../models/TweetModel";
import IndividualTweetDisplay from "./IndividualTweetDisplay/IndividualTweetDisplay";
import "./tweetFeedStyle.css";
import { TweetFormState } from "../../redux/ducks/post_duck/tweetFormSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function TweetFeed(): any {
	let myTweets = useSelector((state: RootState) => state.myTweets.myTweets);
	return myTweets.map((sampleTweet) => {
		return IndividualTweetDisplay(sampleTweet);
	});
}

// function TweetFeed(props: any): any {
// 	let sampleTweet = props.tweets;
// 	return (
// 		//<h1 style={{ color: "white" }}>TweetFeed Goes Here</h1>
// 		sampleTweet.map((sampleTwee: Tweet) => {
// 			return IndividualTweetDisplay(sampleTwee);
// 		})
// 	);
// }

export default TweetFeed;
