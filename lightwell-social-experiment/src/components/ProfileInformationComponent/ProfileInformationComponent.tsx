import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "./profileInformationComponentStyle.css";

interface ProfileInformationProps {
    name: string;
    screen_name: string;
    date_joined: string;
    following: number;
    followers: number;
}

export default function ProfileInformationComponent(props: ProfileInformationProps) {
    return (
        <Box sx={{ width: '100%' }} className="profile-information-box">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <h2 className="user-name">{props.name}</h2>
                <p className="user-handle-subtext">@{props.screen_name}</p>
                <p className="user-joined-date"><DateRangeIcon /> Joined {props.date_joined}</p>
                <div className="user-follow-container">
                    <span className="user-following"><strong>{props.following}</strong> Following</span>
                    <span className="user-followers"><strong>{props.followers}</strong> Followers</span>
                </div>
            </Box>
        </Box>
    );
}