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
import { Dna } from "react-loader-spinner";

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
		<>
			{viewedProfile !== undefined ? (
				<div className={ProfilePageStyle.profilePageContainer}>
					<div className={ProfilePageStyle.profilePageContent}>
						<ProfileHeaderComponent {...viewedProfile} />
						<ProfileHeroComponent {...viewedProfile} />
						<ProfileInformationComponent {...viewedProfile} />
						<TabsComponent />
					</div>
				</div>
			) : (
				<Dna
					visible={true}
					height="200"
					width="200"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper"
				/>
			)}
		</>
	);
}
