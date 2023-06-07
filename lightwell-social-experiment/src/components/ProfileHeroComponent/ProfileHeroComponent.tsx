import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import { styled } from "@mui/system";
import { Box, Button, Modal, Typography } from "@mui/material";
import image from "../../app/images/banner-blur.jpg";
import profilePicDefault from "../../app/images/default-profile-pic.jpeg";
import { getMedia } from "../../api/MediaApi";
import ProfileHeroComponentStyle from "./profileHeroComponentStyle.module.scss";
import UserRegistrationForm from "../LoginComponent/UserRegistrationForm";
import Media from "../MediaComponent/Media";

// Outline: Profile Page should filter out tweets by user.
// if navigating to a user's profile, all tweets in the tweet feed should be of that user or retweeted by that user.
// Clicking a user's name should direct you to their profile page
// user's name should be passed as props and filter DB of tweets to show only the respective users tweets.
// profile page should include banner & user info

const EditProfileButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	shape = RoundedCornerShape(
		50,50,50,50
	);
	background-color: white;
	outline: auto;
	outline-style: solid;
	outline-width: 2px;
    border-color: #555;
`;

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function ProfileHeroComponent() {
	const [preview, setPreview] = useState("");
	const [open, setOpen] = React.useState(false);

	function loadPreview() {
		getMedia().then((res) => {
			let length = res.data.media.length - 1;
			let buf = res.data.media[length].data
			//need to replace the static image/png with the correct mime/type from the res.data.media[x].contentType
			let src = `data:image/png;base64,` + buf;

			console.log(src);
			setPreview(buf);
		});
	}

	useEffect(() => {
		loadPreview();
	}, []);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className={ProfileHeroComponentStyle.profileHeroContainer}>
			<div className={ProfileHeroComponentStyle.banner}>
				<img src={image} className={ProfileHeroComponentStyle.bannerImage} alt="banner-pic" />
			</div>

			<div className={ProfileHeroComponentStyle.notificationBar}>
				<img src={"data:image/png;base64," + preview} className={ProfileHeroComponentStyle.profilePicture} width="300px" height="auto" alt="preview" />
				<EditProfileButton variant="contained" onClick={handleOpen}>
					Edit Profile
				</EditProfileButton>
				{open &&
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							Update profile picture
							<UserRegistrationForm profileStatus="edit" onClose={handleClose} />
						</Box>
					</Modal>
				}
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
