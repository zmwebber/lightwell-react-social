import React, { useEffect, useCallback } from "react";
import { ButtonUnstyled } from "@mui/base";
import { FollowButton } from "../../app/shared/buttons";
import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss"
import YouMightLikeStyle from "./youMightLikeStyle.module.scss";
import defaultProfilePic from "../../app/images/default-profile-pic.jpeg";
import { useStore, useDispatch } from "react-redux";
import { Tweet } from "../../models/TweetModel";
import { useAppSelector } from "../../app/hooks/hooks";
import { getProfileFeed, getYmlTweets } from "../../api/TweetApi";
import { selectFeed } from "../../redux/ducks/feed_duck/tweetFeedSlice";
import { getFeed } from "../../api/TweetApi";
import { userInfo } from "os";
import { selectYmlTweets } from "../../redux/ducks/yml_duck/ymlSlice";

//TODO: extract You Might Like & Show More to bookend entire YML card such that they aren't repeated with every new card produced.

export default function YouMightLike() {

	const store = useStore();
	const state: any = store.getState();
	// const feed = useAppSelector((state) => state.myTweets);
  const user = useAppSelector((state) => state.user.profile);
	// const [isInitialized, setInitialized] = React.useState(false);

	const [ymlTweets, setYmlTweets] = React.useState<Tweet[]>([]);

	const ymlTweetsArray = useAppSelector(selectYmlTweets);
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		dispatch(getYmlTweets())
	}, [dispatch]);

	useEffect(() => {
		if (!ymlTweetsArray.loading) {
			initFetch();		
		}
	}, [initFetch]);

		

			return(

				<>
				<h2>You Might Like</h2>

				<>
				{ymlTweetsArray.ymlTweets && ymlTweetsArray.ymlTweets
				.filter(
					tweet => tweet.user._id !== user._id 
					)
					.map((tweet, index) => (
					<div>{tweet.user.screen_name}</div>
					))}
				</>

				<>
				
				</>
				
			<div>
				<h5>Show more</h5>
			</div>
		
				</>
		
	);
}