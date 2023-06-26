import { useParams } from 'react-router-dom';
import IndividualTweetDisplay from '../../components/FeedComponent/IndividualTweetDisplay/IndividualTweetDisplay';
import React, { useState, useEffect, useCallback } from "react";
import type {} from "redux-thunk/extend-redux";
import { useDispatch, useSelector } from "react-redux";
// import { Tweet } from '../../models/TweetModel';
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import type {} from "redux-thunk/extend-redux";
import { getFeed } from "../../api/TweetApi";
import {
	selectFeed,
	TweetFeedState,
} from "../../redux/ducks/feed_duck/tweetFeedSlice";
import { useAppSelector } from "../../app/hooks/hooks";
import TweedFeedStyle from "./tweetFeedStyle.module.scss"
import { Paper } from '@mui/material';

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

	const calculateElevation: any = ((input: any) => {
		if(input < 20) {
			return input * 3
		}
		return 20;
	});

  return (
		<>
			{!feed.loading &&
				feed.Tweets &&
				feed.Tweets.filter(tweet => tweet._id == tweetId).map((tweet, index) => (
					<div className={"tweet " + index} key={index}>
						<IndividualTweetDisplay {...tweet} />
					</div>
				))}
      {!feed.loading &&
				feed.Tweets &&
				feed.Tweets.filter(tweet => tweet.in_reply_to_status_id == tweetId).map((tweet, index) => (
					<div className={"tweetReply " + index} key={index}>
						<Paper elevation={calculateElevation(index)}>

							<IndividualTweetDisplay {...tweet} />
						</Paper>
					</div>
				))}
		</>
	);
}