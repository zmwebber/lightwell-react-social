import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ProfileInformationComponentStyle from "./profileInformationComponentStyle.module.scss";
import { useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { User } from '../../models/ProfileModel';
import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React from 'react';
import UserRegistrationForm from '../LoginComponent/UserRegistrationForm';
import Media from '../MediaComponent/Media';
import { EditButton } from '../../app/shared/buttons';
import { store } from '../../app/store';
import { editUser } from '../../api/UserApi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//We do not use props for data that can be tied to state. or that would need to be updated from changes to state
export default function ProfileInformationComponent() {
    const user: User = useAppSelector(state => state.user.profile);
    const [open, setOpen] = React.useState(false);
    const [openImage, setOpenImage] = React.useState(false);
    const [openBanner, setOpenBanner] = React.useState(false);

    useEffect(() => {

    }, [user]); // Only re-run the effect if user changes

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleMediaOpen = () => setOpenImage(true);
    const handleMediaClose = () => setOpenImage(false);
    const handleBannerOpen = () => setOpenBanner(true);
    const handleBannerClose = () => setOpenBanner(false);

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

            <div className={ProfileInformationComponentStyle.editButtons}>
                <EditButton sx={{ marginLeft: 1 }} onClick={handleOpen} className={ProfileInformationComponentStyle.editButton}>
                    Edit Profile
                </EditButton>
                {open &&
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            Update Profile
                            <UserRegistrationForm profileStatus="edit" onClose={handleClose} />
                        </Box>
                    </Modal>
                }

                <EditButton sx={{ marginLeft: 1 }} onClick={handleMediaOpen} className={ProfileInformationComponentStyle.editButton}>
                    Edit Profile Image
                </EditButton>
                {openImage &&
                    <Modal
                        open={openImage}
                        onClose={handleMediaClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            Update profile picture
                            <Media onClose={handleMediaClose} photoType={"profilePhoto"} />
                        </Box>
                    </Modal>
                }

                <EditButton sx={{ marginLeft: 1 }} onClick={handleBannerOpen} className={ProfileInformationComponentStyle.editButton}>
                    Edit Banner
                </EditButton>
                {openBanner &&
                    <Modal
                        open={openBanner}
                        onClose={handleBannerClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            Update Banner Image
                            <Media onClose={handleBannerClose} photoType={"bannerPhoto"} />
                        </Box>
                    </Modal>
                }
            </div>
        </Box >
    );
}