import React, { useEffect } from "react";
import { ButtonUnstyled } from "@mui/base";
import { FollowButton } from "../../app/shared/buttons";
import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss"
import YouMightLikeStyle from "./youMightLikeStyle.module.scss";
import defaultProfilePic from "../../app/images/default-profile-pic.jpeg";
import { useStore } from "react-redux";
import { Tweet } from "../../models/TweetModel";

//TODO: extract You Might Like & Show More to bookend entire YML card such that they aren't repeated with every new card produced.

export default function YouMightLike() {
	const numberOfItems = 2;

	const store = useStore();
	const state: any = store.getState();

	let ymlTweets: Tweet[] = [];

	async function generateRandomTweet() {
		let response = await state.feed.Tweets.length
		let index = Math.floor(Math.random() * response);
		console.log(state.feed.Tweets[index])
		return state.feed.Tweets[index];
	}

	async function populateYmlTweets() {
		for(let i = 0; i < numberOfItems; i++) {
			ymlTweets.push(await generateRandomTweet());
		}
	}

	useEffect(() => {
		populateYmlTweets()
	}, [])
		
		return (
			<div className={YouMightLikeStyle.ymlCard}>
			<header className={YouMightLikeStyle.ymlHeader}>
				<h2>You might like</h2>
			</header>

			{ymlTweets.map((tweet, index) => (
					
			<div className={YouMightLikeStyle.ymlCardContents} key={index}>
				<div className={YouMightLikeStyle.items}>
						<img
							src={defaultProfilePic}
							alt=""
							className={AppStyle.profilePicture}
							></img>
					<div className={YouMightLikeStyle.names}>
						<h5 className={YouMightLikeStyle.realName}>{tweet.user.name}</h5>
						<h5 className={YouMightLikeStyle.username}>{tweet.user.screen_name}</h5>
					</div>
				</div>
				<div className={YouMightLikeStyle.followButton}>
					<FollowButton type="submit">Follow</FollowButton>
				</div>
			</div>

				))
			}

			<div className={YouMightLikeStyle.showMore}>
				<h5>Show more</h5>
			</div>
		</div>
	);
}