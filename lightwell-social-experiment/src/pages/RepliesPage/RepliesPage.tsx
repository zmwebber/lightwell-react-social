import { useParams } from 'react-router-dom';
import IndividualTweetDisplay from '../../components/FeedComponent/IndividualTweetDisplay/IndividualTweetDisplay';
import React, { useState, useEffect, useCallback } from "react";
import type {} from "redux-thunk/extend-redux";
import { useDispatch } from "react-redux";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import type {} from "redux-thunk/extend-redux";
import { getFeed } from "../../api/TweetApi";
import {
	selectFeed
} from "../../redux/ducks/feed_duck/tweetFeedSlice";
import { useAppSelector } from "../../app/hooks/hooks";

export function RepliesPage() {
  const feed = useAppSelector(selectFeed);
	const dispatch = useDispatch();
  const params = useParams();
  const tweetId = params.id;

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
			{!feed.loading &&
				feed.Tweets &&
				feed.Tweets.filter(tweet => tweet._id === tweetId).map((tweet, index) => (
						<IndividualTweetDisplay {...tweet} key={index}/>
				))}
      {!feed.loading &&
				feed.Tweets &&
				feed.Tweets.filter(tweet => tweet.in_reply_to_status_id === tweetId).map((tweet, index) => (
					<div className={"tweetReply " + index}>
							<IndividualTweetDisplay {...tweet} key={index} />
					</div>
				))}
		</>
	);
}