import { NavLink } from "react-router-dom";
import { useState } from "react";
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
import { useSelector, useDispatch, useStore } from "react-redux";
import { toggleLoading } from "../../redux/ducks/post_duck/tweetFormSlice";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TweetButton } from "../../app/shared/buttons";
import Logout from "../LogoutComponent/Logout";
import { Profile } from "../../models/ProfileModel";
import NavBarStyle from "./navBarStyle.module.scss";
import TweetFormStyle from "../FormComponent/tweetFormStyle.module.scss";

const CustomNavLink: any = styled(NavLink)({
	color: "black",
	textDecoration: "none",
	display: "flex",
	flexWrap: "wrap",
	margin: "10px",
});

const TweetModal: any = styled(Modal)({
	overflow: "visible",
	maxWidth: "50%",
	maxHeight: "25%",
	border: "2px solid #000",
	borderRadius: "15px",
	textAlign: "center"
})

const NavbarTwitterIconButton = () => {
	return (
		<div>
			<Button>
				<SvgIcon component={TwitterIcon} style={{ fontSize: 40 }} />
			</Button>
		</div>
	);
};

export default function NavBar() {
	const dispatch = useDispatch();
	const store = useStore();
	const state: any = store.getState();


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
		<div className={NavBarStyle.navbarContainer}>
			<ul className={NavBarStyle.icons}>
				<li>
					<CustomNavLink to="/">{NavbarTwitterIconButton()}</CustomNavLink>
				</li>
				<li>
					{state.user.loginSuccess === true &&
						<CustomNavLink to="/">
							<HomeOutlinedIcon /> Home
						</CustomNavLink>
					}
				</li>

				<li>
					<CustomNavLink to="/explore">
						<TagOutlinedIcon /> Explore
					</CustomNavLink>
				</li>

				<li>
					{state.user.loginSuccess === true &&
						<CustomNavLink to="/notifications">
							<NotificationsNoneOutlinedIcon /> Notifications
						</CustomNavLink>
					}
				</li>

				<li>
					{state.user.loginSuccess === true &&
						<CustomNavLink to="/messages">
							<EmailOutlinedIcon /> Messages
						</CustomNavLink>
					}
				</li>

				<li>
					{state.user.loginSuccess === true &&
						<CustomNavLink to="/bookmarks">
							<BookmarkBorderOutlinedIcon /> Bookmarks
						</CustomNavLink>
					}
				</li>

				<li>
					{state.user.loginSuccess === true &&
						<CustomNavLink to="/lists">
							<ListAltOutlinedIcon /> Lists
						</CustomNavLink>
					}
				</li>

				<li>
					{state.user.loginSuccess &&
						<CustomNavLink to="/profile">
							<PermIdentityOutlinedIcon /> Profile
						</CustomNavLink>
					}
				</li>

				<li>
					{state.user.loginSuccess === false ?
						<CustomNavLink to="/login">
							<PermIdentityOutlinedIcon /> Login
						</CustomNavLink> :
						<CustomNavLink to="/">
							<Logout />
						</CustomNavLink>
					}
				</li>

				<li>
					<CustomNavLink to="/more">
						<PendingOutlinedIcon /> More
					</CustomNavLink>
				</li>

				<div className={TweetFormStyle.tweetForm}>
					<TweetButton
						style={{ backgroundColor: "deepskyblue", color: "white", marginTop: "12px" }}
						onClick={handleOpen}
					>
						TWEET
					</TweetButton>

					<TweetModal
						open={open}
						onClose={handleClose}
						className={NavBarStyle.modal}
						closeAfterTransition
					>
						<TweetForm className={TweetFormStyle.tweetForm} handleClose={handleClose} />
					</TweetModal>
				</div>
			</ul>
		</div>
	);
}
