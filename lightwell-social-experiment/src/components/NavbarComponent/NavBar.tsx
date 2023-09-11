import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { styled } from "@mui/system";
import { Button, Hidden, Modal, SvgIcon } from "@mui/material";
import TweetForm from "../FormComponent/TweetForm";
import { useDispatch, useStore } from "react-redux";
import { toggleLoading } from "../../redux/ducks/post_duck/tweetFormSlice";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TweetButton } from "../../app/shared/buttons";
import Logout from "../LogoutComponent/Logout";
import { Profile } from "../../models/ProfileModel";
import NavBarStyle from "./navBarStyle.module.scss";
import TweetFormStyle from "../FormComponent/tweetFormStyle.module.scss";
import { store } from "../../app/store";

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
				<SvgIcon component={ TwitterIcon } style={{ fontSize: 40 }} />
			</Button>
		</div>
	);
};

export default function NavBar(props: {userTheme: any}) {
	const dispatch = useDispatch();
	const store = useStore();
	const state: any = store.getState();
	const [showText, setShowText] = useState<boolean>(true);
	
	const CustomNavLink: any = styled(NavLink)({
		textDecoration: "none",
		display: "flex",
		flexWrap: "wrap",
		margin: "10px",
		color: (props.userTheme === "light") ? "black" : "white"
	});

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		dispatch(toggleLoading(true));
		setOpen(true);
	};
	const handleClose = () => {
		dispatch(toggleLoading(false));
		setOpen(false);
	};

	useEffect(() => {
		const handleResize = () => {
			if(window.innerWidth <= 768) {
				setShowText(false);
			} else {
				setShowText(true);
			}
		}
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, []);

	return (
		<div className={NavBarStyle.navbarContainer}>
			<ul className={NavBarStyle.icons}>
				<li>
					<CustomNavLink to="/">{NavbarTwitterIconButton()}</CustomNavLink>
				</li>
				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/">
							<HomeOutlinedIcon />
							<Hidden lgDown>
							<div>
								Home
							</div>
						</Hidden>
						</CustomNavLink>
					)}
				</li>

					<li>
					<CustomNavLink to="/explore">
						<TagOutlinedIcon /> 
						<Hidden lgDown>
							<div>
								Explore
							</div>
						</Hidden>
					</CustomNavLink>
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/notifications">
							<NotificationsNoneOutlinedIcon />
							<Hidden lgDown>
							<div>
								Notifications
							</div>
						</Hidden>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/messages">
							<EmailOutlinedIcon />
							<Hidden lgDown>
							<div>
								Messages
							</div>
						</Hidden>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/bookmarks">
							<BookmarkBorderOutlinedIcon />
							<Hidden lgDown>
							<div>
								Bookmarks
							</div>
						</Hidden>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/lists">
							<ListAltOutlinedIcon />
							<Hidden lgDown>
							<div>
								Lists
							</div>
						</Hidden>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/profile">
							<PermIdentityOutlinedIcon />
							<Hidden lgDown>
							<div>
								Profile
							</div>
						</Hidden>
						</CustomNavLink>
					)}
				</li>

				<li>
					{!localStorage.getItem('user') ? (
						<CustomNavLink to="/login">
							<PermIdentityOutlinedIcon />
							<Hidden lgDown>
							<div>
								Login
							</div>
						</Hidden>
						</CustomNavLink>
					) : (
						<CustomNavLink to="/">
							<Logout />
						</CustomNavLink>
					)}
				</li>

				<li>
					<CustomNavLink to="/more">
						<PendingOutlinedIcon />
						<Hidden lgDown>
							<div>
								More
							</div>
						</Hidden>
					</CustomNavLink>
				</li>

				<Hidden lgDown>
					<div className={TweetFormStyle.tweetForm}>
						<TweetButton
							style={{
								backgroundColor: "deepskyblue",
								color: "white",
								marginTop: "12px",
							}}
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
				</Hidden>
			</ul>
		</div>
	);
}
