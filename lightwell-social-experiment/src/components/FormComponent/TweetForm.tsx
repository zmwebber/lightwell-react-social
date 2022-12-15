import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { myTweets } from "../../redux/ducks/post_duck/tweetFormSlice";
import {  useStore  } from "react-redux";
import { Tweet } from "../../models/TweetModel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./tweetFormStyle.css";
import { addTweet, getFeed } from "../../api/TweetApi";
import { useAppSelector } from "../../app/hooks/hooks";
import type {} from 'redux-thunk/extend-redux';


function TweetForm(props: any) {
	const store = useStore();
	const feed = useAppSelector(myTweets);

	const [twitterTextContent, setTwitterTextContent] = useState("");
	// const [tweetPicture, setTweetPicture] = useState("");
	const [tweet, setTweet] = useState<Tweet>({
		id: '',
    createdAt:  new Date(),
    user: '',
    text: '',
    source: 'Twitter Clone Web App',
    truncated: false,
    is_reply_status: false,
    in_reply_to_status_id: '',
    in_reply_to_user_id: '',
    reply_count: 0,
    is_quote_status: false,
    quoted_status_id: '',
    is_retweeted_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
     links: {
        indicies: [0] ,
        url: '',
        text: '',
    },
    hashtags: {
        indicies: [0],
        text: ''
	  }
});
	const tweetSuccess = (e: any) => {
		e.preventDefault();
		tweet.text = twitterTextContent;
		tweet.createdAt = new Date();
		const action = addTweet(tweet);
  
	  store.dispatch(action)
		.unwrap()
		.then((response) => {			
			store.dispatch(getFeed());
		  })		
		.catch((error: any) => {
		 console.log(error);
		});
		e.target.reset();

		if (props.className == "modal") {
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
					<Button type="submit">Send Tweet</Button>
				</Grid>
			</form>
		</div>
	);
}

export default TweetForm;
