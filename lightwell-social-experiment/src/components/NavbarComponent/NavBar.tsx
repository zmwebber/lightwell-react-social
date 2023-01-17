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
import { Button, Modal, SvgIcon } from "@mui/material";
import TweetForm from "../FormComponent/TweetForm";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "../../redux/ducks/post_duck/tweetFormSlice";
import "./navBarStyle.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TweetButton } from "../../app/shared/buttons";
import { Profile } from "../../models/ProfileModel";
import { useParams } from "react-router-dom";
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

const TwitterButton = () => {
	return (
		<div>
			<Button className="twitter-icon">
				<SvgIcon component={TwitterIcon} />
			</Button>
		</div>
	);
};

export default function NavBar() {
	const dispatch = useDispatch();

	const name = useSelector((state: Profile) => state.name);

	const { username } = useParams();

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		dispatch(toggleLoading(true));
		setOpen(true);
	};
	const handleClose = () => {
		dispatch(toggleLoading(false));
		setOpen(false);
	};

	return (
		<div className="navbar">
			<ul className="icons">
				<li>
					<CustomNavLink to="/">{TwitterButton()}</CustomNavLink>
				</li>
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
					{/** @TODO If user is logged in, show this link
					 * If user is not logged in, remove link
					 * If Profile page is clicked, route url to /profile/ + {user.name}
					 */}

					<CustomNavLink to="/profile/:username">
						<PermIdentityOutlinedIcon /> Profile
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/more">
						<PendingOutlinedIcon /> More
					</CustomNavLink>
				</li>

				<div className="tweet-form">
					<TweetButton
						style={{ backgroundColor: "deepskyblue", color: "white" }}
						onClick={handleOpen}
					>
						TWEET
					</TweetButton>

					<Modal
						open={open}
						onClose={handleClose}
						className="modal"
						//aria-describedby="parent-modal-description"
					>
						<TweetForm className="modal" handleClose={handleClose} />
					</Modal>
				</div>
			</ul>
		</div>
	);
}
