import { Button } from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

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

export const TweetButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	width: 120px;
	shape = RoundedCornerShape(50, 50, 50, 50);
	margin-bottom: 12px;
`;

export const FollowButton: any = styled(Button)`
	color: black;
	background-color: white;
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	width: 120px;
	shape = RoundedCornerShape(50, 50, 50, 50);
	margin-bottom: 12px;
`;
