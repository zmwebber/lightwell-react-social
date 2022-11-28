import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import {
	tweetFormLoading,
	tweetFormSubmitted,
} from "../../redux/ducks/tweetFormDuck/TweetFormActions";
import { useDispatch } from "react-redux";
import { Tweet } from "../../models/TweetModel";
import UUID from "react-uuid";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

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
				<Grid container direction="column" className="container">
					<Grid item>
						<TextField
							name="tweet"
							type="text"
							id="tweet-content"
							placeholder="What's Happening?"
							onChange={(e) => setTwitterTextContent(e.target.value)}
						/>
					</Grid>
					<Grid item>
						<TextField
							onChange={(e) => setTweetPicture(e.target.value)}
							placeholder="pic here"
						/>
					</Grid>

					<Button type="submit">Send Tweet</Button>
				</Grid>
			</form>
		</div>
	);
}

export default TweetForm;
