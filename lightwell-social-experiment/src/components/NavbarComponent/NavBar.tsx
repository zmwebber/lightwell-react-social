import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { styled } from "@mui/system";
import { Button, Modal } from "@mui/material";
import TweetForm from "../TweetFormComponent/TweetForm";
import { useSelector, useDispatch } from "react-redux";
import { tweetFormLoading } from "../../redux/ducks/tweetFormDuck/TweetFormActions";
//import { TwitterBlue } from "../../colorConstants";

// TODO: Make text bigger
// TODO: Give space between text and icon

const CustomNavLink: any = styled(NavLink)({
	color: "white",
	textDecoration: "none",
	display: "flex",
	flexWrap: "wrap",
	margin: "10px",
});

const TweetButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	width: 120px;
	color: "primary";
	backgroundColor: "primary";
	shape = RoundedCornerShape(50, 50, 50, 50);
`;

export default function NavBar() {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		dispatch(tweetFormLoading(true));
		setOpen(true);
	};
	const handleClose = () => {
		dispatch(tweetFormLoading(false));
		setOpen(false);
	};

	return (
		<div className="navbar">
			<ul className="icons">
				<li>
					<CustomNavLink to="/">
						<HomeOutlinedIcon /> Home
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/explore">
						<TagOutlinedIcon /> Explore
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/notifications">
						<NotificationsNoneOutlinedIcon /> Notifications
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/messages">
						<EmailOutlinedIcon /> Messages
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/bookmarks">
						<BookmarkBorderOutlinedIcon /> Bookmarks
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/lists">
						<ListAltOutlinedIcon /> Lists
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/profile">
						<PermIdentityOutlinedIcon /> Profile
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/more">
						<PendingOutlinedIcon /> More
					</CustomNavLink>
				</li>

				<div className="tweet-form">
					<TweetButton onClick={handleOpen}>TWEET</TweetButton>

					<Modal
						open={open}
						onClose={handleClose}
						className="modal"
						//aria-describedby="parent-modal-description"
					>
						<TweetForm handleClose={handleClose} />
					</Modal>
				</div>
			</ul>
		</div>
	);
}
