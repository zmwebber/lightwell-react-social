// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import RepeatIcon from "@mui/icons-material/Repeat";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useStore } from "react-redux";
import { deleteTweet, updateTweet } from "../../../api/TweetApi";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { getFeed } from "../../../api/TweetApi";
import timeCalculator from "../../../app/shared/timeConverter";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReplyButton } from "../../../app/shared/buttons";
import {
	incrementFavorite,
	decrementFavorite,
	incrementRetweet,
	decrementRetweet,
} from "../../../redux/ducks/post_duck/tweetFormSlice";

// function checkProfilePicture(tweet: Tweet) {
// 	if (tweet.profilePicture === "") {
// 		tweet.profilePicture = defaultProfilePic;
// 	}
// }

export default function IndividualTweetDisplay(tweet: Tweet) {
	const [editedTweet, setEditedTweet] = useState<Tweet>({
		id: "",
		createdAt: new Date(),
		user: "",
		text: "",
		source: "Twitter Clone Web App",
		truncated: false,
		is_reply_status: false,
		in_reply_to_status_id: "",
		in_reply_to_user_id: "",
		reply_count: 0,
		is_quote_status: false,
		quoted_status_id: "",
		is_retweeted_status: false,
		retweet_count: 0,
		favorite_count: 0,
		favorited: false,
		links: {
			indicies: [0],
			url: "",
			text: "",
		},
		hashtags: {
			indicies: [0],
			text: "",
		},
	});

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const store = useStore();
	const state: any = store.getState();
	// @TODO: create mapping function
	// https://codepen.io/GeorgeWL/pen/yLeGGMw

	function setTweetForUpdate(tweet: any) {
		editedTweet.id = tweet._id;
		editedTweet.createdAt = tweet.createdAt;
		editedTweet.text = tweet.text;
		editedTweet.favorited = tweet.favorited;
		editedTweet.truncated = tweet.truncated;
		editedTweet.favorite_count = tweet.favorite_count;
		editedTweet.source = tweet.source;
		editedTweet.is_reply_status = tweet.is_reply_status;
		editedTweet.in_reply_to_status_id = tweet.in_reply_to_status_id;
		editedTweet.reply_count = tweet.reply_count;
		editedTweet.is_quote_status = tweet.is_quote_status;
		editedTweet.quoted_status_id = tweet.quoted_status_id;
		editedTweet.is_retweeted_status = tweet.is_retweeted_status;
		editedTweet.retweet_count = tweet.retweet_count;
		editedTweet.links = tweet.links;
		editedTweet.hashtags = tweet.hashtags;
	}

	const handleDelete = (tweet: Tweet) => {
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

	function adjustRetweetCount(tweet: Tweet) {
		if (tweet.is_retweeted_status === false) {
			store.dispatch(incrementRetweet(tweet));
		} else if (tweet.is_retweeted_status === true) {
			store.dispatch(decrementRetweet(tweet));
		}
	}
	const handleRetweet = (tweet: Tweet) => {
		console.log("retweet button pressed");

		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t.createdAt === tweet.createdAt
		);

		setTweetForUpdate(matchedTweet[0]);

		//setEditedTweet({ ...matchedTweet[0] });

		adjustRetweetCount(editedTweet);

		const action = updateTweet(editedTweet);

		store
			.dispatch(action)
			.then(() => {
				store.dispatch(getFeed());
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	function adjustFavoriteCount(tweet: Tweet) {
		if (tweet.favorited === false) {
			store.dispatch(incrementFavorite(tweet));
		} else if (tweet.favorited === true) {
			store.dispatch(decrementFavorite(tweet));
		}
	}

	const handleFavorited = (tweet: Tweet) => {
		console.log("favorite button pressed");
		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t.createdAt === tweet.createdAt
		);

		setTweetForUpdate(matchedTweet[0]);

		adjustFavoriteCount(editedTweet);

		const action = updateTweet(editedTweet);

		store
			.dispatch(action)
			.then(() => {
				store.dispatch(getFeed());
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

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
					<div>
						<IconButton
							aria-label="settings"
							id="demo-positioned-button"
							aria-controls={open ? "demo-positioned-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							id="demo-positioned-menu"
							aria-labelledby="demo-positioned-button"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
						>
							<MenuItem>
								<Button
									sx={{ color: "red" }}
									startIcon={<DeleteOutlineRoundedIcon />}
									onClick={() => {
										handleDelete(tweet);
									}}
								>
									Delete
								</Button>
							</MenuItem>
							<MenuItem onClick={handleClose}>Pin to your profile</MenuItem>
							<MenuItem onClick={handleClose}>Change who can reply</MenuItem>
							<MenuItem onClick={handleClose}>Embed Tweet</MenuItem>
							<MenuItem onClick={handleClose}>View Tweet Analytics</MenuItem>
						</Menu>
					</div>
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

			{/** @TODO: toggle reply count */}
			{/* @TODO: retweet logic - what should happen when a user retweets? */}
			{/* @TODO: Dropdown on retweet click where it's straight retweet vs retweet with comment. */}

			<CardActions>
				<ReplyButton reply_count={tweet.reply_count} />

				<Button
					onClick={() => {
						handleRetweet(tweet);
					}}
					sx={{
						color: tweet.is_retweeted_status === true ? "#7EC542" : "grey",
					}}
					startIcon={<RepeatIcon />}
				>{`${tweet.retweet_count}`}</Button>

				<Button
					onClick={() => {
						handleFavorited(tweet);
					}}
					sx={{ color: tweet.favorited === true ? "red" : "grey" }}
					startIcon={<FavoriteIcon />}
				>{`${tweet.favorite_count}`}</Button>
				{/** Why can't I pass the full tweet here? */}

				{/* <IconButton aria-label="share">
					<ShareIcon />
				</IconButton> */}
			</CardActions>
		</Card>
	);
}
