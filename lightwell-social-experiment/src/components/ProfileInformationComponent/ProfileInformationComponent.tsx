import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ProfileInformationComponentStyle from "./profileInformationComponentStyle.module.scss";
import { styled } from "@mui/system";
import Button from '@mui/material/Button';


interface ProfileInformationProps {
    name: string;
    screen_name: string;
    date_joined: string;
    following: number;
    followers: number;
}

const EditProfileButton: any = styled(Button)({
    color: "#1DA1F2",
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "8px 18px",
    backgroundColor: "white",
    outline: "auto",
    outlineStyle: "solid",
    outlineWidth: "2px",
    marginTop: "1%",
    marginRight: "2%",
    '&:hover': {
        backgroundColor: '#fff'
    }
});

export default function ProfileInformationComponent(props: ProfileInformationProps) {
    return (
        <Box sx={{ width: '100%' }} className={ProfileInformationComponentStyle.profileInformationBox}>
            <Box>
                <h2 className={ProfileInformationComponentStyle.userName}>{props.name}</h2>
                <p className={ProfileInformationComponentStyle.userHandleSubtext}>@{props.screen_name}</p>
                <div className={ProfileInformationComponentStyle.userJoinedContainer}>
                    <DateRangeIcon className={ProfileInformationComponentStyle.dateIcon} />
                    <span className={ProfileInformationComponentStyle.userJoinedDate}> Joined {props.date_joined}</span>
                </div>

                <div className={ProfileInformationComponentStyle.userFollowContainer}>
                    <span className={ProfileInformationComponentStyle.userFollowing}><strong>{props.following}</strong> Following</span>
                    <span><strong>{props.followers}</strong> Followers</span>
                </div>
            </Box>
        </Box>
    );
}