import { useStore } from "react-redux";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import NavBar from "../../components/NavbarComponent/NavBar";
import ProfileHeroComponent from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import Profile from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import ProfileHeaderComponent from "../../components/ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileInformationComponent from "../../components/ProfileInformationComponent/ProfileInformationComponent";
import TabsComponent from "../../components/TabsComponent/TabsComponent";
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

				<ProfileHeaderComponent
					name={state.user.profile.name}
					statuses_count={state.user.profile.statuses_count}
				/>

				<ProfileHeroComponent />

				<ProfileInformationComponent
					name={state.user.profile.name}
					screen_name={state.user.profile.screen_name}
					date_joined={state.user.profile.createdAt}
					following={state.user.profile.friends_count}
					followers={state.user.profile.followers_count}
				/>

				<TabsComponent />

				<div className="tweetFeed-position">
					<TweetFeed />
				</div>
			</div>
		</div>
	);
}
