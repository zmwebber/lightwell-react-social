import ProfileHeaderComponentStyle from "./profileHeaderComponentStyle.module.scss";
import { useAppSelector } from "../../app/hooks/hooks";
import { Profile, User } from "../../models/ProfileModel";
import { useEffect, useMemo } from "react";
import { Tweet } from "../../models/TweetModel";
import { selectViewedProfile } from "../../redux/ducks/profile_duck/profileSlice";

//We do not use props for data that can be tied to state. or that would need to be updated from changes to state
function ProfileHeaderComponent(props: User) {
    const myTweets: Tweet[] = useAppSelector(state => state.myTweets.myTweets)
    
    return (
        <>
            <h2 className={ProfileHeaderComponentStyle.profileHeaderName} style={{ marginBottom: '5px' }}>{props.screen_name}</h2>
            <p className={ProfileHeaderComponentStyle.profileHeaderTweets} style={{ marginTop: '0px' }}>{myTweets.length} tweet(s)</p>
        </>
    );
}

export default ProfileHeaderComponent;
