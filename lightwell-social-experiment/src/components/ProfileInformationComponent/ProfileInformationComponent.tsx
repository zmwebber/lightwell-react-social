import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ProfileInformationComponentStyle from "./profileInformationComponentStyle.module.scss";
import { useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { User } from '../../models/ProfileModel';


//We do not use props for data that can be tied to state. or that would need to be updated from changes to state
export default function ProfileInformationComponent() {
	const user : User = useAppSelector(state => state.user.profile)
    useEffect(() => {
		
	  }, [user]); // Only re-run the effect if user changes
    return (
        <Box sx={{ width: '100%' }} className={ProfileInformationComponentStyle.profileInformationBox}>
            <Box>
                <h2 className={ProfileInformationComponentStyle.userName}>{user.name}</h2>
                <p className={ProfileInformationComponentStyle.userHandleSubtext}>@{user.screen_name}</p>
                <div className={ProfileInformationComponentStyle.userJoinedContainer}>
                    <DateRangeIcon className={ProfileInformationComponentStyle.dateIcon} />
                    <span className={ProfileInformationComponentStyle.userJoinedDate}> Joined {user.createdAt.toString()}</span>
                </div>

                <div className={ProfileInformationComponentStyle.userFollowContainer}>
                    <span className={ProfileInformationComponentStyle.userFollowing}><strong>{user.friends_count}</strong> Following</span>
                    <span><strong>{user.followers_count}</strong> Followers</span>
                </div>
            </Box>
        </Box>
    );
}