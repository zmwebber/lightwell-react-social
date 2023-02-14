import { useStore } from "react-redux";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileComponent/Profile";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import "./profilePageStyle.css";

export function ProfilePage() {
	// @TODO: Remove <Profile/> from HomePage.tsx
	const store = useStore();
	const state: any = store.getState();

	return (
		<div className="home-page">
			<div id="left" className="navbar-position">
				<NavBar />
			</div>

			<div id="right" className="yml-position">
				<YouMightLike />
			</div>

			<div className="center">
				<h2 style={{ marginBottom: '5px' }}>{state.user.profile.name}</h2>
				<p style={{ marginTop: '0px' }}>{state.user.profile.statuses_count} tweet(s)</p>

				<div className="hero">
					<Profile />
				</div>

				<div className="profile-information">
					{/* <ProfileInformation /> */}
					{state.user.profile.name} <br />
					@{state.user.profile.screen_name} <br />
					Joined: {state.user.profile.createdAt} <br />
					{state.user.profile.friends_count} Following <br />
					{state.user.profile.followers_count} Followers <br />
				</div>

				<div className="tab-selector">
					<span>Tweets tab</span>&nbsp;&nbsp;&nbsp;
					<span>Tweets & replies tab</span>&nbsp;&nbsp;&nbsp;
					<span>Media tab</span>&nbsp;&nbsp;&nbsp;
					<span>Likes tab</span>&nbsp;&nbsp;&nbsp;
				</div>

				<div className="tweetFeed-position">
					<TweetFeed />
				</div>
			</div>
		</div>
	);
}
