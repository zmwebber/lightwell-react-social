import ProfileHeaderComponentStyle from "./profileHeaderComponentStyle.module.scss";

interface ProfileHeaderProps {
    name: string;
    statuses_count: number;
}

function ProfileHeaderComponent(props: ProfileHeaderProps) {
    return (
        <>
            <h2 className={ProfileHeaderComponentStyle.profileHeaderName} style={{ marginBottom: '5px' }}>{props.name}</h2>
            <p className={ProfileHeaderComponentStyle.profileHeaderTweets} style={{ marginTop: '0px' }}>{props.statuses_count} tweet(s)</p>
        </>
    );
}

export default ProfileHeaderComponent;
