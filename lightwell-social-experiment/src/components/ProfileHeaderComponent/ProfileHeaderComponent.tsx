import "./profileHeaderComponentStyle.css";

interface ProfileHeaderProps {
    name: string;
    statuses_count: number;
}

function ProfileHeaderComponent(props: ProfileHeaderProps) {
    return (
        <>
            <h2 style={{ marginBottom: '5px' }}>{props.name}</h2>
            <p style={{ marginTop: '0px' }}>{props.statuses_count} tweet(s)</p>
        </>
    );
}

export default ProfileHeaderComponent;
