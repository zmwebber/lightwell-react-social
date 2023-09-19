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
import NavBarStyle from "./mobileNavBarStyle.module.scss";

const TweetModal: any = styled(Modal)({
	overflow: "visible",
	maxWidth: "50%",
	maxHeight: "25%",
	border: "2px solid #000",
	borderRadius: "15px",
	textAlign: "center"
})

export default function MobileNavBar(props: {userTheme: any}) {
	const dispatch = useDispatch();
	
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

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	return (
		<div className={NavBarStyle.navbarContainer}>
			{/* <ul className={NavBarStyle.icons}> */}
				
				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/">
							<HomeOutlinedIcon />
								<div className={NavBarStyle.navBarText}>
									Home
								</div>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/notifications">
							<NotificationsNoneOutlinedIcon />
								<div className={NavBarStyle.navBarText}>
									Notifications
								</div>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/messages">
							<EmailOutlinedIcon />
								<div className={NavBarStyle.navBarText}>
									Messages
								</div>
						</CustomNavLink>
					)}
				</li>

				<li>
					{localStorage.getItem('user') && (
						<CustomNavLink to="/profile">
							<PermIdentityOutlinedIcon />
								<div className={NavBarStyle.navBarText}>
									Profile
								</div>
						</CustomNavLink>
					)}
				</li>

				<li>
					{!localStorage.getItem('user') ? (
						<CustomNavLink to="/login">
							<PermIdentityOutlinedIcon />
								<div className={NavBarStyle.navBarText}>
									Login
								</div>
						</CustomNavLink>
					) : (
						<CustomNavLink to="/">
							{/* <div className={NavBarStyle.navBarText}> */}
								<Logout />
							{/* </div> */}
						</CustomNavLink>
					)}
				</li>
			{/* </ul> */}
		</div>
	);
}
