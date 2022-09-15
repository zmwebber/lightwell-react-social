import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";
import NavBarOption from "./NavBarOption";
import "./navBarStyle.css";
import TweetButton from "./TweetButton";

// Commented out code is old navbar replaced it to try to make it more compact and tried to removed redunant stuff. Saved old code in comment below.
// TODO: Fix size of navbar horizontally
// TODO: Fix button looking weird (May not be looking weird but does to me)
// TODO: Have tweet button pop up overlay with a same stuff as HomeTweet and have it go away on click outside of the box or on submit

// Johns Comments -
// TODO: Make text bigger
// TODO: Give space between text and icon

// const CustomNavLink: any = styled(NavLink)({
// 	color: "black",
// 	textDecoration: "none",
// 	display: "flex",
// 	flexWrap: "wrap",
// 	margin: "10px",
// });

export default function NavBar() {
	return (
		<div className="navbar">
			<TwitterIcon className="twitterIcon" />
			<NavLink to="/">
				<NavBarOption active Icon={HomeOutlinedIcon} text="Home" />
			</NavLink>
			<NavLink to="/explore">
				<NavBarOption Icon={TagOutlinedIcon} text="Explore" />
			</NavLink>
			<NavLink to="/notifications">
				<NavBarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
			</NavLink>
			<NavLink to="/messages">
				<NavBarOption Icon={EmailOutlinedIcon} text="Messages" />
			</NavLink >
			<NavLink to="/bookmarks">
				<NavBarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
			</NavLink >
			<NavLink to="/lists">
				<NavBarOption Icon={ListAltOutlinedIcon} text="Lists" />
			</NavLink >
			<NavLink to="/profile">
				<NavBarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
			</NavLink>
			<NavLink to="/more">
				<NavBarOption Icon={PendingOutlinedIcon} text="More" />
			</NavLink>

			<TweetButton />
			{/* <ul className="icons">
				<li>
					<TwitterIcon />
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
					<CustomNavLink to="/profile">
						<PermIdentityOutlinedIcon /> Profile
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink to="/more">
						<PendingOutlinedIcon /> More
					</CustomNavLink>
				</li>
				<TweetButton variant="contained">Tweet</TweetButton>
			</ul> */}
		</div>
	);
}
