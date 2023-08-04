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

		// let currentUser: Profile = {...state.user.profile};
		// 	var user = {
		// 	name: currentUser.name,
		// 	screen_name: currentUser.screen_name,
		// 	email: currentUser.email,
		// 	password: currentUser.password,
		// 	dateOfBirth: currentUser.dateOfBirth,
		// 	createdAt: currentUser.createdAt,
		// 	description: currentUser.description,
		// 	url: currentUser.url,
		// 	protected: currentUser.protected,
		// 	followers_count: currentUser.followers_count,
		// 	friends_count: currentUser.friends_count,
		// 	listed_count: currentUser.listed_count,
		// 	favorites_count: currentUser.favorites_count,
		// 	verified: currentUser.verified,
		// 	statuses_count: currentUser.statuses_count,
		// 	profile_banner_id: currentUser.profile_banner_id,
		// 	profile_banner: currentUser.profile_banner,
		// 	profile_image_id: currentUser.profile_image_id,
		// 	profile_image: currentUser.profile_image,
    
		// 	theme: reverseTheme(theme)
		// } 


		if(state.user !== null) {
			let user: Profile = {...state.user.profile};
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
