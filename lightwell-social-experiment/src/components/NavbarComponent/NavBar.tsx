import { NavLink } from "react-router-dom";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//TODO: Make a styled nav button for reusability
//TODO: Align Text next to icon (baseline / )

export default function NavBar() {
	return (
		<div className="navbar">
			<ul className="icons">
				<li className="home">
					<NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
						<HomeOutlinedIcon /> <span>Home</span>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/explore"
						style={{ color: "white", textDecoration: "none" }}
					>
						<TagOutlinedIcon /> Explore
					</NavLink>
				</li>

				<li>
					<NavLink to="/notifications" style={{ color: "white" }}>
						<NotificationsNoneOutlinedIcon /> Notifications
					</NavLink>
				</li>

				<li>
					<NavLink to="/messages" style={{ color: "white" }}>
						<EmailOutlinedIcon />
					</NavLink>
				</li>

				<li>
					<NavLink to="/bookmarks" style={{ color: "white" }}>
						<BookmarkBorderOutlinedIcon />
					</NavLink>
				</li>

				<li>
					<NavLink to="/lists" style={{ color: "white" }}>
						<ListAltOutlinedIcon />
					</NavLink>
				</li>

				<li>
					<NavLink to="/profile" style={{ color: "white" }}>
						<PermIdentityOutlinedIcon />
					</NavLink>
				</li>

				<li>
					<NavLink to="/more" style={{ color: "white" }}>
						<PendingOutlinedIcon />
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
