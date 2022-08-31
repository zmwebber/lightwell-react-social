import { Button, Input } from "@mui/material";
import React from "react";

function TweetForm() {
	return (
		<div className="tweet-form">
			<h1 className="title" style={{ color: "white" }}>
				NEW FORM
			</h1>

			<form>
				<Input
					name="tweet"
					type="text"
					id="tweet-content"
					style={{ color: "white" }}
				/>
				<Button type="submit" style={{ color: "white" }}>
					TWEET
				</Button>
			</form>
		</div>
	);
}

export default TweetForm;
