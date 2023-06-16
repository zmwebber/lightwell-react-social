import { useEffect, useState } from "react";
import ProfileHeroComponentStyle from "./profileHeroComponentStyle.module.scss";
import { User } from "../../models/ProfileModel";
import { useAppSelector } from "../../app/hooks/hooks";

// Outline: Profile Page should filter out tweets by user.
// if navigating to a user's profile, all tweets in the tweet feed should be of that user or retweeted by that user.
// Clicking a user's name should direct you to their profile page
// user's name should be passed as props and filter DB of tweets to show only the respective users tweets.
// profile page should include banner & user info

function ProfileHeroComponent() {
	const [profilePhotoPreview, setProfilePhotoPreview] = useState("");
	const [bannerPhotoPreview, setBannerPhotoPreview] = useState("");
	const user: User = useAppSelector(state => state.user.profile)

	useEffect(() => {
		let profilePhotoSource = `data:` + user.profile_image?.contentType + `;base64,` + user.profile_image?.data;
		console.log(profilePhotoSource)
		setProfilePhotoPreview(profilePhotoSource);

		let bannerPhotoSource = `data:` + user.profile_banner?.contentType + `;base64,` + user.profile_banner?.data;
		console.log(bannerPhotoSource)
		setBannerPhotoPreview(bannerPhotoSource);

	}, [user]);

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
