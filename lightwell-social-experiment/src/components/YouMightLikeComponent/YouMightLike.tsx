import React, { useEffect } from "react";
import { ButtonUnstyled } from "@mui/base";
import { FollowButton } from "../../app/shared/buttons";
import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss"
import YouMightLikeStyle from "./youMightLikeStyle.module.scss";
import defaultProfilePic from "../../app/images/default-profile-pic.jpeg";
import { useStore } from "react-redux";

//TODO: extract You Might Like & Show More to bookend entire YML card such that they aren't repeated with every new card produced.

function YouMightLike(props: any) {
	const [randomNumber, setRandomNumber] = React.useState<number>(1);
	const [refresh, setRefresh] = React.useState<boolean>(false);

	const store = useStore();
	const state: any = store.getState();

	useEffect(() => {
		
		setRandomNumber(generateRandomNumber())
		setRefresh(false)
	}, [refresh])

	// const generateRandomNumber = () => {
	// 	let randomNumber = Math.floor(Math.random() * state.feed.Tweets.length);
	// 	setRandomNumber(randomNumber)
	// }

	
	const generateRandomNumber = () => {

		let response = Math.floor(Math.random() * state.feed.Tweets.length);
		console.log(response)
		setRefresh(true)
		return response;
	}


	return (
		<div className={YouMightLikeStyle.ymlCard}>
			<header className={YouMightLikeStyle.ymlHeader}>
				<h2>You might like</h2>
			</header>

			<div className={YouMightLikeStyle.ymlCardContents}>
				<div className={YouMightLikeStyle.items}>
						<img
							src={defaultProfilePic}
							alt=""
							className={AppStyle.profilePicture}
						></img>
					<div className={YouMightLikeStyle.names}>
						<h5 className={YouMightLikeStyle.realName} >{randomNumber}</h5>
						<h5 className={YouMightLikeStyle.username}>Username</h5>
					</div>
				</div>
				<div className={YouMightLikeStyle.followButton}>
					<FollowButton type="submit">Follow</FollowButton>
				</div>
			</div>

			<div className={YouMightLikeStyle.ymlCardContents}>
				<div className={YouMightLikeStyle.items}>
						<img
							src={defaultProfilePic}
							alt=""
							className={AppStyle.profilePicture}
						></img>
					<div className={YouMightLikeStyle.names}>
						<h5 className={YouMightLikeStyle.realName}>Name</h5>
						<h5 className={YouMightLikeStyle.username}>Username</h5>
					</div>
				</div>
				<div className={YouMightLikeStyle.followButton}>
					<FollowButton type="submit">Follow</FollowButton>
				</div>
			</div>

			<footer className={YouMightLikeStyle.showMore}>
				<h5>Show more</h5>
			</footer>
		</div>
	);
}

export default YouMightLike;
