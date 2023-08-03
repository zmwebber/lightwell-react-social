import React, { createContext, useEffect } from "react";
import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch, useStore } from "react-redux";
import { Tweet } from "./models/TweetModel";
import { editUser, updateUser } from "./api/UserApi";
import { store } from "./app/store";
import { Profile, User } from "./models/ProfileModel";
import { text } from "stream/consumers";
import { dark } from "./theme/dark";
import { light } from "./theme/light";

export type Theme = 'light' | 'dark'

function App() {

	const state: any = store.getState();

	const [theme, setTheme] = React.useState<String>("light");

	function setThemeOfUser() {
		if(state?.user?.profile.theme !== undefined) {
			setTheme(state.user.profile.theme);
		}
	}

	// @TODO: When user is logged in and page is refreshed, user is logged out.
	function reverseTheme(theme: String) {
		if (theme === "light") {
			return "dark";
		} else {
			return "light";
		}
	}

	const toggleTheme = () => {
		setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')

		// sets current users theme to currentTheme
		let user: Profile = {...state.user.profile};

		// thunk / slice / copy + dispatch action
		user.theme = reverseTheme(theme);

		if(state.user !== null) {
			const action = editUser(user)
			console.log("Inside the toggleTheme function. Current theme: " + user.theme)
			console.log(user)
			store.dispatch(action);
		}
	}

	useEffect(() => {
		setThemeOfUser();
	}, [])

	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>	
			<CssBaseline>
				<div className="defaultLayout">
					<Grid container spacing={1.5}>
						
						<Grid item xs={0} sm={1.5}>
							<Grid item>
								<button onClick={toggleTheme}>{theme}</button>
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
