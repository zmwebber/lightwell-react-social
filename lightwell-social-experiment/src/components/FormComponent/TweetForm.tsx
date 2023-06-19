import { Box, Button, Input, Modal } from "@mui/material";
import React, { useState } from "react";
import { myTweets } from "../../redux/ducks/post_duck/tweetFormSlice";
import { useStore } from "react-redux";
import { Tweet } from "../../models/TweetModel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { addTweet, getFeed } from "../../api/TweetApi";
import { useAppSelector } from "../../app/hooks/hooks";
import type { } from "redux-thunk/extend-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import defaultProfilePic from "../../app/images/default-profile-pic.jpeg";
import { TweetButton } from "../../app/shared/buttons";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'; import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss"
import TweetFormStyle from "./tweetFormStyle.module.scss";
import Media from "../MediaComponent/Media";
// @TODO: Data validation -- user shouldn't be allowed to insert empty string.
// user shouldn't be allowed to submit a tweet of only spaces.
// https://mongoosejs.com/docs/validation.html

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function TweetForm(props: any) {
	const store = useStore();
	const userState = useSelector((state: RootState) => state.user);
	const userProfile = userState.profile;
	const [submitted, setSubmitted] = React.useState("");
	const [tweetContent, setTweetContent] = useState("");
	const [mediaOpen, setMediaOpen] = useState(false);

	const handleMediaOpen = () => setMediaOpen(true);
	const handleMediaClose = () => setMediaOpen(false);

	const [tweet, setTweet] = useState<Tweet>({
		_id: "",
		createdAt: new Date(),
		user: {
			_id: userProfile?._id ?? '',
			name: userProfile?.name ?? '',
			screen_name: userProfile?.screen_name ?? ''
		},
		text: "",
		source: "Twitter Clone Web App",
		truncated: false,
		is_reply_status: props.isReplyStatus,
		in_reply_to_status_id: props.statusId,
		in_reply_to_user_id: props.userId,
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
		image: null
	});
	const tweetSuccess = (e: any) => {
		e.preventDefault();

		if (tweetContent !== "") {
			tweet.text = tweetContent;
			tweet.createdAt = new Date();

			const action = addTweet(tweet);

			store
				.dispatch(action)
				.unwrap()
				.then((response) => {
					store.dispatch(getFeed());
				})
				.catch((error: any) => {
					console.log(error);
				});
			e.target.reset();
		}

		if (tweetContent === "") {
			setSubmitted("true");
		}

		if (props.className === "modal") {
			props.handleClose();
		}
	};

	return (
		<div className={TweetFormStyle.tweetForm} style={{ backgroundColor: "white" }}>
			<form onSubmit={tweetSuccess}>
				<Grid container direction="row" className={TweetFormStyle.container}>
					<Grid item>
						<img
							className={AppStyle.profilePicture}
							alt="profile-pic"
							src={defaultProfilePic}
							style={{ width: "5vw", height: "5vh" }}
						></img>
					</Grid>
					<Grid item xs>
						<TextField
							sx={{ input: { color: "black" } }}
							name="tweet"
							type="text"
							id="tweet-content"
							placeholder="What's Happening?"
							fullWidth={true}
							margin="normal"
							variant="standard"
							onChange={(e) => setTweetContent(e.target.value)}
							error={tweetContent === "" && submitted === "true"}
							helperText={
								tweetContent === "" && submitted === "true"
									? "Text is required"
									: ""
							}
						/>
					</Grid>
					<InsertPhotoOutlinedIcon onClick={handleMediaOpen} className={TweetFormStyle.imageUploadIcon} />
					{mediaOpen &&
						<Modal
							open={mediaOpen}
							onClose={handleMediaClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={style}>
								Upload an Image
								<Media onClose={handleMediaClose} photoType={"tweetPhoto"}
								/>
							</Box>
						</Modal>
					}
				</Grid>

				<TweetButton
					type="submit"
					className={TweetFormStyle.tweetButton}
					style={{ backgroundColor: "deepskyblue", color: "white" }}
				>
					TWEET
				</TweetButton>
			</form>
		</div>
	);
}

export default TweetForm;
