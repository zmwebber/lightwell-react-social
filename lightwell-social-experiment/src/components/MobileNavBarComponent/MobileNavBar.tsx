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
import Logout from "../LogoutComponent/Logout";
import NavBarStyle from "./mobileNavBarStyle.module.scss";
import { Box } from "@mui/material";

export default function MobileNavBar(props: {userTheme: any}) {
	
	const CustomNavLink: any = styled(NavLink)({
		textDecoration: "none",
		display: "flex",
		flexWrap: "wrap",
		margin: "10px",
		color: (props.userTheme === "light") ? "black" : "white"
	});

  const styles = {
    backgroundColor: (props.userTheme === "light") ? "#f4f4f4" : "black",
  };

	let name: string = "";

	const userString = localStorage.getItem('user');
	if (userString) {
		let userObject = JSON.parse(userString);
		name = userObject?.screen_name;
		console.log(name); 
	}

	return (
		<Box className={NavBarStyle.navbarContainer} sx={styles}>				
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
					{localStorage.getItem('user') && name !== "" && (
						//@TODO: Fix profile navigation
						<CustomNavLink to={`/profile/${name}`} >
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
							<Logout />
						</CustomNavLink>
					)}
				</li>
		</Box>
	);
}
