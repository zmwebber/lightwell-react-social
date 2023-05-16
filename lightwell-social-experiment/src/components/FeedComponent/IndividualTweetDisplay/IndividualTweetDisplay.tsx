// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import RepeatIcon from "@mui/icons-material/Repeat";
import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
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
import {incrementFavorite,	decrementFavorite,	incrementRetweet,	decrementRetweet} from "../../../redux/ducks/post_duck/tweetFormSlice";
import {addNewFavoritedInteraction,	deleteFavoritedInteraction,	getFavoritedInteractionsByTweetId} from "../../../api/FavoritesApi";
import ShareIcon from "@mui/icons-material/Share";

import { Interaction } from "../../../models/InteractionsModel";
import {addNewRetweetInteraction,deleteRetweetInteraction} from "../../../api/RetweetsApi";
import styles from "./individualTweetDisplayStyle.module.css";

export default function IndividualTweetDisplay(tweet: Tweet) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [favoriteCount, setFavoriteCount] = React.useState<number>();
	const [likedByUser, setLikedByUser] = React.useState<boolean>(false);
	const [color, setColor] = React.useState<string>("grey");
	const [refresh, setRefresh] = React.useState<boolean>(false);
	const open = Boolean(anchorEl);

	const store = useStore();
	const state: any = store.getState();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
		
		console.log("Entered handleFavorited method. LikedByUser var = " + likedByUser);

		const editedTweet: Tweet = { ...matchedTweet[0] };
		let interaction: Interaction = {
			tweetId: editedTweet._id,
			userId: state.user.profile._id,
		};

		let action = null;

		if (likedByUser) {
			action = deleteFavoritedInteraction(interaction);
		} else {
			action = addNewFavoritedInteraction(interaction);
		}

		store.dispatch(action)
			.then(() => {
				setRefresh(true)
			})
			.catch((error: any) => {
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
			userId: state.user.profile._id,
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

	async function getFavoritedInteractions() {
		let res = await getFavoritedInteractionsByTweetId(tweet._id, state.user.profile._id);
		console.log(res)

		try {
			let x = res.likedByUser
			console.log("LikedByUser: " + res.likedByUser + '   ' + typeof(res.likedByUser) + " X: " + x)
		
			setFavoriteCount(res.count);
			console.log("getFavoritedInteractions method hit - TweetID: " + tweet._id + " UserID: " + state.user.profile._id);
			
			if (x === "true")
			{
				console.log("Liked, change color to red")
				setColor("red")		
				setLikedByUser(true);
			} else
			{
				console.log("not liked, change color to grey")
				setColor("grey")
				setLikedByUser(false);
			}
		} catch(e){
			console.log(e);
		}
	}

	useEffect(() => {
		getFavoritedInteractions();
		setRefresh(false)
	}, [refresh]);

	// @TODO https://reactrouter.com/en/main
	// https://github.com/lagunovsky/redux-react-router
	// load component, raise action to initialize (get profile data from state or fetch user from url)

	const redirectToProfile = (tweet: Tweet): any => {
		console.log("redirect button pressed");
		window.location.href =
			"http://localhost:3000/profile/" + tweet.user.screen_name;
	};

	function parseUserJSON(tweet: Tweet): any {
		return tweet.user.name + " " + "@" + tweet.user.screen_name;
	}

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
				title={parseUserJSON(tweet) + " " + timeCalculator(tweet.createdAt)}
				subheader=""
			/>
			{tweet.links.url !== `` && tweet.links.url !== undefined && (
				<CardMedia component="img" image={`${tweet.links.url}`} alt="media" />
			)}
			<CardContent>
				<Typography variant="body2">{tweet.text}</Typography>
			</CardContent>

			{/* @TODO: Dropdown on retweet click where it's straight retweet vs retweet with comment. */}
			{/* <CardActions disableSpacing className="icon-parents"> 
			For whatever reason, material UI CardActions doesn't allow for respacing betwixt nested buttons*/}
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<ReplyButton reply_count={tweet.reply_count} />

				<Button
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
					onClick={() => {
						handleFavoritedInteraction(tweet)
						console.log("Favorite Button clicked for tweet: " + tweet._id )
					}}	
					startIcon={<FavoriteIcon />}
					className={color === "red" ? styles.red : styles.grey}
				>
					{ favoriteCount }
				</Button>

				<Button sx={{ color: "grey" }} startIcon={<ShareIcon />}></Button>
			</div>
			{/* </CardActions> */}
		</Card>
	);
}
