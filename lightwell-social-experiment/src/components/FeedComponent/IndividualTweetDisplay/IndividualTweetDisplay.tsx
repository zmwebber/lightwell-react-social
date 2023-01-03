// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { DeleteOutlined, Reply } from "@mui/icons-material";
import { useDispatch, useSelector, useStore } from "react-redux";
import { deleteTweet, updateTweet } from "../../../api/TweetApi";
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

		editedTweet.id = matchedTweet[0]._id;
		editedTweet.createdAt = matchedTweet[0].createdAt;
		editedTweet.text = matchedTweet[0].text;
		editedTweet.favorited = matchedTweet[0].favorited;
		editedTweet.truncated = matchedTweet[0].truncated;
		editedTweet.favorite_count = matchedTweet[0].favorite_count;
		editedTweet.source = matchedTweet[0].source;
		editedTweet.is_reply_status = matchedTweet[0].is_reply_status;
		editedTweet.in_reply_to_status_id = matchedTweet[0].in_reply_to_status_id;
		editedTweet.reply_count = matchedTweet[0].reply_count;
		editedTweet.is_quote_status = matchedTweet[0].is_quote_status;
		editedTweet.quoted_status_id = matchedTweet[0].quoted_status_id;
		editedTweet.is_retweeted_status = matchedTweet[0].is_retweeted_status;
		editedTweet.retweet_count = matchedTweet[0].retweet_count;
		editedTweet.links = matchedTweet[0].links;
		editedTweet.hashtags = matchedTweet[0].hashtags;

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

		editedTweet.id = matchedTweet[0]._id;
		editedTweet.createdAt = matchedTweet[0].createdAt;
		editedTweet.text = matchedTweet[0].text;
		editedTweet.favorited = matchedTweet[0].favorited;
		editedTweet.truncated = matchedTweet[0].truncated;
		editedTweet.favorite_count = matchedTweet[0].favorite_count;
		editedTweet.source = matchedTweet[0].source;
		editedTweet.is_reply_status = matchedTweet[0].is_reply_status;
		editedTweet.in_reply_to_status_id = matchedTweet[0].in_reply_to_status_id;
		editedTweet.reply_count = matchedTweet[0].reply_count;
		editedTweet.is_quote_status = matchedTweet[0].is_quote_status;
		editedTweet.quoted_status_id = matchedTweet[0].quoted_status_id;
		editedTweet.is_retweeted_status = matchedTweet[0].is_retweeted_status;
		editedTweet.retweet_count = matchedTweet[0].retweet_count;
		editedTweet.links = matchedTweet[0].links;
		editedTweet.hashtags = matchedTweet[0].hashtags;

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
