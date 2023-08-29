import React, { createContext, useEffect } from "react";
import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { CssBaseline, FormControlLabel, Grid, Switch, FormGroup } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch, useStore } from "react-redux";
import { Tweet } from "./models/TweetModel";
import { editUser } from "./api/UserApi";
import { store } from "./app/store";
import { Profile, User } from "./models/ProfileModel";
import { text } from "stream/consumers";
import { dark } from "./theme/dark";
import { light } from "./theme/light";

function App() {

	const state: any = store.getState();

	const [theme, setTheme] = React.useState<String>(state?.user?.profile.theme || "light");
	const [checked, setChecked] = React.useState<boolean>(state.user.profile.theme === "light" ? false : true);

	function setThemeOfUser() {
		if(state?.user?.profile.theme !== undefined) {
			setTheme(state.user.profile.theme);
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
		setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

		if(state.user !== null) {
			let user: User = {...state.user.profile};
			user.theme = reverseTheme(theme);

			const action = editUser(user)
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
setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
			
		} catch (error) {
			console.log(error)
		}
	}






const MaterialUISwitch = styled(Switch)(({ theme }) => ({
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












	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>	
			<CssBaseline>
				<div className="defaultLayout">
					<Grid container spacing={1.5}>
						
						<Grid item xs={0} sm={1.5}>
							<Grid item>
								{/* <button onClick={toggleTheme}>{theme}</button> */}
								{/* <MaterialUISwitch onChange={toggleTheme} /> */}


								<MaterialUISwitch /> 

							<FormGroup>
								<FormControlLabel
									control={<MaterialUISwitch onChange={toggleTheme} defaultChecked={checked} sx={{ m:1 }} />}
									label="Mode"
									/>
								</FormGroup>
							</Grid>





							<NavBar userTheme={theme}/>
						</Grid>

						<Grid item xs={12} sm={7.5}>
							<Outlet />
						</Grid>

						<Grid item xs={0} sm={3}>
							<YouMightLike />
						</Grid>
					</Grid>
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
