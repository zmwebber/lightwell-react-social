import TweetFeed from "../../components/FeedComponent/TweetFeed";
import NavBar from "../../components/NavbarComponent/NavBar";
import ProfileView from "../../components/ProfileComponent/Profile";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";

export function ProfilePage() {
	// @TODO: Remove <Profile/> from HomePage.tsx

	return (
		<div className="home-page">
			<div id="left" className="navbar-position">
				<NavBar />
			</div>

			<div id="right" className="yml-position">
				<YouMightLike />
			</div>

			<div className="center">
				<div id="center" className="profile-position">
					<ProfileView />
				</div>

				<div id="center" className="tweetFeed-position">
					<TweetFeed />
				</div>
			</div>
		</div>
	);
}
