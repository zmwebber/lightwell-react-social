import { Button } from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

interface retweetCount {
	retweet_count: number;
}

export function RetweetButton({ retweet_count }: retweetCount) {
	return (
		<Button
			sx={{ color: "grey" }}
			startIcon={<RepeatIcon />}
		>{`${retweet_count}`}</Button>
	);
}

interface favoriteCount {
	favorite_count: number;
	favorited: boolean;
}

export function FavoriteButton({ favorite_count, favorited }: favoriteCount) {
	return (
		<Button
			onClick={() => {
				toggleIsFavorited({ favorite_count, favorited });
			}}
			sx={{ color: favorited === true ? "red" : "grey" }}
			startIcon={<FavoriteIcon />}
		>{`${favorite_count}`}</Button>
	);
}

function toggleIsFavorited({ favorite_count, favorited }: favoriteCount) {
	// Tweet property tweet.favorited
	console.log("favorite button pressed");

	return favorite_count + 1 && !favorited;
}
