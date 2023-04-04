import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ProfileInformationComponentStyle from "./profileInformationComponentStyle.module.scss";
import { Button } from "@mui/material";
import { styled } from "@mui/system";


interface ProfileInformationProps {
    name: string;
    screen_name: string;
    date_joined: string;
    following: number;
    followers: number;
}

const EditProfileButton: any = styled(Button)`
	color: #1DA1F2;
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	background-color: white;
	outline: auto;
	outline-style: solid;
	outline-width: 2px;
    margin-top: 1%;
    margin-right: 2%;
`;

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
                    <span className={ProfileInformationComponentStyle.userFollowers}><strong>{props.followers}</strong> Followers</span>
                </div>
            </Box>

            <EditProfileButton className={ProfileInformationComponentStyle.editProfileButton} variant="contained">
                Edit Profile
            </EditProfileButton>
        </Box>
    );
}