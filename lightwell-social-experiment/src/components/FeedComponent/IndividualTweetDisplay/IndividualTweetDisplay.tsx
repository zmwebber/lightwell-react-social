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
import "./individualTweetDisplayStyle.css";
import {
	incrementFavorite,
	decrementFavorite,
	incrementRetweet,
	decrementRetweet,
} from "../../../redux/ducks/post_duck/tweetFormSlice";
import {
	addNewFavoritedInteraction,
	deleteFavoritedInteraction,
} from "../../../api/FavoritesApi";
import ShareIcon from "@mui/icons-material/Share";
import { Interaction } from "../../../models/InteractionsModel";
import {
	addNewRetweetInteraction,
	deleteRetweetInteraction,
} from "../../../api/RetweetsApi";

export default function IndividualTweetDisplay(tweet: Tweet) {
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

	const handleDelete = (tweet: Tweet) => {
		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t._id === tweet._id
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
			(t: Tweet) => t._id === tweet._id
		);

		console.log(matchedTweet[0].user.name);

		const editedTweet: Tweet = { ...matchedTweet[0] };

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

	const handleFavoritedInteraction = (tweet: Tweet) => {
		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t._id === tweet._id
		);

		const editedTweet: Tweet = { ...matchedTweet[0] };
		let interaction: Interaction = {
			tweetId: editedTweet._id,
			userId: editedTweet.user._id,
		};

		let action = null;

		if (editedTweet.favorited === true) {
			action = deleteFavoritedInteraction(interaction);
		} else {
			action = addNewFavoritedInteraction(interaction);
		}

		store.dispatch(action).catch((error: any) => {
			console.log(error);
		});
	};

	const handleRetweetInteraction = (tweet: Tweet) => {
		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t._id === tweet._id
		);

		const editedTweet: Tweet = { ...matchedTweet[0] };
		let interaction: Interaction = {
			tweetId: editedTweet._id,
			userId: editedTweet.user._id,
		};

		let action = null;

		if (editedTweet.is_retweeted_status === true) {
			action = deleteRetweetInteraction(interaction);
		} else {
			action = addNewRetweetInteraction(interaction);
		}

		store.dispatch(action).catch((error: any) => {
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
			(t: Tweet) => t._id === tweet._id
		);

		const editedTweet = { ...matchedTweet[0] };

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

	// @TODO
	const redirectToProfile = (tweet: Tweet): any => {
		console.log("redirect button pressed");
		window.location.href =
			"http://localhost:3000/profile/" + tweet.user.screen_name;
		// + `${tweet.user}`;
	};

	// @TODO
	function parseUserJSON(tweet: Tweet): any {
		return tweet.user.name + " " + "@" + tweet.user.screen_name;
	}

	// checkProfilePicture(tweet);
	return (
		<Card
			sx={{
				gap: 2,
				backgroundColor: "white",
				color: "black",
				borderRadius: 0,
				borderBottom: " solid gray",
				borderBottomWidth: "thin",
			}}
		>
			<CardHeader
				avatar={
					<img
						className="profile-picture"
						alt="profile-pic"
						src={defaultProfilePic}
						style={{ width: "5vw", height: "5vh" }}
						onClick={() => redirectToProfile(tweet)}
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
							<MoreVertIcon sx={{ color: "black" }} />
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
				title={
					// `${tweet.user}` +
					parseUserJSON(tweet) + " " + timeCalculator(tweet.createdAt)
				}
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
			{/* <CardActions disableSpacing className="icon-parents"> 
			For whatever reason, material UI CardActions doesn't allow for respacing betwixt nested buttons*/}
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<ReplyButton reply_count={tweet.reply_count} />

				<Button
					className="icons"
					onClick={() => {
						handleRetweet(tweet);
						handleRetweetInteraction(tweet);
					}}
					sx={{
						color: tweet.is_retweeted_status === true ? "#7EC542" : "grey",
					}}
					startIcon={<RepeatIcon />}
				>{`${tweet.retweet_count}`}</Button>

				<Button
					className="icon"
					onClick={() => {
						handleFavorited(tweet);
						handleFavoritedInteraction(tweet);
					}}
					sx={{ color: tweet.favorited === true ? "red" : "grey" }}
					startIcon={<FavoriteIcon />}
				>{`${tweet.favorite_count}`}</Button>

				<Button sx={{ color: "grey" }} startIcon={<ShareIcon />}></Button>
			</div>
			{/* </CardActions> */}
		</Card>
	);
}
