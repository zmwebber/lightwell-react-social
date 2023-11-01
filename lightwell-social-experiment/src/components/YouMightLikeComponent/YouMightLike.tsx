import React, { useEffect, useCallback } from "react";
import { ButtonUnstyled } from "@mui/base";
import { FollowButton } from "../../app/shared/buttons";
import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss"
import YouMightLikeStyle from "./youMightLikeStyle.module.scss";
import defaultProfilePic from "../../app/images/default-profile-pic.jpeg";
import { useStore, useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks/hooks";
import { getYmlTweets } from "../../api/TweetApi";
import { selectYmlTweets } from "../../redux/ducks/yml_duck/ymlSlice";
import { User } from "../../models/ProfileModel";
import { YMLDisplay } from "./YouMightLikeDisplay";

//TODO: extract You Might Like & Show More to bookend entire YML card such that they aren't repeated with every new card produced.

export default function YouMightLike() {

	const store = useStore();
	const state: any = store.getState();
	const user: User = useAppSelector(state => state.user.profile)

	const ymlTweetsArray = useAppSelector(selectYmlTweets);
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		dispatch(getYmlTweets(user))
	}, [dispatch]);

	useEffect(() => {
		if (!ymlTweetsArray.loading) {
			initFetch();		
		}
	}, [initFetch]);

			return(
				<div className="yml-component">
					<h2>You Might Like</h2>
						<>
						{ymlTweetsArray.ymlTweets && ymlTweetsArray.ymlTweets
							.map((tweet, index) => (
								// TODO: grab tweet.user._id -> search users for user that matches on id, then return profilePicture
									<YMLDisplay {...tweet} key={index}/>
								))}
							</>
					<div>
						<h5>Show more</h5>
					</div>
		
				</div>
		
	);
}