import ProfileHeroComponent from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import ProfileHeaderComponent from "../../components/ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileInformationComponent from "../../components/ProfileInformationComponent/ProfileInformationComponent";
import TabsComponent from "../../components/ProfileTabsComponent/ProfileTabsComponent";
import ProfilePageStyle from "./profilePageStyle.module.scss";
import { useParams } from "react-router-dom";

export function ProfilePage() {
	const { screen_name } = useParams();
	console.log(screen_name)
	return (
		<div className={ProfilePageStyle.profilePageContainer}>

			<div className={ProfilePageStyle.profilePageContent}>
				<ProfileHeaderComponent/>
				<ProfileHeroComponent />
				<ProfileInformationComponent/>
				<TabsComponent />
				
			</div>
			
		</div>
	);
}
