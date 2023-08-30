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
import { editUser, editUserTheme } from '../../api/UserApi';
import { FormControlLabel, Switch, FormGroup } from "@mui/material";
import { useTheme } from '@mui/material/styles';

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

    const state: any = store.getState();

	const [themeColor, setThemeColor] = React.useState<String>(state?.user?.profile.theme || "light");
	const [checked, setChecked] = React.useState<boolean>(state.user.profile.theme === "light" ? false : true);
    const theme = useTheme();

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function setThemeOfUser() {
		if(state?.user?.profile.theme !== undefined) {
			setThemeColor(state.user.profile.theme);
		}
	}

	// @TODO: When user is logged in and page is refreshed, user is logged out.
	function reverseTheme(theme: String) {
		if (theme === "light") {
			setChecked(true)
			return "dark";
		} else {
			setChecked(false)
			return "light";
		}
	}

	const toggleTheme = () => {
		setThemeColor((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

		if(state.user !== null) {
			let user: User = {...state.user.profile};
			user.theme = reverseTheme(themeColor);

			const action = editUserTheme(user)
			console.log("Inside the toggleTheme function. Current theme: " + user.theme)
			console.log(user) 
			store.dispatch(action);
		}
	}

	useEffect(() => {
		setThemeOfUser();
	}, [])

	const message = () => {
		try {
        setThemeColor((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
			
		} catch (error) {
			console.log(error)
		}
	}


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

<div>
           

							<FormGroup>
								<FormControlLabel
									control={<MaterialUISwitch onChange={toggleTheme} defaultChecked={checked} sx={{ m:1 }} />}
									label=""
									/>
								</FormGroup>

                                    </div>
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