import ProfileHeaderComponentStyle from "./profileHeaderComponentStyle.module.scss";
import { useAppSelector } from "../../app/hooks/hooks";
import { User } from "../../models/ProfileModel";
import { useEffect } from "react";
import { Tweet } from "../../models/TweetModel";

//We do not use props for data that can be tied to state. or that would need to be updated from changes to state
function ProfileHeaderComponent() {
    const user: User = useAppSelector(state => state.user.profile)
    const myTweets: Tweet[] = useAppSelector(state => state.myTweets.myTweets)

    useEffect(() => {

    }, [user]);

    return (
        <>
            <h2 className={ProfileHeaderComponentStyle.profileHeaderName} style={{ marginBottom: '5px' }}>{user.name}</h2>
            <p className={ProfileHeaderComponentStyle.profileHeaderTweets} style={{ marginTop: '0px' }}>{myTweets.length} tweet(s)</p>
        </>
    );
}

export default ProfileHeaderComponent;
