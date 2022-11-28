import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import {
	tweetFormLoading,
	tweetFormSubmitted,
} from "../../redux/ducks/tweetFormDuck/TweetFormActions";
import { useDispatch } from "react-redux";
import { Tweet } from "../../models/TweetModel";
import UUID from "react-uuid";

function TweetForm(props: any) {
	const dispatch = useDispatch();

	const [twitterTextContent, setTwitterTextContent] = useState("");
	const [tweetPicture, setTweetPicture] = useState("");

	const tweetSuccess = (e: any) => {
		e.preventDefault();

		dispatch(
			tweetFormSubmitted({
				id: UUID().toString(),
				// type: "",
				textContent: twitterTextContent,
				isLiked: false,
				name: "",
				handle: "",
				profilePicture: "",
				date: "",
				likedCount: 0,
				contentPicture: tweetPicture,
			})
		);
		e.target.reset();

		if (props.className == "Modal") {
			props.handleClose();
		}
	};

	return (
		<div className="tweet-form" style={{ backgroundColor: "white" }}>
			<form onSubmit={tweetSuccess}>
				<input
					onChange={(e) => setTweetPicture(e.target.value)}
					placeholder="pic here"
				/>
				<input
					name="tweet"
					type="text"
					id="tweet-content"
					placeholder="What's Happening?"
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
