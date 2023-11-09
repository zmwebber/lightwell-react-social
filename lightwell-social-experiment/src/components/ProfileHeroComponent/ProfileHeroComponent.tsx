import { useEffect, useState } from "react";
import ProfileHeroComponentStyle from "./profileHeroComponentStyle.module.scss";
import { User } from "../../models/ProfileModel";
import { getBase64DataUrl } from "../../app/functions/profilePictureBase64Converter";

// Outline: Profile Page should filter out tweets by user.
// if navigating to a user's profile, all tweets in the tweet feed should be of that user or retweeted by that user.
// Clicking a user's name should direct you to their profile page
// user's name should be passed as props and filter DB of tweets to show only the respective users tweets.
// profile page should include banner & user info

function ProfileHeroComponent(props: User) {
	const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | undefined>("");
	const [bannerPhotoPreview, setBannerPhotoPreview] = useState<string | undefined>("");

	useEffect(() => {
		let profilePhotoSource = getBase64DataUrl(props.profile_image);
		setProfilePhotoPreview(profilePhotoSource);

		let bannerPhotoSource = getBase64DataUrl(props.profile_banner);
		setBannerPhotoPreview(bannerPhotoSource);
	}, []);

	return (
		<div className={ProfileHeroComponentStyle.profileHeroContainer}>
			<div className={ProfileHeroComponentStyle.banner}>
				<img src={bannerPhotoPreview} className={ProfileHeroComponentStyle.bannerImage} alt="banner-pic" />
			</div>

			<div className={ProfileHeroComponentStyle.notificationBar}>
				<img src={profilePhotoPreview} className={ProfileHeroComponentStyle.profilePicture} width="300px" height="auto" alt="preview" />
				<div className={ProfileHeroComponentStyle.editButtons}>
				</div>
			</div>
		</div>
	);
}

export default ProfileHeroComponent;
