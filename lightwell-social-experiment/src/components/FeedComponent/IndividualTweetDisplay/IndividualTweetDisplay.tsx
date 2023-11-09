// This component needs to access the state's tweet array. It should loop through every tweet in the array to create the Feed
import { Tweet } from "../../../models/TweetModel";
import defaultProfilePic from "../../../app/images/default-profile-pic.jpeg";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Box, IconButton, Modal, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { deleteTweet } from "../../../api/TweetApi";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutline"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { getFeed } from "../../../api/TweetApi";
import timeCalculator from "../../../app/shared/timeConverter";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { addNewFavoritedInteraction,	deleteFavoritedInteraction,	getFavoritedInteractionsByTweetId } from "../../../api/FavoritesApi";
import TweetForm from "../../FormComponent/TweetForm";
import AppStyle from "../../../App.module.scss"
import ShareIcon from "@mui/icons-material/Share";
import { Interaction } from "../../../models/InteractionsModel";
import { addNewRetweetInteraction, deleteRetweetInteraction, getRetweetInteractionsByTweetId } from "../../../api/RetweetsApi";
import styles from "./individualTweetDisplayStyle.module.scss";

export default function IndividualTweetDisplay(tweet: Tweet) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [favoriteCount, setFavoriteCount] = React.useState<number>();
	const [retweetCount, setRetweetCount] = React.useState<number>();
	const [commentCount, setCommentCount] = React.useState<number>();
	const [likedByUser, setLikedByUser] = React.useState<boolean>(false);
	const [retweetedByUser, setRetweetedByUser] = React.useState<boolean>(false);
	const [favoriteColor, setFavoriteColor] = React.useState<string>("grey");
	const [retweetColor, setRetweetColor] = React.useState<string>("grey");
	const [refresh, setRefresh] = React.useState<boolean>(false);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
	const open = Boolean(anchorEl);

	const store = useStore();
	const state: any = store.getState();

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCommentModalOpen = () => {
		setModalOpen(true);
	}

	const handleCommentModalClose = () => {
		setModalOpen(false);
	}

	const handleDelete = (tweet: Tweet) => {
		const matchedTweet = state.feed.Tweets.filter(
			(t: Tweet) => t._id === tweet._id
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

	const handleFavoritedInteraction = (tweet: Tweet) => {
		let interaction: Interaction = {
			tweetId: tweet._id,
			userId: state.user.profile._id,
		};

		let action = null;

		if (likedByUser) {
			action = deleteFavoritedInteraction(interaction);
		} else {
			action = addNewFavoritedInteraction(interaction);
		}

		store.dispatch(action)
			.then(() => {
				setRefresh(true)
			})
			.catch((error: any) => {
			console.log(error);
		});
	};

	const handleRetweetInteraction = (tweet: Tweet) => {
		let interaction: Interaction = {
			tweetId: tweet._id,
			userId: state.user.profile._id,
		};

		let action = null;

		if (retweetedByUser === true) {
			action = deleteRetweetInteraction(interaction);
		} else {
			action = addNewRetweetInteraction(interaction);
		}

		store.dispatch(action)
			.then(() => {
				setRefresh(true)
			})
			.catch((error: any) => {
			console.log(error);
		});
	};

	async function getFavoritedInteractions() {
		let res = await getFavoritedInteractionsByTweetId(tweet._id, state.user.profile._id);
		try {
			let isTweetLikedByUser = res.likedByUser	
			setFavoriteCount(res.count);
		
			if (isTweetLikedByUser === "true")
			{
				setFavoriteColor("red")		
				setLikedByUser(true)
			} else
			{
				setFavoriteColor("grey")
				setLikedByUser(false)
			}
		} catch(e){
			console.log(e);
		}
	};

	const goToTweetReplies = (tweet: Tweet) => {
		window.location.href = "/replies/" + tweet._id
	};

	async function getRetweetInteractions() {
		let res = await getRetweetInteractionsByTweetId(tweet._id, state.user.profile._id);
		
		try {
			let isTweetRetweetedByUser = res.retweetedByUser
			setRetweetCount(res.count)

			if (isTweetRetweetedByUser === "true")
			{
				setRetweetColor("green")
				setRetweetedByUser(true);
			} else 
			{
				setRetweetColor("grey")
				setRetweetedByUser(false)
			}
		} catch(e){
			console.log(e);
		}
	};

	function countComments(tweet: Tweet) {
		var commentCount = 0;
		state.feed.Tweets.filter((t:Tweet) => {
			if(t.in_reply_to_status_id === tweet._id) {
				commentCount++;
			}
		})
		setCommentCount(commentCount);
	}

	const userLoggedIn = (tweet: Tweet) => {
		if(state.user.profile._id === tweet.user._id){
			setIsLoggedIn(true);
		}
	};

	useEffect(() => {
		getRetweetInteractions();
		getFavoritedInteractions();
		countComments(tweet);
		userLoggedIn(tweet);
		setRefresh(false);
	}, [refresh]);

	// @TODO https://reactrouter.com/en/main
	// https://github.com/lagunovsky/redux-react-router
	// load component, raise action to initialize (get profile data from state or fetch user from url)

	const redirectToProfile = (tweet: Tweet): any => {
		window.location.href = "/profile/" + tweet.user.screen_name;
	};

	function parseUserJSON(tweet: Tweet): any {
		return tweet.user.name + " @" + tweet.user.screen_name;
	}

	const calculateElevation: any = ((tweet: Tweet, hasReplyStatus: Boolean) => {
		let elevation = 5;
		if (hasReplyStatus === true && elevation > 0) {
			elevation -= 3
			let nextTweetId = tweet.in_reply_to_status_id;
			let nextTweet: Tweet = state.feed.Tweets.filter((t: Tweet) => t._id === nextTweetId) 
			calculateElevation(nextTweet, nextTweet.is_reply_status);
		} 
			return elevation;
	});

	return (
		<Paper elevation={calculateElevation(tweet, tweet.is_reply_status)}>

		<Card 
			sx={{
				gap: 2,
				color: "black",
				borderRadius: 0,
				marginBottom: "10px"
			}}
			>

			<CardHeader
				avatar={
					<img
					className={AppStyle.profilePicture}
					alt="profile-pic"
					src={defaultProfilePic}
					//TODO: show user's profile picture
					style={{ width: "5vw", height: "5vh" }}
					onClick={() => redirectToProfile(tweet)}
					></img>
				}
				action={
					<div>
						{isLoggedIn && <IconButton
							aria-label="settings"
							id="demo-positioned-button"
							aria-controls={open ? "demo-positioned-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
							>
							<MoreVertIcon sx={{ color: "black" }} />
						</IconButton>}
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
				title={parseUserJSON(tweet) + " " + timeCalculator(tweet.createdAt)}
				subheader=""
				/>
			{tweet.links.url !== `` && tweet.links.url !== undefined && (
				<CardMedia component="img" image={`${tweet.links.url}`} alt="media" />
				)}

			<CardContent className={styles.root} onClick={() => goToTweetReplies(tweet)}>
				<Typography variant="body2">{tweet.text}</Typography>
			</CardContent>

			{/* @TODO: Dropdown on retweet click where it's straight retweet vs retweet with comment. */}
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				
			<div>
      <Button sx={{color: "grey"}} onClick={handleCommentModalOpen} startIcon={<ChatBubbleOutlineRoundedIcon />}>{ commentCount }</Button>
      <Modal
        open={modalOpen}
        onClose={handleCommentModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
				>
        <Box sx={style}>
          <TweetForm isReplyStatus={true} statusId={tweet._id} userId={tweet.user._id}/>
        </Box>
      </Modal>
    	</div>
				<Button
					onClick={() => {
						handleRetweetInteraction(tweet);
					}}
					sx={{
						color: retweetColor,
					}}
					startIcon={<RepeatIcon />}
					> { retweetCount } </Button>

				<Button
					onClick={() => {
						handleFavoritedInteraction(tweet)
					}}	
					startIcon={<FavoriteIcon />}
					className={favoriteColor === "red" ? styles.red : styles.grey}
					> { favoriteCount } </Button>

				<Button sx={{ color: "grey" }} startIcon={<ShareIcon />}></Button>
			</div>
			{/* </CardActions> */}
		</Card>
		</Paper>	 
	);
}
