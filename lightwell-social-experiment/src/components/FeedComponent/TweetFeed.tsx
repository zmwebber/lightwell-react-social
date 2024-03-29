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
import { Dna } from "react-loader-spinner";


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

	return (
		<>
			{!feed.loading ? (
				feed.Tweets ? (
					feed.Tweets.filter(tweet => tweet.is_reply_status !== true)
						.reverse()
						.map((tweet, index) => (
							<div className={"tweet " + index} key={index}>
								<IndividualTweetDisplay {...tweet} />
							</div>
						))
				) : (
					<h1>No Tweets Available</h1>
				)
			) : (
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<Dna
						visible={true}
						height="200"
						width="200"
						ariaLabel="dna-loading"
						wrapperStyle={{}}
						wrapperClass="dna-wrapper"
						/>
				</div>
			)}
		</>
	);
};

export default TweetFeed;
