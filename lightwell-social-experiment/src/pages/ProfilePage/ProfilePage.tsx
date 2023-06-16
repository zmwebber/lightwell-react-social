import { useStore } from "react-redux";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import NavBar from "../../components/NavbarComponent/NavBar";
import ProfileHeroComponent from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import ProfileHeaderComponent from "../../components/ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileInformationComponent from "../../components/ProfileInformationComponent/ProfileInformationComponent";
import TabsComponent from "../../components/ProfileTabsComponent/ProfileTabsComponent";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import ProfilePageStyle from "./profilePageStyle.module.scss";

export function ProfilePage() {
	return (
		<div className={ProfilePageStyle.profilePageContainer}>
			<div className={ProfilePageStyle.navbarPosition}>
				<NavBar />
			</div>

			<div className={ProfilePageStyle.ymlPosition}>
				<YouMightLike />
			</div>

			<div className={ProfilePageStyle.profilePageContent}>
				<ProfileHeaderComponent/>
				<ProfileHeroComponent />
				<ProfileInformationComponent/>
				<TabsComponent />
			</div>
		</div>
	);
}
