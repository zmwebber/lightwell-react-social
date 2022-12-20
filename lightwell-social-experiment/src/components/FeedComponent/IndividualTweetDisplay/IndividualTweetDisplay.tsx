// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../../../redux/ducks/post_duck/tweetFormSlice";
import Popover from "@mui/material/Popover";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import {
// 	deleteTweet,
// 	submit,
// } from "../../../redux/ducks/post_duck/tweetFormSlice";

//import deleteTweet from "../../../redux/ducks/post_duck/tweetFormSlice";

function checkProfilePicture(tweet: Tweet) {
	if (tweet.profilePicture === "") {
		tweet.profilePicture = defaultProfilePic;
	}
}

// TODO: Add responsive "Like" button that:
// 1. changes color to red + fills in
// 2. sets isLiked on Tweet property to TRUE
// 3. increments the tweetCount on Tweet to +1, but never more than 1.

export default function IndividualTweetDisplay(tweet: Tweet) {
	// const [isLiked, setIsLiked] = useState(false);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const open = Boolean(isPopoverOpen);

	const handleClick = (e: any) => {
		setIsPopoverOpen(true);
	};

	const handleClose = () => {
		setIsPopoverOpen(false);
	};

	const dispatch = useDispatch();

	const handleDelete = (tweet: Tweet) => {
		dispatch(
			deleteTweet({
				tweet,
			})
		);
	};

	checkProfilePicture(tweet);
	return (
		<>
			<div className="tweet-card">
				<div className="picture">
					{/* <img
						className="profile-picture"
						src={tweet.profilePicture}
						style={{ width: "5vw", height: "5vh" }}
					></img> */}
				</div>

				<div className="username-handle" style={{ color: "white" }}>
					{tweet.name} {tweet.handle} + time(19h)
				</div>

				<div className="tweet-text" style={{ color: "white" }}>
					{tweet.textContent}
				</div>
				<div className="tweet-likes" style={{ color: "white" }}>
					<IconButton>
						<FavoriteBorderIcon style={{ color: "white" }} />
					</IconButton>
					{tweet.likedCount}
				</div>

				<div>
					<IconButton>
						<MoreHorizIcon onClick={handleClick} />
					</IconButton>
					<Popover
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
						<IconButton>
							<DeleteOutlined
								style={{ color: "white" }}
								onClick={() => {
									handleDelete(tweet);
								}}
							/>
						</IconButton>
					</Popover>
				</div>
			</div>
		</>
	);
}
