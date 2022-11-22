import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { SentTweet } from "../../redux/ducks/tweetDuck/TweetActions";
import { useSelector, useDispatch } from "react-redux";
import { Tweet } from "../../models/TweetModel";

function TweetForm(props: any) {
	const dispatch = useDispatch();

	const [twitterTextContent, setTwitterTextContent] = useState("");
	const [tweetPicture, setTweetPicture] = useState("");

	const tweetSuccess = (e: any) => {
		e.preventDefault();
		dispatch(
			SentTweet({
				id: "",
				type: "",
				textContent: twitterTextContent,
				isLiked: false,
				name: "",
				handle: "",
				date: "",
				likedCount: 0,
				picture: tweetPicture,
			})
		);
		e.target.reset();
		props.handleClose();
	};

	return (
		<div className="tweet-form">
			<h1 className="title" style={{ color: "white" }}>
				NEW FORM
			</h1>

			<form onSubmit={tweetSuccess}>
				<input
					onChange={(e) => setTweetPicture(e.target.value)}
					placeholder="pic here"
				/>
				<input
					name="tweet"
					type="text"
					id="tweet-content"
					placeholder="Type here!"
					onChange={(e) => setTwitterTextContent(e.target.value)}
					style={{ color: "black" }}
				/>
				<Button type="submit" style={{ color: "white" }}>
					Send Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetForm;
