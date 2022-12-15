// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../../../redux/ducks/post_duck/tweetFormSlice";
// import {
// 	deleteTweet,
// 	submit,
// } from "../../../redux/ducks/post_duck/tweetFormSlice";

//import deleteTweet from "../../../redux/ducks/post_duck/tweetFormSlice";

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

	const dispatch = useDispatch();

	const handleDelete = (tweet: Tweet) => {
		dispatch(
			deleteTweet({
				tweet,
			})
		);
	};

	//checkProfilePicture(tweet);
	return (
		<>
			<div className="tweet-card">
				<div className="picture">
					<img
						className="profile-picture"
						src={defaultProfilePic}
						style={{ width: "5vw", height: "5vh" }}
					></img>
				</div>

				<div className="username-handle" style={{ color: "white" }}>
					{`user.name user.handle ${tweet.createdAt}`}
				</div>

				<div className="tweet-text" style={{ color: "white" }}>
					{tweet.text}
				</div>
				<div className="tweet-likes" style={{ color: "white" }}>
					<IconButton>
						<FavoriteBorderIcon style={{ color: "white" }} />
					</IconButton>					
					<div className="tweet-like-count">
						<span>{tweet.favorite_count.toString()}</span>
					</div>

				</div>

				<div>
					<IconButton>
						<DeleteOutlined
							style={{ color: "white" }}
							onClick={() => {
								handleDelete(tweet);
							}}
						/>
					</IconButton>
				</div>
			</div>
		</>
	);
}
