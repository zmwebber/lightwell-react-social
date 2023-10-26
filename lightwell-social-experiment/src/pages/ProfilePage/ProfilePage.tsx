import ProfileHeroComponent from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import ProfileHeaderComponent from "../../components/ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileInformationComponent from "../../components/ProfileInformationComponent/ProfileInformationComponent";
import TabsComponent from "../../components/ProfileTabsComponent/ProfileTabsComponent";
import ProfilePageStyle from "./profilePageStyle.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { useCallback, useEffect, useState } from 'react';
import { getUserByScreenName } from "../../api/UserApi";
import { selectViewedProfile } from "../../redux/ducks/profile_duck/profileSlice";
import { useAppSelector } from "../../app/hooks/hooks";
import { User } from "../../models/ProfileModel";

export function ProfilePage() {
	const { screen_name } = useParams();
	const viewedProfile: User = useAppSelector(selectViewedProfile).viewedProfile as User;
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
    if (screen_name && !viewedProfile) {
      dispatch(getUserByScreenName(screen_name));
    }
  }, [dispatch, screen_name, viewedProfile]);

  useEffect(() => {
    initFetch();
  }, [initFetch, viewedProfile]);

	return (
		<div className={ProfilePageStyle.profilePageContainer}>
			<div className={ProfilePageStyle.profilePageContent}>
				{viewedProfile !== undefined ? (				
					<>					
						<ProfileHeaderComponent {...viewedProfile}/>
						<ProfileHeroComponent {...viewedProfile}/>
						<ProfileInformationComponent {...viewedProfile}/>
						<TabsComponent/>
					</>

					) : (
						<>Loading ... </>
					)}
			</div>
		</div>
	);
}
