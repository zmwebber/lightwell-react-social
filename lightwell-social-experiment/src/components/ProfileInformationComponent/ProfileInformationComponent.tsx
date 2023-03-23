import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ProfileInformationComponentStyle from "./profileInformationComponentStyle.module.scss";

interface ProfileInformationProps {
    name: string;
    screen_name: string;
    date_joined: string;
    following: number;
    followers: number;
}

export default function ProfileInformationComponent(props: ProfileInformationProps) {
    return (
        <Box sx={{ width: '100%' }} className={ProfileInformationComponentStyle.profileInformationBox}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <h2 className={ProfileInformationComponentStyle.userName}>{props.name}</h2>
                <p className={ProfileInformationComponentStyle.userHandleSubtext}>@{props.screen_name}</p>

                <div className={ProfileInformationComponentStyle.userJoinedContainer}>
                    <DateRangeIcon className={ProfileInformationComponentStyle.dateIcon} />
                    <span className={ProfileInformationComponentStyle.userJoinedDate}> Joined {props.date_joined}</span>
                </div>

                <div className={ProfileInformationComponentStyle.userFollowContainer}>
                    <span className={ProfileInformationComponentStyle.userFollowing}><strong>{props.following}</strong> Following</span>
                    <span className={ProfileInformationComponentStyle.userFollowers}><strong>{props.followers}</strong> Followers</span>
                </div>
            </Box>
        </Box>
    );
}