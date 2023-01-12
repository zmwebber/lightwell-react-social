import { Button } from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
// import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useDispatch, useStore } from "react-redux";
// import { getFeed } from "../../api/TweetApi";
// import { Tweet } from "../../models/TweetModel";
// import userFavorited from "../../redux/ducks/post_duck/tweetFormSlice";
// import { updateTweet } from "../../api/TweetApi";
import { styled } from "@mui/system";

interface replyCount {
	reply_count: number;
}

export function ReplyButton({ reply_count }: replyCount) {
	return (
		<Button sx={{ color: "grey" }} startIcon={<ChatBubbleOutlineRoundedIcon />}>
			{`${reply_count}`}
		</Button>
	);
}

// interface retweetCount {
// 	retweet_count: number;
// }

// export function RetweetButton({ retweet_count }: retweetCount) {
// 	return (
// 		<Button
// 			sx={{ color: "grey" }}
// 			startIcon={<RepeatIcon />}
// 		>{`${retweet_count}`}</Button>
// 	);
// }

// interface favoriteCount {
// 	favorited: boolean;
// 	favorite_count: number;
// 	id: string;
// }
//
// export function FavoriteButton(tweet: Tweet) {
// 	return (
// 		<Button
// 			onClick={() => {
// 				handleUpdate(tweet);
// 			}}
// 			sx={{ color: tweet.favorited === true ? "red" : "grey" }}
// 			startIcon={<FavoriteIcon />}
// 		>{`${tweet.favorite_count}`}</Button>
// 	);
// }

// function ToggleIsFavorited(tweet: Tweet) {
//     return(

//         console.log("favorite button pressed");
//         const store = useStore();

//         const action = updateTweet(tweet);

//         store
// 		.dispatch(action)
// 		.then(() => {
//             store.dispatch(getFeed());
// 		})
// 		.catch((error: any) => {
//             console.log(error);
// 		});
//         )
//     }

export const TweetButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	width: 120px;
	shape = RoundedCornerShape(50, 50, 50, 50);
	margin-bottom: 12px;
	
`;
