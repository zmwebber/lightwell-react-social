// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { DeleteOutlined, Reply } from "@mui/icons-material";
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { getFeed } from "../../../api/TweetApi";
import timeCalculator from "../../../app/shared/timeConverter";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
	ReplyButton,
	RetweetButton,
	FavoriteButton,
} from "../../../app/shared/buttons";

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

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
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

			{/** @TODO: toggle favorite count */}
			<CardActions>
				<ReplyButton reply_count={tweet.reply_count} />

				<RetweetButton retweet_count={tweet.retweet_count} />

				<FavoriteButton
					favorite_count={tweet.favorite_count}
					favorited={tweet.favorited}
				/>

				{/* <IconButton aria-label="share">
					<ShareIcon />
				</IconButton> */}
			</CardActions>
		</Card>
	);
}
