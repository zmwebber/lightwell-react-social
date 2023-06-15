import { useStore } from "react-redux";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import NavBar from "../../components/NavbarComponent/NavBar";
import ProfileHeroComponent from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import Profile from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import ProfileHeaderComponent from "../../components/ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileInformationComponent from "../../components/ProfileInformationComponent/ProfileInformationComponent";
import TabsComponent from "../../components/ProfileTabsComponent/ProfileTabsComponent";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import ProfilePageStyle from "./profilePageStyle.module.scss";

export function ProfilePage() {
	const store = useStore();
	const state: any = store.getState();

	return (
		<div className={ProfilePageStyle.profilePageContainer}>
			<div className={ProfilePageStyle.navbarPosition}>
				<NavBar />
			</div>

			<div className={ProfilePageStyle.ymlPosition}>
				<YouMightLike />
			</div>

			<div className={ProfilePageStyle.profilePageContent}>
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
			</div>
		</div>
	);
}
