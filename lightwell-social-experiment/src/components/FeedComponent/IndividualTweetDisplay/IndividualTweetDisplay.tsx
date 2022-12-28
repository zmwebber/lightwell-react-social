// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { useDispatch, useSelector, useStore } from "react-redux";
import { deleteTweet } from "../../../api/TweetApi";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RepeatIcon from "@mui/icons-material/Repeat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { getFeed } from "../../../api/TweetApi";
import timeCalculator from "../../../methods/timeConverter";

// function checkProfilePicture(tweet: Tweet) {
// 	if (tweet.profilePicture === "") {
// 		tweet.profilePicture = defaultProfilePic;
// 	}
// }

// TODO: Add responsive "Like" button that:
// 1. changes color to red + fills in
// 2. sets isLiked on Tweet property to TRUE
// 3. increments the tweetCount on Tweet to +1, but never more than 1.

export default function IndividualTweetDisplay(tweet: Tweet) {
	// const [isLiked, setIsLiked] = useState(false);
	//const [settingsOpen, setSettingsOpen] = useState(false);
	const store = useStore();

	const handleDelete = (tweet: Tweet) => {
		const state: any = store.getState();
		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t.createdAt === tweet.createdAt
		);

		const action = deleteTweet(matchedTweet[0]._id);

		store
			.dispatch(action)
			.unwrap()
			.then((response) => {
				store.dispatch(getFeed());
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	// function convertMsToTime(milliseconds: number) {
	// 	let seconds = Math.floor(milliseconds / 1000);
	// 	let minutes = Math.floor(seconds / 60);
	// 	let hours = Math.floor(minutes / 60);
	// 	let days = Math.floor(hours / 24);
	// 	let weeks = Math.floor(days / 7);
	// 	let years = Math.floor(weeks / 52);

	// 	seconds = seconds % 60;
	// 	minutes = minutes % 60;

	// 	if (years > 0) {
	// 		return `${years}yr`;
	// 	}
	// 	if (days > 7 && days < 365) {
	// 		return `${weeks}wks`;
	// 	}
	// 	if (days >= 1 && days < 7) {
	// 		return `${days}d`;
	// 	}
	// 	if (minutes === 0 && hours === 0 && days === 0) {
	// 		return `${seconds}s`;
	// 	}
	// 	if (hours === 0 && days === 0) {
	// 		return `${minutes}m`;
	// 	}
	// 	if (hours > 0 && days < 1) {
	// 		return `${hours}h`;
	// 	}
	// }

	// function timeCalculator(tweetDate: Date) {
	// 	const currentTime = new Date().valueOf();
	// 	const tweetTime = new Date(tweetDate).valueOf();
	// 	var timeDifference: number = currentTime - tweetTime;

	// 	return convertMsToTime(timeDifference);
	// }

	// checkProfilePicture(tweet);
	return (
		<Card>
			<CardHeader
				avatar={
					<img
						className="profile-picture"
						alt="profile-pic"
						src={defaultProfilePic}
						style={{ width: "5vw", height: "5vh" }}
					></img>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
						{/** TODO - MoreVertIcon onClick shows dropdownMenu component */}
					</IconButton>
				}
				title={`user.name user.handle ` + timeCalculator(tweet.createdAt)}
				subheader=""
			/>
			{tweet.links.url !== `` && tweet.links.url !== undefined && (
				<CardMedia component="img" image={`${tweet.links.url}`} alt="media" />
			)}
			<CardContent>
				<Typography variant="body2">{tweet.text}</Typography>
			</CardContent>

			{/**Wrap cardActions in a div? */}
			<CardActions>
				<IconButton>
					<ChatBubbleOutlineRoundedIcon />
				</IconButton>
				<IconButton>
					<RepeatIcon />
				</IconButton>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				{/* <IconButton aria-label="share">
					<ShareIcon />
				</IconButton> */}
				<IconButton>
					<DeleteOutlineRoundedIcon
						onClick={() => {
							handleDelete(tweet);
						}}
					/>
				</IconButton>
			</CardActions>
		</Card>
	);
}
