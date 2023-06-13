import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, Modal } from "@mui/material";
import image from "../../app/images/banner-blur.jpg";
import { getMedia } from "../../api/MediaApi";
import ProfileHeroComponentStyle from "./profileHeroComponentStyle.module.scss";
import UserRegistrationForm from "../LoginComponent/UserRegistrationForm";
import Media from "../MediaComponent/Media";
import { User } from "../../models/ProfileModel";
import { useAppSelector } from "../../app/hooks/hooks";

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
	const [openImage, setOpenImage] = React.useState(false);
	const user: User = useAppSelector(state => state.user.profile)

	useEffect(() => {
		let src = `data:` + user.profile_image?.contentType + `;base64,` + user.profile_image?.data;
		setPreview(src);
	}, [user]);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleMediaOpen = () => setOpenImage(true);
	const handleMediaClose = () => setOpenImage(false);

	return (
		<div className={ProfileHeroComponentStyle.profileHeroContainer}>
			<div className={ProfileHeroComponentStyle.banner}>
				<img src={image} className={ProfileHeroComponentStyle.bannerImage} alt="banner-pic" />
			</div>

			<div className={ProfileHeroComponentStyle.notificationBar}>
				<img src={preview} className={ProfileHeroComponentStyle.profilePicture} width="300px" height="auto" alt="preview" />
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
							Update Profile
							<UserRegistrationForm profileStatus="edit" onClose={handleClose} />
						</Box>
					</Modal>
				}
				<EditProfileButton variant="contained" onClick={handleMediaOpen}>
					Edit Image
				</EditProfileButton>
				{openImage &&
					<Modal
						open={openImage}
						onClose={handleMediaClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							Update profile picture
							<Media onClose={handleMediaClose} />
						</Box>
					</Modal>
				}
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
