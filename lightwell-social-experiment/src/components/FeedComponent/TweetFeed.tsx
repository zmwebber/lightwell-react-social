import React, { useState, useEffect, useCallback } from "react";
import type {} from "redux-thunk/extend-redux";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getFeed } from "../../api/TweetApi";
import IndividualTweetDisplay from "./IndividualTweetDisplay/IndividualTweetDisplay";
import {
	selectFeed,
	TweetFeedState,
} from "../../redux/ducks/feed_duck/tweetFeedSlice";
import { useAppSelector } from "../../app/hooks/hooks";
import TweedFeedStyle from "./tweetFeedStyle.module.scss"
import { Paper } from "@mui/material";

const TweetFeed = () => {
	const feed = useAppSelector(selectFeed);
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		dispatch(getFeed());
	}, [dispatch]);

	useEffect(() => {
		if (!feed.loading) {
			initFetch();
		}
	}, [initFetch]);

	// Url should end in the user profile property name whereby the user's tweets are filtered by name.
	//"http://localhost:3000/"
	// code below checks if there is a username appended to the localhost:3000 url.
	// if (window.location.href.length > 30) {
	// 	return <h1>HELLO</h1>;
	// }

	const calculateElevation: any = ((input: any) => {
		if(input < 20) {
			return input + 2
		}
		return 20;
	});

	return (
		<>
			{!feed.loading &&
				feed.Tweets &&
				feed.Tweets.filter(tweet => tweet.is_reply_status !== true).map((tweet, index) => (
					<div className={"tweet " + index} key={index}>
						<Paper elevation={calculateElevation(index)}>
							<IndividualTweetDisplay {...tweet} />
						</Paper>
					</div>
				))}
		</>
	);
};

export default TweetFeed;
